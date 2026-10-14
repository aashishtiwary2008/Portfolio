export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web' | 'Finance' | 'Photography' | 'AI Tools';
  description: string;
  longDescription: string;
  technologies: string[];
  featured: boolean;
  year: string;
  links: {
    github?: string;
    live: string;
  };
  accentColor: string;
}

export interface PhotographyItem {
  id: string;
  title: string;
  tag: string;
  caption: string;
  aspect: string;
  bgGradient: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Aashish Tiwari",
    brandWordmark: "AASHISH TIWARI",
    shortMark: "AKT",
    role: "BCA Candidate • Web Developer • Creative Builder",
    headline: "AASHISH TIWARI",
    location: "Kolkata, West Bengal, India",
    phone: "+91 8240256596",
    degree: "Bachelor of Computer Applications (BCA)",
    graduationYear: "Expected Graduation: 2029",
    bio: "Aashish Tiwari is a proactive Bachelor of Computer Applications (BCA) candidate, developer, and creative builder known for pairing front-end finesse with live API integration and data precision. With a passion for crafting visually stunning and functional digital experiences, Aashish combines clean design with coding logic to bring ideas to life. Whether it’s building web tools, tracking live financial markets, or capturing light through photography, Aashish’s dedication to excellence shines through.",
    email: "aashishtiwary2008@gmail.com",
    availableForHire: true,
    statusText: "AVAILABLE FOR FREELANCE & INTERNSHIPS",
  },

  socials: {
    instagram: "https://www.instagram.com/aashish_t1?stkn=MXZvazV6NTBncHA2cw==",
    instagramPhotography: "https://www.instagram.com/cloud._.beauty?stkn=ZmIwMjVhZnQxdTJp",
    photographyPost: "https://www.instagram.com/cloud._.beauty/p/C3avKWGPbGz/",
    photographySite: "https://akt121.wixsite.com/clouds-beauty",
    linkedin: "https://www.linkedin.com/in/aashish-tiwary-43a317420?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/aashishtiwary",
    email: "mailto:aashishtiwary2008@gmail.com",
    emailDirect: "aashishtiwary2008@gmail.com",
  },

  scoringStats: [
    { label: "API Response Time", score: "18ms", benchmark: "Sub-50ms Target", percent: 98 },
    { label: "Lighthouse Performance", score: "99/100", benchmark: "Core Web Vitals", percent: 99 },
    { label: "Data Accuracy Rate", score: "100%", benchmark: "Zero Duplicates", percent: 100 },
    { label: "Cross-Device Uptime", score: "99.9%", benchmark: "Global Edge Network", percent: 99 },
  ],

  projects: [
    {
      id: "mytoolsapi",
      title: "MyToolsAPI",
      subtitle: "All-in-One Online Utilities & Live APIs Hub",
      category: "Web",
      description: "A free online tools hub powered by live APIs — weather forecast, currency conversion, real-time crypto and gold prices, a calculator, QR and password generators, IP/DNS lookup, and live news, all in one place.",
      longDescription: "MyToolsAPI is an engineered multi-utility suite delivering instant results with zero bloat. Connects directly to verified external data providers to supply live weather, market rates, cryptos, network diagnostics, and cryptographic password generators with instantaneous response times.",
      technologies: ["Live APIs", "JavaScript (ES6+)", "HTML5 & CSS3", "REST Integrations", "DNS/Network Tools", "Web Standards"],
      featured: true,
      year: "2026",
      accentColor: "#4F7CFF",
      links: {
        live: "https://www.mytoolsapi.com/",
        github: "https://github.com/aashishtiwary/mytoolsapi",
      }
    },
    {
      id: "aureusexchange",
      title: "Aureus Exchange",
      subtitle: "Real-Time Crypto, Precious Metals & Currency Tracker",
      category: "Finance",
      description: "A live market value tracker covering spot gold, silver, and platinum, Bitcoin and Ethereum, and major sovereign currency pairs — laid out as one clean, continuously refreshed financial dashboard.",
      longDescription: "Aureus Exchange solves market fragmentation by displaying continuous streaming rates for spot gold, silver, platinum, sovereign fiat currencies, and top cryptocurrencies in a high-density, dark financial cockpit.",
      technologies: ["Market Data APIs", "Real-Time Rates", "JavaScript", "CSS Grid & Modern UI", "Netlify Hosting", "Financial Data"],
      featured: true,
      year: "2026",
      accentColor: "#EAB308",
      links: {
        live: "https://aureusexchange.netlify.app/",
        github: "https://github.com/aashishtiwary/aureus-exchange",
      }
    },
    {
      id: "clouds-beauty",
      title: "Cloud's Beauty",
      subtitle: "Fine Art Photography & Atmospheric Gallery",
      category: "Photography",
      description: "When I'm not building, I'm behind a camera. Cloud's Beauty is an online gallery showcasing high-contrast cloud formations, golden hour moods, and environmental compositions.",
      longDescription: "An artistic portfolio reflecting observation, lighting discipline, and narrative composition. Features curated photographic series capturing sky textures, rural landscapes, and fine shadow details.",
      technologies: ["Visual Storytelling", "Color Grading", "High-Dynamic Framing", "Wix Platform", "Instagram"],
      featured: true,
      year: "2026",
      accentColor: "#EC4899",
      links: {
        live: "https://akt121.wixsite.com/clouds-beauty",
      }
    },
    {
      id: "ai-automation",
      title: "AI Workflow Automation",
      subtitle: "Precision Prompt Engineering & Research Pipelines",
      category: "AI Tools",
      description: "Automated pipelines for converting raw research notes and technical data into structured formats, boosting turnaround time and operational efficiency.",
      longDescription: "Harnessing generative AI workflows and modern LLM utilities to streamline information gathering, report synthesis, and coding acceleration.",
      technologies: ["Generative AI", "Prompt Engineering", "Data Cleaning", "Automation", "Workflows"],
      featured: false,
      year: "2026",
      accentColor: "#8B5CF6",
      links: {
        live: "https://www.mytoolsapi.com/",
      }
    }
  ] as Project[],

  pillars: [
    {
      step: "DEFINE",
      number: "01",
      title: "Define the Core Scope",
      description: "Aashish collaborates closely to define the project scope, technical constraints, and data requirements. Conducting research and dataset auditing to establish a solid foundation before writing a single line of code.",
      tag: "Research & Architecture",
      accent: "#4F7CFF"
    },
    {
      step: "DESIGN",
      number: "02",
      title: "Craft High-Retention UI",
      description: "Once parameters are established, Aashish crafts clean, accessible interfaces with disciplined typography, intuitive visual hierarchy, and smooth micro-interactions that engage users immediately.",
      tag: "Typography & Interface",
      accent: "#EAB308"
    },
    {
      step: "DELIVER",
      number: "03",
      title: "Ship with Precision & Speed",
      description: "Executing clean, modular front-end code with live API connections, responsive layouts across mobile to 4K desktop, zero layout shift, and sub-50ms interaction latency.",
      tag: "Full-Stack Deployment",
      accent: "#10B981"
    }
  ],

  photographyGalleries: [
    {
      id: "photo-1",
      title: "Skies & Cloudscapes",
      tag: "Atmospheric",
      caption: "High-altitude texture and dramatic lighting transitions.",
      aspect: "aspect-[4/5]",
      bgGradient: "from-sky-900/60 via-slate-900 to-black"
    },
    {
      id: "photo-2",
      title: "Golden Hour Shadows",
      tag: "Lighting",
      caption: "Low-angle sunlight casting sharp geometric contrasts.",
      aspect: "aspect-[4/5]",
      bgGradient: "from-amber-950/60 via-stone-900 to-black"
    },
    {
      id: "photo-3",
      title: "Architectural Symmetry",
      tag: "Geometry",
      caption: "Lines, angles, and urban textures observed in Kolkata.",
      aspect: "aspect-[4/5]",
      bgGradient: "from-indigo-950/60 via-neutral-900 to-black"
    },
    {
      id: "photo-4",
      title: "Monsoon Reflections",
      tag: "Environment",
      caption: "Water, rain reflections, and moody ambient palettes.",
      aspect: "aspect-[4/5]",
      bgGradient: "from-emerald-950/60 via-slate-900 to-black"
    }
  ]
};
