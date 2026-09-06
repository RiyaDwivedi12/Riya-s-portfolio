export const portfolioData = {
  personalInfo: {
    name: "Riya Dwivedi",
    title: "Software Developer & MERN Stack Developer",
    tagline: "Building high-performance, full-stack web applications with sleek and intuitive user interfaces.",
    bio: "B.Tech Computer Science Engineering student with knowledge of MERN Stack, React.js, JavaScript, and web development. Interested in building useful websites and applications and learning new technologies. Looking for an opportunity to improve technical skills and work on real-world software projects.",
    objective: "Looking for opportunities in Frontend Development, MERN Stack Development, and Software Development where I can use my skills, learn new technologies, and contribute to real-world projects.",
    email: "driya8978@gmail.com",
    phone: "+91 9640835030",
    location: "Jamalpur, Punjab, India",
    github: "https://github.com/RiyaDwivedi12",
    linkedin: "https://linkedin.com/in/riya-dwivedi-120a87350",
    resumeUrl: "/riya_dwivedi_resume.pdf"
  },
  
  skills: [
    {
      category: "Languages & Core",
      items: [
        { name: "C++", level: 85, iconKey: "cpp" },
        { name: "JavaScript", level: 90, iconKey: "javascript" },
        { name: "HTML", level: 95, iconKey: "html" },
        { name: "CSS", level: 90, iconKey: "css" }
      ]
    },
    {
      category: "Frontend & Backend",
      items: [
        { name: "React.js", level: 92, iconKey: "react" },
        { name: "React Native", level: 85, iconKey: "react" },
        { name: "Tailwind CSS", level: 90, iconKey: "tailwind" },
        { name: "Node.js", level: 85, iconKey: "node" },
        { name: "Express.js", level: 88, iconKey: "express" },
        { name: "MongoDB", level: 85, iconKey: "mongodb" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", level: 88, iconKey: "github" },
        { name: "Vercel", level: 85, iconKey: "vercel" },
        { name: "Render", level: 80, iconKey: "render" },
        { name: "VS Code", level: 90, iconKey: "vscode" }
      ]
    },
    {
      category: "Other Skills",
      items: [
        { name: "REST API", level: 85, iconKey: "code" },
        { name: "JWT", level: 85, iconKey: "code" },
        { name: "Cloudinary", level: 80, iconKey: "code" }
      ]
    }
  ],

  projects: [
    {
      id: "khelza-sports",
      title: "Khelza – Sports Matchmaking & Athlete Networking App",
      shortTitle: "Khelza",
      subtitle: "Multi-Screen Mobile App (10+ Screens) • React Native & Convex",
      badge: "10+ Screen Mobile Architecture",
      description: "A comprehensive multi-screen mobile sports matchmaking platform connecting athletes and sports enthusiasts in real time across 10+ core user flows. Features include live nearby match discovery powered by interactive map geolocation, multi-sport match creation (Cricket, Football, Basketball, Badminton), athlete profile analytics, match scheduling, and seamless athlete onboarding.",
      features: [
        "Multi-Screen Mobile Architecture across 10+ user flows and interactive screens",
        "Live Nearby Match Discovery via Interactive Leaflet / OpenStreetMap Integration",
        "Instant Multi-Sport Match Creation (Cricket, Football, Basketball, Badminton)",
        "Athlete Profiles with Match Stats, Followers & Direct Networking",
        "Trending Matches & Real-Time Player Suggestions",
        "Seamless Authentication, Athlete Onboarding & App Preferences"
      ],
      tech: ["React Native", "Convex", "JavaScript", "Leaflet Maps", "Geolocation", "Tailwind / NativeWind"],
      category: "React Native",
      github: "",
      live: "",
      accentColor: "coral",
      brandColor: "#ff5e4d",
      screenshots: [
        {
          id: "home",
          title: "Home & Trending Matches",
          caption: "Real-time match feed, spot availability, joined status, and suggested athlete profiles.",
          src: "/projects/khelza/home.png",
          tag: "Core Feed"
        },
        {
          id: "nearby",
          title: "Nearby Matches & Live Map",
          caption: "Geolocation-based map with interactive pins, sport filters (Football, Cricket, Basketball), and radius discovery.",
          src: "/projects/khelza/nearby.png",
          tag: "Map Geolocation"
        },
        {
          id: "create-match",
          title: "Create Match Screen",
          caption: "Sport selector, date & time picker, venue search, and interactive map ground locator pin.",
          src: "/projects/khelza/create-match.png",
          tag: "Match Creation"
        },
        {
          id: "profile",
          title: "Athlete Profile & Match History",
          caption: "Player stats (matches, followers, following), sport badges, active matches, and profile management.",
          src: "/projects/khelza/profile.png",
          tag: "User Profile"
        },
        {
          id: "signin",
          title: "Athlete Sign In",
          caption: "Clean dark-themed sign in with email/username credential verification.",
          src: "/projects/khelza/signin.png",
          tag: "Auth"
        },
        {
          id: "signup",
          title: "Join the Game Onboarding",
          caption: "Instant registration with username, email, and phone verification.",
          src: "/projects/khelza/signup.png",
          tag: "Onboarding"
        },
        {
          id: "settings",
          title: "Settings & Appearance",
          caption: "Dark mode toggle, notification preferences, privacy visibility, and community guidelines.",
          src: "/projects/khelza/settings.png",
          tag: "Settings"
        }
      ]
    },
    {
      id: "yarn-art-store",
      title: "Yarn Art Store – E-Commerce Website",
      shortTitle: "Yarn Art Store",
      subtitle: "Full Stack • MERN & Cloudinary",
      description: "Built a full-stack e-commerce website for selling yarn and handmade products. Added product search, categories, product details, cart, and wishlist features. Created an admin section to manage products and orders. Used Cloudinary to store and manage product images.",
      features: [
        "Product catalog with searching, categories, and real-time filtering",
        "Cart and wishlist state management",
        "Admin dashboard to create, update, and manage inventory and orders",
        "Cloudinary cloud storage for high-res optimized product imagery"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
      category: "MERN Stack",
      github: "https://github.com/RiyaDwivedi12/yarn-art-store",
      live: "https://yarn-art-store.vercel.app",
      accentColor: "pink"
    }
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "Devoic Skilltech Consultancy Pvt. Ltd.",
      duration: "Present",
      responsibilities: [
        "Working on the development of Khelza, a sports matchmaking and networking application.",
        "Developing features that help users find and connect with sports players.",
        "Working with React Native and Convex for application development and backend integration.",
        "Working on user authentication, match creation, and nearby sports match features."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech – Computer Science Engineering",
      institution: "PCTE Group of Institutes, Ludhiana",
      duration: "2023–2027",
      score: "Pursuing Undergrad"
    },
    {
      degree: "Class 12th – 85% (Senior Secondary)",
      institution: "Children Valley Senior Secondary School",
      duration: "2021–2023",
      score: "Score: 85%"
    },
    {
      degree: "Class 10th – 89% (Secondary)",
      institution: "Sunrise Convent Senior Secondary School",
      duration: "2019–2021",
      score: "Score: 89%"
    }
  ],

  strengths: [
    "Quick Learner",
    "Problem Solving",
    "Teamwork",
    "Positive Attitude"
  ],

  languages: [
    "English",
    "Hindi",
    "Punjabi"
  ],

  careerGoal: "Looking for opportunities in Frontend Development, MERN Stack Development, and Software Development where I can use my skills, learn new technologies, and contribute to real-world projects.",
  certifications: [],
  achievements: []
};
