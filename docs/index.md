---
hide:
  - navigation
  - toc
---

# CityPortraits

CityPortraits is a framework for reconstructing and analyzing urban systems through spatial data, historical sources, and computational models.

## Purpose

Develop a reproducible method to describe and compare cities through their building stock, spatial structure, and historical evolution.

## Framework

<div class="cp-grid">

  <a class="cp-card" href="methodology/">
    <div class="cp-icon">◻◻◻ </div>
    <div class="cp-title">Methodology</div>
    <div class="cp-text">Integrated analytical framework combining spatial, documentary, and data-driven processes.</div>
  </a>

  <a class="cp-card" href="model/">
    <div class="cp-icon">○○○</div>
    <div class="cp-title">Model</div>
    <div class="cp-text">Structured synthesis layer translating inputs into graphs, patterns, and urban representations.</div>
  </a>

  <a class="cp-card" href="case_studies/">
    <div class="cp-icon">△△△</div>
    <div class="cp-title">Case Studies</div>
    <div class="cp-text">Application of the framework to selected cities for comparison and validation.</div>
  </a>

</div>

## Structure

<div class="cp-tree">
  <ul>
    <li>
      <a href="methodology/">Methodology</a>
      <ul>
        <li>
          <a href="methodology/written_documentation/">Contextual Analysis</a> 
          <ul>
            <li><a href="methodology/contextual_analysis/historical_archive/">Historical Archive</a></li>
            <li><a href="methodology/contextual_analysis/narrative_studies/">Narrative Studies</a></li>
            <li><a href="methodology/contextual_analysis/actor/">Actor</a></li>
          </ul>
        </li>
        <li>
          <a href="methodology/spatial_analysis/">Spatial Analysis</a>
          <ul>
            <li><a href="methodology/spatial_analysis/urban_fabric/">Urban Fabric</a></li>
            <li><a href="methodology/spatial_analysis/architecture/">Architecture</a></li>
          </ul>
        </li>
        <li>
          <a href="methodology/data_analysis/">Data Analysis</a>
          <ul>
            <li><a href="methodology/data_analysis/datasets/">Datasets</a></li>
            <li><a href="methodology/data_analysis/calibration/">Calibration</a></li>
            <li><a href="methodology/data_analysis/validation/">Validation</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="model/">Model</a>
      <ul>
        <li><a href="model/spatial_timeline/">Spatial Timeline</a></li>
        <li><a href="model/graphs/">Graphs</a></li>
        <li><a href="model/patterns/">Patterns</a></li>
      </ul>
    </li>
    <li>
      <a href="case_studies/">Case Studies</a>
      <ul>
        <!-- <li><a href="case_studies/berat/">Berat</a></li> -->
        <li><a href="case_studies/durres/">Durres</a></li>
        <!-- <li><a href="case_studies/gjirokaster/">Gjirokaster</a></li>
        <li><a href="case_studies/korce/">Korce</a></li>
        <li><a href="case_studies/shkoder/">Shkoder</a></li> -->
        <li><a href="case_studies/tirana/">Tirana</a></li>
        <li><a href="case_studies/vlora/">Vlora</a></li>
      </ul>
    </li>
  </ul>
</div>


## Perspective

Further development of the framework will focus on extending city coverage, refining classification systems, strengthening cross-source reconciliation, and improving reproducible generation of urban scenarios.


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

.cp-section {
  margin-top: 1.5rem;
}

.cp-tree {
  padding: 1rem 1.1rem;
  border: 1px solid var(--md-default-fg-color--lightest, #ffffff);
  border-radius: 12px;
  background: var(--md-default-bg-color);
  margin: 0.75rem 0 1.5rem 0;
}

.cp-tree ul {
  list-style: none;
  margin: 0;
  padding-left: 1rem;
}

.cp-tree > ul {
  padding-left: 0.2rem;
}

.cp-tree li {
  position: relative;
  margin: 0.45rem 0;
  padding-left: 1rem;
  line-height: 1.5;
}

.cp-tree li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.8em;
  width: 0.65rem;
  border-top: 1px solid var(--md-default-fg-color--lightest, #ffffff);
}

.cp-tree li::after {
  content: "";
  position: absolute;
  left: 0;
  top: -0.55rem;
  bottom: 0.7rem;
  border-left: 1px solid var(--md-default-fg-color--lightest, #ffffff);
}

.cp-tree li:last-child::after {
  bottom: 0.8em;
}

.cp-tree a {
  text-decoration: none;
  font-weight: 500;
}
    </style>