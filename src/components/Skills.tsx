
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-orange-500",
      skills: ["React.js", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend", 
      color: "bg-orange-600",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Database",
      color: "bg-orange-400", 
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      color: "bg-orange-700",
      skills: ["Git", "Postman", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-warm-cream dark:from-background dark:to-charcoal overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-title-reveal">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 orange-gradient mx-auto mb-8 animate-expand-width"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg card-hover-enhanced bg-card/50 backdrop-blur-sm animate-slide-up-staggered overflow-hidden group" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 animate-pulse-glow relative z-10 shadow-lg`}>
                  <div className="w-6 h-6 bg-white rounded-full animate-inner-pulse"></div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-6 relative z-10 group-hover:text-orange-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="flex flex-col items-center animate-tech-entrance group/tech"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="transform transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:rotate-12">
                        <TechIcon name={skill} />
                      </div>
                      {skill === "React.js" && (
                        <div className="text-orange-500 text-lg mt-1 animate-bounce-gentle">🔥</div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-orange-400/50 transition-all duration-500 animate-border-glow"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced hover tooltip */}
        {hoveredSkill && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-2xl animate-tooltip-bounce z-50 border border-orange-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold">{hoveredSkill}</span>
            </div>
          </div>
        )}
        
        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-300/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-orange-500/25 rounded-full animate-float-fast"></div>
      </div>
    </section>
  );
};

export default Skills;
