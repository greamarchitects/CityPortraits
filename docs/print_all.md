---
hide:
  - navigation
  - toc
---

# CityPortraits – Full Document


## Index

CityPortraits is a framework for reconstructing and analyzing urban systems through spatial data, historical sources, and computational models.

## Purpose

Develop a reproducible method to describe and compare cities through their building stock, spatial structure, and historical evolution.

## Framework

<div class="cp-grid">

  <a class="cp-card" href="#methodology-index">
    <div class="cp-icon">◻◻◻ </div>
    <div class="cp-title">Methodology</div>
    <div class="cp-text">Integrated analytical framework combining spatial, documentary, and data-driven processes.</div>
  </a>

  <a class="cp-card" href="#model-index">
    <div class="cp-icon">○○○</div>
    <div class="cp-title">Model</div>
    <div class="cp-text">Structured synthesis layer translating inputs into graphs, patterns, and urban representations.</div>
  </a>

  <a class="cp-card" href="#case-studies-index">
    <div class="cp-icon">△△△</div>
    <div class="cp-title">Case Studies</div>
    <div class="cp-text">Application of the framework to selected cities for comparison and validation.</div>
  </a>

</div>

## Structure

<div class="cp-tree">
  <ul>
    <li>
      <a href="#methodology-index">Methodology</a>
      <ul>
        <li>
          <a href="methodology/written_documentation/">Contextual Analysis</a> 
          <ul>
            <li><a href="methodology/contextual_analysis/historical_archive/">Historical Archive</a></li>
            <li><a href="methodology/contextual_analysis/narrative_studies/">Narrative Studies</a></li>
            <li><a href="#methodology-contextual-analysis-actor-index">Actor</a></li>
          </ul>
        </li>
        <li>
          <a href="#methodology-spatial-analysis-index">Spatial Analysis</a>
          <ul>
            <li><a href="#methodology-spatial-analysis-urban-fabric-index">Urban Fabric</a></li>
            <li><a href="#methodology-spatial-analysis-architecture-index">Architecture</a></li>
          </ul>
        </li>
        <li>
          <a href="#methodology-data-analysis-index">Data Analysis</a>
          <ul>
            <li><a href="#methodology-data-analysis-datasets-index">Datasets</a></li>
            <li><a href="#methodology-data-analysis-calibration-index">Calibration</a></li>
            <li><a href="#methodology-data-analysis-validation-index">Validation</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#model-index">Model</a>
      <ul>
        <li><a href="model/spatial_timeline/">Spatial Timeline</a></li>
        <li><a href="model/graphs/">Graphs</a></li>
        <li><a href="model/patterns/">Patterns</a></li>
      </ul>
    </li>
    <li>
      <a href="#case-studies-index">Case Studies</a>
      <ul>
        <li><a href="case_studies/berat/">Berat</a></li>
        <li><a href="case_studies/durres/">Durres</a></li>
        <!-- <li><a href="case_studies/gjirokaster/">Gjirokaster</a></li> -->
        <!-- <li><a href="case_studies/korce/">Korce</a></li> -->
        <li><a href="case_studies/shkodra/">Shkodra</a></li>
        <li><a href="case_studies/tirana/">Tirana</a></li>
        <!-- <li><a href="case_studies/vlora/">Vlora</a></li> -->
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

<div class='page-break'></div>



## Methodology → Index

<div class="methodology-hero">
  <h2>Framework for constructing comparable city portraits through spatial, documentary, and data-based analysis.</h2>
  <p class="lead">
    The methodology translates heterogeneous sources into structured representations of urban systems, enabling reconstruction, comparison, and interpretation across contexts.
  </p>
</div>

## Insights

<div class="insights-grid">
  <div class="insight-card" onclick="window.location.href='#methodology-contextual-analysis-index'">
    <div class="card-header">
      <h3>Contextual Analysis</h3>
    </div>
    <p>
      Extraction of historical, institutional, and narrative information from archives, publications, and actor networks. Outputs are structured descriptions of periods, decisions, and transformations.
    </p>
  </div>

  <div class="insight-card" onclick="window.location.href='#methodology-spatial-analysis-index'">
    <div class="card-header">
      <h3>Spatial Analysis</h3>
    </div>
    <p>
      Derivation of urban structure from mapped data. Includes morphology, parcel logic, building distribution, and relationships between elements across scales.
    </p>
  </div>

  <div class="insight-card" onclick="window.location.href='#methodology-data-analysis-index'">
    <div class="card-header">
      <h3>Data Analysis</h3>
    </div>
    <p>
      Quantification of attributes such as building types, densities, and distributions. Combines multiple datasets and resolves inconsistencies through alignment and calibration.
    </p>
  </div>
</div>


## Workflow

<div class="workflow-scroll">
  <div class="workflow-card">
    <div class="workflow-card-number">01</div>
    <div class="workflow-card-body">
      <h4>Collection</h4>
      <p>Acquisition of spatial data, written sources, and statistical datasets.</p>
    </div>
  </div>

  <div class="workflow-card">
    <div class="workflow-card-number">02</div>
    <div class="workflow-card-body">
      <h4>Alignment</h4>
      <p>Linking sources through shared categories such as time periods, typologies, and locations.</p>
    </div>
  </div>

  <div class="workflow-card">
    <div class="workflow-card-number">03</div>
    <div class="workflow-card-body">
      <h4>Derivation</h4>
      <p>Extraction of patterns such as typological distributions, spatial structures, and temporal shifts.</p>
    </div>
  </div>

  <div class="workflow-card">
    <div class="workflow-card-number">04</div>
    <div class="workflow-card-body">
      <h4>Synthesis</h4>
      <p>Construction of consistent representations of the city for comparison across regions and time.</p>
    </div>
  </div>
</div>


## Principles

<div class="principles-grid">
  <div class="principle-card">
    <h4>Integration</h4>
    <ul>
      <li>Combine spatial, textual, and statistical sources within a shared structure</li>
      <li>Translate qualitative descriptions into comparable attributes</li>
      <li>Maintain links between scales such as building, block, city, and territory</li>
    </ul>
  </div>

  <div class="principle-card">
    <h4>Validation</h4>
    <ul>
      <li>Check consistency across datasets describing the same phenomena</li>
      <li>Compare derived distributions with known references</li>
      <li>Use historical and spatial constraints to limit implausible results</li>
    </ul>
  </div>

  <div class="principle-card">
    <h4>Traceability</h4>
    <ul>
      <li>Record source, assumptions, and transformation steps for each value</li>
      <li>Allow multiple interpretations where necessary</li>
      <li>Keep intermediate representations accessible</li>
    </ul>
  </div>
</div>

## Objectives

<div class="objectives-summary">
  <div class="objective-item">
    <div class="objective-content">
      <h4>Urban System Reconstruction</h4>
      <p>
        Reconstruct building stock composition, spatial structure, and temporal layers from incomplete and heterogeneous sources.
      </p>
    </div>
  </div>

  <div class="objective-item">
    <div class="objective-content">
      <h4>Comparability</h4>
      <p>
        Enable comparison between cities by expressing them through a shared set of attributes and distributions.
      </p>
    </div>
  </div>

  <div class="objective-item">
    <div class="objective-content">
      <h4>Interpretation</h4>
      <p>
        Provide a basis for explaining how historical processes, planning decisions, and material constraints shape urban form.
      </p>
    </div>
  </div>
</div>

<div class='page-break'></div>



## Methodology → Contextual Analysis → Index

Written documentation supports spatial analysis by interpreting historical, cultural, and narrative sources.

### Historical Archive  
Official records, maps, and archival documents.  
→ [Historical Archive](#methodology-contextual-analysis-historical-archive)  
Media sources reflecting events, discourse, and urban change.  
→ [Newspaper Archives](#methodology-contextual-analysis-newspaper-archives)

### Narrative Studies  
Descriptive accounts and qualitative interpretations of urban life.  
→ [Narrative Studies](#methodology-contextual-analysis-narrative-studies)
Reports, studies, and institutional publications.  
→ [Documentary Research](#methodology-contextual-analysis-documentary-research)


### Actor 
→ [Actor](#methodology-contextual-analysis-actor-index) 
- Architects
- Urban Planners
- Landscape Architects
- Civil Engineers

## Approach

- Archival research  
- Media analysis  
- Literature review  
- Narrative interpretation  

## Objective

Provide context, support spatial findings, and capture the lived and historical dimensions of the city.

<div class='page-break'></div>



## Methodology → Contextual Analysis → Documentary Research



<div class='page-break'></div>



## Methodology → Contextual Analysis → Historical Archive



<div class='page-break'></div>



## Methodology → Contextual Analysis → Narrative Studies



<div class='page-break'></div>



## Methodology → Contextual Analysis → Newspaper Archives



<div class='page-break'></div>



## Methodology → Contextual Analysis → Actor → Index

## Architect

<!-- ID: A-001 | NAME: STRAZIMIRI_GANI | TYPE: ARCHITECT -->
<div class="archive-card">

  <div class="archive-header">
    <div>A-001</div>
    <div>IMAGE</div>
  </div>

  <div class="archive-title">
    Gani Strazimiri
  </div>

  <div class="archive-meta">
    c. 1950s–1980s —  
    <span class="archive-people">role: architect, planner, institutional figure</span>
  </div>

  <div class="archive-image">
    <img src="/greamarchitects/CityPortraits/assets/images/placeholder.jpg" alt="Gani Strazimiri portrait or archival material">
  </div>

  <div class="archive-caption">
    Gani Strazimiri during the period of socialist urban planning in Albania
  </div>

  <ul>
    <li>Key figure in shaping socialist-era urban planning institutions</li>
    <li>Contributed to standardized housing and urban development models</li>
    <li>Worked within central design institutes influencing national projects</li>
  </ul>

  <div class="archive-source">
    Source: AQTN, Tirana
  </div>

</div>


## Urban Planner

<!-- ID: U-001 | NAME: MIHO_KOCO | TYPE: PLANNER -->
<div class="archive-card">

  <div class="archive-header">
    <div>U-001</div>
    <div>PLAN</div>
  </div>

  <div class="archive-title">
    Koço Miho
  </div>

  <div class="archive-meta">
    c. 1950s–1970s —  
    <span class="archive-people">type: planner / urbanist</span>
  </div>

  <div class="archive-image">
    <img src="/greamarchitects/CityPortraits/assets/images/placeholder.jpg" alt="Archival urban plan of Tirana">
  </div>

  <div class="archive-caption">
    Representative socialist-era urban planning scheme (Tirana)
  </div>

  <ul>
    <li>Contributed to centralized urban planning framework in post-war Albania</li>
    <li>Involved in expansion and structuring of Tirana under socialist model</li>
    <li>Worked within state institutes shaping regulatory and master plans</li>
  </ul>

  <div class="archive-source">
    Source: AQTN, Tirana
  </div>

</div>


## Landscape Architect

<!-- ID: L-001 | NAME: THOMAI_THOMA | TYPE: LANDSCAPE -->
<div class="archive-card">

  <div class="archive-header">
    <div>L-001</div>
    <div>LANDSCAPE</div>
  </div>

  <div class="archive-title">
    Thoma Thomai
  </div>

  <div class="archive-meta">
    c. 1960s–1980s —  
    <span class="archive-people">type: horticulturist / landscape-related</span>
  </div>

  <div class="archive-image">
    <img src="/greamarchitects/CityPortraits/assets/images/placeholder.jpg" alt="Historic park or greenery system in Tirana">
  </div>

  <div class="archive-caption">
    Development of public greenery and planted systems in Tirana
  </div>

  <ul>
    <li>Contributed to development of urban green systems and parks</li>
    <li>Worked on integration of vegetation into urban planning frameworks</li>
    <li>Influenced agricultural and territorial planting strategies</li>
  </ul>

  <div class="archive-source">
    Source: Agricultural and planning archives, Tirana
  </div>

</div>


## Civil Engineer

<!-- ID: E-001 | NAME: TOPTANI_FERDINAND | TYPE: ENGINEER -->
<div class="archive-card">

  <div class="archive-header">
    <div>E-001</div>
    <div>INFRASTRUCTURE</div>
  </div>

  <div class="archive-title">
    Ferdinand Toptani
  </div>

  <div class="archive-meta">
    c. 1960s–1980s —  
    <span class="archive-people">type: civil engineer</span>
  </div>

  <div class="archive-image">
    <img src="/greamarchitects/CityPortraits/assets/images/placeholder.jpg" alt="Infrastructure works in Albania (roads, bridges)">
  </div>

  <div class="archive-caption">
    Engineering works contributing to national infrastructure systems
  </div>

  <ul>
    <li>Worked on infrastructure and structural engineering systems</li>
    <li>Contributed to development of transport and construction networks</li>
    <li>Part of institutional engineering framework in socialist Albania</li>
  </ul>

  <div class="archive-source">
    Source: AQTN, Tirana
  </div>

</div>

<div class='page-break'></div>



## Methodology → Data Analysis → Index

Data analysis structures and quantifies urban information to support spatial interpretation and modeling.

### Datasets  
Sources used to describe and model the urban system.  
→ [Datasets](#methodology-data-analysis-datasets-index) · [GDE](#methodology-data-analysis-datasets-gde) · [GHSL](#methodology-data-analysis-datasets-ghsl) · [ASIG](#methodology-data-analysis-datasets-asig) · [OSM](#methodology-data-analysis-datasets-osm) · [Census](#methodology-data-analysis-datasets-census)

### Calibration  
Adjustment of data and models to align with known conditions.  
→ [Calibration](#methodology-data-analysis-calibration-index)

### Validation  
Evaluation of results against reference data and observations.  
→ [Validation](#methodology-data-analysis-validation-index)

## Approach

- Data integration  
- Statistical analysis  
- Model calibration  
- Cross-source validation  

## Objective

Ensure consistency, reliability, and comparability of data-driven urban insights.

<div class='page-break'></div>



## Methodology → Data Analysis → Calibration → Index



<div class='page-break'></div>



## Methodology → Data Analysis → Datasets → Index

This section documents the primary data sources used for urban analysis and modeling in the CityPortraits project.

## Dataset Categories

### Spatial Data
- **[GHSL](#methodology-data-analysis-datasets-ghsl)** - Global Human Settlement Layer: Built-up area mapping and population density
- **[OSM](#methodology-data-analysis-datasets-osm)** - OpenStreetMap: Street networks, points of interest, and land use classification

### Administrative Data
- **[ASIG](#methodology-data-analysis-datasets-asig)** - Albanian Spatial Information Gateway: Official spatial data and administrative boundaries
- **[GDE](#methodology-data-analysis-datasets-gde)** - Geographic Data Environment: Albanian national geospatial data platform

### Socio-Economic Data
- **[Census](#methodology-data-analysis-datasets-census)** - Population and housing statistics from national census data

<div class='page-break'></div>



## Methodology → Data Analysis → Datasets → Asig

Albanian Spatial Information Gateway provides centralized access to spatial data and geographic information systems for Albania.

## Data Content

| Category | Content | Examples |
|----------|---------|----------|
| **Base Maps** | Topographic and reference mapping | 1:25,000 topographic maps, orthophotos, satellite imagery |
| **Geodetic Network** | Coordinate systems and reference points | GNSS stations, geodetic control points, coordinate transformations |
| **Environmental Monitoring** | Natural resource and environmental data | Protected areas, biodiversity zones, environmental monitoring sites |
| **Socio-Economic Data** | Demographic and economic spatial data | Population distribution, economic indicators, social infrastructure |
| **Infrastructure Assets** | Public infrastructure and utilities | Power lines, water networks, telecommunication infrastructure |

## Applications in CityPortraits

| Application Area | Use Cases |
|------------------|-----------|
| **Base Mapping** | Reference layer creation, coordinate system standardization, spatial reference establishment |
| **Environmental Assessment** | Biodiversity mapping, protected area analysis, environmental impact evaluation |
| **Infrastructure Analysis** | Utility network mapping, infrastructure asset management, service coverage analysis |
| **Socio-Economic Mapping** | Demographic analysis, economic development mapping, social service accessibility |
| **Geospatial Integration** | Data harmonization, coordinate system alignment, multi-source data integration |

## Data Sources

- [Albanian Spatial Information Gateway](https://asig.gov.al/)

<div class='page-break'></div>



## Methodology → Data Analysis → Datasets → Census

National census data provides demographic, housing, and socio-economic statistics for population analysis and urban planning.

## Data Content

| Category | Content | Examples |
|----------|---------|----------|
| **Population Statistics** | Demographic counts and distributions | Age groups, gender ratios, population density by administrative unit |
| **Housing Data** | Residential building and occupancy information | Housing types, occupancy rates, building conditions, household sizes |
| **Economic Indicators** | Employment and income data | Labor force participation, occupation types, income levels, economic activity |
| **Education Levels** | Educational attainment and literacy | School attendance, educational qualifications, literacy rates |
| **Migration Patterns** | Population movement and mobility | Internal migration, urban-rural flows, international migration |
| **Household Characteristics** | Family structure and living conditions | Family size, household composition, access to services |

## Applications in CityPortraits

| Application Area | Use Cases |
|------------------|-----------|
| **Demographic Analysis** | Population distribution mapping, age structure analysis, gender balance assessment |
| **Housing Market Analysis** | Housing density mapping, residential development patterns, housing quality assessment |
| **Socio-Economic Planning** | Economic activity mapping, employment center identification, income distribution analysis |
| **Service Planning** | Education facility planning, healthcare access analysis, infrastructure demand assessment |
| **Urban Growth Modeling** | Population growth projections, migration impact analysis, settlement pattern prediction |
| **Equity Analysis** | Social service accessibility, economic disparity mapping, community needs assessment |

## Data Sources

- [National Institute of Statistics Albania](https://www.instat.gov.al/)

<div class='page-break'></div>



## Methodology → Data Analysis → Datasets → Gde

Global Dynamic Exposure project provides building-by-building exposure models for risk monitoring in natural catastrophes.

## Data Content

| Category | Content | Examples |
|----------|---------|----------|
| **Building Footprints** | Individual building geometries | Residential, commercial, and public buildings |
| **Building Properties** | Structural and occupancy attributes | Building type, height, construction material, occupancy class |
| **Land Use Data** | CORINE land cover and urban classification | Urban fabric, agricultural land, forest areas |
| **Administrative Divisions** | Qark, municipality, and commune boundaries | Tirana municipality, Berat district, administrative units |
| **Infrastructure Networks** | Transportation and utility systems | Road networks, power lines, water systems |
| **Geographic Features** | Natural and man-made features | Rivers, elevation data, protected areas |

## Exposure Indicators

| Indicator Type | Data Sources | Applications |
|----------------|--------------|--------------|
| **Building Exposure** | Footprints, properties, occupancy | Earthquake risk assessment, flood vulnerability |
| **Vulnerability Assessment** | Construction type, age, resilience measures | Structural vulnerability mapping, retrofit prioritization |
| **Urban Structure** | Land use, density, connectivity | City morphology analysis, development pattern monitoring |
| **Dynamic Monitoring** | Temporal changes, urban growth | Risk evolution tracking, climate adaptation planning |

## Data Sources

- [GDE Data Explorer](https://docs.dynamicexposure.org/gde/)
- [Global Dynamic Exposure](https://docs.dynamicexposure.org/)

## Integration

GDE data provides the administrative framework for integrating OSM street data and GHSL settlement information.

<div class='page-break'></div>



## Methodology → Data Analysis → Datasets → Ghsl

Global Human Settlement Layer provides global built-up area mapping and population density data for urban analysis.

## Data Content

| Category | Content | Examples |
|----------|---------|----------|
| **Built-up Areas** | Urban and rural settlement mapping | City centers, suburban areas, rural settlements |
| **Population Density** | Gridded population estimates | High-density urban cores, medium-density suburbs |
| **Built-up Volume** | 3D building height and volume data | High-rise districts, low-rise residential areas |
| **Settlement Classification** | Urban/rural typology | Large urban areas, small towns, rural settlements |
| **Temporal Evolution** | Historical settlement changes | Urban expansion patterns, growth trajectories |

## Applications in CityPortraits

| Application Area | Use Cases |
|------------------|-----------|
| **Urban Extent Mapping** | City boundary delineation, urban growth monitoring, sprawl analysis |
| **Population Distribution** | Demographic density mapping, urban population estimation, settlement patterns |
| **Built Environment Analysis** | Building density assessment, urban morphology studies, vertical development analysis |
| **Change Detection** | Historical urban transformation, development trend analysis, land use change monitoring |

## Data Sources

- [GHSL Data Portal](https://ghsl.jrc.ec.europa.eu/)
- [European Commission JRC](https://ec.europa.eu/jrc/en/research-topic/global-human-settlement)
- [Global Human Settlement Layer](https://ghsl.jrc.ec.europa.eu/download.php)

## Integration

GHSL data is combined with OSM for street network analysis and census data for demographic validation.

<div class='page-break'></div>



## Methodology → Data Analysis → Datasets → Osm

OpenStreetMap provides street networks, points of interest, and land use data for Albanian cities.

## Data Content

| Category | Content | Examples |
|----------|---------|----------|
| **Street Networks** | Road infrastructure and transportation | Highways, streets, bridges, pedestrian paths |
| **Points of Interest** | Public and commercial facilities | Schools, hospitals, shops, government buildings |
| **Land Use** | Urban zoning and development types | Residential areas, commercial zones, industrial sites |
| **Green Spaces** | Parks and recreational areas | City parks, gardens, sports facilities |
| **Transportation** | Public transit and mobility | Bus stops, railway stations, parking areas |

## Applications in CityPortraits

| Application Area | Use Cases |
|------------------|-----------|
| **Urban Morphology** | Street pattern analysis, urban grain identification, block structure assessment |
| **Accessibility Analysis** | Service coverage mapping, transportation network evaluation, pedestrian accessibility |
| **Economic Indicators** | Commercial density mapping, business concentration analysis, economic activity assessment |
| **Land Use Planning** | Mixed-use development evaluation, zoning analysis, urban growth monitoring |

## Data Sources

- [OpenStreetMap Albania](https://www.openstreetmap.org/relation/53292)
- [Geofabrik Albania Extracts](https://download.geofabrik.de/europe/albania.html)
- [OSMnx Library](https://osmnx.readthedocs.io/)

## Integration

OSM data is combined with GHSL for built-up area analysis and census data for demographic correlations.

<div class='page-break'></div>



## Methodology → Data Analysis → Validation → Index



<div class='page-break'></div>



## Methodology → Spatial Analysis → Index

Spatial analysis examines the city as a layered system shaped by history, planning, and architecture.

### Urban Fabric  
Block structure, street networks, and spatial patterns.  
→ [Urban Fabric](#methodology-spatial-analysis-urban-fabric-index) · [Morphology](#methodology-spatial-analysis-urban-fabric-morphology) · [Emergent Patterns](#methodology-spatial-analysis-urban-fabric-emergent-patterns)

### Architecture
Building-level analysis of typology, construction, and classification.  
→ [Architecture](#methodology-spatial-analysis-architecture-index) · [Typology](#methodology-spatial-analysis-architecture-building-typology) · [Construction](#methodology-spatial-analysis-architecture-building-construction) · [Taxonomy](#methodology-spatial-analysis-architecture-building-taxonomy)

## Approach

- Geospatial data (GIS, cadastral)  
- Historical sources  
- Computational methods  
- Architectural analysis  

## Objective

Reveal urban structure, link past and present, and support comparative city analysis.

<div class='page-break'></div>



## Methodology → Spatial Analysis → Architecture → Index



<div class='page-break'></div>



## Methodology → Spatial Analysis → Architecture → Building Construction



<div class='page-break'></div>



## Methodology → Spatial Analysis → Architecture → Building Taxonomy



<div class='page-break'></div>



## Methodology → Spatial Analysis → Architecture → Building Typology



<div class='page-break'></div>



## Methodology → Spatial Analysis → Urban Fabric → Index



<div class='page-break'></div>



## Methodology → Spatial Analysis → Urban Fabric → Cadastral Maps



<div class='page-break'></div>



## Methodology → Spatial Analysis → Urban Fabric → Emergent Patterns



<div class='page-break'></div>



## Methodology → Spatial Analysis → Urban Fabric → Morphology



<div class='page-break'></div>



## Model → Index

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
→ [Graphs](#model-graphs)

<div class="cp-graph-shell">
  <div class="cp-graph-toolbar">
    <button id="graph-reset-btn" type="button">Reset view</button>
  </div>
  <div id="cy-network"></div>
  <div class="cp-graph-note">
    Click a node to focus its neighborhood. Click the background or Reset view to return.
  </div>
</div>

This is a sample network graph showing relationships between actors, events, and places. The actual graph will be rendered using the data from `events.json`, `actors.json`, and `places.json`.


### Patterns
Identification and abstraction of recurring spatial and architectural configurations.  
→ [Patterns](#model-patterns)


<div class="cp-grid">

  <div class="cp-card">
    <div class="cp-gif">
      <img src="/greamarchitects/CityPortraits/assets/images/placeholder.gif" alt="Morphological Patterns" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div class="cp-title">Morphological</div>
    <div class="cp-text">Analysis of urban form, street patterns, building density, and spatial structure.</div>
  </div>

  <div class="cp-card">
    <div class="cp-gif">
      <img src="/greamarchitects/CityPortraits/assets/images/placeholder.gif" alt="Architectural Patterns" style="width: 100%; height: auto; border-radius: 8px;">
    </div>
    <div class="cp-title">Architectural</div>
    <div class="cp-text">Study of building typologies, construction styles, and architectural evolution.</div>
  </div>

  <div class="cp-card">
    <div class="cp-gif">
      <img src="/greamarchitects/CityPortraits/assets/images/placeholder.gif" alt="Functional Patterns" style="width: 100%; height: auto; border-radius: 8px;">
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

<div class='page-break'></div>



## Model → Graphs



<div class='page-break'></div>



## Model → Patterns



<div class='page-break'></div>



## Model → Spatial Timeline



<div class='page-break'></div>



## Case Studies → Index



<div class='page-break'></div>



## Case Studies → Berat.Ipynb

- ...
- ...
- ...

<br><br>


```python

```

<div class='page-break'></div>



## Case Studies → Durres.Ipynb

- ...
- ...
- ...

<br><br>


```python

```

<div class='page-break'></div>



## Case Studies → Shkodra.Ipynb

- ...
- ...
- ...

<br><br>


```python

```

<div class='page-break'></div>



## Case Studies → Tirana.Ipynb

- ...
- ...
- ...

<br><br>

## 1. Base Map Layers

The different data sources used for the analysis are the following:

- OpenStreetMap
- Overture
- GDE


```python
import pandas as pd
```

<br><br>

## 2. Statistical Layers

- Global Exposure Model
- GHSL: Algorithm: Shape to Point
- Census


```python

```


<br><br>

## 3. Archival Data
- Events
- Wikipedia
- World Imagery Wayback



```python

```

<br><br>
## 4. Clustering 
- Rule based/event-based suggestions
- Algorithm: Spatial Interpolation


```python

```

<br><br>

## 5. Building Stock Scenarios
- Algorithm: Filter based on archival data
- Redistribute



```python

```


```python

```

<div class='page-break'></div>



## About → Index

