# Model
The model synthesizes spatial and data analysis into structured representations of urban systems.

<!--## Slider 
_(V01: 20260331)_

<div class="timeline-wrapper">

  <div class="years" id="yearsContainer"></div>

  <div class="event-box">
    <div class="event-title" id="eventTitle"></div>
    <div class="event-text" id="eventText"></div>
    <div class="event-tags" id="eventTags"></div>
  </div>

</div>

<style>
.timeline-wrapper {
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background: var(--md-default-bg-color);
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
}

.years {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  margin-bottom: 25px;
  padding-top: 10px;
}

.years::before {
  content: "";
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ccc;
  z-index: 0;
}

.year {
  position: relative;
  z-index: 1;
  padding: 6px 12px;
  border-radius: 20px;
  background: var(--md-default-bg-color, white);
  border: 1px solid #999;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s ease;
}

.year:hover {
  transform: translateY(-1px);
}

.year.active {
  background: #000;
  color: white;
  font-weight: bold;
  border-color: #000;
}

.event-box {
  border-top: 1px solid #ddd;
  padding-top: 18px;
  min-height: 130px;
}

.event-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.event-text {
  margin-bottom: 14px;
  line-height: 1.6;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.event-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #bbb;
  font-size: 0.8rem;
  background: #f5f5f5;
}
</style>

<script>
(function () {
  const timelineData = [
    {
      year: "1990",
      title: "Collapse of Socialist Regime",
      text: "End of centralized planning. Beginning of informal urban expansion, especially in Tirana and coastal areas.",
      tags: ["system change", "informality", "urban expansion", "planning transition"]
    },
    {
      year: "1992",
      title: "Transition to Market Economy",
      text: "Privatization of land and housing. Weak planning control leads to rapid, unregulated construction.",
      tags: ["privatization", "land reform", "housing transition", "unregulated growth"]
    },
    {
      year: "1997",
      title: "Pyramid Crisis",
      text: "State collapse and unrest. Urban governance breaks down, accelerating informal settlements and migration.",
      tags: ["state crisis", "migration", "informal settlements", "governance breakdown"]
    },
    {
      year: "2000",
      title: "Urban Transformation Policies",
      text: "Municipal reforms begin. First attempts to regulate urban growth and improve infrastructure.",
      tags: ["municipal reform", "infrastructure", "urban regulation", "transition governance"]
    },
    {
      year: "2005",
      title: "Planning System Reforms",
      text: "Shift toward modern planning frameworks. Increased international influence on urban development.",
      tags: ["planning reform", "institutions", "urban policy", "international influence"]
    },
    {
      year: "2009",
      title: "NATO Membership",
      text: "Geopolitical stabilization. Increased investment and infrastructure development.",
      tags: ["stabilization", "investment", "infrastructure", "regional integration"]
    },
    {
      year: "2014",
      title: "EU Candidate Status",
      text: "Alignment with European standards. Institutional reforms impact planning and construction sectors.",
      tags: ["EU alignment", "institutional reform", "construction sector", "standards"]
    },
    {
      year: "2015",
      title: "Territorial Administrative Reform",
      text: "Reduction of municipalities. Centralization of planning authority and restructuring of governance.",
      tags: ["territorial reform", "governance", "municipal restructuring", "planning authority"]
    },
    {
      year: "2019",
      title: "Durrës Earthquake",
      text: "Major seismic event exposed vulnerabilities in the building stock and triggered reconstruction efforts and renewed attention to seismic standards.",
      tags: ["earthquake", "seismic risk", "building vulnerability", "reconstruction"]
    },
    {
      year: "2020",
      title: "Reconstruction and Resilience",
      text: "Large-scale rebuilding efforts increased the focus on seismic resilience, building quality, and recovery-oriented planning.",
      tags: ["resilience", "reconstruction", "housing quality", "risk reduction"]
    },
    {
      year: "2022",
      title: "Urban Regeneration Projects",
      text: "Major redevelopment in Tirana and coastal cities contributed to increasing density, vertical growth, and renewed pressure on land and infrastructure.",
      tags: ["regeneration", "density", "vertical growth", "redevelopment"]
    },
    {
      year: "2024",
      title: "Digitalization of Planning",
      text: "GIS-based planning tools, digital cadastre systems, and data-driven urban analysis became more prominent in territorial planning workflows.",
      tags: ["GIS", "digital cadastre", "planning tools", "data-driven analysis"]
    },
    {
      year: "2026",
      title: "Data-Driven Urban Modeling",
      text: "Open data, exposure models, and computational methods increasingly support analysis and simulation of urban systems and risk.",
      tags: ["open data", "exposure modeling", "urban simulation", "computational methods"]
    }
  ];

  function initTimeline() {
    const yearsContainer = document.getElementById("yearsContainer");
    const eventTitle = document.getElementById("eventTitle");
    const eventText = document.getElementById("eventText");
    const eventTags = document.getElementById("eventTags");

    if (!yearsContainer || !eventTitle || !eventText || !eventTags) return;

    let currentIndex = 0;

    function renderYears() {
      yearsContainer.innerHTML = "";
      timelineData.forEach((item, index) => {
        const el = document.createElement("button");
        el.className = "year" + (index === currentIndex ? " active" : "");
        el.textContent = item.year;
        el.type = "button";
        el.addEventListener("click", () => {
          currentIndex = index;
          update();
        });
        yearsContainer.appendChild(el);
      });
    }

    function renderTags(tags) {
      eventTags.innerHTML = "";
      tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.className = "event-tag";
        tagEl.textContent = tag;
        eventTags.appendChild(tagEl);
      });
    }

    function update() {
      const item = timelineData[currentIndex];
      renderYears();
      eventTitle.textContent = item.title;
      eventText.textContent = item.text;
      renderTags(item.tags || []);
    }

    update();
  }

  if (document.readyState !== "loading") {
    initTimeline();
  } else {
    document.addEventListener("DOMContentLoaded", initTimeline);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initTimeline();
    });
  }
})();
</script>
-->

<!--## Slider
_(V02: 20260401)_

<div class="timeline-layout">
  <div class="timeline-panel">
    <div class="timeline-wrapper">
      <div class="timeline-range-labels">
        <span>1990</span>
        <span>2026</span>
      </div>

      <div class="timeline-track-area">
        <div class="timeline-track" id="timelineTrack"></div>
        <div class="timeline-tooltip" id="timelineTooltip"></div>
      </div>

      <div class="event-box">
        <div class="event-title" id="eventTitle"></div>
        <div class="event-text" id="eventText"></div>
        <div class="event-tags" id="eventTags"></div>
      </div>
    </div>
  </div>

  <div class="map-panel">
    <div id="timelineMap" class="timeline-map"></div>
  </div>
</div>
-->

<!-- ## Map
_(V03: 20260401)_

<div class="timeline-layout">

  <div class="timeline-left">
    <div class="timeline-wrapper">

      <div class="years" id="yearsContainer"></div>

      <div class="event-box">
        <div class="event-title" id="eventTitle"></div>
        <div class="event-text" id="eventText"></div>
        <div class="event-tags" id="eventTags"></div>
      </div>

    </div>
  </div>

  <div class="timeline-right">
    <div class="map-panel">
      <div class="map-title" id="mapTitle">Map</div>
      <img id="mapImage" class="map-image" src="" alt="Timeline map">
      <div class="map-caption" id="mapCaption"></div>
    </div>
  </div>

</div>

<style>
.timeline-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
  margin-top: 30px;
  align-items: start;
}

.timeline-wrapper,
.map-panel {
  padding: 20px;
  border-radius: 12px;
  background: var(--md-default-bg-color);
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
}

.years {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  margin-bottom: 25px;
  padding-top: 10px;
}

.years::before {
  content: "";
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ccc;
  z-index: 0;
}

.year {
  position: relative;
  z-index: 1;
  padding: 6px 12px;
  border-radius: 20px;
  background: var(--md-default-bg-color, white);
  border: 1px solid #999;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s ease;
}

.year:hover {
  transform: translateY(-1px);
}

.year.active {
  background: #000;
  color: white;
  font-weight: bold;
  border-color: #000;
}

.event-box {
  border-top: 1px solid #ddd;
  padding-top: 18px;
  min-height: 130px;
}

.event-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.event-text {
  margin-bottom: 14px;
  line-height: 1.6;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.event-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #bbb;
  font-size: 0.8rem;
  background: #f5f5f5;
}

.map-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 12px;
}

.map-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
  border: 1px solid #ddd;
  transition: opacity 0.25s ease;
}

.map-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--md-default-fg-color--light, #666);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .timeline-layout {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
(function () {
  const timelineData = [
    {
      year: "1990",
      title: "Collapse of Socialist Regime",
      text: "End of centralized planning. Beginning of informal urban expansion, especially in Tirana and coastal areas.",
      tags: ["system change", "informality", "urban expansion", "planning transition"],
      map: "assets/maps/1990.jpg",
      mapTitle: "Urban condition around 1990",
      mapCaption: "Map showing the beginning of transition and early spatial change."
    },
    {
      year: "1992",
      title: "Transition to Market Economy",
      text: "Privatization of land and housing. Weak planning control leads to rapid, unregulated construction.",
      tags: ["privatization", "land reform", "housing transition", "unregulated growth"],
      map: "assets/maps/1992.jpg",
      mapTitle: "Urban condition around 1992",
      mapCaption: "Map highlighting privatization-related expansion and weak regulation."
    },
    {
      year: "1997",
      title: "Pyramid Crisis",
      text: "State collapse and unrest. Urban governance breaks down, accelerating informal settlements and migration.",
      tags: ["state crisis", "migration", "informal settlements", "governance breakdown"],
      map: "assets/maps/1997.jpg",
      mapTitle: "Urban condition around 1997",
      mapCaption: "Map emphasizing urban stress, migration, and informal settlement growth."
    },
    {
      year: "2000",
      title: "Urban Transformation Policies",
      text: "Municipal reforms begin. First attempts to regulate urban growth and improve infrastructure.",
      tags: ["municipal reform", "infrastructure", "urban regulation", "transition governance"],
      map: "assets/maps/2000.jpg",
      mapTitle: "Urban condition around 2000",
      mapCaption: "Map of early urban regulation and infrastructural restructuring."
    },
    {
      year: "2005",
      title: "Planning System Reforms",
      text: "Shift toward modern planning frameworks. Increased international influence on urban development.",
      tags: ["planning reform", "institutions", "urban policy", "international influence"],
      map: "assets/maps/2005.jpg",
      mapTitle: "Urban condition around 2005",
      mapCaption: "Map showing more structured development and planning reform."
    },
    {
      year: "2009",
      title: "NATO Membership",
      text: "Geopolitical stabilization. Increased investment and infrastructure development.",
      tags: ["stabilization", "investment", "infrastructure", "regional integration"],
      map: "assets/maps/2009.jpg",
      mapTitle: "Urban condition around 2009",
      mapCaption: "Map reflecting infrastructure and investment-related urban change."
    },
    {
      year: "2014",
      title: "EU Candidate Status",
      text: "Alignment with European standards. Institutional reforms impact planning and construction sectors.",
      tags: ["EU alignment", "institutional reform", "construction sector", "standards"],
      map: "assets/maps/2014.jpg",
      mapTitle: "Urban condition around 2014",
      mapCaption: "Map showing development under stronger institutional alignment."
    },
    {
      year: "2015",
      title: "Territorial Administrative Reform",
      text: "Reduction of municipalities. Centralization of planning authority and restructuring of governance.",
      tags: ["territorial reform", "governance", "municipal restructuring", "planning authority"],
      map: "assets/maps/2015.jpg",
      mapTitle: "Urban condition around 2015",
      mapCaption: "Map showing administrative restructuring and planning centralization."
    },
    {
      year: "2019",
      title: "Durrës Earthquake",
      text: "Major seismic event exposed vulnerabilities in the building stock and triggered reconstruction efforts and renewed attention to seismic standards.",
      tags: ["earthquake", "seismic risk", "building vulnerability", "reconstruction"],
      map: "assets/maps/2019.jpg",
      mapTitle: "Urban condition around 2019",
      mapCaption: "Map highlighting affected zones, vulnerabilities, or reconstruction context."
    },
    {
      year: "2020",
      title: "Reconstruction and Resilience",
      text: "Large-scale rebuilding efforts increased the focus on seismic resilience, building quality, and recovery-oriented planning.",
      tags: ["resilience", "reconstruction", "housing quality", "risk reduction"],
      map: "assets/maps/2020.jpg",
      mapTitle: "Urban condition around 2020",
      mapCaption: "Map illustrating recovery, reconstruction, and resilience-oriented planning."
    },
    {
      year: "2022",
      title: "Urban Regeneration Projects",
      text: "Major redevelopment in Tirana and coastal cities contributed to increasing density, vertical growth, and renewed pressure on land and infrastructure.",
      tags: ["regeneration", "density", "vertical growth", "redevelopment"],
      map: "assets/maps/2022.jpg",
      mapTitle: "Urban condition around 2022",
      mapCaption: "Map showing densification, regeneration, and redevelopment pressure."
    },
    {
      year: "2024",
      title: "Digitalization of Planning",
      text: "GIS-based planning tools, digital cadastre systems, and data-driven urban analysis became more prominent in territorial planning workflows.",
      tags: ["GIS", "digital cadastre", "planning tools", "data-driven analysis"],
      map: "assets/maps/2024.jpg",
      mapTitle: "Urban condition around 2024",
      mapCaption: "Map produced through GIS-based planning and digital workflows."
    },
    {
      year: "2026",
      title: "Data-Driven Urban Modeling",
      text: "Open data, exposure models, and computational methods increasingly support analysis and simulation of urban systems and risk.",
      tags: ["open data", "exposure modeling", "urban simulation", "computational methods"],
      map: "assets/maps/2026.jpg",
      mapTitle: "Urban condition around 2026",
      mapCaption: "Map representing data-driven urban modeling and simulation."
    }
  ];

  function initTimeline() {
    const yearsContainer = document.getElementById("yearsContainer");
    const eventTitle = document.getElementById("eventTitle");
    const eventText = document.getElementById("eventText");
    const eventTags = document.getElementById("eventTags");
    const mapImage = document.getElementById("mapImage");
    const mapTitle = document.getElementById("mapTitle");
    const mapCaption = document.getElementById("mapCaption");

    if (!yearsContainer || !eventTitle || !eventText || !eventTags || !mapImage || !mapTitle || !mapCaption) return;

    let currentIndex = 0;

    function renderYears() {
      yearsContainer.innerHTML = "";
      timelineData.forEach((item, index) => {
        const el = document.createElement("button");
        el.className = "year" + (index === currentIndex ? " active" : "");
        el.textContent = item.year;
        el.type = "button";

        el.addEventListener("click", () => {
          currentIndex = index;
          update();
        });

        yearsContainer.appendChild(el);
      });
    }

    function renderTags(tags) {
      eventTags.innerHTML = "";
      tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.className = "event-tag";
        tagEl.textContent = tag;
        eventTags.appendChild(tagEl);
      });
    }

    function update() {
      const item = timelineData[currentIndex];

      renderYears();
      eventTitle.textContent = item.title;
      eventText.textContent = item.text;
      renderTags(item.tags || []);

      mapImage.style.opacity = "0.2";
      mapImage.src = item.map;
      mapImage.alt = item.mapTitle || ("Map for " + item.year);
      mapTitle.textContent = item.mapTitle || "Map";
      mapCaption.textContent = item.mapCaption || "";

      mapImage.onload = () => {
        mapImage.style.opacity = "1";
      };
    }

    update();
  }

  if (document.readyState !== "loading") {
    initTimeline();
  } else {
    document.addEventListener("DOMContentLoaded", initTimeline);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initTimeline();
    });
  }
})();
</script> -->

## Map Timeline
<!-- _(V04_20260401_Default Map)_ -->
<div class="timeline-layout">

  <div class="timeline-wrapper">
    <div class="years" id="yearsContainer"></div>

    <div class="event-box">
      <div class="event-title" id="eventTitle"></div>
      <div class="event-text" id="eventText"></div>
      <div class="event-tags" id="eventTags"></div>
    </div>
  </div>

  <div class="map-panel">
    <div class="map-title" id="mapTitle">Map</div>
    <div id="map" class="map-container"></div>
    <div class="map-caption" id="mapCaption"></div>
  </div>

</div>

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<style>
.timeline-layout {
  display: grid;
  grid-template-columns: 1fr;   /* stacked vertically */
  gap: 24px;
  margin-top: 30px;
  margin-bottom: 2rem;
}

.timeline-wrapper,
.map-panel {
  padding: 20px;
  border-radius: 12px;
  background: var(--md-default-bg-color);
  border: 1px solid var(--md-default-fg-color--lightest, #ddd);
}

.years {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  margin-bottom: 25px;
  padding-top: 10px;
}

.years::before {
  content: "";
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ccc;
  z-index: 0;
}

.year {
  position: relative;
  z-index: 1;
  padding: 6px 12px;
  border-radius: 20px;
  background: var(--md-default-bg-color, white);
  border: 1px solid #999;
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s ease;
}

.year:hover {
  transform: translateY(-1px);
}

.year.active {
  background: #000;
  color: white;
  font-weight: bold;
  border-color: #000;
}

.event-box {
  border-top: 1px solid #ddd;
  padding-top: 18px;
  min-height: 130px;
}

.event-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.event-text {
  margin-bottom: 14px;
  line-height: 1.6;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.event-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #bbb;
  font-size: 0.8rem;
  background: #f5f5f5;
}

.map-title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 12px;
}

.map-container {
  width: 100%;
  height: 480px;   /* bigger map */
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
}

.map-caption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--md-default-fg-color--light, #666);
  line-height: 1.5;
}
</style>

<script>
(function () {
  const defaultView = {
    coords: [41.3275, 19.8187],
    zoom: 8,
    title: "Default OpenStreetMap view",
    caption: "Default map view shown when no specific event location is provided."
  };

  const timelineData = [
    {
      year: "1990",
      title: "Collapse of Socialist Regime",
      text: "End of centralized planning. Beginning of informal urban expansion, especially in Tirana and coastal areas.",
      tags: ["system change", "informality", "urban expansion", "planning transition"],
      coords: [41.3275, 19.8187],
      zoom: 10,
      mapTitle: "Tirana around 1990",
      mapCaption: "OpenStreetMap view centered on Tirana."
    },
    {
      year: "1997",
      title: "Pyramid Crisis",
      text: "State collapse and unrest. Urban governance breaks down, accelerating informal settlements and migration.",
      tags: ["state crisis", "migration", "informal settlements", "governance breakdown"],
      coords: [40.4661, 19.4902],
      zoom: 10,
      mapTitle: "Vlorë during the crisis",
      mapCaption: "Map centered on Vlorë."
    },
    {
      year: "2019",
      title: "Durrës Earthquake",
      text: "Major seismic event exposed vulnerabilities in the building stock and triggered reconstruction efforts.",
      tags: ["earthquake", "seismic risk", "building vulnerability", "reconstruction"],
      coords: [41.3236, 19.4547],
      zoom: 11,
      mapTitle: "Durrës earthquake area",
      mapCaption: "Map centered on Durrës and surrounding affected zones."
    },
    {
      year: "2024",
      title: "Digitalization of Planning",
      text: "GIS-based planning tools, digital cadastre systems, and data-driven urban analysis became more prominent.",
      tags: ["GIS", "digital cadastre", "planning tools", "data-driven analysis"],
      coords: [41.3275, 19.8187],
      zoom: 11,
      mapTitle: "Digital planning era",
      mapCaption: "OpenStreetMap used as a live basemap for territorial context."
    },
    {
      year: "2026",
      title: "Data-Driven Urban Modeling",
      text: "Open data, exposure models, and computational methods increasingly support analysis and simulation of urban systems and risk.",
      tags: ["open data", "exposure modeling", "urban simulation", "computational methods"],
      coords: [41.3275, 19.8187],
      zoom: 11,
      mapTitle: "Data-driven urban modeling",
      mapCaption: "Map centered on Tirana as a base for model-driven interpretation."
    }
  ];

  let mapInstance = null;
  let marker = null;
  let currentIndex = 0;
  let isInitialized = false;

  function renderTags(tags, eventTags) {
    eventTags.innerHTML = "";
    tags.forEach(tag => {
      const tagEl = document.createElement("span");
      tagEl.className = "event-tag";
      tagEl.textContent = tag;
      eventTags.appendChild(tagEl);
    });
  }

  function initTimeline() {
    const yearsContainer = document.getElementById("yearsContainer");
    const eventTitle = document.getElementById("eventTitle");
    const eventText = document.getElementById("eventText");
    const eventTags = document.getElementById("eventTags");
    const mapTitle = document.getElementById("mapTitle");
    const mapCaption = document.getElementById("mapCaption");
    const mapElement = document.getElementById("map");

    if (!yearsContainer || !eventTitle || !eventText || !eventTags || !mapTitle || !mapCaption || !mapElement) {
      return;
    }

    if (!mapInstance) {
      mapInstance = L.map(mapElement).setView(defaultView.coords, defaultView.zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstance);

      marker = L.marker(defaultView.coords).addTo(mapInstance);
    }

    function renderYears() {
      yearsContainer.innerHTML = "";

      timelineData.forEach((item, index) => {
        const el = document.createElement("button");
        el.className = "year" + (index === currentIndex ? " active" : "");
        el.textContent = item.year;
        el.type = "button";

        el.addEventListener("click", () => {
          currentIndex = index;
          update();
        });

        yearsContainer.appendChild(el);
      });
    }

    function update() {
      const item = timelineData[currentIndex] || {};
      const coords = item.coords || defaultView.coords;
      const zoom = item.zoom || defaultView.zoom;

      renderYears();

      eventTitle.textContent = item.title || "No event selected";
      eventText.textContent = item.text || "No description available.";
      renderTags(item.tags || [], eventTags);

      mapTitle.textContent = item.mapTitle || defaultView.title;
      mapCaption.textContent = item.mapCaption || defaultView.caption;

      mapInstance.setView(coords, zoom);

      if (marker) {
        marker.setLatLng(coords);
      }

      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 100);
    }

    update();
    isInitialized = true;
  }

  function safeInit() {
    if (typeof L === "undefined") return;
    initTimeline();
  }

  if (document.readyState !== "loading") {
    safeInit();
  } else {
    document.addEventListener("DOMContentLoaded", safeInit);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      setTimeout(() => {
        if (mapInstance && isInitialized) {
          mapInstance.invalidateSize();
        } else {
          safeInit();
        }
      }, 100);
    });
  }
})();
</script>


### Graphs
Relational representation of spatial elements and their connections.  
→ [Graphs](graphs.md)

### Patterns
Identification and abstraction of recurring spatial and architectural configurations.  
→ [Patterns](patterns.md)
## Approach

- Graph-based modeling
- Pattern extraction
- Rule-based systems
- Computational representation

## Objective

Translate urban complexity into structured models for analysis, comparison, and simulation.