
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Simple staggered entrance
    const timers = skillCategories.map((_, index) => 
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 100)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-gradient-to-br from-[#FF6B00] to-[#FFA500]",
      glowColor: "#FF6B00",
      skills: ["React.js", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend", 
      color: "bg-gradient-to-br from-[#FFA500] to-[#FFD700]",
      glowColor: "#FFA500",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Database",
      color: "bg-gradient-to-br from-[#FF8C00] to-[#FF6B00]",
      glowColor: "#FF8C00",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      color: "bg-gradient-to-br from-[#FF4500] to-[#FF6B00]",
      glowColor: "#FF4500",
      skills: ["Git", "Postman", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white via-[#FFF4E6] to-orange-50 dark:from-[#1A1A2E] dark:via-[#2E2E2E] dark:to-[#1A1A2E] relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FF6B00]/20 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#FFA500]/15 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-[#FF8C00]/25 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-[#FF4500]/20 rounded-full animate-float-bg-4"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#333] dark:text-[#EDEDED] mb-6">
            Skills & <span className="saffron-gradient-text">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#FFA500] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-[#333]/70 dark:text-[#EDEDED]/70 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-xl hover:shadow-2xl bg-white/90 dark:bg-[#2E2E2E]/90 backdrop-blur-sm overflow-hidden group relative transform transition-all duration-300 hover:scale-105 ${
                visibleCards.includes(index) 
                  ? 'animate-fade-in opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 10px 30px -5px ${category.glowColor}15`
              }}
            >
              <CardContent className="p-6 relative">
                {/* Category icon */}
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300`}>
                  <div className="w-6 h-6 bg-white/90 rounded-lg"></div>
                </div>
                
                <h3 className="text-xl font-bold text-[#333] dark:text-[#EDEDED] mb-6 transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Tech icons grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="flex flex-col items-center"
                    >
                      <TechIcon name={skill} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Hover tooltip */}
        {hoveredSkill && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white px-6 py-3 rounded-xl shadow-xl animate-fade-in z-50">
            <span className="font-semibold">{hoveredSkill}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
