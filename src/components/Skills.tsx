import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Simple staggered entrance
    const timers = skillCategories.map((_, index) => 
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 150)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend", 
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "Postman", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & <span className="text-blue-600 dark:text-orange-500">Tech Stack</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-500 ${
                visibleCards.includes(index) 
                  ? 'animate-fade-in opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 relative">
                  {/* Category header with icon */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-orange-100 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {category.skills.length} Technologies
                    </div>
                  </div>
                  
                  {/* Tech icons grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="transform transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          transitionDelay: `${skillIndex * 0.05}s`
                        }}
                      >
                        <TechIcon name={skill} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 dark:from-orange-500/5 dark:to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;