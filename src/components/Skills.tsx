import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Staggered entrance animation
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
      icon: "🎨",
      gradient: "from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500",
      skills: ["React.js", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend", 
      icon: "⚙️",
      gradient: "from-cyan-500 to-blue-600 dark:from-red-500 dark:to-orange-600",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Database",
      icon: "🗄️",
      gradient: "from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-yellow-600",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      gradient: "from-indigo-500 to-purple-500 dark:from-yellow-500 dark:to-orange-500",
      skills: ["Git", "Postman", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 dark:bg-orange-400/20 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400/15 dark:bg-red-400/15 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-blue-500/25 dark:bg-orange-500/25 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-indigo-400/20 dark:bg-yellow-400/20 rounded-full animate-float-bg-4"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section with enhanced animations */}
        <div className="text-center mb-16 animate-skills-spectacular-entrance">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-skills-text-shimmer bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-orange-500 dark:via-red-500 dark:to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 mx-auto mb-8 animate-skills-glow-pulse"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>
        
        {/* Skills grid with 3D animated cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 hover:z-10 ${
                visibleCards.includes(index) 
                  ? 'animate-skills-card-float opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden h-full hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-all duration-500 relative">
                <CardContent className="p-6 relative">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 dark:bg-orange-400 rounded-full animate-skills-particle-dance"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400 dark:bg-red-400 rounded-full animate-skills-particle-dance" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-indigo-400 dark:bg-yellow-400 rounded-full animate-skills-particle-dance" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Category header with enhanced icon */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-orange-100 dark:to-red-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-skills-icon-orbit">
                      <span className="animate-skills-icon-breathe">{category.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors duration-300 animate-skills-category-pulse">
                      {category.title}
                    </h3>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {category.skills.length} Technologies
                    </div>
                  </div>
                  
                  {/* Tech icons grid with enhanced animations */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="transform transition-all duration-500 group-hover:scale-110"
                        style={{ 
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      >
                        <TechIcon name={skill} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Animated border flow */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.gradient} opacity-20 animate-skills-border-flow`}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-bounce-in">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 animate-cta-glow">
            <span className="mr-2">🚀</span>
            Ready to build amazing things together
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;