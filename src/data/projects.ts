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
  architecture?: {
    description: string;
    items: string[];
  };
  gallery: GalleryImage[];
}

export const projects: Project[] = [
  {
    slug: "stayvista",
    name: "StayVista",
    shortSummary: "A full-stack vacation rental platform with user authentication, property listings, image uploads, interactive maps, and responsive design.",
    description: "StayVista is a full-stack vacation rental platform inspired by Airbnb. Users can browse listings, search properties, create accounts, log in securely, add new listings, manage properties, view location maps, and interact with listing details through a modern responsive interface.",
    banner: "/projects/stayvista-homepage.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://stayvista.demo",
    techStack: [
      { name: "HTML", icon: "◇", color: "#E34F26" },
      { name: "CSS", icon: "◉", color: "#1572B6" },
      { name: "JavaScript", icon: "◈", color: "#F7DF1E" },
      { name: "Bootstrap", icon: "B", color: "#7952B3" },
      { name: "EJS", icon: "📄", color: "#A91E50" },
      { name: "Node.js", icon: "○", color: "#339933" },
      { name: "Express.js", icon: "◇", color: "#404040" },
      { name: "MongoDB", icon: "◎", color: "#47A248" },
      { name: "Mongoose", icon: "◎", color: "#880000" },
      { name: "Passport.js", icon: "🔒", color: "#34E27A" },
      { name: "Express Session", icon: "⊡", color: "#6B7280" },
      { name: "Cloudinary", icon: "☁", color: "#3448C5" },
      { name: "Multer", icon: "⬆", color: "#FF6B6B" },
      { name: "Mapbox", icon: "🗺", color: "#4264FB" },
      { name: "REST APIs", icon: "⇄", color: "#5A29E4" },
    ],
    overview: {
      what: "StayVista is a full-stack vacation rental platform inspired by Airbnb that allows users to browse listings, search properties, create accounts, log in securely, add new listings, manage properties, view location maps, and interact with listing details through a modern responsive interface.",
      why: "Built to demonstrate comprehensive full-stack development skills including secure authentication, database design, REST APIs, cloud integration, maps integration, and real-world CRUD operations.",
      features: [
        "User Authentication & Authorization",
        "Login / Signup System",
        "Add New Property Listings",
        "Edit & Delete Listings",
        "Image Upload Support",
        "Interactive Maps with Mapbox",
        "Search & Filtering",
        "Reviews & Ratings",
        "Responsive Design",
        "Session Management"
      ],
    },
    problem: "Developing a robust vacation rental platform requires handling complex data relationships, secure user authentication, geospatial data, and reliable media management while ensuring a responsive and intuitive user experience.",
    solution: "Designed a secure MVC architecture leveraging Express.js and MongoDB. Integrated Passport.js for robust session-based authentication. Utilized Mapbox for interactive property location visualization and Cloudinary for optimized image storage. Implemented a responsive user interface with EJS and Bootstrap.",
    challenges: [
      {
        title: "Session Security & Authorization",
        description: "Implementing secure session management and protecting routes based on user ownership.",
        solution: "Integrated Passport.js with secure session cookies and created custom middleware to verify property ownership before allowing edit or delete operations.",
      },
      {
        title: "Media Management & Optimization",
        description: "Handling user-uploaded property images efficiently without overloading the server.",
        solution: "Integrated Cloudinary API to handle image uploads, validation, and dynamic resizing, storing only secure URLs in the MongoDB database.",
      },
      {
        title: "Geospatial Integration",
        description: "Converting user-entered property addresses into map coordinates and displaying them interactively.",
        solution: "Used Mapbox Geocoding API on the backend to convert locations into GeoJSON points, rendering them accurately on the frontend map interface.",
      }
    ],
    architecture: {
      description: "The application is built using a classic Model-View-Controller (MVC) architectural pattern tailored for Express.js applications.",
      items: [
        "Model Layer: Mongoose schemas define the data structure for Users, Properties, and Reviews with strict validation rules.",
        "View Layer: EJS templates generate dynamic HTML on the server, styled rapidly using Bootstrap components.",
        "Controller Layer: Express routing logic handles business operations, data processing, and interaction with the MongoDB database.",
        "Security Layer: Middleware functions handle Passport.js authentication strategies, authorization checks, and session persistence.",
        "External Services: Cloudinary handles cloud-based image asset management, and Mapbox provides geospatial encoding and mapping."
      ]
    },
    learnings: [
      "Mastered session-based authentication and secure routing using Passport.js.",
      "Gained practical experience managing cloud assets via external APIs like Cloudinary.",
      "Understood the intricacies of integrating geospatial data using GeoJSON and Mapbox.",
      "Improved data modeling skills using MongoDB references and population.",
      "Learned the importance of middleware in Express for code reusability and security."
    ],
    gallery: [
      {
        src: "/projects/stayvista-homepage.jpg",
        title: "Homepage",
        description: "Browse and discover vacation properties with filters and categories.",
        features: ["Category Filters", "Property Grid", "Search & Navigation"],
      },
      {
        src: "/projects/stayvista-login.jpg",
        title: "Login",
        description: "Secure user authentication using Passport.js and sessions.",
        features: ["Session-based Authentication", "Secure Password Handling", "Form Validation"],
      },
      {
        src: "/projects/stayvista-signup.jpg",
        title: "Signup",
        description: "User registration with validation and account creation.",
        features: ["User Registration", "Input Validation", "Instant Feedback"],
      },
      {
        src: "/projects/stayvista-addlisting.jpg",
        title: "Add Listing",
        description: "Create and publish property listings with images and details.",
        features: ["Property Form", "Cloudinary Image Upload", "Data Validation"],
      },
      {
        src: "/projects/stayvista-details.jpg",
        title: "Property Details",
        description: "View complete listing information, owner details and reviews.",
        features: ["Listing Details", "Review System", "Owner Information"],
      },
      {
        src: "/projects/stayvista-map.jpg",
        title: "Map View",
        description: "Interactive property location display using Mapbox.",
        features: ["Mapbox Integration", "Location Markers", "Interactive Navigation"],
      },
      {
        src: "/projects/stayvista-logout.jpg",
        title: "Logout Modal",
        description: "Secure session termination and user logout workflow.",
        features: ["Session Destruction", "Confirmation Modal", "Secure Redirects"],
      }
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
