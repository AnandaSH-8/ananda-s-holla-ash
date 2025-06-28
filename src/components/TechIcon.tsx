
import { 
  SiReact, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiMui,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVercel,
  SiNetlify
} from 'react-icons/si';
import { useState } from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "" }: TechIconProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'React.js': SiReact,
      'Vue.js': SiVuedotjs,
      'Tailwind CSS': SiTailwindcss,
      'MUI': SiMui,
      'HTML': SiHtml5,
      'CSS': SiCss3,
      'JavaScript': SiJavascript,
      'Node.js': SiNodedotjs,
      'Express.js': SiExpress,
      'NestJS': SiNestjs,
      'PostgreSQL': SiPostgresql,
      'MongoDB': SiMongodb,
      'Git': SiGit,
      'Postman': SiPostman,
      'Vercel': SiVercel,
      'Netlify': SiNetlify,
      'Vuetify': SiVuedotjs,
      'REST APIs': SiNodedotjs,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : <div className="w-8 h-8 bg-[#FF6B00] rounded"></div>;
  };

  const getIconColor = (iconName: string) => {
    const colorMap: { [key: string]: string } = {
      'React.js': '#61DAFB',
      'Vue.js': '#4FC08D',
      'Tailwind CSS': '#06B6D4',
      'MUI': '#007FFF',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'JavaScript': '#F7DF1E',
      'Node.js': '#339933',
      'Express.js': '#000000',
      'NestJS': '#E0234E',
      'PostgreSQL': '#336791',
      'MongoDB': '#47A248',
      'Git': '#F05032',
      'Postman': '#FF6C37',
      'Vercel': '#000000',
      'Netlify': '#00C7B7',
    };
    
    return colorMap[iconName] || '#FF6B00';
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <div className={`group cursor-pointer ${className}`} onClick={handleClick}>
      <div 
        className={`relative w-16 h-16 flex items-center justify-center rounded-xl shadow-lg transform transition-all duration-300 ${
          isClicked ? 'animate-bounce scale-125 rotate-12' : 'hover:scale-105'
        }`}
        style={{ 
          backgroundColor: `${getIconColor(name)}10`,
          border: `2px solid ${getIconColor(name)}20`
        }}
      >
        <div 
          className={`text-3xl transition-all duration-300 ${
            isClicked ? 'scale-150' : ''
          }`}
          style={{ 
            color: getIconColor(name),
            filter: isClicked ? `drop-shadow(0 0 20px ${getIconColor(name)})` : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Click effect */}
        {isClicked && (
          <div 
            className="absolute inset-0 rounded-xl animate-ping"
            style={{ 
              backgroundColor: getIconColor(name),
              opacity: 0.3
            }}
          ></div>
        )}
      </div>
      
      <div className="mt-3 text-center">
        <span className={`text-sm font-semibold transition-colors duration-300 ${
          isClicked 
            ? 'text-[#FF6B00] scale-110' 
            : 'text-[#333]/70 dark:text-[#EDEDED]/70'
        }`}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;
