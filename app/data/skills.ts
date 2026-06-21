export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Python", "Django", "REST APIs", "JWT Auth"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    name: "AI / ML",
    skills: ["YOLOv8", "EfficientNetB0", "CNN", "scikit-learn basics"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];
