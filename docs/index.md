# CityPortraits

CityPortraits is a framework for reconstructing and analyzing urban systems through spatial data, historical sources, and computational models.

## Purpose

Develop a reproducible method to describe and compare cities through their building stock, spatial structure, and historical evolution.

## Framework

<div class="cp-grid">

  <a class="cp-card" href="methodology/index.md">
    <div class="cp-icon">▣</div>
    <div class="cp-title">Methodology</div>
    <div class="cp-text">Integrated analytical framework combining spatial, documentary, and data-driven processes.</div>
  </a>

  <a class="cp-card" href="model/index.md">
    <div class="cp-icon">◫</div>
    <div class="cp-title">Model</div>
    <div class="cp-text">Structured synthesis layer translating inputs into graphs, patterns, and urban representations.</div>
  </a>

  <a class="cp-card" href="case_studies/index.md">
    <div class="cp-icon">△</div>
    <div class="cp-title">Case Studies</div>
    <div class="cp-text">Application of the framework to selected cities for comparison and validation.</div>
  </a>
</div>

## Structure

<h3>Methodology</h3>

<div class="cp-tree">
  <p>
    <a href="methodology/spatial_analysis/index.md">Spatial Analysis</a><br>
    Spatial primitives, urban form, and pattern detection.<br>
    <a href="methodology/spatial_analysis/cadastral_maps.md">Cadastral Maps</a> ·
    <a href="methodology/spatial_analysis/urban_fabric/index.md">Urban Fabric</a> ·
    <a href="methodology/spatial_analysis/architecture/index.md">Architecture</a>
  </p>

  <p>
    <a href="methodology/written_documentation/index.md">Written Documentation</a><br>
    Historical, archival, and narrative sources translated into structured inputs.<br>
    <a href="methodology/written_documentation/historical_archive.md">Historical Archive</a> ·
    <a href="methodology/written_documentation/newspaper_archives.md">Newspaper Archives</a> ·
    <a href="methodology/written_documentation/documentary_research.md">Documentary Research</a> ·
    <a href="methodology/written_documentation/narrative_studies.md">Narrative Studies</a>
  </p>

  <p>
    <a href="methodology/data_analysis/index.md">Data Analysis</a><br>
    Harmonization, calibration, and validation of heterogeneous urban datasets.<br>
    <a href="methodology/data_analysis/datasets/index.md">Datasets</a> ·
    <a href="methodology/data_analysis/calibration.md">Calibration</a> ·
    <a href="methodology/data_analysis/validation.md">Validation</a>
  </p>
</div>

<h3>Model</h3>

<div class="cp-tree">
  <p>
    <a href="model/graphs.md">Graphs</a><br>
    Relational structures encoding dependencies between spatial elements.
  </p>

  <p>
    <a href="model/patterns.md">Patterns</a><br>
    Recurrent spatial and architectural configurations abstracted for analysis.
  </p>
</div>

<h3>Case Studies</h3>

<div class="cp-tree">
  <p>
    <a href="case_studies/berat.md">Berat</a> ·
    <a href="case_studies/durres.md">Durres</a> ·
    <a href="case_studies/gjirokaster.md">Gjirokaster</a> ·
    <a href="case_studies/korce.md">Korce</a> ·
    <a href="case_studies/shkoder.md">Shkoder</a> ·
    <a href="case_studies/tirana.md">Tirana</a>
  </p>
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
  border: 1px solid var(--md-default-fg-color--lightest, #d9d9d9);
  border-radius: 12px;
  background: var(--md-default-bg-color);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.cp-card:hover {
  transform: translateY(-2px);
  border-color: var(--md-typeset-a-color, #5556bb);
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
  color: var(--md-default-fg-color--light, #354f97);
}

.cp-section {
  margin-top: 1.5rem;
}

.cp-tree {
  padding: 0.9rem 1rem;
  border-left: 2px solid var(--md-default-fg-color--lightest, #6771aa);
  background: color-mix(in srgb, var(--md-default-bg-color) 96%, var(--md-default-fg-color) 4%);
  border-radius: 0 10px 10px 0;
}

.cp-tree ul {
  margin-top: 0.4rem;
}

.cp-tree li {
  margin-bottom: 0.9rem;
}

.cp-tree a {
  font-weight: 500;
  text-decoration: none;
}
</style>
