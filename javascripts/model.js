document.addEventListener("DOMContentLoaded", () => {
  initAllMaps();
  setTimeout(initAllMaps, 500);
});

window.addEventListener("load", () => {
  initAllMaps();
});

/* =========================
   LEAFLET MAPS
========================= */

function initMap(id, zoom = 13) {
  const el = document.getElementById(id);

  if (!el) return;

  if (typeof L === "undefined") {
    console.warn("Leaflet not loaded");
    return;
  }

  // Prevent duplicate Leaflet initialization
  if (el.dataset.ready === "true" || el._leaflet_id) return;
  el.dataset.ready = "true";

  const zoomById = {
    "mcp-main-map": 14
  };

  const map = L.map(id, {
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true
  }).setView([41.3275, 19.8187], zoomById[id] || zoom);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(map);

  // Small clean marker
  L.circleMarker([41.3275, 19.8187], {
    radius: 5,
    weight: 1,
    fillOpacity: 0.8
  }).addTo(map);

  setTimeout(() => map.invalidateSize(), 300);
  setTimeout(() => map.invalidateSize(), 1000);
}

function initAllMaps() {
  [
    "mcp-point",
    "mcp-axial",
    "mcp-patch",
    "mcp-feature",
    "mcp-main-map",
    "mcp-portrait",
    "mcp-pattern",
    "mcp-project"
  ].forEach((id) => initMap(id));
}

// MkDocs Material instant navigation
if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    setTimeout(initAllMaps, 500);
  });
}