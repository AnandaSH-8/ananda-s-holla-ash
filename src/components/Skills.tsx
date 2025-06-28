
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Staggered animation entrance
    const timers = skillCategories.map((_, index) => 
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200)
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
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-white via-[#FFF4E6] to-orange-50 dark:from-[#1A1A2E] dark:via-[#2E2E2E] dark:to-[#1A1A2E] relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-[#FF6B00]/20 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-[#FFA500]/15 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-[#FF8C00]/25 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-[#FF4500]/20 rounded-full animate-float-bg-4"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#FFD700]/30 rounded-full animate-float-bg-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20 animate-skills-header-entrance">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#333] dark:text-[#EDEDED] mb-6 animate-skills-title-reveal">
            Skills & <span className="saffron-gradient-text">Tech Stack</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF6B00] to-[#FFA500] mx-auto mb-10 animate-skills-underline"></div>
          <p className="text-xl md:text-2xl text-[#333]/70 dark:text-[#EDEDED]/70 max-w-3xl mx-auto animate-skills-subtitle leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life with precision and creativity
          </p>
        </div>
        
        {/* Enhanced skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-2xl card-hover-3d bg-white/80 dark:bg-[#2E2E2E]/80 backdrop-blur-sm overflow-hidden group relative transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'animate-skills-card-entrance opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: `0 20px 40px -10px ${category.glowColor}20`
              }}
            >
              <CardContent className="p-8 relative">
                {/* Dynamic background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${category.glowColor}10 0%, transparent 70%)`
                  }}
                ></div>
                
                {/* Category icon with 3D effect */}
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 animate-category-icon-3d relative z-10 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                     style={{ 
                       boxShadow: `0 10px 30px -5px ${category.glowColor}40`,
                       filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                     }}>
                  <div className="w-8 h-8 bg-white/90 rounded-xl animate-icon-inner-pulse shadow-inner"></div>
                  
                  {/* Glowing ring effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-icon-glow-ring"
                    style={{ borderColor: `${category.glowColor}80` }}
                  ></div>
                </div>
                
                <h3 className="text-2xl font-black text-[#333] dark:text-[#EDEDED] mb-8 relative z-10 group-hover:text-[#FF6B00] transition-colors duration-300">
                  {category.title}
                </h3>
                
                {/* Enhanced tech icons grid */}
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="flex flex-col items-center animate-tech-icon-entrance group/tech"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="transform transition-all duration-500 group-hover/tech:scale-125 group-hover/tech:rotate-360 group-hover/tech:-translate-y-2">
                        <TechIcon name={skill} />
                      </div>
                      
                      {/* Special fire indicator for React */}
                      {skill === "React.js" && (
                        <div className="text-[#FF6B00] text-lg mt-2 animate-react-fire-pulse">🔥</div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Animated border with glow effect */}
                <div 
                  className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#FF6B00]/50 transition-all duration-500 animate-card-border-glow"
                  style={{ 
                    boxShadow: `inset 0 0 0 2px transparent, inset 0 0 20px ${category.glowColor}20`
                  }}
                ></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced 3D hover tooltip */}
        {hoveredSkill && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF6B00] to-[#FFA500] text-white px-8 py-4 rounded-2xl shadow-2xl animate-tooltip-3d-entrance z-50 border-2 border-white/20 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold text-lg">{hoveredSkill}</span>
              <div className="w-2 h-2 bg-white/70 rounded-full animate-ping"></div>
            </div>
            
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-[#FF6B00]"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
