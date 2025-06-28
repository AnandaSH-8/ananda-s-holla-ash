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
    setTimeout(() => setIsClicked(false), 1500);
  };

  return (
    <div className={`group cursor-pointer ${className}`} onClick={handleClick}>
      <div 
        className={`relative w-16 h-16 flex items-center justify-center rounded-xl shadow-lg transform transition-all duration-300 ${
          isClicked ? 'scale-110' : 'hover:scale-105'
        }`}
        style={{ 
          backgroundColor: `${getIconColor(name)}10`,
          border: `2px solid ${getIconColor(name)}20`,
          boxShadow: isClicked 
            ? `0 0 30px ${getIconColor(name)}50, 0 0 60px ${getIconColor(name)}30`
            : `0 10px 30px -5px ${getIconColor(name)}15`
        }}
      >
        <div 
          className={`text-3xl transition-all duration-500 relative z-10 ${
            isClicked ? 'animate-pulse' : ''
          }`}
          style={{ 
            color: getIconColor(name),
            filter: isClicked 
              ? `drop-shadow(0 0 20px ${getIconColor(name)}) brightness(1.5)` 
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Fire flame effect when clicked */}
        {isClicked && (
          <>
            {/* Outer flame */}
            <div 
              className="absolute inset-0 rounded-xl animate-flame-outer"
              style={{ 
                background: `radial-gradient(ellipse at center, transparent 30%, ${getIconColor(name)}20 60%, ${getIconColor(name)}40 90%, transparent 100%)`,
                transform: 'scaleY(1.5) scaleX(0.8)',
                transformOrigin: 'bottom center'
              }}
            />
            
            {/* Middle flame */}
            <div 
              className="absolute inset-1 rounded-xl animate-flame-middle"
              style={{ 
                background: `radial-gradient(ellipse at center, transparent 40%, ${getIconColor(name)}30 70%, ${getIconColor(name)}60 90%, transparent 100%)`,
                transform: 'scaleY(1.3) scaleX(0.9)',
                transformOrigin: 'bottom center'
              }}
            />
            
            {/* Inner flame */}
            <div 
              className="absolute inset-2 rounded-lg animate-flame-inner"
              style={{ 
                background: `radial-gradient(ellipse at center, ${getIconColor(name)}60 30%, ${getIconColor(name)}80 60%, transparent 90%)`,
                transform: 'scaleY(1.1) scaleX(0.95)',
                transformOrigin: 'bottom center'
              }}
            />
            
            {/* Sparks */}
            <div className="absolute -top-2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-sparks-dance" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute -top-3 left-1/3 w-0.5 h-0.5 bg-orange-400 rounded-full animate-sparks-dance" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute -top-2 right-1/3 w-0.5 h-0.5 bg-red-400 rounded-full animate-sparks-dance" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Heat shimmer effect */}
            <div 
              className="absolute -inset-4 rounded-xl animate-heat-shimmer"
              style={{ 
                background: `linear-gradient(transparent 0%, ${getIconColor(name)}05 50%, transparent 100%)`,
                filter: 'blur(2px)'
              }}
            />
          </>
        )}
      </div>
      
      <div className="mt-3 text-center">
        <span className={`text-sm font-semibold transition-all duration-300 ${
          isClicked 
            ? 'text-[#FF6B00] scale-110 font-bold animate-letter-burn' 
            : 'text-[#333]/70 dark:text-[#EDEDED]/70'
        }`}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;
