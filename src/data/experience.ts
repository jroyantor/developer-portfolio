export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  image: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Meta",
    role: "Senior Software Engineer",
    duration: "Nov 2024 – Present",
    description: "Leading software system enhancements, maintaining secure financial IT infrastructure, and supporting digital banking innovations.",
    image: "/images/meta.png"
  },
  {
    company: "Google",
    role: "Software Engineer II",
    duration: "Nov 2023 – Nov 2024",
    description: "Developed scalable web apps using Laravel and Vue.js, contributed to Agile teams, and integrated third-party APIs for dynamic features.",
    image: "/images/google.png"
  }
];
