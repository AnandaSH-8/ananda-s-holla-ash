import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    // Spectacular staggered entrance
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
      color: "from-blue-500 via-cyan-500 to-blue-600",
      darkColor: "from-orange-500 via-red-500 to-orange-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      darkGlowColor: "rgba(255, 107, 0, 0.4)",
      skills: ["React.js", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend", 
      icon: "⚙️",
      color: "from-cyan-500 via-blue-600 to-indigo-600",
      darkColor: "from-red-500 via-orange-600 to-yellow-600",
      glowColor: "rgba(0, 191, 255, 0.4)",
      darkGlowColor: "rgba(255, 165, 0, 0.4)",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "from-indigo-600 via-purple-600 to-blue-700",
      darkColor: "from-yellow-600 via-orange-700 to-red-700",
      glowColor: "rgba(79, 70, 229, 0.4)",
      darkGlowColor: "rgba(255, 140, 0, 0.4)",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "from-purple-600 via-pink-600 to-indigo-700",
      darkColor: "from-red-700 via-orange-800 to-yellow-700",
      glowColor: "rgba(124, 58, 237, 0.4)",
      darkGlowColor: "rgba(255, 69, 0, 0.4)",
      skills: ["Git", "Postman", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-float-bg-1 dark:hidden"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-float-bg-2 dark:hidden"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-float-bg-3 dark:hidden"></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-indigo-400/25 rounded-full animate-float-bg-4 dark:hidden"></div>
        
        {/* Dark mode particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400/40 rounded-full animate-float-bg-1 hidden dark:block"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-400/30 rounded-full animate-float-bg-2 hidden dark:block"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-yellow-400/50 rounded-full animate-float-bg-3 hidden dark:block"></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-orange-500/35 rounded-full animate-float-bg-4 hidden dark:block"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Spectacular header section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative inline-block mb-8">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 dark:from-orange-500 dark:via-red-500 dark:to-orange-600 mb-6 animate-pulse">
              Skills & Tech Stack
            </h2>
            
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-orange-500 dark:to-red-500 rounded-full animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-red-400 dark:to-orange-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            🚀 Technologies and tools I use to bring <span className="text-blue-600 dark:text-orange-500 font-bold">innovative ideas</span> to life
          </p>
        </div>
        
        {/* Revolutionary skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'animate-fade-in opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Glowing background effect */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${category.color} dark:bg-gradient-to-r dark:${category.darkColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse`}
              ></div>
              
              <Card className="relative border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl overflow-hidden group-hover:scale-105 transition-all duration-500 rounded-2xl">
                <CardContent className="p-8 relative">
                  {/* Category header with icon */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${category.color} dark:bg-gradient-to-br dark:${category.darkColor} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Animated skill count */}
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {category.skills.length} Technologies
                    </div>
                  </div>
                  
                  {/* Tech icons grid with spectacular animations */}
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`transform transition-all duration-500 ${
                          activeCategory === index 
                            ? 'scale-110 rotate-3' 
                            : 'hover:scale-105'
                        }`}
                        style={{ 
                          animationDelay: `${skillIndex * 0.1}s`,
                          transitionDelay: `${skillIndex * 0.05}s`
                        }}
                      >
                        <TechIcon name={skill} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Floating particles inside card */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 dark:bg-orange-400 rounded-full animate-ping opacity-60"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400 dark:bg-red-400 rounded-full animate-pulse opacity-40"></div>
                    <div className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-indigo-400 dark:bg-yellow-400 rounded-full animate-bounce opacity-50"></div>
                  </div>
                </CardContent>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 dark:from-orange-500 dark:via-red-500 dark:to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Card>
              
              {/* Floating skill preview on hover */}
              {activeCategory === index && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-xl border border-gray-200 dark:border-gray-600 animate-bounce-gentle z-50">
                  <div className="text-sm font-bold text-gray-800 dark:text-white text-center">
                    {category.skills.length} Skills Mastered! 🎯
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-600 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Spectacular bottom section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="relative inline-block">
            <div className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium">
              💡 Always learning and exploring new technologies
            </div>
            
            {/* Animated tech stack summary */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${category.color} dark:bg-gradient-to-r dark:${category.darkColor} text-white rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {category.icon} {category.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;