
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "TaskFlow",
      subtitle: "Project Management Tool",
      description: "A Kanban-based project management system allowing task tracking, team collaboration, and deadline management.",
      stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      role: "Developed both frontend UI and backend APIs; implemented authentication and team-level access controls.",
      github: "#",
      demo: "#",
      emoji: "📋"
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Full Stack Application", 
      description: "Complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      stack: ["Vue.js", "Express.js", "MongoDB", "Vuetify"],
      role: "Built responsive frontend, REST APIs, database design, and integrated third-party payment gateway.",
      github: "#",
      demo: "#",
      emoji: "🛒"
    },
    {
      title: "Real-time Chat App",
      subtitle: "WebSocket Implementation",
      description: "Real-time messaging application with rooms, private messaging, online status, and message history.",
      stack: ["React", "NestJS", "Socket.io", "PostgreSQL"],
      role: "Implemented WebSocket connections, real-time features, and optimized for high concurrent users.",
      github: "#", 
      demo: "#",
      emoji: "💬"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 orange-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl card-hover bg-card/50 backdrop-blur-sm animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl animate-bounce-in">{project.emoji}</span>
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      </div>
                      <p className="text-orange-500 font-medium text-lg">{project.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">My Role:</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-sm tech-bounce hover:bg-orange-100 dark:hover:bg-orange-900 hover:text-orange-800 dark:hover:text-orange-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className={`bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-lg p-6 mb-4 text-center transform transition-transform duration-300 ${
                      hoveredProject === index ? 'scale-105' : ''
                    }`}>
                      <div className="text-4xl mb-2">{project.emoji}</div>
                      <p className="text-muted-foreground text-sm">Project #{index + 1}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full orange-gradient hover:shadow-lg hover-scale transition-all duration-300">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover-scale transition-all duration-300">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-bounce-in">
          <p className="text-muted-foreground mb-4">More projects available on my GitHub profile</p>
          <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover-scale">
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
