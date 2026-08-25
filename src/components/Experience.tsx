
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, User } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Sheshi Pvt. Ltd.",
      timeline: "Sept 2022 – Apr 2026",
      duration: "3.6 Years",
      type: "Full-time",
      description:
        "Developed and maintained scalable web applications using modern JavaScript technologies. Contributed across both frontend and backend development, building customer-facing applications and internal tools while collaborating with cross-functional teams to deliver reliable and maintainable solutions.",
      highlights: [
        "Frontend & Backend Development",
        "Scalable Application Architecture",
        "Performance Optimization",
        "Team Collaboration",
      ],
    },
  ];

  const projectTypes = [
    {
      icon: Briefcase,
      title: "Assets Manager",
      description:
        "Built a full-stack financial portfolio management platform featuring secure authentication, real-time analytics, investment tracking, growth insights, and period-over-period comparisons.",
    },
    {
      icon: Users,
      title: "Full-Stack Development",
      description:
        "Developed scalable frontend and backend solutions using React, Next.js, Node.js, NestJS, PostgreSQL, and modern JavaScript technologies.",
    },
    {
      icon: User,
      title: "Backend Engineering",
      description:
        "Designed RESTful APIs, implemented authentication workflows, integrated databases, and built maintainable server-side services focused on scalability and performance.",
    },
  ];


  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-background/70 to-warm-cream/60 dark:from-background/70 dark:to-charcoal/60 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Professional Journey
            </h3>
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg mb-6 card-hover bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h4>
                      <p className="text-orange-500 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {exp.timeline}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-sm border-orange-500 text-orange-500"
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs hover:bg-orange-100 dark:hover:bg-orange-900 tech-bounce"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Types */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Project Experience
            </h3>
            <div className="space-y-6">
              {projectTypes.map((type, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg card-hover bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="orange-gradient p-3 rounded-lg animate-pulse-orange">
                        <type.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {type.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {type.description}
                        </p>
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
