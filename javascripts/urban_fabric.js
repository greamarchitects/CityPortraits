function initUrbanFabricMap() {
  const mapEl = document.getElementById("urban-fabric-map");
  if (!mapEl || mapEl.dataset.initialized === "true") return;

  mapEl.dataset.initialized = "true";

  const modules = {
    "spatial-parameters": {
      target: "spatial-parameters-layers",
      layers: [
        ["density", "Density", "FAR · coverage ratio · units/ha"],
        ["distance", "Distance", "euclidean · network · nearest neighbor"],
        ["parcel_geometry", "Parcel geometry", "area · aspect ratio · frontage · depth"],
        ["building_geometry", "Building geometry", "footprint · height · volume · compactness"],
        ["network_geometry", "Network geometry", "intersection density · centrality · length"],
        ["edge_fragmentation", "Edge / fragmentation", "patch size · edge density · continuity"]
      ]
    },
    constraints: {
      target: "constraints-layers",
      layers: [
        ["morphological", "Morphological", "typology · geometry · network structure"],
        ["discretization", "Discretization", "thresholds · buffers · classification rules"],
        ["infrastructure_capacity", "Infrastructure", "transport · utilities · accessibility"],
        ["regulatory", "Regulatory", "zoning · codes · planning policies"]
      ]
    },
    "rule-based-adjustments": {
      target: "rule-based-adjustments-layers",
      layers: [
        ["threshold", "Threshold", "cut-offs · classification limits"],
        ["conditional", "Conditional", "if–then logic · filters"],
        ["topological", "Topological", "adjacency · connectivity"],
        ["temporal", "Temporal", "time-based rules · sequencing"],
        ["aggregation", "Aggregation", "grouping · merging"],
        ["constraint_based", "Constraint-based", "rule enforcement"]
      ]
    },
    "spatial-interpolation": {
      target: "spatial-interpolation-layers",
      layers: [
        ["rule_based", "Rule-based", "deterministic assignment"],
        ["geostatistical", "Geostatistical", "kriging · spatial statistics"],
        ["redistribution", "Redistribution", "rebalancing · scaling"],
        ["graph_diffusion", "Graph diffusion", "network propagation"]
      ]
    },
    patterns: {
      target: "patterns-layers",
      layers: [
        ["linear", "Linear", "corridor · ribbon"],
        ["dispersed", "Dispersed", "sprawl · leapfrog"],
        ["compact", "Compact", "clustered · infill"],
        ["geometric", "Geometric", "grid · radial"],
        ["irregular", "Irregular", "organic · fragmented · patchwork"]
      ]
    },
    cluster: {
      target: "cluster-layers",
      layers: [
        ["density_dbscan", "Density", "DBSCAN"],
        ["distance_kmeans", "Partitioning", "K-means · PAM"],
        ["network", "Network", "Louvain"],
        ["hotspot", "Hotspot", "Gi* · KDE"]
      ]
    },
    interfaces: {
      target: "interfaces-layers",
      layers: [
        ["reasoning", "Reasoning", "rule logic · inference"],
        ["relationships", "Relationships", "dependencies · correlations"],
        ["comparative", "Comparative", "cross-city · cross-scale"],
        ["evolution", "Evolution", "temporal change"],
        ["documentation", "Documentation", "sources · metadata"],
        ["synthesis", "Synthesis", "aggregation · modeling"]
      ]
    }
  };

  Object.entries(modules).forEach(([moduleKey, module]) => {
    const container = document.getElementById(module.target);
    if (!container) return;

    container.innerHTML = "";

    module.layers.forEach(([key, label, description]) => {
      const item = document.createElement("label");
      item.className = "layer-item";
      item.innerHTML = `
        <input type="checkbox" data-module="${moduleKey}" data-layer="${key}">
        <div>${label}<span>${description}</span></div>
      `;
      container.appendChild(item);
    });
  });

  const map = L.map("urban-fabric-map").setView([41.3275, 19.8189], 13);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap &copy; CARTO",
    maxZoom: 20
  }).addTo(map);

  const sampleLayers = {};

  sampleLayers.density = L.circle([41.3275, 19.8189], {
    radius: 650,
    color: "#ff5a5a",
    fillOpacity: 0.25
  }).bindPopup("Density Layer");

  sampleLayers.building_geometry = L.rectangle([
    [41.323, 19.813],
    [41.331, 19.824]
  ], {
    color: "#222",
    weight: 1,
    fillOpacity: 0.08
  }).bindPopup("Building Geometry Layer");

  sampleLayers.linear = L.polyline([
    [41.319, 19.805],
    [41.325, 19.814],
    [41.331, 19.826],
    [41.338, 19.838]
  ], {
    color: "#ff5a5a",
    weight: 4
  }).bindPopup("Linear Pattern");

  sampleLayers.hotspot = L.circle([41.332, 19.822], {
    radius: 350,
    color: "#000",
    fillOpacity: 0.2
  }).bindPopup("Hotspot / KDE Layer");

  document.querySelectorAll("[data-layer]").forEach(input => {
    input.addEventListener("change", event => {
      const key = event.target.dataset.layer;
      const layer = sampleLayers[key];

      if (!layer) return;

      if (event.target.checked) {
        layer.addTo(map);
      } else {
        map.removeLayer(layer);
      }
    });
  });

  setTimeout(() => map.invalidateSize(), 300);
}

document.addEventListener("DOMContentLoaded", initUrbanFabricMap);
document$.subscribe(initUrbanFabricMap);