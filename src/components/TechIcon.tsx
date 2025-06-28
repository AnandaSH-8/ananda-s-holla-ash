
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

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "" }: TechIconProps) => {
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

  return (
    <div className={`tech-icon-3d-enhanced group cursor-pointer relative ${className}`}>
      <div 
        className="relative w-20 h-20 flex items-center justify-center rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-150 group-hover:rotate-360 group-hover:shadow-3xl animate-tech-icon-float perspective-1000"
        style={{ 
          backgroundColor: `${getIconColor(name)}15`,
          border: `3px solid ${getIconColor(name)}30`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 3D depth layers */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-30 transform translate-z-[-4px]"
          style={{ 
            backgroundColor: getIconColor(name),
            filter: 'blur(2px)'
          }}
        ></div>
        
        {/* Glowing aura effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-tech-glow-aura"
          style={{ 
            background: `radial-gradient(circle, ${getIconColor(name)}30 0%, transparent 70%)`,
            filter: 'blur(10px)',
            transform: 'scale(1.5)'
          }}
        ></div>
        
        {/* Main icon container */}
        <div 
          className="text-4xl transition-all duration-700 group-hover:scale-125 relative z-10 animate-tech-icon-breathe transform-gpu"
          style={{ 
            color: getIconColor(name),
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            transformStyle: 'preserve-3d'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Enhanced sparkle effects */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#FFA500] rounded-full opacity-0 group-hover:opacity-100 animate-tech-sparkle-1 transition-opacity duration-300"></div>
        <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 bg-[#FF6B00] rounded-full opacity-0 group-hover:opacity-100 animate-tech-sparkle-2 transition-opacity duration-300"></div>
        <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 animate-tech-sparkle-3 transition-opacity duration-300"></div>
        
        {/* 3D rotating border ring */}
        <div 
          className="absolute inset-0 rounded-2xl border-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-tech-border-spin-3d"
          style={{ 
            borderColor: `${getIconColor(name)}80`,
            borderStyle: 'dashed',
            transform: 'rotateX(45deg) rotateY(45deg)'
          }}
        ></div>
        
        {/* Inner glow pulse */}
        <div 
          className="absolute inset-2 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-tech-inner-glow"
          style={{ 
            background: `linear-gradient(45deg, ${getIconColor(name)}20, transparent, ${getIconColor(name)}20)`
          }}
        ></div>
      </div>
      
      {/* Enhanced name label */}
      <div className="mt-4 text-center transform transition-all duration-500 group-hover:scale-110">
        <span className="text-sm font-bold text-[#333]/70 dark:text-[#EDEDED]/70 group-hover:text-[#FF6B00] transition-all duration-300 group-hover:text-base group-hover:font-black">
          {name}
        </span>
      </div>
      
      {/* 3D hover tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div 
          className="bg-gradient-to-r text-white px-4 py-2 rounded-xl shadow-2xl text-xs font-bold whitespace-nowrap border-2 border-white/20"
          style={{ 
            background: `linear-gradient(135deg, ${getIconColor(name)}, ${getIconColor(name)}CC)`
          }}
        >
          Click to explore {name}
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent"
            style={{ borderTopColor: getIconColor(name) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TechIcon;
