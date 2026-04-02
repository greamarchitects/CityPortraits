# CityPortraits

[![MkDocs](https://img.shields.io/badge/MkDocs-2.0-blue)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-9.0-blue)](https://squidfunk.github.io/mkdocs-material/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive urban analysis framework that creates detailed city portraits through the integration of spatial, documentary, and data-driven methodologies. This project showcases architectural heritage and urban development patterns across Albanian cities.

## 🌟 Overview

CityPortraits bridges traditional architectural analysis with modern data science to reveal hidden patterns and relationships in urban systems. The framework combines:

- **Contextual Analysis**: Historical and narrative sources translated into structured knowledge
- **Spatial Analysis**: Geometric and relational structures derived from mapped data
- **Data Analysis**: Quantification and validation across multiple urban datasets

## Methodology

Our analytical pipeline integrates three core approaches:

### 1. Contextual Analysis
- Documentary research and archival studies
- Historical narrative analysis
- Actor mapping and stakeholder identification
- Newspaper archives and period documentation

### 2. Spatial Analysis
- Urban morphology and architectural taxonomy
- Cadastral mapping and building typology
- Morphological patterns and emergent structures
- Geographic relationships and spatial networks

### 3. Data Analysis
- Multi-source dataset integration (OSM, GHSL, GDE, ASIG, Census)
- Statistical validation and cross-dataset consistency
- Calibration and quality assurance
- Quantitative urban attribute analysis

## Case Studies

The framework has been applied to major Albanian cities:

- **Tirana**: Capital city urban development patterns
- **Berat**: UNESCO World Heritage Site analysis
- **Durrës**: Coastal city morphological studies
- **Gjirokastër**: Historic city preservation analysis
- **Korçë**: Regional center urban dynamics
- **Shkodër**: Northern city development patterns
- **Vlorë**: Southern coastal city analysis

## 📊 Data Sources

### Primary Datasets
- **OpenStreetMap (OSM)**: Street networks, building footprints, POI data
- **Global Human Settlement Layer (GHSL)**: Population density and built-up areas
- **Global Data Explorer (GDE)**: Socio-economic indicators
- **Albanian State Inspectorate of Geology (ASIG)**: Geological and environmental data
- **Population Census**: Demographic and socio-economic statistics

### Derived Analysis
- Urban pattern recognition and classification
- Spatial relationship modeling
- Temporal evolution tracking
- Comparative urban metrics

## 🛠️ Technical Implementation

### Framework Components
- **MkDocs**: Static site generation with Material theme
- **JavaScript Libraries**: Cytoscape (network graphs), Leaflet (maps), Mermaid (diagrams)
- **Data Processing**: JSON-based data structures for actors, events, and places
- **Interactive Visualizations**: Timeline maps, network graphs, and pattern displays

### Project Structure
```
CityPortraits/
├── docs/                    # MkDocs source files
│   ├── assets/data/        # JSON data files
│   ├── javascripts/        # Interactive components
│   ├── stylesheets/        # Custom CSS styling
│   ├── methodology/        # Analytical framework docs
│   ├── model/             # Urban modeling results
│   └── case_studies/      # City-specific analyses
├── mkdocs.yml             # Site configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- pip package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/greamarchitects/CityPortraits.git
   cd CityPortraits
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Serve locally**
   ```bash
   mkdocs serve
   ```

5. **Open in browser**
   ```
   http://127.0.0.1:8000
   ```

### Development

- **Build for production**: `mkdocs build`
- **Deploy**: `mkdocs gh-deploy`
- **Add content**: Edit Markdown files in `docs/` directory
- **Customize styling**: Modify `docs/stylesheets/extra.css`

## 📈 Key Features

### Interactive Components
- **Timeline Maps**: Historical event visualization with Leaflet
- **Network Graphs**: Actor-event-place relationships with Cytoscape
- **Urban Patterns**: GIF animations of morphological evolution
- **Responsive Design**: Mobile-friendly interface

### Analytical Tools
- **Multi-scale Analysis**: From building to territorial levels
- **Cross-temporal Comparison**: Historical vs. contemporary patterns
- **Data Validation**: Statistical consistency checking
- **Pattern Recognition**: Automated urban morphology classification

## Objectives

1. **Urban System Reconstruction**: Reconstruct comprehensive urban systems from fragmented data
2. **Cross-contextual Comparison**: Enable meaningful comparison across geographical contexts
3. **Evidence-based Insights**: Generate actionable insights for urban planning and heritage conservation

## Contributing

We welcome contributions to improve the framework and expand the analysis to additional cities.

### Ways to Contribute
- Add new case studies
- Improve data processing pipelines
- Enhance visualization components
- Expand methodological documentation
- Report bugs and suggest features

### Development Guidelines
- Follow MkDocs and Material theme conventions
- Maintain data format consistency
- Ensure responsive design compatibility
- Document new features and methodologies

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GREAM Architects**: For providing the analytical framework and case study data
- **Summer School DOCOMOMO**: For the collaborative research environment
- **Open Data Community**: For providing accessible urban datasets
- **Material for MkDocs**: For the excellent documentation framework

## Contact

**GREAM Architects**
- Website: [greamarchitects.com](https://greamarchitects.com)
- Project: CityPortraits Urban Analysis Framework
- Date: April 2026

---

*This framework represents a comprehensive approach to urban analysis, combining traditional architectural expertise with modern data science methodologies to create meaningful insights for urban planning and heritage conservation.*