// Helper to resolve assets path across different pages
function assetDataPath(file) {
  // Get the base path by removing everything after the site root
  // For URLs like /greamarchitects/CityPortraits/methodology/... we want /greamarchitects/CityPortraits/
  const pathParts = window.location.pathname.split('/');
  const siteIndex = pathParts.findIndex(part => part === 'CityPortraits');
  if (siteIndex !== -1) {
    const basePath = '/' + pathParts.slice(1, siteIndex + 1).join('/') + '/';
    return `${basePath}assets/data/${file}`.replace(/\/+/g, "/");
  }
  // Fallback for development
  return `/assets/data/${file}`;
}

// Load data from JSON files
async function loadData() {
  const urls = ['actors.json','events.json','places.json'].map(assetDataPath);
  const [actors, events, places] = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
  return { actors, events, places };
}

// Build Graph using Cytoscape.js
function buildGraph({ actors, events, places }) {
  const elements = [];

  // --- ACTORS ---
  actors.forEach(a => {
    elements.push({
      data: {
        id: a.id,
        label: a.name,
        type: "actor"
      }
    });
  });

  // --- PLACES ---
  places.forEach(p => {
    elements.push({
      data: {
        id: p.id,
        label: p.name,
        type: "place"
      }
    });
  });

  // --- EVENTS + EDGES ---
  events.forEach(e => {
    // skip period-only entries (P001 etc.)
    if (!e.id.startsWith("EV")) return;

    // event node
    elements.push({
      data: {
        id: e.id,
        label: e.title,
        type: "event"
      }
    });

    // actor → event
    e.actor_ids?.forEach(actorId => {
      elements.push({
        data: {
          source: actorId,
          target: e.id,
          type: "actor-event"
        }
      });
    });

    // event → place
    if (e.place_id) {
      elements.push({
        data: {
          source: e.id,
          target: e.place_id,
          type: "event-place"
        }
      });
    }
  });

  return elements;
}

// Initialize Cytoscape
async function initCytoscape() {
  const container = document.getElementById("cy-network");
  if (!container) {
    console.log("Cytoscape container not found");
    return;
  }

  try {
    console.log("Loading Cytoscape data...");
    const data = await loadData();
    console.log("Data loaded:", data);

    const elements = buildGraph(data);
    console.log("Graph elements built:", elements.length);

    cytoscape({
      container,
      elements,
      style: [
        {
          selector: 'node[type="actor"]',
          style: {
            'background-color': '#e91e63',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: 'node[type="event"]',
          style: {
            'background-color': '#3f51b5',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: 'node[type="place"]',
          style: {
            'background-color': '#4caf50',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: 'edge[type="actor-event"]',
          style: {
            'line-color': '#e91e63',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        },
        {
          selector: 'edge[type="event-place"]',
          style: {
            'line-color': '#4caf50',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        }
      ],
      layout: {
        name: "cose",
        padding: 20,
        animate: true,
        animationDuration: 1000
      }
    });

    console.log("Cytoscape graph initialized successfully");

  } catch (error) {
    console.error("Error initializing Cytoscape:", error);
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initCytoscape);
if (typeof document$ !== "undefined") document$.subscribe(initCytoscape);