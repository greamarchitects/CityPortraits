// ===============================
// GLOBAL STATE
// ===============================

// Leaflet map instance
let map;

// Marker showing current event location
let marker;

// Array of events loaded from external JSON
let events = [];

// Index of currently active event
let activeIndex = 0;


// ===============================
// LOAD DATA (events.json)
// ===============================

async function loadEvents() {
  try {
    // In MkDocs, files inside docs/ are served as site assets.
    // Save your JSON here:
    // docs/assets/data/events.json
    //
    // Then load it with this path:
    const response = await fetch("/greamarchitects/CityPortraits/assets/data/events.json");

    // Check if the file was found successfully
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} while loading events.json`);
    }

    // Convert response to JS object
    events = await response.json();

    // Safety check
    if (!Array.isArray(events) || events.length === 0) {
      console.warn("No events found in assets/data/events.json");
      return;
    }

    // Initialize UI + map after data is ready
    initTimeline();
    initMap();
    renderEvent(activeIndex);

  } catch (error) {
    console.error("Failed to load events.json:", error);
  }
}


// ===============================
// TIMELINE UI (years)
// ===============================

function initTimeline() {
  const yearsContainer = document.getElementById("yearsContainer");
  if (!yearsContainer) return;

  // Clear existing content
  yearsContainer.innerHTML = "";

  // Create a button for each event year/period
  events.forEach((event, index) => {
    const yearBtn = document.createElement("button");

    yearBtn.className = "year-item";
    yearBtn.textContent = event.year || event.period || `Item ${index + 1}`;

    // When clicking a year → update active event
    yearBtn.addEventListener("click", () => {
      activeIndex = index;
      renderEvent(activeIndex);
    });

    yearsContainer.appendChild(yearBtn);
  });
}


// ===============================
// MAP INITIALIZATION (Leaflet)
// ===============================

function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Use first event as default position
  const first = events[0] || {};

  const lat = first.lat || 41.3275;   // fallback: Tirana
  const lng = first.lng || 19.8187;
  const zoom = first.zoom || 13;

  // Prevent duplicate map initialization
  if (map) {
    map.remove();
  }

  // Create map
  map = L.map("map").setView([lat, lng], zoom);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Create marker at initial position
  marker = L.marker([lat, lng]).addTo(map);
}


// ===============================
// RENDER CURRENT EVENT
// ===============================

function renderEvent(index) {
  const event = events[index];
  if (!event) return;

  // --- Update text content ---
  const eventTitle = document.getElementById("eventTitle");
  const eventText = document.getElementById("eventText");
  const mapTitle = document.getElementById("mapTitle");
  const mapCaption = document.getElementById("mapCaption");

  if (eventTitle) {
    eventTitle.textContent = event.title || "";
  }

  if (eventText) {
    // Supports grouped events:
    // if "items" exists, show them as a small list under the main text
    if (Array.isArray(event.items) && event.items.length > 0) {
      const intro = event.text ? `<p>${event.text}</p>` : "";
      const list = `
        <ul>
          ${event.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      `;
      eventText.innerHTML = intro + list;
    } else {
      eventText.textContent = event.text || "";
    }
  }

  if (mapTitle) {
    mapTitle.textContent = event.mapTitle || "Map";
  }

  if (mapCaption) {
    mapCaption.textContent = event.mapCaption || "";
  }

  // --- Update tags ---
  const tagsContainer = document.getElementById("eventTags");
  if (tagsContainer) {
    tagsContainer.innerHTML = "";

    (event.tags || []).forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });
  }

  // --- Update map position ---
  // Fallback to Tirana if event has no coordinates
  const lat = event.lat || 41.3275;
  const lng = event.lng || 19.8187;
  const zoom = event.zoom || 13;

  if (map && marker) {
    map.setView([lat, lng], zoom);
    marker.setLatLng([lat, lng]);
  }

  // Highlight active year in UI
  updateActiveYear(index);
}


// ===============================
// UI STATE (active year highlight)
// ===============================

function updateActiveYear(index) {
  const yearItems = document.querySelectorAll(".year-item");

  yearItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}


// ===============================
// ENTRY POINT
// ===============================

// Wait for page to fully load before running
document.addEventListener("DOMContentLoaded", loadEvents);