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
    
    return colorMap[iconName] || '#6B7280';
  };

  return (
    <div className={`group cursor-pointer ${className}`}>
      <div 
        className="relative w-12 h-12 flex flex-col items-center justify-center rounded-lg shadow-sm transform transition-all duration-300 hover:scale-125 hover:shadow-lg hover:-translate-y-1 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600"
        style={{ 
          borderLeft: `3px solid ${getIconColor(name)}`,
        }}
      >
        {/* Icon with enhanced hover effects */}
        <div 
          className="text-xl transition-all duration-300 group-hover:scale-125 relative z-10"
          style={{ 
            color: getIconColor(name),
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        >
          {getIcon(name)}
        </div>
        
        {/* Animated glow effect */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-300 animate-pulse"
          style={{ 
            backgroundColor: getIconColor(name),
            boxShadow: `0 0 20px ${getIconColor(name)}40`
          }}
        />
        
        {/* Subtle rotation on hover */}
        <div className="absolute inset-0 rounded-lg group-hover:rotate-3 transition-transform duration-300"></div>
      </div>
      
      {/* Skill name with enhanced typography */}
      <div className="mt-2 text-center">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 group-hover:font-semibold">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechIcon;