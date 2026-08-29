import {
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { useState } from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "" }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      "React.js": SiReact,
      "Next.js": SiNextdotjs,
      "Vue.js": SiVuedotjs,
      "Tailwind CSS": SiTailwindcss,
      JavaScript: SiJavascript,
      TypeScript: SiTypescript,
      "Node.js": SiNodedotjs,
      "Express.js": SiExpress,
      NestJS: SiNestjs,
      PostgreSQL: SiPostgresql,
      MongoDB: SiMongodb,
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : <div className="w-6 h-6 bg-gray-400 rounded"></div>;
  };

  const getIconColor = (iconName: string) => {
    const colorMap: { [key: string]: string } = {
      "React.js": "#61DAFB",
      "Next.js": "#000000",
      "Vue.js": "#4FC08D",
      "Tailwind CSS": "#06B6D4",
      JavaScript: "#F7DF1E",
      TypeScript: "#3178C6",
      "Node.js": "#339933",
      "Express.js": "#68A063",
      NestJS: "#E0234E",
      PostgreSQL: "#336791",
      MongoDB: "#47A248",
    };

    return colorMap[iconName] || "#6B7280";
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <div
      className={`group cursor-pointer ${className}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></div>
  );
};

export default TechIcon;
