
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, User } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Current Position",
      duration: "2.7+ Years",
      type: "Full-time",
      description: "Working on scalable applications with focus on both frontend interfaces and backend logic. Contributing to internal tools and customer-facing applications.",
      highlights: [
        "Frontend & Backend Development",
        "Scalable Application Architecture", 
        "Team Collaboration",
        "Performance Optimization"
      ]
    }
  ];

  const projectTypes = [
    {
      icon: User,
      title: "Solo Projects",
      description: "Independent development of complete applications from concept to deployment"
    },
    {
      icon: Users, 
      title: "Team Collaboration",
      description: "Cross-functional team projects with shared responsibilities and code reviews"
    },
    {
      icon: Briefcase,
      title: "Enterprise Applications", 
      description: "Internal tools and customer-facing applications with enterprise-level requirements"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Journey</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-sm">{exp.duration}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Types */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Experience</h3>
            <div className="space-y-6">
              {projectTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                        <type.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{type.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{type.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
