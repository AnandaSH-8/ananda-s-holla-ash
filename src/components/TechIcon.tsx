
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
    return IconComponent ? <IconComponent /> : <div className="w-6 h-6 bg-orange-500 rounded"></div>;
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
    <div className={`tech-icon-enhanced group cursor-pointer ${className}`}>
      <div 
        className="relative w-16 h-16 flex items-center justify-center rounded-xl shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl animate-icon-float"
        style={{ 
          backgroundColor: `${getIconColor(name)}15`,
          border: `2px solid ${getIconColor(name)}30`
        }}
      >
        {/* Glowing background effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse"
          style={{ 
            background: `radial-gradient(circle, ${getIconColor(name)}20 0%, transparent 70%)`,
            filter: 'blur(8px)'
          }}
        ></div>
        
        {/* Main icon */}
        <div 
          className="text-3xl transition-all duration-500 group-hover:scale-110 relative z-10 animate-icon-breathe"
          style={{ color: getIconColor(name) }}
        >
          {getIcon(name)}
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle-1 transition-opacity duration-300"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle-2 transition-opacity duration-300"></div>
        <div className="absolute top-1 left-1 w-1 h-1 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 animate-sparkle-3 transition-opacity duration-300"></div>
        
        {/* Animated border ring */}
        <div 
          className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-spin"
          style={{ borderColor: `${getIconColor(name)}60` }}
        ></div>
      </div>
      
      <div className="mt-3 text-center">
        <span className="text-xs font-medium text-muted-foreground group-hover:text-orange-500 transition-all duration-300 group-hover:font-bold">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;
