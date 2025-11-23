
# Express Analytics × Fivetran Partnership
## Full-Stack Developer Assignment - Technical Documentation

---

## Project Overview

This project is a Next.js implementation of the Express Analytics × Fivetran partnership page, developed as part of the Full-Stack Developer assignment. The application features two distinct versions of the partnership page: one adhering to the Express Analytics brand theme and another showcasing a creative, alternative design approach.

### Live Demo
**Vercel Deployment:** https://ea-fivetran-partnership-5e83sh2pj.vercel.app

### Design Reference
**Figma Link (Creative Theme):** https://www.figma.com/design/KfthdUpgkbhix4maCaw3vL/EA-Fivetran?node-id=0-1&t=lDa0SeZLFPst1OKs-1


---

## Website Status Monitor

The application includes a real-time website status monitoring system that checks the availability and performance of specified URLs. This feature provides users with immediate feedback on the operational status of critical websites.

### 1. API Route Overview

The status monitoring functionality is powered by a custom API endpoint that fetches live status information for configured URLs.

**API Endpoint Location:** `/app/api/status/route.ts`

This route implements a GET handler that returns comprehensive status information including:

- **Timestamp:** The exact time when the status check was performed
- **Website List:** All monitored websites and their associated data
- **HTTP Status Code:** The response code returned by each website
- **Reachability Status:** Boolean indicator of whether the site is accessible
- **Response Time:** Performance metric measured in milliseconds

### 2. URL List Definition (SITES Array)

All websites designated for monitoring are stored in a simple, maintainable array of objects. This configuration-driven approach allows for easy expansion of the monitoring list.
```typescript
const SITES = [
  { id: "express", url: "https://expressanalytics.com" },
  { id: "api_ea", url: "http://api.ea.net/" },
];
```

**Adding New URLs:** To monitor additional websites, simply append new objects to the SITES array following the same structure (id and url properties).

### 3. Site Status Check Function (checkSite())

Each URL undergoes a thorough status check through an asynchronous function that performs the following operations:

1. **Records Start Time:** Captures the initial timestamp for response time calculation
2. **Sends HEAD Request:** Initiates a lightweight HTTP HEAD request using the Fetch API
3. **Calculates Response Time:** Determines the total time elapsed from request to response
4. **Returns Structured Result:** Provides a standardized result object containing all relevant status information

This function encapsulates all the logic required to assess a single website's availability and performance.

### 4. GET Handler - Processing All Sites

The GET handler serves as the orchestrator for the entire monitoring process, aggregating results from multiple site checks into a unified response.

**Handler Functionality:**

- **Iterates Through URLs:** Processes each entry in the SITES list
- **Parallel Execution:** Executes the checkSite() function for all URLs concurrently using Promise.all
- **Response Aggregation:** Consolidates individual results into a unified JSON response
- **Structured Data Delivery:** Returns formatted monitoring data to the frontend for display

### 5. Architecture Benefits

This design approach offers several key advantages:

#### Fully Scalable Architecture
The system can accommodate any number of URLs without requiring code modifications. Simply update the SITES list to expand monitoring coverage.

#### Clean Separation of Concerns
- **checkSite()** → Handles all URL status check logic and request processing
- **GET()** → Manages response formatting, aggregation, and API response structure

#### Fast, Non-Blocking Monitoring
All URLs are checked in parallel using Promise.all, ensuring that multiple site checks don't create bottlenecks. This concurrent approach significantly reduces total monitoring time compared to sequential checking.

---

## Frontend Implementation

### Home Page

The application features an intuitive home page that serves as the entry point for users. This page provides a concise overview of the project and presents the two theme implementations available for exploration.

**Key Features:**

- Brief description of the assignment and its objectives
- Navigation cards for easy access to both theme versions (EA Theme and Creative Theme)
- Clean, user-friendly interface that sets the tone for the entire application

**Navigation Options:** Users can navigate to either theme version through:

- Interactive cards on the home page
- Navigation links in the header

---

## Component Architecture

### Navbar Component

**File Location:** `app/components/Navbar.tsx`

The navigation bar provides consistent site-wide navigation and theme controls.

**Component Features:**

- **Brand Logo:** Incorporates the official Express Analytics logo sourced from expressanalytics.com
- **Navigation Links:** Quick access links to both the EA Theme and Creative Theme versions
- **Theme Toggle:** A button allowing users to switch between light and dark modes

**Theme Initialization:** The application intelligently loads with a theme matching the user's system preferences, providing a seamless experience from the first visit.

### Status Monitor Component

The Status Monitor is a persistent UI element available across all pages, providing real-time visibility into website health.

**Component Location:** Available on all three pages (Home, EA Theme, Creative Theme)

**Visual Design:**

- **Fixed Positioning:** Bottom-left corner for non-intrusive monitoring
- **Color-Coded Badge:** Provides at-a-glance status information
  - **Green:** All monitored websites are responding successfully
  - **Yellow:** Partial functionality - one or more URLs returning errors
  - **Red:** Critical status - all monitored URLs are failing

**Modal Interaction:** When clicked, the status badge opens a detailed modal displaying comprehensive information about each monitored URL.

**Modal Features:**

- **User-Friendly Status Display:** Clear visual indicators for each website's operational status
- **Last Updated Timestamp:** Shows when the status check was last performed
- **Individual URL Cards:** Each monitored site displays:
  - Online/Offline status indicator
  - Response time in milliseconds
  - Visual status badge

**Modal Dismissal:** Users can close the modal through two methods:

- Clicking anywhere outside the modal (backdrop click)
- Clicking the close button (X) in the top-right corner

---

## Page Sections

### Hero Section

The hero section creates a strong first impression and establishes the partnership narrative.

**Section Components:**

- **Company Logos:** Displays logos for both Express Analytics and Fivetran. Each logo is clickable and directs users to the respective company's website
- **Partnership Title:** Clear, prominent headline announcing the collaboration
- **Description:** Concise overview explaining the nature and benefits of the partnership
- **Call-to-Action Buttons:**
  - **"Talk to Us":** Directs users to the Express Analytics contact page
  - **"Learn More":** Navigates to the Express Analytics home page

### Overview Section

This section contextualizes the partnership by presenting the business challenge and solution.

**Section Structure:**

- **Section Title:** Clearly identifies the overview content
- **Problem Statement Card:** Highlights the specific business challenge addressed by the partnership
- **Solution Description:** Explains how the Express Analytics and Fivetran partnership resolves the identified problem

### Solutions and Capabilities Section

Showcases the concrete offerings delivered through the partnership.

**Section Elements:**

- **Title:** Section heading
- **Subtitle:** Supporting text providing additional context
- **Solution Cards:** Multiple cards, each featuring:
  - Solution name or category
  - Brief description explaining the capability
  - Visual elements for enhanced comprehension

### Partnership Benefits Section

Articulates the value proposition for potential clients and stakeholders.

**Section Contents:**

- **Title:** Section heading
- **Subtitle:** Introductory text
- **Benefits List:** Comprehensive enumeration of partnership advantages as specified in the project documentation

### Experience and Expertise Section

Establishes credibility through demonstrated experience and capabilities.

**Section Highlights:**

- **Industry Experience:** Prominently displays "20+ Years of Industry Experience"
- **Experience Details:** Structured presentation of relevant experience metrics and achievements
- **Core Capabilities:** Enumerated list of key competencies and technical capabilities as documented in the project requirements

### Testimonials Section

Builds trust through authentic endorsements from company leadership.

**Section Features:**

- **Quote Cards:** Individual testimonial cards featuring:
  - Direct quotes from leaders at Express Analytics and Fivetran
  - Attribution to the quoted individual
  - Professional presentation enhancing credibility

### Footer Section

Provides essential legal information and additional navigation.

**Footer Components:**

- **Copyright Notice:** Standard copyright declaration
- **Additional Links:**
  - **About:** Links to the Express Analytics About Us page
  - **Contact:** Directs to the Express Analytics contact form

---

## Theme Implementations

### EA Theme (Brand-Consistent Design)

This version maintains strict adherence to Express Analytics' established brand identity and design language.

#### Hero Section - EA Theme

**Design Approach:**

- **Text Alignment:** Center-aligned text, matching the alignment used in the Express Analytics About Us page
- **Title Styling (Light Mode):** Implements the same gradient effect featured in the About Us page title
- **Button Design:** Utilizes the gradient style from the Express Analytics home page (specifically matching the "Meet Kylie" button)

#### Overview Section - EA Theme

**Card Design Philosophy:** The problem statement card follows the design patterns established on the Express Analytics website. In dark mode, cards feature a subtle border, which has been replicated in the EA Theme implementation to maintain visual consistency across different viewing modes.

#### Solutions and Capabilities Section - EA Theme

**Design Inspiration:** The solution cards draw direct inspiration from the Mission, Vision, and Passion cards featured on the Express Analytics About Us page. This creates visual continuity and reinforces brand recognition.

#### Partners and Benefits Section - EA Theme

**Layout Reference:** This section mirrors the theme, structure, and placement of the Core Values section on the Express Analytics About Us page.

**Visual Element:** Currently uses a reference image from the EA website. This image can be replaced with partnership-specific imagery as needed while maintaining the overall design structure.

#### Experience and Expertise Section - EA Theme

**Design Source:** The styling and layout take inspiration from the company data presentation section on the Express Analytics About Us page, ensuring consistent information architecture.

#### Testimonials Section - EA Theme

**Design Evolution:** Based on the testimonials section from the Express Analytics About Us page, with strategic enhancements:

- **Profile Images:** Added headshot of the quoted individual on the left side for visual interest and authenticity
- **Navigation Controls:** Repositioned navigation arrows to both sides for improved accessibility on both desktop and mobile devices
- Maintains the professional tone while improving user interaction

### Creative Theme (Alternative Design Approach)

This version explores a fresh, modern interpretation while preserving all essential content and functionality.

**Design Philosophy:** The creative theme prioritizes minimalism and clarity, offering a clean aesthetic that contrasts with the brand-centric EA theme while maintaining professional standards.

**Content Consistency:** All textual content remains identical between both themes, ensuring message consistency while demonstrating design versatility.

#### Hero Section - Creative Theme

**Design Variations:**

- **Text Alignment:** Left-aligned text for a contemporary, editorial feel
- **Color Scheme:** Title and button colors utilize the distinctive red from the partnership documentation and company logos, creating visual cohesion

#### Overview Section - Creative Theme

**Card Styling:** Features a distinctive design with a red left border, adding visual interest while maintaining readability. This design choice creates a modern, card-based aesthetic that differentiates it from the EA theme.

#### Solutions and Capabilities Section - Creative Theme

**Card Design:**

- **Border Treatment:** Cards feature a top red border for visual hierarchy and interest
- **Light Mode:** White background cards for maximum readability
- **Dark Mode:** Dark background cards (avoiding red backgrounds to ensure text legibility)

The color choices prioritize content accessibility while maintaining visual appeal across both theme modes.

#### Partners and Benefits Section - Creative Theme

**Layout Optimization:**

- **Desktop View:** Benefits arranged in a two-column layout for efficient space utilization
- **Mobile View:** Single-column list view for optimal mobile readability
- **Image Removal:** Eliminated accompanying image as the benefit points are self-explanatory and sufficiently communicate the value proposition without additional visual support

#### Experience and Expertise Section - Creative Theme

**Background Treatment:** Maintains a consistent dark background color to draw user attention to this critical section.

**Dark Mode Consideration:** Unlike other sections, the background does not change to white in dark mode. This intentional design choice ensures the section remains visually distinct and maintains the purpose of dark mode viewing.

#### Testimonials Section - Creative Theme

**Alternative Presentation:** Offers a different approach to testimonial display, providing design variety while maintaining the professional presentation established in the EA theme. This alternative design serves as an additional option for stakeholders to consider.

---

## Technical Stack

- **Framework:** Next.js (React-based)
- **Language:** TypeScript
- **Deployment:** Vercel
- **Styling:** Component-based styling with theme support
- **API:** Custom Next.js API routes

## Project Highlights

- **Dual Theme System:** Demonstrates versatility in design implementation
- **Real-Time Monitoring:** Live website status tracking with visual feedback
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
- **System Theme Integration:** Respects user's system preferences for initial theme selection
- **Performance Optimized:** Parallel API requests and efficient rendering
- **Scalable Architecture:** Easy to extend with additional URLs or features