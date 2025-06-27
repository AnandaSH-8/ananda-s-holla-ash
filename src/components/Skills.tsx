
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
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-background to-warm-cream dark:from-background dark:to-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Tech Stack
          </h2>
          <div className="w-24 h-1 orange-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg card-hover bg-card/50 backdrop-blur-sm animate-slide-up overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 animate-pulse-orange`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="flex flex-col items-center"
                    >
                      <TechIcon name={skill} />
                      {skill === "React.js" && (
                        <div className="text-orange-500 text-lg mt-1">🔥</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {hoveredSkill && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce-in z-50">
            {hoveredSkill}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
