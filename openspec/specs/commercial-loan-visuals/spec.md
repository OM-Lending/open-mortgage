# commercial-loan-visuals Specification

## Purpose
TBD - created by archiving change refine-service-pages. Update Purpose after archive.
## Requirements
### Requirement: Display Business-Relevant Hero Image
The commercial loan service page MUST display a hero image that represents commercial/business environments such as office buildings, factories, or industrial facilities, replacing the current generic workspace image.

#### Scenario: User views commercial loan page hero section
**Given** a user navigates to `/en/services/commercial-loan` or `/zh/services/commercial-loan`  
**When** the hero section loads  
**Then** the hero image MUST display professional commercial property imagery  
**And** the image MUST be relevant to business contexts (e.g., office building exterior, factory, warehouse, industrial facility)  
**And** the image MUST maintain the existing rounded corners and shadow styling  
**And** the image alt text MUST accurately describe the new image content

#### Scenario: Hero image performance and quality
**Given** the commercial loan page loads  
**When** the hero image is requested  
**Then** the image MUST load with priority (existing behavior)  
**And** the image MUST be optimized for web display (1200px width, 80% quality or better)  
**And** the image MUST display correctly across all device sizes via responsive sizing

