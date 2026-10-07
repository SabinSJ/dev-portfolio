export interface Project {
  id: string;
  name: string;
  type: "Professional" | "Personal";
  summary: string;
  description: string;
  technologies: string[];
  period?: string;
  role?: string;
  presentationOrientation?: "landscape" | "portrait";
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "travel-procurement",
    name: "Travel Procurement Platform",
    type: "Professional",
    period: "Nov 2024 – Present",
    role: "Full Stack Developer (React, TypeScript, NestJS)",
    summary:
      "Enterprise hotel procurement and travel sourcing platform connecting corporate travel buyers with hotel suppliers and external pricing providers.",
    description:
      "Contribute across frontend and backend development of an established enterprise platform used for hotel sourcing, RFP creation, quotation and bidding workflows, proposal comparison, and contract management. Develop React and TypeScript features, integrate external hotel pricing APIs, implement backend functionality with NestJS, and work on data flows across multiple services. Also contribute to large-scale hotel data processing, synchronization workflows, bug fixing, performance improvements, and production issue resolution.",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "SCSS",
      "NestJS",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Elasticsearch",
      "Snowflake",
      "AWS",
      "Data Ingestion",
    ],
    presentationOrientation: "landscape",
    images: [
      "/images/projects/travel-procurement/travel.jpg",
      "/images/projects/travel-procurement/travel-price-trends.png",
      "/images/projects/travel-procurement/travel-rate-details.png",
      "/images/projects/travel-procurement/travel-manage-proposal.png",
    ],
  },

  {
    id: "restaurant-management",
    name: "Restaurant Management Platform",
    type: "Professional",
    period: "Oct 2023 – Dec 2024",
    role: "Frontend Developer (Next.js, TypeScript)",
    summary:
      "Large-scale ERP and business management platform supporting hospitality and retail operations across multiple business modules.",
    description:
      "Developed frontend features and complex business workflows across modules including CRM and loyalty, e-invoicing, inventory, self-ordering, POS configuration, product and menu management, and business setup. Built reusable UI components with Next.js and TypeScript, integrated frontend functionality with GraphQL and backend services, and worked with third-party POS and delivery integrations. Also contributed Cypress end-to-end and Jest unit tests, multilingual UI support, and cloud-based development and deployment workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Cypress",
      "Jest",
      "Microsoft Azure",
    ],
    presentationOrientation: "landscape",
    images: [
      "/images/projects/restaurant-management/restaurant-management.png",
      "/images/projects/restaurant-management/restaurant-management-categories.png",
      "/images/projects/restaurant-management/restaurant-management-recipes.png",
    ],
  },

  {
    id: "legal-client",
    name: "Legal Services Platform",
    type: "Professional",
    period: "Aug 2021 – Oct 2023",
    role: "Full Stack Developer (React, Javascript, ExpressJS, GraphQL)",
    summary:
      "Platform connecting clients with lawyers through lawyer discovery, appointment scheduling, and subscription-based professional profiles.",
    description:
      "Contributed to frontend and backend functionality for a platform connecting clients with lawyers in Germany. Developed features around lawyer search and profiles, appointment scheduling for phone, online, and in-person consultations, and dynamic user workflows. Worked with React, Node.js, GraphQL, and Redux, and contributed to the integration of Stripe payments and subscription tiers that affected lawyer profile visibility and ranking. Also wrote Cypress end-to-end tests for critical user flows.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "GraphQL",
      "MySQL",
      "Stripe",
      "Webhook",
      "Cypress",
    ],
    presentationOrientation: "landscape",
    images: [
      "/images/projects/legal-platform/legal-platform.png",
      "/images/projects/legal-platform/create-appointment.png",
      "/images/projects/legal-platform/future-appointments.png",
      "/images/projects/legal-platform/tiers-page.png",
    ],
  },

  {
    id: "rotravel",
    name: "RoTravel",
    type: "Personal",
    summary:
      "AI-powered travel application for discovering destinations, generating itineraries, exploring places, and getting location-based recommendations.",
    description:
      "A personal full stack project built around AI-assisted travel planning and discovery. The application combines destination search, AI-generated itineraries, conversational travel assistance, image-based analysis, nearby place discovery, and saved or visited places. I built the backend with FastAPI and integrated multiple AI provider options while designing the application around reusable services, database models, and API endpoints.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "AI APIs",
      "REST APIs",
    ],
    presentationOrientation: "portrait",
    images: [
      "/images/projects/rotravel/landing-screen.png",
      "/images/projects/rotravel/ai-screen.png",
      "/images/projects/rotravel/explore-screen.png",
      "/images/projects/rotravel/city-screen.png",
    ],
  },

  {
    id: "esports-hub",
    name: "Esports Hub",
    type: "Personal",
    summary:
      "Full stack esports platform for competitive gaming data, user accounts, authentication, teams, tournaments, and standings.",
    description:
      "A personal full stack project built to explore modern authentication architecture and the development of a complete web application with a separate frontend and backend. The platform includes user accounts, Google and GitHub OAuth authentication, secure cookie-based JWT sessions, esports teams and tournaments, and competitive standings. The backend is built with .NET and PostgreSQL, with the Next.js frontend communicating through REST APIs.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      ".NET",
      "PostgreSQL",
      "REST APIs",
      "OAuth",
      "JWT",
    ],
    presentationOrientation: "landscape",
    images: [
      "/images/projects/esports-hub/landing-page.png",
      "/images/projects/esports-hub/teams-page.png",
      "/images/projects/esports-hub/team-page.png",
      "/images/projects/esports-hub/tournaments-page.png",
      "/images/projects/esports-hub/standings-page.png",
      "/images/projects/esports-hub/login-page.png",
    ],
  },
];
