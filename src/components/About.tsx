
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Card className="border-0 shadow-xl card-hover bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-charcoal dark:to-navy-dark">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Hey! I'm Ananda 👋
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a full stack web developer experienced in crafting dynamic
                  web applications using modern JavaScript frameworks and tools.
                  I enjoy solving real-world problems through clean code and
                  efficient systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as a software engineer, I've contributed to
                  both internal tools and customer-facing applications, handling
                  frontend interfaces and backend logic. I'm always exploring
                  better ways to build fast, accessible, and intuitive digital
                  products.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-scale-in">
            <div className="water-gradient dark:fire-gradient p-6 rounded-xl text-white hover-scale">
              <h4 className="text-xl font-bold mb-2">Experience</h4>
              <p className="text-blue-100 dark:text-orange-100">
                3.5+ years of hands-on full stack development
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-orange-600 dark:to-red-600 p-6 rounded-xl text-white hover-scale">
              <h4 className="text-xl font-bold mb-2">Focus Areas</h4>
              <p className="text-blue-100 dark:text-orange-100">
                Scalable applications & clean architecture
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-red-600 dark:to-orange-600 p-6 rounded-xl text-white hover-scale">
              <h4 className="text-xl font-bold mb-2">Collaboration</h4>
              <p className="text-blue-100 dark:text-orange-100">
                Solo projects & team-based development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
