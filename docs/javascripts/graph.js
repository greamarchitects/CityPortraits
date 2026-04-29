// --------------------------------------------------
// Cytoscape Graph Layer
// --------------------------------------------------

// Resolve asset path for local development and GitHub Pages
function assetDataPath(file) {
  const pathParts = window.location.pathname.split("/");
  const siteIndex = pathParts.findIndex(p => p === "CityPortraits");

  if (siteIndex !== -1) {
    const basePath = "/" + pathParts.slice(1, siteIndex + 1).join("/") + "/";
    return `${basePath}assets/data/${file}`.replace(/\/+/g, "/");
  }

  return `assets/data/${file}`;
}

// Load graph data
async function loadData() {
  const urls = ["actors.json", "events.json", "places.json"].map(assetDataPath);

  const [actors, events, places] = await Promise.all(
    urls.map(async url => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.json();
    })
  );

  return { actors, events, places };
}

// Shorten long labels for compact display
function shortenLabel(text, max = 28) {
  if (!text) return "";
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

// Build Cytoscape nodes and edges
function buildGraph({ actors, events, places }) {
  const elements = [];
  const seenEdges = new Set();

  actors.forEach(a => {
    elements.push({
      data: {
        id: a.id,
        fullLabel: a.name,
        shortLabel: shortenLabel(a.name, 22),
        displayLabel: shortenLabel(a.name, 22),
        type: "actor"
      }
    });
  });

  places.forEach(p => {
    elements.push({
      data: {
        id: p.id,
        fullLabel: p.name,
        shortLabel: shortenLabel(p.name, 22),
        displayLabel: shortenLabel(p.name, 22),
        type: "place"
      }
    });
  });

  events.forEach(e => {
    if (!e.id?.startsWith("EV")) return;

    elements.push({
      data: {
        id: e.id,
        fullLabel: e.title,
        shortLabel: shortenLabel(e.title, 28),
        displayLabel: shortenLabel(e.title, 28),
        type: "event"
      }
    });

    e.actor_ids?.forEach(actorId => {
      const id = `${actorId}__${e.id}`;

      if (!seenEdges.has(id)) {
        seenEdges.add(id);
        elements.push({
          data: {
            id,
            source: actorId,
            target: e.id
          }
        });
      }
    });

    if (e.place_id) {
      const id = `${e.id}__${e.place_id}`;

      if (!seenEdges.has(id)) {
        seenEdges.add(id);
        elements.push({
          data: {
            id,
            source: e.id,
            target: e.place_id
          }
        });
      }
    }
  });

  return elements;
}

// One global graph instance for MkDocs navigation
let cyInstance = null;

// Create Cytoscape graph
function createCytoscape(container, elements) {
  return cytoscape({
    container,
    elements,

    style: [
      {
        selector: "node",
        style: {
          width: 24,
          height: 24,
          label: "data(displayLabel)",
          color: "#164386",
          "font-size": 11,
          "text-valign": "bottom",
          "text-halign": "center",
          "text-margin-y": 10,
          "text-background-color": "#fff",
          "text-background-opacity": 0.9,
          "text-background-padding": 4,
          "border-width": 1.5,
          "border-color": "#646b75"
        }
      },

      {
        selector: 'node[type="actor"]',
        style: {
          "background-color": "#a6bacf"
        }
      },

      {
        selector: 'node[type="event"]',
        style: {
          "background-color": "#b3c998"
        }
      },

      {
        selector: 'node[type="place"]',
        style: {
          "background-color": "#e9e89e"
        }
      },

      {
        selector: "edge",
        style: {
          width: 1.4,
          "curve-style": "bezier",
          "line-style": "dashed",
          "line-color": "#9ca3af",
          "target-arrow-shape": "triangle",
          "target-arrow-color": "#9ca3af",
          opacity: 0.65
        }
      },

      {
        selector: ".faded",
        style: {
          opacity: 0.12
        }
      },

      {
        selector: ".highlighted",
        style: {
          opacity: 1
        }
      },

      {
        selector: "node.selected",
        style: {
          width: 30,
          height: 30,
          "border-width": 3,
          "border-color": "#111827"
        }
      }
    ],

    layout: {
      name: "cose",
      animate: true,
      fit: true,
      padding: 60,
      nodeRepulsion: 180000,
      idealEdgeLength: 140,
      gravity: 0.2
    },

    minZoom: 0.35,
    maxZoom: 2.5,
    wheelSensitivity: 0.18
  });
}

// Add graph interactions
function applyGraphInteractions(cy) {
  function resetGraph() {
    cy.elements().removeClass("faded highlighted selected");

    cy.nodes().forEach(n => {
      n.data("displayLabel", n.data("shortLabel"));
    });

    cy.resize();
    cy.fit(cy.elements(), 60);
    cy.center();
  }

  function focusNode(node) {
    const neighborhood = node.closedNeighborhood();

    cy.elements().addClass("faded").removeClass("highlighted selected");
    neighborhood.removeClass("faded").addClass("highlighted");
    node.addClass("selected");

    cy.nodes().forEach(n => {
      n.data(
        "displayLabel",
        neighborhood.contains(n)
          ? n.data("fullLabel")
          : n.data("shortLabel")
      );
    });

    cy.animate({
      fit: {
        eles: neighborhood,
        padding: 80
      },
      duration: 600
    });
  }

  // Node click focuses its neighborhood
  cy.on("tap", "node", e => {
    focusNode(e.target);
  });

  // Background click resets graph
  cy.on("tap", e => {
    if (e.target === cy) {
      resetGraph();
    }
  });

  // External reset button
  document.addEventListener("click", e => {
    if (e.target.id === "graph-reset-btn") {
      resetGraph();
    }
  });

  resetGraph();
}

// Initialize graph
async function initCytoscape() {
  const container = document.getElementById("cy-network");

  if (!container) return;

  if (typeof cytoscape === "undefined") {
    console.error("Cytoscape is not loaded.");
    container.innerHTML = `
      <div style="padding:1rem;color:#b00020;">
        Cytoscape library is missing.
      </div>
    `;
    return;
  }

  if (cyInstance) {
    cyInstance.destroy();
    cyInstance = null;
  }

  try {
    const data = await loadData();
    const elements = buildGraph(data);

    cyInstance = createCytoscape(container, elements);
    applyGraphInteractions(cyInstance);

    // Fix sizing after MkDocs renders layout
    setTimeout(() => {
      if (!cyInstance) return;

      cyInstance.resize();
      cyInstance.fit(cyInstance.elements(), 60);
      cyInstance.center();
    }, 300);

    console.log(`Graph initialized with ${elements.length} elements`);
  } catch (err) {
    console.error("Graph error:", err);

    container.innerHTML = `
      <div style="padding:1rem;color:#b00020;">
        Graph failed to load. Check JSON paths and console errors.
      </div>
    `;
  }
}

// Normal page load
document.addEventListener("DOMContentLoaded", initCytoscape);

// MkDocs Material instant navigation
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    initCytoscape();
  });
}

// Keep graph fitted on resize
window.addEventListener("resize", () => {
  if (!cyInstance) return;

  cyInstance.resize();
  cyInstance.fit(cyInstance.elements(), 60);
  cyInstance.center();
});