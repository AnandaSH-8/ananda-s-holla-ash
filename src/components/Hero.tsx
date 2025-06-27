
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-warm-cream via-background to-orange-50 dark:from-navy-dark dark:via-background dark:to-charcoal">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold orange-gradient-text mb-4 animate-glow">
            Ananda S Holla
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium animate-slide-up">
            Full Stack Web Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-scale-in">
            Crafting scalable and maintainable web applications with 2.7+ years of experience. 
            Passionate about clean architecture and performance optimization.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 animate-bounce-in">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="orange-gradient hover:shadow-lg hover-scale animate-pulse-orange transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover-scale transition-all duration-300"
            >
              View My Work
            </Button>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 animate-fade-in">
            <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-orange-500 transition-colors hover-scale">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-orange-500 transition-colors hover-scale">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:anandsholla8@gmail.com"
               className="text-muted-foreground hover:text-orange-500 transition-colors hover-scale">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-orange-500 transition-colors hover-scale">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Photo Space */}
        <div className="flex justify-center items-center animate-scale-in">
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-900 rounded-full flex items-center justify-center border-4 border-orange-500 shadow-2xl hover-scale">
            {/* Placeholder for photo */}
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <p className="text-orange-700 dark:text-orange-300 font-medium">
                Add Your Photo Here
              </p>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                Professional headshot recommended
              </p>
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-pulse-orange"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
