import re

with open("src/data/projects.ts", "r") as f:
    content = f.read()

# 1. Update Project interface
interface_replacement = """export interface Project {
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
}"""

content = re.sub(r'export interface Project \{.*?\n\}', interface_replacement, content, flags=re.DOTALL)


# 2. Update StayVista Object
stayvista_new = """  {
    slug: "stayvista",
    name: "StayVista",
    shortSummary: "A full-stack hotel booking platform with authentication, image management, interactive maps, and responsive design.",
    description: "StayVista is a full-stack vacation rental platform inspired by Airbnb that allows users to discover, list, manage, and review vacation properties. The application includes secure authentication, property management, image uploads, geolocation services, interactive maps, reviews, and responsive UI design.",
    banner: "/projects/stayvista-banner.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://stayvista.demo",
    techStack: [
      { name: "Node.js", icon: "○", color: "#339933" },
      { name: "Express.js", icon: "◇", color: "#404040" },
      { name: "MongoDB", icon: "◎", color: "#47A248" },
      { name: "EJS", icon: "📄", color: "#A91E50" },
      { name: "Bootstrap", icon: "B", color: "#7952B3" },
      { name: "Passport.js", icon: "🔒", color: "#34E27A" },
      { name: "Cloudinary", icon: "☁", color: "#3448C5" },
      { name: "Mapbox", icon: "🗺", color: "#4264FB" },
      { name: "REST APIs", icon: "⇄", color: "#5A29E4" },
    ],
    overview: {
      what: "StayVista is a full-stack vacation rental platform inspired by Airbnb that allows users to discover, list, manage, and review vacation properties.",
      why: "Built to demonstrate comprehensive full-stack development skills including secure authentication, database design, REST APIs, cloud integration, maps integration, and real-world CRUD operations.",
      features: [
        "User Registration & Login",
        "Secure Authentication using Passport.js",
        "Create, Edit & Delete Property Listings",
        "Property Image Uploads",
        "Interactive Location Maps",
        "Search & Filtering",
        "Reviews & Ratings System",
        "Responsive Design",
        "Session Management",
        "User Ownership & Authorization"
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
        src: "/projects/stayvista-banner.jpg",
        title: "Homepage",
        description: "Modern Airbnb-inspired property marketplace showcasing featured destinations and intuitive navigation.",
        features: ["Responsive Hero Section", "Quick Search Bar", "Dynamic Property Feed"],
      },
      {
        src: "/projects/stayvista-login.jpg",
        title: "Login Page",
        description: "Secure user authentication system allowing registered users to securely access their accounts.",
        features: ["Session-based Authentication", "Secure Password Handling", "Form Validation"],
      },
      {
        src: "/projects/stayvista-signup.jpg",
        title: "Signup Page",
        description: "Account creation and onboarding flow with immediate user feedback.",
        features: ["User Registration", "Input Validation", "Instant Feedback"],
      },
      {
        src: "/projects/stayvista-dashboard.jpg",
        title: "Add Listing",
        description: "Allows authenticated users to create new property listings with validation and image uploads.",
        features: ["Multi-step Form", "Cloudinary Image Upload", "Data Validation"],
      },
      {
        src: "/projects/stayvista-listing.jpg",
        title: "Property Details",
        description: "Displays complete listing information, pricing, location, owner details, and reviews.",
        features: ["Image Gallery", "Review System", "Interactive Amenities List"],
      },
      {
        src: "/projects/stayvista-map.jpg",
        title: "Interactive Map",
        description: "Integrated Mapbox API for accurate property location visualization.",
        features: ["Mapbox Integration", "Custom Markers", "Interactive Popups"],
      },
      {
        src: "/projects/stayvista-logout.jpg",
        title: "Logout Modal",
        description: "Secure session and account management ensuring safe user logout.",
        features: ["Session Destruction", "Confirmation Modal", "Secure Redirects"],
      }
    ],
  }"""

# Find the start and end of the stayvista project in the array
start_marker = r'\{\s*slug:\s*"stayvista".*?gallery:\s*\[.*?\]\s*,\s*\}'
content = re.sub(start_marker, stayvista_new, content, flags=re.DOTALL)

with open("src/data/projects.ts", "w") as f:
    f.write(content)
