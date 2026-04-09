// --------------------------------------------------
// CityPortraits Graphs — Cytoscape interaction layer
// --------------------------------------------------

// Helper to resolve assets path across different pages
function assetDataPath(file) {
  const pathParts = window.location.pathname.split('/');
  const siteIndex = pathParts.findIndex(part => part === 'CityPortraits');

  if (siteIndex !== -1) {
    const basePath = '/' + pathParts.slice(1, siteIndex + 1).join('/') + '/';
    return `${basePath}assets/data/${file}`.replace(/\/+/g, "/");
  }

  return `/assets/data/${file}`;
}

// Load data from JSON files
async function loadData() {
  const urls = ['actors.json', 'events.json', 'places.json'].map(assetDataPath);

  const [actors, events, places] = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }
      return response.json();
    })
  );

  return { actors, events, places };
}

// Short label helper
function shortenLabel(text, maxLength = 28) {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

// Build graph elements
function buildGraph({ actors, events, places }) {
  const elements = [];
  const seenEdges = new Set();

  // Actors
  actors.forEach((a) => {
    elements.push({
      data: {
        id: a.id,
        label: a.name,
        shortLabel: shortenLabel(a.name, 22),
        fullLabel: a.name,
        type: "actor"
      }
    });
  });

  // Places
  places.forEach((p) => {
    elements.push({
      data: {
        id: p.id,
        label: p.name,
        shortLabel: shortenLabel(p.name, 22),
        fullLabel: p.name,
        type: "place"
      }
    });
  });

  // Events + Edges
  events.forEach((e) => {
    if (!e.id || !e.id.startsWith("EV")) return;

    elements.push({
      data: {
        id: e.id,
        label: e.title,
        shortLabel: shortenLabel(e.title, 28),
        fullLabel: e.title,
        type: "event"
      }
    });

    // actor -> event
    e.actor_ids?.forEach((actorId) => {
      const edgeId = `${actorId}__${e.id}__actor-event`;
      if (!seenEdges.has(edgeId)) {
        seenEdges.add(edgeId);
        elements.push({
          data: {
            id: edgeId,
            source: actorId,
            target: e.id,
            type: "actor-event"
          }
        });
      }
    });

    // event -> place
    if (e.place_id) {
      const edgeId = `${e.id}__${e.place_id}__event-place`;
      if (!seenEdges.has(edgeId)) {
        seenEdges.add(edgeId);
        elements.push({
          data: {
            id: edgeId,
            source: e.id,
            target: e.place_id,
            type: "event-place"
          }
        });
      }
    }
  });

  return elements;
}

let cyInstance = null;

function applyGraphInteractions(cy) {
  const resetBtn = document.getElementById("graph-reset-btn");

  function resetGraph() {
    cy.elements().removeClass("faded highlighted selected hovered");
    cy.nodes().forEach(node => {
      node.data("displayLabel", node.data("shortLabel"));
    });

    cy.animate(
      {
        fit: {
          eles: cy.elements(),
          padding: 60
        },
        duration: 600
      }
    );
  }

  function focusNeighborhood(node) {
    const neighborhood = node.closedNeighborhood();

    cy.elements().addClass("faded").removeClass("highlighted selected");
    neighborhood.removeClass("faded").addClass("highlighted");
    node.addClass("selected");

    // Show full label only for focused neighborhood
    cy.nodes().forEach(n => {
      n.data("displayLabel", neighborhood.contains(n) ? n.data("fullLabel") : n.data("shortLabel"));
    });

    cy.animate(
      {
        fit: {
          eles: neighborhood,
          padding: 90
        },
        duration: 700
      }
    );
  }

  cy.on("tap", "node", (evt) => {
    const node = evt.target;
    focusNeighborhood(node);
  });

  cy.on("mouseover", "node", (evt) => {
    const node = evt.target;
    node.addClass("hovered");
    node.data("displayLabel", node.data("fullLabel"));
  });

  cy.on("mouseout", "node", (evt) => {
    const node = evt.target;
    node.removeClass("hovered");

    if (!node.hasClass("selected") && !node.hasClass("highlighted")) {
      node.data("displayLabel", node.data("shortLabel"));
    }
  });

  cy.on("tap", (evt) => {
    if (evt.target === cy) {
      resetGraph();
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", resetGraph);
  }

  resetGraph();
}

// Create Cytoscape instance
function createCytoscape(container, elements) {
  return cytoscape({
    container,
    elements,
    style: [
      // Base node style
      {
        selector: "node",
        style: {
          "width": 22,
          "height": 22,
          "label": "data(displayLabel)",
          "font-size": 11,
          "font-weight": 600,
          "color": "#1f2937",
          "text-wrap": "wrap",
          "text-max-width": 140,
          "text-valign": "bottom",
          "text-halign": "center",
          "text-margin-y": 10,
          "text-background-color": "#ffffff",
          "text-background-opacity": 0.92,
          "text-background-padding": 4,
          "text-background-shape": "roundrectangle",
          "text-border-width": 1,
          "text-border-color": "#ffffff",
          "overlay-opacity": 0,
          "z-index": 10
        }
      },

      // Actor
      {
        selector: 'node[type="actor"]',
        style: {
          "background-color": "#e91e63"
        }
      },

      // Event
      {
        selector: 'node[type="event"]',
        style: {
          "background-color": "#3f51b5"
        }
      },

      // Place
      {
        selector: 'node[type="place"]',
        style: {
          "background-color": "#4caf50"
        }
      },

      // Base edge style
      {
        selector: "edge",
        style: {
          "width": 2,
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
          "arrow-scale": 0.9,
          "opacity": 0.75
        }
      },

      {
        selector: 'edge[type="actor-event"]',
        style: {
          "line-color": "#e91e63",
          "target-arrow-color": "#e91e63"
        }
      },

      {
        selector: 'edge[type="event-place"]',
        style: {
          "line-color": "#4caf50",
          "target-arrow-color": "#4caf50"
        }
      },

      // Hover / selected states
      {
        selector: "node.hovered",
        style: {
          "border-width": 3,
          "border-color": "#111827",
          "z-index": 999
        }
      },

      {
        selector: "node.selected",
        style: {
          "width": 28,
          "height": 28,
          "border-width": 4,
          "border-color": "#111827",
          "z-index": 999
        }
      },

      {
        selector: ".highlighted",
        style: {
          "opacity": 1,
          "z-index": 500
        }
      },

      {
        selector: ".faded",
        style: {
          "opacity": 0.12
        }
      }
    ],
    layout: {
      name: "cose",
      animate: true,
      animationDuration: 1000,
      fit: true,
      padding: 60,
      nodeRepulsion: 180000,
      idealEdgeLength: 140,
      edgeElasticity: 120,
      gravity: 0.2,
      nestingFactor: 0.8
    },
    minZoom: 0.35,
    maxZoom: 2.5,
    wheelSensitivity: 0.18
  });
}

// Init
async function initCytoscape() {
  const container = document.getElementById("cy-network");
  if (!container) return;

  // Prevent duplicate init on MkDocs navigation
  if (cyInstance) {
    cyInstance.destroy();
    cyInstance = null;
  }

  try {
    const data = await loadData();
    const elements = buildGraph(data);

    // initialize display labels
    elements.forEach(el => {
      if (el.data && el.data.shortLabel) {
        el.data.displayLabel = el.data.shortLabel;
      }
    });

    cyInstance = createCytoscape(container, elements);
    applyGraphInteractions(cyInstance);

    console.log(`Cytoscape graph initialized with ${elements.length} elements`);
  } catch (error) {
    console.error("Error initializing Cytoscape:", error);
    container.innerHTML = `
      <div style="padding:1rem; color:#b00020; font-weight:600;">
        Graph failed to load.
      </div>
    `;
  }
}

// For first page load
document.addEventListener("DOMContentLoaded", initCytoscape);

// For MkDocs Material instant loading
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    initCytoscape();
  });
}