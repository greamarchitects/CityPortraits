// ===============================
// DATA LOADING
// ===============================

const events = await fetch('..assets/data/events.json').then(r => r.json());
const places = await fetch('..assets/data/places.json').then(r => r.json());
const actors = await fetch('..assets/data/actors.json').then(r => r.json());

// ===============================
// Lookup tables for quick access
// ===============================  
const placeMap = Object.fromEntries(places.map(p => [p.id, p]));
const actorMap = Object.fromEntries(actors.map(a => [a.id, a]));

// Enrich events with full place and actor data
events.forEach(event => {
    event.places = event.place_ids.map(id => placeMap[id]);
    event.actors = event.actor_ids.map(id => actorMap[id]);
}); 

// ===============================
// MAP RENDERING
// ===============================
L.marker(events.places.coordinates)

function renderEvent(event) {
    // Clear existing markers
    if (marker) {
        marker.remove();
    }
    // Add new marker for the event's place
    const actors = event.actors.map(a => a.name).join(", ");
    const places = event.places?.name || "Unknown Place";

    document.getElementById("eventTitle").innerText = event.title;
    document.getElementById("eventText").innerHTML = `
        <strong>Actors:</strong> ${actors}<br>
        <strong>Place:</strong> ${places}<br>
        <p>${event.text}</p>
    `;
}