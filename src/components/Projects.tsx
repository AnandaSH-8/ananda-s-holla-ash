
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TaskFlow",
      subtitle: "Project Management Tool",
      description: "A Kanban-based project management system allowing task tracking, team collaboration, and deadline management.",
      stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      role: "Developed both frontend UI and backend APIs; implemented authentication and team-level access controls.",
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      subtitle: "Full Stack Application", 
      description: "Complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      stack: ["Vue.js", "Express.js", "MongoDB", "Vuetify"],
      role: "Built responsive frontend, REST APIs, database design, and integrated third-party payment gateway.",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat App",
      subtitle: "WebSocket Implementation",
      description: "Real-time messaging application with rooms, private messaging, online status, and message history.",
      stack: ["React", "NestJS", "Socket.io", "PostgreSQL"],
      role: "Implemented WebSocket connections, real-time features, and optimized for high concurrent users.",
      github: "#", 
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-blue-600 font-medium text-lg">{project.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">My Role:</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6 mb-4 text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="text-gray-600 text-sm">Project #{index + 1}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="w-full">
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
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">More projects available on my GitHub profile</p>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
