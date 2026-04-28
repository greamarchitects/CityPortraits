# Spatial Analysis

interprets the city as a layered system structured by historical evolution, planning frameworks, and architectural form.

<section class="dashboard-grid spatial-dashboard">

  <!-- SPATIAL PARAMETERS -->
  <article class="dashboard-card"
    id="card-spatial-parameters"
    data-category="core"
    data-type="spatial-parameters"
    data-tags="density distance parcel building network edge fragmentation">

    <h3>Spatial Parameters</h3>
    <p>Measurable geometric and topological properties of urban space.</p>

    <ul>
      <li data-key="density">Density <span>FAR · coverage ratio · units/ha</span></li>
      <li data-key="distance">Distance <span>euclidean · network · nearest neighbor</span></li>
      <li data-key="parcel_geometry">Parcel geometry <span>area · aspect ratio · frontage · depth</span></li>
      <li data-key="building_geometry">Building geometry <span>footprint · height · volume · compactness</span></li>
      <li data-key="network_geometry">Network geometry <span>intersection density · centrality · length</span></li>
      <li data-key="edge_fragmentation">Edge / fragmentation <span>patch size · edge density · continuity</span></li>
    </ul>

    <a href="#spatial-parameters">Open module →</a>
  </article>


  <!-- CONSTRAINTS -->
  <article class="dashboard-card"
    id="card-constraints"
    data-category="logic"
    data-type="constraints"
    data-tags="morphological discretization infrastructure regulatory">

    <h3>Constraints</h3>
    <p>Rules limiting or guiding spatial configuration and transformation.</p>

    <ul>
      <li data-key="morphological">Morphological <span>typology · geometry · network structure</span></li>
      <li data-key="discretization">Discretization <span>thresholds · buffers · classification rules</span></li>
      <li data-key="infrastructure_capacity">Infrastructure <span>transport · utilities · accessibility</span></li>
      <li data-key="regulatory">Regulatory <span>zoning · codes · planning policies</span></li>
    </ul>

    <a href="#constraints">Open module →</a>
  </article>


  <!-- INTERFACES -->
  <article class="dashboard-card"
    id="card-interfaces"
    data-category="interpretation"
    data-type="interfaces"
    data-tags="reasoning relationships comparative retrieval evolution documentation synthesis heuristic catalogue">

    <h3>Interfaces</h3>
    <p>Link analytical results with interpretation, comparison, and synthesis.</p>

    <ul>
      <li data-key="reasoning">Reasoning <span>rule logic · inference · decision paths</span></li>
      <li data-key="relationships">Relationships <span>dependencies · correlations · links</span></li>
      <li data-key="comparative">Comparative <span>cross-city · cross-scale analysis</span></li>
      <li data-key="retrieval">Retrieval <span>data extraction · querying · indexing</span></li>
      <li data-key="evolution">Evolution <span>temporal change · growth trajectories</span></li>
      <li data-key="documentation">Documentation <span>sources · traceability · metadata</span></li>
      <li data-key="synthesis">Synthesis <span>aggregation · abstraction · modeling</span></li>
      <li data-key="heuristic">Heuristic <span>rules of thumb · expert logic</span></li>
      <li data-key="catalogue">Catalogue <span>typologies · pattern libraries</span></li>
    </ul>

    <a href="#interfaces">Open module →</a>
  </article>


  <!-- SPATIAL INTERPOLATION -->
  <article class="dashboard-card"
    id="card-spatial-interpolation"
    data-category="methods"
    data-type="spatial-interpolation"
    data-tags="rule-based geostatistical discrete redistribution local diffusion">

    <h3>Spatial Interpolation</h3>
    <p>Methods for estimating and distributing spatial values.</p>

    <ul>
      <li data-key="rule_based">Rule-based <span>deterministic assignment</span></li>
      <li data-key="geostatistical">Geostatistical <span>kriging · spatial statistics</span></li>
      <li data-key="discrete_assignment">Discrete <span>zonal allocation · grid assignment</span></li>
      <li data-key="redistribution">Redistribution <span>rebalancing · scaling</span></li>
      <li data-key="local_averaging">Local averaging <span>neighborhood smoothing</span></li>
      <li data-key="graph_diffusion">Graph diffusion <span>network propagation</span></li>
    </ul>

    <a href="#processing-methods">Open module →</a>
  </article>


  <!-- RULE-BASED ADJUSTMENTS -->
  <article class="dashboard-card"
    id="card-rule-based-adjustments"
    data-category="methods"
    data-type="rule-based-adjustments"
    data-tags="threshold conditional topology morphology temporal correction aggregation constraint similarity">

    <h3>Rule-Based Adjustments</h3>
    <p>Logical operations refining spatial outputs under constraints.</p>

    <ul>
      <li data-key="threshold">Threshold <span>cut-offs · classification limits</span></li>
      <li data-key="conditional">Conditional <span>if–then logic · filters</span></li>
      <li data-key="topological">Topological <span>adjacency · connectivity</span></li>
      <li data-key="morphological">Morphological <span>shape-based transformations</span></li>
      <li data-key="temporal">Temporal <span>time-based rules · sequencing</span></li>
      <li data-key="correction">Correction <span>bias adjustment · normalization</span></li>
      <li data-key="aggregation">Aggregation <span>grouping · merging</span></li>
      <li data-key="constraint_based">Constraint-based <span>rule enforcement</span></li>
      <li data-key="similarity">Similarity <span>pattern matching · clustering input</span></li>
    </ul>

    <a href="#processing-methods">Open module →</a>
  </article>


  <!-- CLUSTER -->
  <article class="dashboard-card"
    id="card-cluster"
    data-category="methods"
    data-type="cluster"
    data-tags="dbscan kmeans pam agglomerative skater redcap louvain kde gmm">

    <h3>Clustering</h3>
    <p>Grouping spatial units based on similarity and structure.</p>

    <ul>
      <li data-key="density_dbscan">Density <span>DBSCAN</span></li>
      <li data-key="distance_kmeans">Partitioning <span>K-means · PAM</span></li>
      <li data-key="hierarchical">Hierarchical <span>Agglomerative</span></li>
      <li data-key="spatially_constrained">Spatial <span>SKATER · REDCAP</span></li>
      <li data-key="network">Network <span>Louvain</span></li>
      <li data-key="hotspot">Hotspot <span>Gi* · KDE</span></li>
      <li data-key="model_based">Model-based <span>GMM</span></li>
    </ul>

    <a href="#processing-methods">Open module →</a>
  </article>


  <!-- PATTERNS -->
  <article class="dashboard-card"
    id="card-patterns"
    data-category="interpretation"
    data-type="patterns"
    data-tags="linear dispersed compact transformational geometric irregular">

    <h3>Patterns</h3>
    <p>Urban form structures derived from spatial metrics and clustering.</p>

    <ul>
      <li data-key="linear">Linear <span>corridor · ribbon</span></li>
      <li data-key="dispersed">Dispersed <span>sprawl · leapfrog</span></li>
      <li data-key="compact">Compact <span>clustered · infill</span></li>
      <li data-key="transformational">Transformational <span>subdivision · densification</span></li>
      <li data-key="geometric">Geometric <span>grid · radial</span></li>
      <li data-key="irregular">Irregular <span>organic · fragmented · patchwork</span></li>
    </ul>

    <a href="#spatial-patterns">Open module →</a>
  </article>

</section>

---

## Modules

### <span id="spatial-parameters"></span>Spatial Parameters
Measurable geometric and topological properties describing urban space.

- **Density** — floor area ratio (FAR), building coverage ratio (BCR), units per hectare  
- **Distance** — Euclidean distance, network distance, nearest-neighbor metrics  
- **Parcel Geometry** — area, aspect ratio, frontage, depth  
- **Building Geometry** — footprint area, height, volume, compactness  
- **Network Geometry** — intersection density, street length, centrality measures  
- **Edge / Fragmentation** — patch size, edge density, spatial continuity  


---

### <span id="constraints"></span>Constraints
Rules and limitations governing spatial configuration and transformation.

- **Morphological** — typology constraints, geometric compatibility, network structure  
- **Discretization** — thresholds, buffers, classification boundaries  
- **Infrastructure Capacity** — transport access, service provision, digital infrastructure  
- **Regulatory** — zoning rules, building codes, planning policies  


---

### <span id="interfaces"></span>Interfaces
Link analytical results with interpretation, comparison, and synthesis processes.

- **Reasoning** — rule logic, inference pathways  
- **Relationships** — dependencies and correlations between variables  
- **Comparative** — cross-city and cross-scale analysis  
- **Retrieval** — querying, extraction, indexing of data  
- **Evolution** — temporal change and growth trajectories  
- **Documentation** — source tracking, metadata, traceability  
- **Synthesis** — aggregation, abstraction, model generation  
- **Heuristic** — expert rules and approximations  
- **Catalogue** — typologies, pattern libraries  


---

### <span id="processing-methods"></span>Processing Methods
Methods for estimating, transforming, and organizing spatial data.

#### Spatial Interpolation
- Rule-based assignment  
- Geostatistical methods (e.g. kriging)  
- Discrete spatial allocation  
- Redistribution and scaling  
- Local averaging (neighborhood smoothing)  
- Graph-based diffusion (network propagation)  

#### Rule-Based Adjustments
- Threshold-based filtering  
- Conditional logic (if–then rules)  
- Topological constraints (adjacency, connectivity)  
- Morphological transformations  
- Temporal sequencing  
- Correction and normalization  
- Aggregation (grouping, merging)  
- Constraint-based enforcement  
- Similarity-based adjustment  

#### Clustering
- Density-based (DBSCAN)  
- Partitioning (K-means, K-medoids PAM)  
- Hierarchical (agglomerative)  
- Spatially constrained (SKATER, REDCAP)  
- Network-based (Louvain community detection)  
- Hotspot detection (Getis-Ord Gi*, KDE)  
- Model-based (Gaussian Mixture Models)  


---

### <span id="spatial-patterns"></span>Spatial Patterns
Urban form structures derived from spatial parameters and clustering.

- **Linear** — corridor-based development, ribbon structures  
- **Dispersed** — sprawl, leapfrog development  
- **Compact** — clustered, infill development  
- **Transformational** — subdivision, densification processes  
- **Geometric** — grid-based or radial planning systems  
- **Irregular** — organic, fragmented, patchwork morphologies  

---

## Related Sections

### Urban Fabric  
Block structure, street networks, and spatial patterns  
→ [Urban Fabric](urban_fabric/) · [Morphology](urban_fabric/morphology/) · [Emergent Patterns](urban_fabric/emergent_patterns/)

### Architecture  
Building-level typology and construction systems  
→ [Architecture](architecture/) · [Typology](architecture/building_typology/) · [Construction](architecture/building_construction/) · [Taxonomy](architecture/building_taxonomy/)


---

## Objective

Decode urban structure by linking form, data, and history into a comparable spatial system.