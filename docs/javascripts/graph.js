// Load data from JSON files
async function loadData() {
  const [actors, events, places] = await Promise.all([
    fetch("../assets/data/actors.json").then(r => r.json()),
    fetch("../assets/data/events.json").then(r => r.json()),
    fetch("../assets/data/places.json").then(r => r.json())
  ]);

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
  if (!container) return;

  const data = await loadData();
  const elements = buildGraph(data);

  cytoscape({
    container,

    elements,

    style: [
      {
        selector: 'node[type="actor"]',
        style: {
          'background-color': '#e91e63',
          'label': 'data(label)'
        }
      },
      {
        selector: 'node[type="event"]',
        style: {
          'background-color': '#3f51b5',
          'label': 'data(label)'
        }
      },
      {
        selector: 'node[type="place"]',
        style: {
          'background-color': '#4caf50',
          'label': 'data(label)'
        }
      },
      {
        selector: 'edge[type="actor-event"]',
        style: {
          'line-color': '#e91e63',
          'target-arrow-shape': 'triangle'
        }
      },
      {
        selector: 'edge[type="event-place"]',
        style: {
          'line-color': '#4caf50',
          'target-arrow-shape': 'triangle'
        }
      }
    ],

    layout: {
      name: "cose",   // 🔥 good for networks
      padding: 20
    }
  });
}

document.addEventListener("DOMContentLoaded", initCytoscape);
document$.subscribe(initCytoscape); // for MkDocs Material