export interface Project {
  index: string;
  title: string;
  tags: string[];
  description: string;
  highlight: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Student Task Management System",
    tags: ["React.js", "Django", "MySQL", "Google OAuth 2.0", "Tailwind CSS"],
    description:
      "Full-stack academic task tracker with dual-login (Google OAuth + Django REST). Asynchronous data fetching with user-specific dashboards, real-time task status updates, and role-based access control.",
    highlight: "Real-time academic assignment tracking with secure auth",
    githubUrl: "https://github.com/srijanrao38",
  },
  {
    index: "02",
    title: "NutriVision AI",
    tags: ["Python", "CNN / EfficientNetB0", "YOLOv8", "Django", "USDA API"],
    description:
      "AI-powered food recognition and diet planner. Trained EfficientNetB0 + YOLOv8 for meal identification, automated nutrition tracking via USDA Food Database API, real-time visualization dashboards.",
    highlight: "Computer vision meets personalized nutrition",
    githubUrl: "https://github.com/srijanrao38",
  },
  {
    index: "03",
    title: "Stock Intelligence Portal",
    tags: [
      "Next.js 16",
      "Django 5",
      "JWT",
      "yfinance",
      "BeautifulSoup4",
      "Recharts",
    ],
    description:
      "Decoupled REST architecture (Service Layer Pattern) with IPO tracker, sentiment engine, 30-minute caching layer, NSE stock tracking, and CSV import for Groww/Zerodha portfolios.",
    highlight: "Financial analytics platform with intelligent caching",
    githubUrl: "https://github.com/srijanrao38",
  },
];
