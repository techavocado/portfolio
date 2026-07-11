export interface GalleryImage {
  src: string;
  title: string;
  description: string;
  features: string[];
}

export interface TechBadge {
  name: string;
  icon: string;
  color: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface Project {
  slug: string;
  name: string;
  shortSummary: string;
  description: string;
  banner: string;
  githubUrl: string;
  liveUrl: string;
  techStack: TechBadge[];
  overview: {
    what: string;
    why: string;
    features: string[];
  };
  problem: string;
  solution: string;
  challenges: Challenge[];
  learnings: string[];
  gallery: GalleryImage[];
}

export const projects: Project[] = [
  {
    slug: "stayvista",
    name: "StayVista",
    shortSummary: "A full-stack hotel booking platform with authentication, image management, interactive maps, and responsive design.",
    description: "A production-ready hotel booking platform built with the MERN stack, featuring complete authentication flows, Cloudinary image management, interactive Mapbox integration, and a responsive mobile-first design.",
    banner: "/projects/stayvista-banner.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://stayvista.demo",
    techStack: [
      { name: "Node.js", icon: "○", color: "#339933" },
      { name: "Express.js", icon: "◇", color: "#404040" },
      { name: "MongoDB", icon: "◎", color: "#47A248" },
      { name: "Passport.js", icon: "🔒", color: "#34E27A" },
      { name: "Cloudinary", icon: "☁", color: "#3448C5" },
      { name: "Mapbox GL", icon: "🗺", color: "#4264FB" },
      { name: "EJS", icon: "📄", color: "#A91E50" },
      { name: "Bootstrap", icon: "B", color: "#7952B3" },
    ],
    overview: {
      what: "StayVista is a comprehensive hotel booking platform that allows users to discover, list, and book unique accommodations. Built as a full-stack application, it provides a complete marketplace experience with host dashboards, interactive property discovery, and secure booking workflows.",
      why: "The project was built to demonstrate proficiency in full-stack web development, specifically showcasing skills in authentication systems, third-party API integrations, geospatial data handling, and image management workflows that are essential in modern web applications.",
      features: [
        "Complete user authentication with Passport.js (local + OAuth strategies)",
        "CRUD operations for property listings with image uploads",
        "Cloudinary-powered image optimization and transformation",
        "Interactive Mapbox maps with property geocoding",
        "Responsive Bootstrap UI with mobile-first design",
        "Review and rating system for properties",
        "Search and filter properties by location and amenities",
        "Session-based authorization with protected routes",
      ],
    },
    problem: "Traditional hotel booking platforms are complex systems with many moving parts. The challenge was to build a production-ready full-stack application that handles user authentication securely, manages media assets efficiently, provides location-based property discovery, and maintains a responsive user experience across all devices.",
    solution: "Implemented a robust MVC architecture using Express.js with MongoDB as the document store for flexible data modeling. Passport.js handles authentication with multiple strategies including local login and OAuth. Cloudinary serves as the media management layer with on-the-fly image transformations. Mapbox GL provides interactive mapping with geocoding for property locations. EJS templating with Bootstrap ensures server-side rendering with a responsive design.",
    challenges: [
      {
        title: "Image Upload & Management at Scale",
        description: "Handling multiple image uploads per listing with validation, resizing, and efficient storage delivery was a significant challenge. Raw file uploads can quickly overwhelm server storage and impact page load times.",
        solution: "Integrated Cloudinary as a cloud-based media management solution. Implemented middleware for image validation (type, size limits), then streamed uploads directly to Cloudinary. Used Cloudinary's transformation API to deliver optimized images with automatic format selection (WebP/AVIF) and responsive sizing breakpoints.",
      },
      {
        title: "Geocoding & Map Integration",
        description: "Converting user-provided addresses into precise map coordinates and rendering interactive maps with property markers required careful handling of geospatial data and third-party API integration.",
        solution: "Integrated Mapbox Geocoding API to convert addresses to coordinates on listing creation. Stored geoJSON Point data in MongoDB for geospatial queries. Rendered interactive maps using Mapbox GL JS with custom property markers, popups showing property previews, and smooth fly-to animations when selecting properties.",
      },
      {
        title: "Session Security & Authorization",
        description: "Implementing secure session management with proper authorization checks across routes while maintaining a seamless user experience required careful security considerations.",
        solution: "Used express-session with secure cookie configuration (HttpOnly, Secure, SameSite). Implemented Passport.js with bcrypt password hashing and salting. Created middleware for route protection that checks authentication status and redirects unauthorized users. Added CSRF protection for state-changing operations.",
      },
    ],
    learnings: [
      "Server-side rendering with EJS provides excellent performance for content-heavy pages while maintaining SEO friendliness",
      "Cloud-based media management (Cloudinary) significantly simplifies image handling compared to self-hosted solutions",
      "Geospatial data in MongoDB enables powerful location-based queries that would be complex in relational databases",
      "Passport.js modular authentication system allows easy addition of new auth strategies without refactoring existing code",
      "Session-based auth with proper security headers provides a robust authentication flow for traditional web apps",
    ],
    gallery: [
      {
        src: "/projects/stayvista-login.jpg",
        title: "Authentication System",
        description: "Multi-strategy authentication system built with Passport.js, supporting both local email/password login and OAuth integration with Google and GitHub.",
        features: [
          "Session-based authentication with secure cookies",
          "Bcrypt password hashing with salt rounds",
          "OAuth 2.0 integration for social login",
          "Protected route middleware",
          "Flash messages for user feedback",
        ],
      },
      {
        src: "/projects/stayvista-map.jpg",
        title: "Interactive Map Discovery",
        description: "Mapbox GL-powered interactive map allowing users to explore properties geographically with custom markers, popups, and smooth navigation animations.",
        features: [
          "Geocoding API for address-to-coordinates conversion",
          "Custom property markers with price tags",
          "Interactive popup previews on marker click",
          "Smooth fly-to location animations",
          "Clustering for dense property areas",
        ],
      },
      {
        src: "/projects/stayvista-listing.jpg",
        title: "Property Detail Page",
        description: "Comprehensive property listing page with image gallery, amenities showcase, booking calendar, host information, and guest review system.",
        features: [
          "Responsive image gallery with Cloudinary optimization",
          "Amenities grid with icon indicators",
          "Interactive booking date selection",
          "Host profile card with verification badge",
          "Star-rated review and comment system",
        ],
      },
      {
        src: "/projects/stayvista-dashboard.jpg",
        title: "Host Dashboard",
        description: "User dashboard for managing property listings with full CRUD capabilities, analytics overview, and booking management interface.",
        features: [
          "Grid view of all user listings with quick actions",
          "Edit and delete functionality for each property",
          "Add new listing wizard with multi-step form",
          "Booking status overview and management",
          "Responsive card-based layout",
        ],
      },
    ],
  },
  {
    slug: "weather-dashboard",
    name: "Weather Dashboard",
    shortSummary: "An interactive weather analytics platform providing real-time weather insights and forecast visualization.",
    description: "A modern weather analytics dashboard built with React that provides real-time weather data, interactive charts, city comparison tools, and detailed forecast visualizations using the OpenWeather API and Chart.js.",
    banner: "/projects/weather-banner.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://weather.demo",
    techStack: [
      { name: "React.js", icon: "◇", color: "#61DAFB" },
      { name: "Express.js", icon: "◇", color: "#404040" },
      { name: "OpenWeather API", icon: "☀", color: "#FF6B6B" },
      { name: "Chart.js", icon: "◈", color: "#FF6384" },
      { name: "Axios", icon: "⇄", color: "#5A29E4" },
      { name: "CSS3", icon: "◉", color: "#1572B6" },
    ],
    overview: {
      what: "Weather Dashboard is a comprehensive weather analytics platform that provides real-time weather data visualization, multi-city comparison tools, and detailed forecast analytics. The application transforms raw weather API data into beautiful, interactive visualizations.",
      why: "Built to demonstrate skills in React component architecture, third-party API integration, data visualization with Chart.js, and creating responsive dashboard interfaces. The project showcases the ability to transform complex data into intuitive user experiences.",
      features: [
        "Real-time weather data from OpenWeather API",
        "Interactive temperature and precipitation charts",
        "Multi-city weather comparison tool",
        "7-day forecast with detailed metrics",
        "Air quality index and UV index tracking",
        "Hourly forecast visualization",
        "Responsive glassmorphism UI design",
        "Dynamic weather icons and condition backgrounds",
      ],
    },
    problem: "Weather data is often presented in static, text-heavy formats that make it difficult to identify patterns and trends. Users need a tool that transforms complex meteorological data into intuitive visualizations while providing accurate real-time and forecast information for multiple locations.",
    solution: "Built a React-based dashboard that fetches weather data from the OpenWeather API and transforms it into interactive Chart.js visualizations. Implemented a Node.js/Express proxy server to securely handle API keys and cache responses. Created reusable chart components for different data types (temperature trends, precipitation probability, humidity levels) with responsive design and smooth animations.",
    challenges: [
      {
        title: "API Rate Limiting & Performance",
        description: "OpenWeather API has strict rate limits. Making direct API calls from the client for every user interaction would quickly exhaust the quota and create a poor user experience with loading delays.",
        solution: "Built an Express.js proxy server that caches weather data with Redis-inspired in-memory storage. Implemented cache invalidation based on data freshness (current weather cached 10 minutes, forecasts cached 1 hour). Added request deduplication to prevent redundant API calls for the same city.",
      },
      {
        title: "Complex Data Visualization",
        description: "Weather data spans multiple metrics (temperature, humidity, pressure, wind) across different time granularities (hourly, daily). Creating intuitive visualizations that don't overwhelm users required careful UI/UX design.",
        solution: "Used Chart.js with custom plugins to create specialized chart types: gradient area charts for temperature trends, grouped bar charts for precipitation probability, gauge charts for current conditions. Implemented a tabbed interface to separate different data views. Added interactive tooltips with detailed information on hover.",
      },
      {
        title: "Responsive Glassmorphism Design",
        description: "The design called for a modern glassmorphism aesthetic with translucent cards, backdrop blur effects, and gradient backgrounds that work consistently across different browsers and screen sizes.",
        solution: "Implemented CSS backdrop-filter with fallbacks for unsupported browsers. Created a design system with CSS custom properties for consistent glass effect parameters (blur, transparency, border highlights). Used CSS Grid and Flexbox for responsive layouts that adapt from mobile to ultra-wide displays. Added subtle gradient animations for background depth.",
      },
    ],
    learnings: [
      "Chart.js provides powerful customization options but requires careful configuration for responsive, performant renders",
      "Server-side caching dramatically improves user experience and reduces API costs",
      "Glassmorphism design requires attention to contrast ratios and accessibility considerations",
      "React's useMemo and useCallback are essential when rendering data-heavy chart components",
      "Proxy servers add a valuable security layer by hiding API keys and enabling response transformation",
    ],
    gallery: [
      {
        src: "/projects/weather-main.jpg",
        title: "Main Dashboard View",
        description: "Primary dashboard displaying current weather conditions with large temperature readout, hourly forecast bars, 7-day forecast list, and supplementary metric cards for air quality and UV index.",
        features: [
          "Real-time weather data with auto-refresh",
          "Dynamic weather condition icons and backgrounds",
          "Hourly temperature trend visualization",
          "7-day forecast with min/max temperatures",
          "Air quality and UV index gauge displays",
        ],
      },
      {
        src: "/projects/weather-charts.jpg",
        title: "Analytics Charts",
        description: "Detailed analytics view with Chart.js-powered visualizations showing temperature trends, precipitation probability, and supplementary meteorological metrics.",
        features: [
          "Gradient area chart for 7-day temperature trends",
          "Bar chart for precipitation probability",
          "Metric cards for humidity, visibility, pressure",
          "Interactive tooltips with detailed data",
          "Responsive chart resizing",
        ],
      },
      {
        src: "/projects/weather-compare.jpg",
        title: "City Comparison Tool",
        description: "Side-by-side weather comparison for multiple cities, enabling users to evaluate weather conditions across different locations simultaneously.",
        features: [
          "Search with autocomplete for city selection",
          "Side-by-side weather metric comparison",
          "Local time display for each city",
          "Animated weather condition indicators",
          "Add/remove cities dynamically",
        ],
      },
    ],
  },
  {
    slug: "qkdn-analysis",
    name: "QKDN Analysis",
    shortSummary: "Comprehensive analysis and documentation of secure communication architectures used in Quantum Key Distribution Networks.",
    description: "An in-depth analysis of Quantum Key Distribution Network architectures, protocols, and security implementations developed during research at ISRO SAC, featuring network topology analysis and cryptographic protocol evaluation.",
    banner: "/projects/qkdn-banner.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://qkdn-docs.demo",
    techStack: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Networking", icon: "◎", color: "#FF6B00" },
      { name: "System Design", icon: "◈", color: "#00C4CC" },
      { name: "Database Design", icon: "▣", color: "#336791" },
      { name: "Cryptography", icon: "🔐", color: "#8B5CF6" },
      { name: "QKD Protocols", icon: "⚛", color: "#10B981" },
    ],
    overview: {
      what: "A comprehensive analysis platform for Quantum Key Distribution Networks (QKDN) that evaluates network topologies, analyzes QKD protocol performance, and documents secure communication architectures. The project includes network simulation, security audit tools, and technical documentation systems.",
      why: "Developed during the Software Development Internship at ISRO SAC to contribute to India's quantum communication infrastructure research. The project addresses the critical need for secure key distribution systems that are resistant to both classical and quantum computing attacks.",
      features: [
        "Network topology visualization and analysis",
        "QKD protocol performance comparison (BB84, E91, CV-QKD)",
        "Real-time Quantum Bit Error Rate (QBER) monitoring",
        "Secure channel establishment workflow analysis",
        "Key generation rate analytics dashboard",
        "Security audit log system",
        "Cryptographic strength assessment tools",
        "Technical documentation generation",
      ],
    },
    problem: "Quantum Key Distribution Networks face complex challenges in scaling secure communication across distributed nodes while maintaining optimal key generation rates and detecting potential eavesdropping attempts. There is a need for comprehensive analysis tools that can evaluate network performance, compare protocol implementations, and identify security vulnerabilities in QKDN architectures.",
    solution: "Developed a Python-based analysis framework that simulates QKDN operations, collects performance metrics across different network configurations, and generates comprehensive reports. The system includes network topology modeling, protocol-specific performance evaluators, and security auditing tools that analyze key distribution workflows for potential vulnerabilities.",
    challenges: [
      {
        title: "QKD Protocol Simulation Complexity",
        description: "Simulating quantum key distribution protocols requires modeling quantum mechanical principles including photon polarization, entanglement, and measurement effects - concepts that don't map directly to classical computing paradigms.",
        solution: "Created modular Python classes for each QKD protocol (BB84, E91, CV-QKD) that abstract quantum operations into computable models. Used probabilistic modeling to simulate quantum channel behavior including photon loss, detector efficiency, and eavesdropper detection. Implemented the Ekert 91 (E91) protocol for entanglement-based key distribution simulation.",
      },
      {
        title: "Network Topology Optimization",
        description: "QKDNs must balance key generation efficiency with network reliability across diverse topologies (star, mesh, ring). Finding optimal configurations for different deployment scenarios required extensive modeling and analysis.",
        solution: "Built a network topology engine that models different QKDN architectures with configurable parameters (node count, distance, channel loss). Implemented graph-based algorithms to calculate optimal key distribution paths. Created visualization tools for network health monitoring and bottleneck identification.",
      },
      {
        title: "Security Audit & Documentation",
        description: "Documenting security architectures and maintaining audit trails for QKDN systems requires structured approaches to capture protocol workflows, key management procedures, and vulnerability assessments.",
        solution: "Developed automated documentation generators that extract system architecture diagrams, protocol flow charts, and security assessment reports from the analysis framework. Created structured templates for capturing security audit findings with severity classification and remediation recommendations.",
      },
    ],
    learnings: [
      "Quantum cryptography principles provide fundamentally different security guarantees compared to classical approaches",
      "Network simulation requires careful modeling of both quantum and classical communication channels",
      "Python's scientific computing ecosystem (NumPy, SciPy, NetworkX) is well-suited for network analysis tasks",
      "Documenting complex technical systems requires structured templates and automated generation tools",
      "Cross-functional collaboration between physicists, engineers, and software developers is essential for quantum communication projects",
    ],
    gallery: [
      {
        src: "/projects/qkdn-topology.jpg",
        title: "Network Topology Analyzer",
        description: "Interactive network topology visualization showing quantum node interconnections with real-time metrics for key generation rates, QBER values, and network health status indicators.",
        features: [
          "Hexagonal network topology visualization",
          "Real-time QBER monitoring per node",
          "Network health status indicators",
          "Quantum entanglement fidelity tracking",
          "Node-to-node secure channel status",
        ],
      },
      {
        src: "/projects/qkdn-architecture.jpg",
        title: "System Architecture Analysis",
        description: "Multi-layered system architecture diagram showing the QKDN stack from physical quantum hardware through network protocols to application-layer key management APIs.",
        features: [
          "Three-layer architecture visualization",
          "Component interaction mapping",
          "Performance metrics dashboard",
          "System status monitoring",
          "Protocol stack documentation",
        ],
      },
      {
        src: "/projects/qkdn-security.jpg",
        title: "Security Audit Dashboard",
        description: "Comprehensive security analysis interface showing encryption key lifecycle, cryptographic strength metrics, security audit logs, and real-time secure channel monitoring.",
        features: [
          "Key lifecycle visualization",
          "AES-256 encryption strength metrics",
          "Security audit log with timestamps",
          "Real-time secure channel monitoring",
          "Post-quantum resistance assessment",
        ],
      },
      {
        src: "/projects/qkdn-analytics.jpg",
        title: "Performance Analytics",
        description: "Detailed performance analytics comparing QKD protocols across key metrics including generation rate, distance capability, QBER, and latency measurements.",
        features: [
          "Multi-protocol performance comparison",
          "Key generation rate time series",
          "Network throughput analysis",
          "Node efficiency gauge charts",
          "Protocol comparison data tables",
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
