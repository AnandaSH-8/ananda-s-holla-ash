
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 orange-gradient mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Card className="border-0 shadow-xl card-hover bg-gradient-to-br from-warm-cream to-orange-50 dark:from-charcoal dark:to-navy-dark">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Hey! I'm Ananda 👋
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a full stack web developer experienced in crafting dynamic web applications 
                  using modern JavaScript frameworks and tools. I enjoy solving real-world problems 
                  through clean code and efficient systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as a software engineer, I've contributed to both internal tools 
                  and customer-facing applications, handling frontend interfaces and backend logic. 
                  I'm always exploring better ways to build fast, accessible, and intuitive digital products.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-scale-in">
            <div className="orange-gradient p-6 rounded-xl text-white hover-scale">
              <h4 className="text-xl font-bold mb-2">Experience</h4>
              <p className="text-orange-100">2.7+ years of hands-on full stack development</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-6 rounded-xl text-white hover-scale">
              <h4 className="text-xl font-bold mb-2">Focus Areas</h4>
              <p className="text-orange-100">Scalable applications & clean architecture</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-700 to-orange-500 p-6 rounded-xl text-white hover-scale">
              <h4 className="text-xl font-bold mb-2">Collaboration</h4>
              <p className="text-orange-100">Solo projects & team-based development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
