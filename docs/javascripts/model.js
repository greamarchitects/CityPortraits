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

  if (el.dataset.ready === "true") return;
  el.dataset.ready = "true";

  const zoomById = {
    "mcp-main-map": 14
  };

  const map = L.map(id, {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([41.3275, 19.8187], zoomById[id] || zoom);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(map);

  L.marker([41.3275, 19.8187]).addTo(map);

  setTimeout(() => map.invalidateSize(), 300);
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