
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
  const [isHovered, setIsHovered] = useState(false);

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
    setTimeout(() => setIsClicked(false), 800);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`group cursor-pointer ${className}`} onClick={handleClick}>
      <div 
        className={`relative w-16 h-16 flex items-center justify-center rounded-xl shadow-lg transform transition-all duration-300 ${
          isClicked 
            ? 'animate-bounce scale-125 rotate-12' 
            : isHovered
            ? 'scale-110 -translate-y-2'
            : 'hover:scale-105'
        }`}
        style={{ 
          backgroundColor: `${getIconColor(name)}10`,
          border: `2px solid ${getIconColor(name)}20`,
          boxShadow: isHovered 
            ? `0 20px 40px -10px ${getIconColor(name)}30, 0 0 20px ${getIconColor(name)}20`
            : `0 10px 30px -5px ${getIconColor(name)}15`
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className={`text-3xl transition-all duration-300 ${
            isClicked 
              ? 'scale-150 rotate-180' 
              : isHovered
              ? 'scale-125'
              : ''
          }`}
          style={{ 
            color: getIconColor(name),
            filter: isClicked 
              ? `drop-shadow(0 0 20px ${getIconColor(name)}) brightness(1.5)` 
              : isHovered
              ? `drop-shadow(0 0 15px ${getIconColor(name)}) brightness(1.3)`
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Click effect */}
        {isClicked && (
          <>
            <div 
              className="absolute inset-0 rounded-xl animate-ping"
              style={{ 
                backgroundColor: getIconColor(name),
                opacity: 0.3
              }}
            ></div>
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          </>
        )}

        {/* Hover glow effect */}
        {isHovered && (
          <div 
            className="absolute inset-0 rounded-xl opacity-30 animate-pulse"
            style={{ 
              backgroundColor: getIconColor(name),
            }}
          ></div>
        )}
      </div>
      
      <div className="mt-3 text-center">
        <span className={`text-sm font-semibold transition-all duration-300 ${
          isClicked 
            ? 'text-[#FF6B00] scale-110 font-bold' 
            : isHovered
            ? `scale-105 font-bold`
            : 'text-[#333]/70 dark:text-[#EDEDED]/70'
        }`}
        style={{
          color: isHovered && !isClicked ? getIconColor(name) : undefined
        }}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;
