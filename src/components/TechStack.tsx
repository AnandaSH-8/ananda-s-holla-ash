import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  SiReact, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiMui,
  SiHtml,
  SiCss,
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
  SiRedis,
  SiDocker,
  SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

interface TechItem {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

const TechStack = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const techStack: TechItem[] = [
    // Frontend
    {
      name: 'React.js',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Building dynamic, component-based user interfaces with hooks, context, and modern React patterns.',
      category: 'Frontend'
    },
    {
      name: 'Vue.js',
      icon: SiVuedotjs,
      color: '#4FC08D',
      description: 'Creating reactive applications with Vue 3 composition API and state management.',
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      description: 'Type-safe development with advanced TypeScript features and strict type checking.',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      description: 'ES6+ features, async/await, closures, and modern JavaScript development.',
      category: 'Frontend'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      description: 'Utility-first CSS framework for rapid UI development and responsive design.',
      category: 'Frontend'
    },
    {
      name: 'Material-UI',
      icon: SiMui,
      color: '#007FFF',
      description: 'React component library implementing Google\'s Material Design principles.',
      category: 'Frontend'
    },
    {
      name: 'Vuetify',
      icon: SiVuedotjs,
      color: '#1867C0',
      description: 'Vue.js component framework with Material Design components.',
      category: 'Frontend'
    },
    {
      name: 'HTML5',
      icon: SiHtml,
      color: '#E34F26',
      description: 'Semantic HTML5 markup, accessibility best practices, and modern web standards.',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      icon: SiCss,
      color: '#1572B6',
      description: 'Advanced CSS3 features, animations, grid, flexbox, and responsive design.',
      category: 'Frontend'
    },

    // Backend
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      description: 'Server-side JavaScript runtime for building scalable network applications.',
      category: 'Backend'
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: '#000000',
      description: 'Fast, unopinionated web framework for Node.js with middleware and routing.',
      category: 'Backend'
    },
    {
      name: 'NestJS',
      icon: SiNestjs,
      color: '#E0234E',
      description: 'Progressive Node.js framework for building efficient and scalable server-side applications.',
      category: 'Backend'
    },

    // Database
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: '#4169E1',
      description: 'Advanced relational database with complex queries, indexing, and performance optimization.',
      category: 'Database'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      description: 'NoSQL document database for flexible, scalable data storage solutions.',
      category: 'Database'
    },

    // Tools
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      description: 'Version control with advanced Git workflows, branching strategies, and collaboration.',
      category: 'Tools'
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: '#FF6C37',
      description: 'API development and testing with automated testing and documentation.',
      category: 'Tools'
    },
    {
      name: 'Vercel',
      icon: SiVercel,
      color: '#000000',
      description: 'Frontend deployment platform with serverless functions and edge computing.',
      category: 'Tools'
    },
    {
      name: 'Netlify',
      icon: SiNetlify,
      color: '#00C7B7',
      description: 'JAMstack deployment platform with continuous deployment and form handling.',
      category: 'Tools'
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

  const TechCard = ({ tech, index }: { tech: TechItem; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: -200, y: -200 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className={`group relative rounded-xl p-[1px] transition-all duration-500 ${
          visibleItems.includes(index)
            ? 'animate-fade-in opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
        style={{
          animationDelay: `${index * 0.1}s`,
          background: hovered
            ? `conic-gradient(from ${pos.x}deg at ${pos.x}px ${pos.y}px, hsl(var(--primary)), hsl(var(--primary) / 0.3), hsl(var(--primary)))`
            : 'hsl(var(--border))',
        }}
      >
        <Card className="relative overflow-hidden rounded-[11px] border-0 bg-card/40 backdrop-blur-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
          {/* Spotlight follow-mouse */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.18), transparent 70%)`,
            }}
          />

          <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
            <div className="relative mb-4 p-4 rounded-2xl bg-muted/60 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <tech.icon
                className="w-16 h-16 transition-all duration-500"
                style={{
                  color: tech.color,
                  filter: hovered ? `drop-shadow(0 0 12px ${tech.color}80)` : 'none',
                }}
              />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {tech.name}
            </h3>

            <Badge variant="secondary" className="mb-1 text-xs font-medium">
              {tech.category}
            </Badge>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="tech-stack" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-primary/5 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-primary/3 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary/7 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-primary/5 rounded-full animate-float-bg-4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              className="transition-all duration-300"
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
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
