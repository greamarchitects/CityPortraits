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

## Slider
_(V01: 20260401)_

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

### Graphs
Relational representation of spatial elements and their connections.  
→ [Graphs](graphs.md)

### Patterns
Identification and abstraction of recurring spatial and architectural configurations.  
→ [Patterns](patterns.md)
## Slider

## Approach

- Graph-based modeling
- Pattern extraction
- Rule-based systems
- Computational representation

## Objective

Translate urban complexity into structured models for analysis, comparison, and simulation.