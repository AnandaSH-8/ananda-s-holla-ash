
import { Card, CardContent } from "@/components/ui/card";
import TechIcon from "./TechIcon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      description: "Building beautiful, responsive user interfaces",
      gradient: "from-blue-500 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-600",
      borderGradient: "from-blue-400 to-purple-500 dark:from-orange-400 dark:to-red-500",
      skills: ["React.js", "Vue.js", "Tailwind CSS", "Vuetify", "MUI", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      description: "Scalable server-side architecture & APIs",
      gradient: "from-green-500 via-teal-500 to-cyan-600 dark:from-yellow-500 dark:via-orange-500 dark:to-red-600",
      borderGradient: "from-green-400 to-teal-500 dark:from-yellow-400 dark:to-orange-500",
      skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
    },
    {
      title: "Database Management",
      icon: "🗄️",
      description: "Efficient data storage & retrieval systems",
      gradient: "from-purple-500 via-pink-500 to-rose-600 dark:from-red-500 dark:via-pink-500 dark:to-orange-600",
      borderGradient: "from-purple-400 to-pink-500 dark:from-red-400 dark:to-pink-500",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      description: "Development workflow & deployment tools",
      gradient: "from-indigo-500 via-blue-500 to-cyan-600 dark:from-pink-500 dark:via-purple-500 dark:to-indigo-600",
      borderGradient: "from-indigo-400 to-blue-500 dark:from-pink-400 dark:to-purple-500",
      skills: ["Git", "Postman", "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900 relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-blue-400/20 dark:bg-orange-400/20 rounded-full animate-skills-particle-dance"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-purple-400/15 dark:bg-red-400/15 rounded-full animate-skills-particle-dance" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-green-500/25 dark:bg-yellow-500/25 rounded-full animate-skills-particle-dance" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-indigo-400/20 dark:bg-pink-400/20 rounded-full animate-skills-particle-dance" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-cyan-400/15 dark:bg-purple-400/15 rounded-full animate-skills-particle-dance" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20 animate-skills-spectacular-entrance">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 relative">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent animate-skills-text-shimmer">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 mx-auto mb-10 rounded-full animate-skills-border-flow"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital experiences with cutting-edge technologies
          </p>
        </div>
        
        {/* Enhanced skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl overflow-hidden h-full group relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-6 hover:rotate-1 animate-skills-card-float"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
              }}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg`}>
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                {/* Enhanced animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 animate-skills-glow-pulse`}></div>
                
                {/* Category header with spectacular icon */}
                <div className="text-center mb-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-skills-icon-breathe shadow-lg">
                      <span className="group-hover:animate-bounce filter drop-shadow-lg">{category.icon}</span>
                    </div>
                    {/* Orbiting particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 dark:bg-orange-400 rounded-full animate-skills-icon-orbit"></div>
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-purple-400 dark:bg-red-400 rounded-full animate-skills-icon-orbit" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-green-400 dark:bg-yellow-400 rounded-full animate-skills-icon-orbit" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-indigo-400 dark:bg-pink-400 rounded-full animate-skills-icon-orbit" style={{animationDelay: '1.5s'}}></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-orange-500 dark:group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-500">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 font-medium">
                    {category.skills.length} Technologies
                  </div>
                </div>
                
                {/* Enhanced tech icons grid */}
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="transform transition-all duration-700 group-hover:scale-110 animate-skills-hover-lift"
                      style={{ 
                        transitionDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      <TechIcon name={skill} />
                    </div>
                  ))}
                </div>

                {/* Skill count indicator */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-orange-100 dark:group-hover:to-red-100 group-hover:text-gray-800 transition-all duration-500">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Mastered
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced call to action */}
        <div className="text-center animate-bounce-in">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-orange-900/50 dark:to-red-900/50 backdrop-blur-xl rounded-3xl p-12 max-w-4xl mx-auto border border-blue-200/50 dark:border-orange-500/30 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Let's combine these technologies to create innovative solutions that make a difference
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-skills-glow-pulse">
                <span className="mr-3 text-2xl">🚀</span>
                Let's Collaborate
              </div>
              <div className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-2xl font-bold hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white hover:scale-105 transition-all duration-300">
                <span className="mr-3 text-2xl">💡</span>
                Explore Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
