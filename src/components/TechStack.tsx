import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  SiReact, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiMui,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiVuetify,
  SiRedis,
  SiDocker,
  SiAws,
  SiFigma,
  SiVscode
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  experience: string;
  projects: number;
  description: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  proficiency: number; // 1-100
}

const TechStack = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack: TechItem[] = [
    // Frontend
    {
      name: 'React.js',
      icon: SiReact,
      color: '#61DAFB',
      experience: '2+ Years',
      projects: 8,
      description: 'Building dynamic, component-based user interfaces with hooks, context, and modern React patterns.',
      category: 'Frontend',
      proficiency: 90
    },
    {
      name: 'Vue.js',
      icon: SiVuedotjs,
      color: '#4FC08D',
      experience: '1.5+ Years',
      projects: 5,
      description: 'Creating reactive applications with Vue 3 composition API and state management.',
      category: 'Frontend',
      proficiency: 85
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      experience: '2+ Years',
      projects: 10,
      description: 'Type-safe development with advanced TypeScript features and strict type checking.',
      category: 'Frontend',
      proficiency: 88
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      experience: '3+ Years',
      projects: 15,
      description: 'ES6+ features, async/await, closures, and modern JavaScript development.',
      category: 'Frontend',
      proficiency: 95
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      experience: '2+ Years',
      projects: 12,
      description: 'Utility-first CSS framework for rapid UI development and responsive design.',
      category: 'Frontend',
      proficiency: 92
    },
    {
      name: 'Material-UI',
      icon: SiMui,
      color: '#007FFF',
      experience: '1+ Year',
      projects: 4,
      description: 'React component library implementing Google\'s Material Design principles.',
      category: 'Frontend',
      proficiency: 80
    },
    {
      name: 'Vuetify',
      icon: SiVuetify,
      color: '#1867C0',
      experience: '1+ Year',
      projects: 3,
      description: 'Vue.js component framework with Material Design components.',
      category: 'Frontend',
      proficiency: 78
    },
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
      experience: '3+ Years',
      projects: 20,
      description: 'Semantic HTML5 markup, accessibility best practices, and modern web standards.',
      category: 'Frontend',
      proficiency: 95
    },
    {
      name: 'CSS3',
      icon: SiCss3,
      color: '#1572B6',
      experience: '3+ Years',
      projects: 18,
      description: 'Advanced CSS3 features, animations, grid, flexbox, and responsive design.',
      category: 'Frontend',
      proficiency: 90
    },

    // Backend
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      experience: '2.5+ Years',
      projects: 10,
      description: 'Server-side JavaScript runtime for building scalable network applications.',
      category: 'Backend',
      proficiency: 88
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: '#68A063',
      experience: '2+ Years',
      projects: 8,
      description: 'Fast, unopinionated web framework for Node.js with middleware and routing.',
      category: 'Backend',
      proficiency: 85
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
      color: '#E0234E',
      experience: '1+ Year',
      projects: 3,
      description: 'Progressive Node.js framework for building efficient and scalable server-side applications.',
      category: 'Backend',
      proficiency: 75
    },

    // Database
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: '#336791',
      experience: '2+ Years',
      projects: 6,
      description: 'Advanced relational database with complex queries, indexing, and performance optimization.',
      category: 'Database',
      proficiency: 82
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      experience: '1.5+ Years',
      projects: 5,
      description: 'NoSQL document database for flexible, scalable data storage solutions.',
      category: 'Database',
      proficiency: 80
    },
    {
      name: 'Redis',
      icon: SiRedis,
      color: '#DC382D',
      experience: '1+ Year',
      projects: 3,
      description: 'In-memory data structure store for caching and session management.',
      category: 'Database',
      proficiency: 70
    },

    // Tools
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      experience: '3+ Years',
      projects: 25,
      description: 'Version control with advanced Git workflows, branching strategies, and collaboration.',
      category: 'Tools',
      proficiency: 90
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: '#FF6C37',
      experience: '2+ Years',
      projects: 15,
      description: 'API development and testing with automated testing and documentation.',
      category: 'Tools',
      proficiency: 85
    },
    {
      name: 'Vercel',
      icon: SiVercel,
      color: '#000000',
      experience: '1.5+ Years',
      projects: 8,
      description: 'Frontend deployment platform with serverless functions and edge computing.',
      category: 'Tools',
      proficiency: 80
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
      color: '#00C7B7',
      experience: '1+ Year',
      projects: 6,
      description: 'JAMstack deployment platform with continuous deployment and form handling.',
      category: 'Tools',
      proficiency: 78
    },
    {
      name: 'Docker',
      icon: SiDocker,
      color: '#2496ED',
      experience: '1+ Year',
      projects: 4,
      description: 'Containerization platform for consistent development and deployment environments.',
      category: 'Tools',
      proficiency: 72
    },
    {
      name: 'VS Code',
      icon: SiVscode,
      color: '#007ACC',
      experience: '3+ Years',
      projects: 30,
      description: 'Primary code editor with extensions, debugging, and integrated terminal.',
      category: 'Tools',
      proficiency: 95
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredTech = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  useEffect(() => {
    const timers = filteredTech.map((_, index) => 
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 100)
    );

    return () => {
      timers.forEach(clearTimeout);
      setVisibleItems([]);
    };
  }, [selectedCategory]);

  const TechModal = ({ tech }: { tech: TechItem }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <TechCard tech={tech} index={0} />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div 
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${tech.color}20` }}
            >
              <tech.icon 
                className="w-8 h-8" 
                style={{ color: tech.color }} 
              />
            </div>
            {tech.name}
          </DialogTitle>
          <DialogDescription className="space-y-4">
            <p className="text-base leading-relaxed">{tech.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-sm text-gray-900 dark:text-white">Experience</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tech.experience}</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900 dark:text-white">Projects</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tech.projects} completed</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-sm text-gray-900 dark:text-white">Proficiency</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tech.proficiency}%</p>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{ 
                    backgroundColor: tech.color,
                    width: `${tech.proficiency}%`
                  }}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );

  const TechCard = ({ tech, index }: { tech: TechItem; index: number }) => (
    <Card
      className={`group relative overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
        visibleItems.includes(index) 
          ? 'animate-fade-in opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: hoveredTech === tech.name 
          ? `0 25px 50px -10px ${tech.color}40` 
          : undefined
      }}
      onMouseEnter={() => setHoveredTech(tech.name)}
      onMouseLeave={() => setHoveredTech(null)}
    >
      {/* Glowing border effect */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
        style={{ 
          background: `linear-gradient(45deg, ${tech.color}20, transparent, ${tech.color}20)`,
          padding: '2px'
        }}
      >
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg"></div>
      </div>

      <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
        {/* Tech Icon */}
        <div 
          className={`relative mb-4 p-4 rounded-2xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 ${
            hoveredTech === tech.name ? 'animate-bounce' : ''
          }`}
          style={{ 
            backgroundColor: `${tech.color}15`,
            boxShadow: hoveredTech === tech.name 
              ? `0 0 30px ${tech.color}50` 
              : `0 10px 25px ${tech.color}20`
          }}
        >
          <tech.icon 
            className="w-16 h-16 transition-all duration-500" 
            style={{ 
              color: tech.color,
              filter: hoveredTech === tech.name 
                ? `drop-shadow(0 0 15px ${tech.color})` 
                : 'none'
            }} 
          />
          
          {/* Orbiting particles on hover */}
          {hoveredTech === tech.name && (
            <div className="absolute inset-0">
              <div 
                className="absolute w-2 h-2 rounded-full animate-skills-icon-orbit"
                style={{ 
                  backgroundColor: tech.color,
                  top: '10%',
                  left: '10%'
                }}
              />
              <div 
                className="absolute w-1.5 h-1.5 rounded-full animate-skills-icon-orbit"
                style={{ 
                  backgroundColor: tech.color,
                  top: '10%',
                  right: '10%',
                  animationDelay: '0.5s'
                }}
              />
              <div 
                className="absolute w-2 h-2 rounded-full animate-skills-icon-orbit"
                style={{ 
                  backgroundColor: tech.color,
                  bottom: '10%',
                  left: '10%',
                  animationDelay: '1s'
                }}
              />
              <div 
                className="absolute w-1.5 h-1.5 rounded-full animate-skills-icon-orbit"
                style={{ 
                  backgroundColor: tech.color,
                  bottom: '10%',
                  right: '10%',
                  animationDelay: '1.5s'
                }}
              />
            </div>
          )}
        </div>

        {/* Tech Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
            style={{ 
              backgroundImage: hoveredTech === tech.name 
                ? `linear-gradient(45deg, ${tech.color}, ${tech.color}80)` 
                : undefined
            }}>
          {tech.name}
        </h3>

        {/* Experience Badge */}
        <Badge 
          variant="secondary" 
          className="mb-3 text-xs font-medium transition-all duration-300"
          style={{ 
            backgroundColor: hoveredTech === tech.name ? `${tech.color}20` : undefined,
            color: hoveredTech === tech.name ? tech.color : undefined,
            borderColor: hoveredTech === tech.name ? tech.color : undefined
          }}
        >
          {tech.experience}
        </Badge>

        {/* Projects Count */}
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="font-semibold" style={{ color: hoveredTech === tech.name ? tech.color : undefined }}>
            {tech.projects}
          </span> projects
        </div>

        {/* Proficiency Bar */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Proficiency</span>
            <span className="text-xs font-bold" style={{ color: tech.color }}>{tech.proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                backgroundColor: tech.color,
                width: hoveredTech === tech.name ? `${tech.proficiency}%` : '0%',
                boxShadow: hoveredTech === tech.name ? `0 0 10px ${tech.color}50` : 'none'
              }}
            />
          </div>
        </div>

        {/* Hover overlay for click hint */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center pb-4`}>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full">
            Click for details
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-400/10 dark:bg-orange-400/10 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-purple-400/8 dark:bg-red-400/8 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-500/12 dark:bg-yellow-500/12 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-indigo-400/10 dark:bg-pink-400/10 rounded-full animate-float-bg-4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies I use to build modern, scalable, and efficient applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-red-500 text-white shadow-lg'
                  : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500'
              }`}
            >
              {category}
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs"
              >
                {category === 'All' ? techStack.length : techStack.filter(t => t.category === category).length}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredTech.map((tech, index) => (
            <TechModal key={tech.name} tech={tech} />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 max-w-4xl mx-auto border border-blue-200/50 dark:border-orange-500/30 shadow-2xl animate-bounce-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-2">
                {techStack.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-yellow-500 dark:to-orange-500 bg-clip-text text-transparent mb-2">
                {techStack.reduce((sum, tech) => sum + tech.projects, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-red-500 dark:to-pink-500 bg-clip-text text-transparent mb-2">
                2.7+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-pink-500 dark:to-purple-500 bg-clip-text text-transparent mb-2">
                {Math.round(techStack.reduce((sum, tech) => sum + tech.proficiency, 0) / techStack.length)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Avg Proficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;