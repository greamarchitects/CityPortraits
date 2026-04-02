# Model

The model synthesizes spatial and data analysis into structured representations of urban systems.

## Spatial Timeline

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

<style>
.timeline-layout {
  display: grid;
  grid-template-columns: 1fr;
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

.year-item {
  position: relative;
  z-index: 1;
  padding: 6px 12px;
  border-radius: 20px;
  background: var(--md-default-bg-color, white);
  border: 1px solid #999;
  cursor: pointer;
  font-size: 0.9rem;
}

.year-item.active {
  background: #000;
  color: white;
  font-weight: bold;
}

.event-box {
  border-top: 1px solid #ddd;
  padding-top: 18px;
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

.event-text ul {
  padding-left: 20px;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid #bbb;
  font-size: 0.8rem;
  background: #f5f5f5;
}

.map-container {
  width: 100%;
  height: 480px;
  border-radius: 10px;
  border: 1px solid #ddd;
}
</style>

### Graphs
Relational representation of spatial elements and their connections.  
→ [Graphs](graphs.md)

<div id="cy-network" style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 8px;"></div>


This is a sample network graph showing relationships between actors, events, and places. The actual graph will be rendered using the data from `events.json`, `actors.json`, and `places.json`.


### Patterns
Identification and abstraction of recurring spatial and architectural configurations.  
→ [Patterns](patterns.md)


<div class="cp-grid">

  <div class="cp-card">
    <div class="cp-gif">
      <img src="../assets/images/placeholder.gif" alt="Morphological Patterns" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div class="cp-title">Morphological</div>
    <div class="cp-text">Analysis of urban form, street patterns, building density, and spatial structure.</div>
  </div>

  <div class="cp-card">
    <div class="cp-gif">
      <img src="../assets/images/placeholder.gif" alt="Architectural Patterns" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div class="cp-title">Architectural</div>
    <div class="cp-text">Study of building typologies, construction styles, and architectural evolution.</div>
  </div>

  <div class="cp-card">
    <div class="cp-gif">
      <img src="../assets/images/placeholder.gif" alt="Functional Patterns" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div class="cp-title">Functional</div>
    <div class="cp-text">Examination of land use distribution, activity centers, and urban functionality.</div>
  </div>

</div>

<!-- Display of cards for Patterns -->
<style>
    
.cp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem 0;
}

.cp-card {
  display: block;
  padding: 1rem 1.1rem;
  border: 1px solid var(--md-default-fg-color--lightest, #ffffff);
  border-radius: 12px;
  background: var(--md-default-bg-color);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.cp-card:hover {
  transform: translateY(-2px);
  border-color: var(--md-typeset-a-color, #ffffff);
}

.cp-icon {
  font-size: 1.1rem;
  line-height: 1;
  margin-bottom: 0.65rem;
  opacity: 0.9;
}

.cp-title {
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.cp-text {
  font-size: 0.92rem;
  line-height: 1.45;
  color: var(--md-default-fg-color--light, #ffffff);
}

.cp-gif {
  margin-bottom: 0.65rem;
  text-align: center;
}

.cp-gif img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>



## Approach

- Graph-based modeling  
- Pattern extraction  
- Rule-based systems  
- Computational representation  

## Objective

Translate urban complexity into structured models for analysis, comparison, and simulation.