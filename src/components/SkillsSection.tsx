import Heading from "./ui/Heading";
import { useTranslation } from "react-i18next";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Astro.js",
  "Redux Toolkit",
  "Zustand",
  "TailwindCSS / TailwindUI",
  "Material UI",
  "shadcn/ui",
  "three.js / react-three-fiber",
  "Figma",
  "Nest.js",
];

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t("skills.title")}</Heading>
      <div className="space-y-2">
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>
    </>
  );
}
