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