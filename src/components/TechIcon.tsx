import { 
  SiReact, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiMui,
  SiHtml,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiFigma,
  SiFirebase
} from 'react-icons/si';
import { useState } from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "" }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'React.js': SiReact,
      'Vue.js': SiVuedotjs,
      'Tailwind CSS': SiTailwindcss,
      'MUI': SiMui,
      'HTML': SiHtml,
      'CSS': SiCss,
      'JavaScript': SiJavascript,
      'TypeScript': SiTypescript,
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
      'Redux': SiRedux,
      'GraphQL': SiGraphql,
      'Docker': SiDocker,
      'Firebase': SiFirebase,
      'Figma': SiFigma,
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent /> : <div className="w-6 h-6 bg-gray-400 rounded"></div>;
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
      'TypeScript': '#3178C6',
      'Node.js': '#339933',
      'Express.js': '#68A063',
      'NestJS': '#E0234E',
      'PostgreSQL': '#336791',
      'MongoDB': '#47A248',
      'Git': '#F05032',
      'Postman': '#FF6C37',
      'Vercel': '#000000',
      'Netlify': '#00C7B7',
      'Redux': '#764ABC',
      'GraphQL': '#E10098',
      'Docker': '#2496ED',
      'Firebase': '#FFCA28',
      'Figma': '#F24E1E',
    };
    
    return colorMap[iconName] || '#6B7280';
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
    >
      <div 
        className={`relative w-14 h-14 flex flex-col items-center justify-center rounded-xl shadow-lg transform transition-all duration-500 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 ${
          isHovered ? 'scale-125 -translate-y-3 shadow-2xl' : 'hover:scale-110 hover:-translate-y-1'
        } ${isClicked ? 'animate-bounce' : ''}`}
        style={{ 
          boxShadow: isHovered 
            ? `0 20px 40px -10px ${getIconColor(name)}40, 0 0 30px ${getIconColor(name)}30`
            : '0 10px 25px -5px rgba(0,0,0,0.1)',
          borderColor: isHovered ? getIconColor(name) : undefined,
          borderWidth: isHovered ? '2px' : '1px'
        }}
      >
        {/* Animated background gradient on hover */}
        <div 
          className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-20' : ''
          }`}
          style={{ 
            background: `linear-gradient(135deg, ${getIconColor(name)}20, ${getIconColor(name)}40)`
          }}
        />
        
        {/* Icon with enhanced effects */}
        <div 
          className={`text-2xl transition-all duration-500 relative z-10 ${
            isClicked ? 'animate-pulse scale-125' : ''
          } ${isHovered ? 'scale-125' : ''}`}
          style={{ 
            color: getIconColor(name),
            filter: isHovered 
              ? `drop-shadow(0 0 15px ${getIconColor(name)}) brightness(1.3)` 
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            transform: isHovered ? 'rotateY(15deg)' : 'rotateY(0deg)'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Orbiting particles on hover */}
        {isHovered && (
          <div className="absolute inset-0">
            <div 
              className="absolute w-1.5 h-1.5 rounded-full animate-skills-icon-orbit"
              style={{ 
                backgroundColor: getIconColor(name),
                top: '10%',
                left: '10%'
              }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full animate-skills-icon-orbit"
              style={{ 
                backgroundColor: getIconColor(name),
                top: '10%',
                right: '10%',
                animationDelay: '0.5s'
              }}
            />
            <div 
              className="absolute w-1.5 h-1.5 rounded-full animate-skills-icon-orbit"
              style={{ 
                backgroundColor: getIconColor(name),
                bottom: '10%',
                left: '10%',
                animationDelay: '1s'
              }}
            />
            <div 
              className="absolute w-1 h-1 rounded-full animate-skills-icon-orbit"
              style={{ 
                backgroundColor: getIconColor(name),
                bottom: '10%',
                right: '10%',
                animationDelay: '1.5s'
              }}
            />
          </div>
        )}
        
        {/* Pulsing glow effect when clicked */}
        {isClicked && (
          <div 
            className="absolute inset-0 rounded-xl animate-ping"
            style={{ 
              backgroundColor: getIconColor(name),
              opacity: 0.3
            }}
          />
        )}
        
        {/* Skill level indicator */}
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-700 transition-all duration-300 ${
          isHovered ? 'scale-125' : ''
        }`} style={{ backgroundColor: getIconColor(name) }}>
          <div className="w-full h-full rounded-full animate-pulse" style={{ backgroundColor: getIconColor(name) }}></div>
        </div>
      </div>
      
      {/* Enhanced skill name with better typography */}
      <div className="mt-3 text-center">
        <span className={`text-xs font-semibold transition-all duration-300 block ${
          isHovered 
            ? 'text-gray-900 dark:text-white scale-110 font-bold' 
            : 'text-gray-600 dark:text-gray-400'
        } ${isClicked ? 'animate-bounce' : ''}`}>
          {name}
        </span>
        
        {/* Proficiency level indicator */}
        <div className={`mt-1 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className="h-full rounded-full transition-all duration-1000"
            style={{ 
              backgroundColor: getIconColor(name),
              width: isHovered ? '85%' : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechIcon;