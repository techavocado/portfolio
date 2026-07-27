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
    githubUrl: "https://github.com/techavocado/stayvista-app.git",
    liveUrl: "https://stayvista-xruc.onrender.com",
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
    shortSummary: "A modern full-stack weather analytics dashboard providing real-time weather conditions, 7-day forecasts, hourly forecasts, air quality insights, UV index analysis, sunrise/sunset information, visibility, humidity, wind status, and interactive weather analytics through rich visualizations.",
    description: "A modern full-stack weather analytics dashboard providing real-time weather conditions, 7-day forecasts, hourly forecasts, air quality insights, UV index analysis, sunrise/sunset information, visibility, humidity, wind status, and interactive weather analytics through rich visualizations.",
    banner: "/projects/weather-banner.png",
    githubUrl: "https://github.com/techavocado/weather-dashboard.git",
    liveUrl: "https://weather-dashboard-sage-pi.vercel.app",
    techStack: [
      { name: "React", icon: "◇", color: "#61DAFB" },
      { name: "JavaScript", icon: "◈", color: "#F7DF1E" },
      { name: "Vite", icon: "⚡", color: "#646CFF" },
      { name: "Tailwind CSS", icon: "◉", color: "#06B6D4" },
      { name: "OpenWeather API", icon: "☀", color: "#FF6B6B" },
      { name: "Chart.js", icon: "◈", color: "#FF6384" },
      { name: "React Chart.js 2", icon: "◇", color: "#FF6384" },
      { name: "Axios", icon: "⇄", color: "#5A29E4" },
      { name: "Framer Motion", icon: "◎", color: "#BB4BFF" },
    ],
    overview: {
      what: "Weather Dashboard allows users to search any city worldwide and instantly view comprehensive weather information including current weather, hourly forecast, 7-day forecast, temperature trends, UV index analytics, air quality monitoring, pollutant breakdown, humidity, visibility, wind status, sunrise & sunset, and weather charts.",
      why: "Built to demonstrate API integration, data visualization, responsive UI design, asynchronous data fetching, chart rendering, and interactive frontend development using React.",
      features: [
        "Real-Time Weather",
        "City Search",
        "7-Day Forecast",
        "Hourly Forecast",
        "Temperature Analytics",
        "UV Index Visualization",
        "Air Quality Monitoring",
        "Pollutant Analysis",
        "Interactive Charts",
        "Responsive Design",
        "Weather Modals",
        "Dynamic Icons",
        "Fast API Fetching",
      ],
    },
    problem: "Weather applications often present large amounts of information in a cluttered manner, making it difficult for users to quickly understand weather trends and environmental conditions.",
    solution: "Designed an interactive dashboard that organizes weather information into modular cards and analytical popups. Users can quickly explore forecasts, pollution data, UV trends, and temperature changes through responsive charts and clean visualizations.",
    challenges: [
      {
        title: "Managing multiple asynchronous weather API requests",
        description: "Handling multiple concurrent API calls for weather data, forecasts, air quality, and UV index while maintaining a responsive UI.",
        solution: "Implemented efficient asynchronous data fetching with proper loading and error handling.",
      },
      {
        title: "Rendering interactive charts",
        description: "Creating dynamic, responsive charts for temperature trends, UV index, hourly forecasts, and pollution analysis.",
        solution: "Integrated Chart.js with reusable React components for temperature, UV index, hourly forecast, and pollution analysis.",
      },
      {
        title: "Organizing complex weather information",
        description: "Presenting a large amount of weather data in a clear, accessible, and visually appealing way.",
        solution: "Designed modular dashboard cards and popup analytics windows for improved readability and user experience.",
      },
    ],
    architecture: {
      description: "React Component Architecture",
      items: [
        "Presentation Layer",
        "Dashboard Cards",
        "Interactive Modals",
        "Reusable Chart Components",
        "Weather API Service Layer",
        "State Management",
        "Responsive UI Components",
      ],
    },
    learnings: [
      "Improved React component architecture.",
      "Learned advanced API integration.",
      "Worked extensively with Chart.js.",
      "Improved asynchronous state management.",
      "Designed responsive analytical dashboards.",
      "Optimized UI for complex datasets.",
    ],
    gallery: [
      {
        src: "/projects/weather-uv-index.jpg",
        title: "UV Index Analytics",
        description: "Interactive UV trend visualization.",
        features: [
          "UV index trend chart",
          "12-hour UV forecast",
          "Risk level indicators",
          "Color-coded severity",
        ],
      },
      {
        src: "/projects/weather-hourly-forecast.jpg",
        title: "Hourly Forecast",
        description: "Detailed hourly temperature analytics.",
        features: [
          "24-hour temperature curve",
          "Average temperature display",
          "Day breakdown statistics",
          "High/Low temperature tracking",
        ],
      },
      {
        src: "/projects/weather-temperature-trend.jpg",
        title: "Temperature Trends",
        description: "24-hour temperature visualization.",
        features: [
          "Temperature trend line chart",
          "Next 24 hours breakdown",
          "Weather condition labels",
          "Time-based temperature mapping",
        ],
      },
      {
        src: "/projects/weather-air-pollutants.jpg",
        title: "Air Quality Analysis",
        description: "Comprehensive pollutant monitoring dashboard.",
        features: [
          "Air quality index display",
          "Pollutant concentration chart",
          "Detailed pollutant breakdown",
          "Logarithmic scale visualization",
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
