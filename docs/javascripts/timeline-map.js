(function () {
  const timelineData = [
    {
      year: 1990,
      title: "Collapse of Socialist Regime",
      text: "End of centralized planning. Beginning of informal urban expansion, especially in Tirana and coastal areas.",
      tags: ["system change", "informality", "urban expansion", "planning transition"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 1992,
      title: "Transition to Market Economy",
      text: "Privatization of land and housing. Weak planning control leads to rapid, unregulated construction.",
      tags: ["privatization", "land reform", "housing transition", "unregulated growth"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 1997,
      title: "Pyramid Crisis",
      text: "State collapse and unrest. Urban governance breaks down, accelerating informal settlements and migration.",
      tags: ["state crisis", "migration", "informal settlements", "governance breakdown"],
      coords: [19.4902, 40.4661],
      place: "Vlorë"
    },
    {
      year: 2000,
      title: "Urban Transformation Policies",
      text: "Municipal reforms begin. First attempts to regulate urban growth and improve infrastructure.",
      tags: ["municipal reform", "infrastructure", "urban regulation", "transition governance"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2005,
      title: "Planning System Reforms",
      text: "Shift toward modern planning frameworks. Increased international influence on urban development.",
      tags: ["planning reform", "institutions", "urban policy", "international influence"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2009,
      title: "NATO Membership",
      text: "Geopolitical stabilization. Increased investment and infrastructure development.",
      tags: ["stabilization", "investment", "infrastructure", "regional integration"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2014,
      title: "EU Candidate Status",
      text: "Alignment with European standards. Institutional reforms impact planning and construction sectors.",
      tags: ["EU alignment", "institutional reform", "construction sector", "standards"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2015,
      title: "Territorial Administrative Reform",
      text: "Reduction of municipalities. Centralization of planning authority and restructuring of governance.",
      tags: ["territorial reform", "governance", "municipal restructuring", "planning authority"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2019,
      title: "Durrës Earthquake",
      text: "Major seismic event exposed vulnerabilities in the building stock and triggered reconstruction efforts and renewed attention to seismic standards.",
      tags: ["earthquake", "seismic risk", "building vulnerability", "reconstruction"],
      coords: [19.4444, 41.3231],
      place: "Durrës"
    },
    {
      year: 2020,
      title: "Reconstruction and Resilience",
      text: "Large-scale rebuilding efforts increased the focus on seismic resilience, building quality, and recovery-oriented planning.",
      tags: ["resilience", "reconstruction", "housing quality", "risk reduction"],
      coords: [19.4444, 41.3231],
      place: "Durrës"
    },
    {
      year: 2022,
      title: "Urban Regeneration Projects",
      text: "Major redevelopment in Tirana and coastal cities contributed to increasing density, vertical growth, and renewed pressure on land and infrastructure.",
      tags: ["regeneration", "density", "vertical growth", "redevelopment"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2024,
      title: "Digitalization of Planning",
      text: "GIS-based planning tools, digital cadastre systems, and data-driven urban analysis became more prominent in territorial planning workflows.",
      tags: ["GIS", "digital cadastre", "planning tools", "data-driven analysis"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    },
    {
      year: 2026,
      title: "Data-Driven Urban Modeling",
      text: "Open data, exposure models, and computational methods increasingly support analysis and simulation of urban systems and risk.",
      tags: ["open data", "exposure modeling", "urban simulation", "computational methods"],
      coords: [19.8187, 41.3275],
      place: "Tirana"
    }
  ];

  const startYear = 1990;
  const endYear = 2026;

  let map;
  let marker;
  let currentIndex = 0;

  function renderTags(eventTagsContainer, tags) {
    eventTagsContainer.innerHTML = "";
    tags.forEach(tag => {
      const tagEl = document.createElement("span");
      tagEl.className = "event-tag";
      tagEl.textContent = tag;
      eventTagsContainer.appendChild(tagEl);
    });
  }

  function initTimeline() {
    const track = document.getElementById("timelineTrack");
    const tooltip = document.getElementById("timelineTooltip");
    const eventTitle = document.getElementById("eventTitle");
    const eventText = document.getElementById("eventText");
    const eventTags = document.getElementById("eventTags");
    const mapContainer = document.getElementById("timelineMap");

    if (!track || !tooltip || !eventTitle || !eventText || !eventTags || !mapContainer) {
      return;
    }

    if (track.dataset.initialized === "true") {
      return;
    }
    track.dataset.initialized = "true";

    function yearToPercent(year) {
      return ((year - startYear) / (endYear - startYear)) * 100;
    }

    function renderMarkers() {
      track.innerHTML = "";

      timelineData.forEach((item, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "timeline-marker" + (index === currentIndex ? " active" : "");
        btn.style.left = `${yearToPercent(item.year)}%`;
        btn.setAttribute("aria-label", `${item.year}: ${item.title}`);

        btn.addEventListener("mouseenter", () => {
          tooltip.textContent = item.year;
          tooltip.style.left = `${yearToPercent(item.year)}%`;
          tooltip.classList.add("visible");
        });

        btn.addEventListener("mouseleave", () => {
          tooltip.classList.remove("visible");
        });

        btn.addEventListener("focus", () => {
          tooltip.textContent = item.year;
          tooltip.style.left = `${yearToPercent(item.year)}%`;
          tooltip.classList.add("visible");
        });

        btn.addEventListener("blur", () => {
          tooltip.classList.remove("visible");
        });

        btn.addEventListener("click", () => {
          currentIndex = index;
          update();
        });

        track.appendChild(btn);
      });
    }

    function ensureMap() {
      if (map) return;
      if (!window.maplibregl) return;

      map = new maplibregl.Map({
        container: "timelineMap",
        style: "https://demotiles.maplibre.org/style.json",
        center: [19.8187, 41.3275],
        zoom: 6.5
      });

      map.addControl(new maplibregl.NavigationControl(), "top-right");
      marker = new maplibregl.Marker();

      map.on("load", () => {
        updateMap();
      });
    }

    function updateMap() {
      if (!map || !marker) return;

      const item = timelineData[currentIndex];

      marker
        .setLngLat(item.coords)
        .setPopup(
          new maplibregl.Popup({ offset: 18 }).setHTML(`
            <div class="timeline-popup">
              <h4>${item.year} — ${item.title}</h4>
              <p>${item.place}</p>
            </div>
          `)
        )
        .addTo(map);

      map.flyTo({
        center: item.coords,
        zoom: item.place === "Tirana" ? 8.5 : 9,
        speed: 0.8,
        essential: true
      });
    }

    function update() {
      const item = timelineData[currentIndex];
      renderMarkers();
      eventTitle.textContent = `${item.year} — ${item.title}`;
      eventText.textContent = item.text;
      renderTags(eventTags, item.tags || []);
      updateMap();
    }

    renderMarkers();
    ensureMap();
    update();
  }

  function boot() {
    initTimeline();
  }

  if (document.readyState !== "loading") {
    boot();
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      boot();
    });
  }
})();