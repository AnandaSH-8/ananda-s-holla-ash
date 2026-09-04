import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react"; // Star, Users, Calendar
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";
import assetsDashboard from "@/assets/assetpulse.png";
import LazyImage from "@/components/LazyImage";

const Projects = () => {
  const [, setHoveredProject] = useState<number | null>(null); //hoveredProject

  const projects = [
    {
      title: "AssetPulse",
      subtitle: "Personal Finance Dashboard",
      description:
        "A full-stack personal finance app to track liquid assets, investments, and monthly portfolio growth with interactive analytics, glass-morphism UI, secure authentication, and row-level data isolation — built as a production-grade SaaS-style experience.",
      features: [
        "Secure Authentication",
        "Interactive Dashboard",
        "Asset & Category Management",
        "Advanced Analytics",
        "Period Comparison",
        "Calculation Transparency",
        "Glass-Morphism Design",
        "Row-Level Security",
        "Edge Function APIs",
        "Fully Responsive",
      ],
      stack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "Recharts",
        "TanStack Query",
        "Zod",
        "Supabase",
        "PostgreSQL",
        "Deno Edge Functions",
        "JWT",
      ],
      role: "Architected frontend, backend, PostgreSQL schema with RLS policies, three Supabase Edge Functions, custom design system, and production deployment.",
      github: "https://github.com/AnandaSH-8/AssetPulse",
      demo: "https://ashets-pulse.vercel.app/",
      image: assetsDashboard,
      // stats: { stars: 18, contributors: 1, lastUpdate: "Just now" },
      // status: "Active Development",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-gray-50/70 to-white/60 dark:from-gray-900/70 dark:to-gray-800/60 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 heading-rule mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise through real-world applications that solve complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-border shadow-xl hover:shadow-2xl bg-card overflow-hidden animate-slide-up group transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Project Image */}
                  <div className="lg:col-span-2 relative overflow-hidden">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      wrapperClassName="w-full h-64 lg:h-full"
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 dark:from-orange-600/20 dark:to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      {/* <Badge
                        variant="secondary"
                        className={
                          project.status === "Production Ready"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : project.status === "Active Development"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        }
                      >
                        {project.status}
                      </Badge> */}
                    </div>

                    {/* Project Stats */}
                    {/* <div className="absolute bottom-4 left-4 flex space-x-4 text-white">
                      <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{project.stats.contributors}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.stats.lastUpdate}</span>
                      </div>
                    </div> */}
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors duration-300 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 dark:text-orange-500 font-medium text-lg">{project.subtitle}</p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, fi) => (
                          <div key={fi} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-blue-500 dark:bg-orange-500 rounded-full mr-2 shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* My Role */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">My Role:</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.role}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, ti) => (
                          <Badge
                            key={ti}
                            variant="secondary"
                            className="text-sm hover:bg-blue-100 dark:hover:bg-orange-900 hover:text-blue-800 dark:hover:text-orange-200 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-orange-600 dark:to-red-600 hover:shadow-lg hover-scale transition-all duration-300 text-white"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500 hover-scale transition-all duration-300"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-bounce-in">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Want to see more projects or discuss a collaboration?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-orange-600 dark:to-red-600 hover:shadow-lg hover-scale transition-all duration-300 text-white"
            >
              <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 h-5 w-5" />
                View All Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover-scale transition-all duration-300"
            >
              <a href="#contact">Let's Work Together</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
