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
    return IconComponent ? <IconComponent /> : <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500 rounded"></div>;
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
    
    return colorMap[iconName] || '#3B82F6';
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <div className={`group cursor-pointer ${className}`} onClick={handleClick}>
      <div 
        className={`relative w-16 h-16 flex flex-col items-center justify-center rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-6 ${
          isClicked ? 'scale-125 rotate-12' : ''
        }`}
        style={{ 
          backgroundColor: `${getIconColor(name)}15`,
          border: `2px solid ${getIconColor(name)}30`,
          boxShadow: isClicked 
            ? `0 0 40px ${getIconColor(name)}60, 0 0 80px ${getIconColor(name)}40`
            : `0 10px 30px -5px ${getIconColor(name)}25`
        }}
      >
        {/* Spectacular icon with enhanced effects */}
        <div 
          className={`text-2xl transition-all duration-700 relative z-10 ${
            isClicked ? 'animate-bounce' : 'group-hover:scale-125'
          }`}
          style={{ 
            color: getIconColor(name),
            filter: isClicked 
              ? `drop-shadow(0 0 20px ${getIconColor(name)}) brightness(1.8) saturate(1.5)` 
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Spectacular click effect - removed tooltip, enhanced visual feedback */}
        {isClicked && (
          <>
            {/* Explosive ring effect */}
            <div 
              className="absolute inset-0 rounded-2xl animate-ping"
              style={{ 
                background: `radial-gradient(circle, transparent 30%, ${getIconColor(name)}40 60%, ${getIconColor(name)}60 90%, transparent 100%)`,
                transform: 'scale(1.5)',
              }}
            />
            
            {/* Pulsing glow */}
            <div 
              className="absolute inset-0 rounded-2xl animate-pulse"
              style={{ 
                background: `radial-gradient(circle, ${getIconColor(name)}30 0%, ${getIconColor(name)}20 50%, transparent 100%)`,
                transform: 'scale(2)',
              }}
            />
            
            {/* Sparkling particles */}
            <div className="absolute -top-2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute -top-3 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute -top-2 right-1/3 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -right-2 top-1/2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute -left-2 top-1/3 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
            
            {/* Rotating energy ring */}
            <div 
              className="absolute inset-0 rounded-2xl animate-spin"
              style={{ 
                background: `conic-gradient(from 0deg, transparent, ${getIconColor(name)}60, transparent)`,
                animationDuration: '1s'
              }}
            />
          </>
        )}
        
        {/* Floating hover effect */}
        <div 
          className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
          style={{ 
            background: `radial-gradient(circle, transparent 40%, ${getIconColor(name)}20 70%, transparent 100%)`
          }}
        />
      </div>
      
      {/* Enhanced skill name */}
      <div className="mt-3 text-center">
        <span className={`text-xs font-bold transition-all duration-300 ${
          isClicked 
            ? 'text-blue-600 dark:text-orange-500 scale-110 animate-pulse' 
            : 'text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-orange-500'
        }`}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;