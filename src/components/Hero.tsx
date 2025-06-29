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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-[#1A1A2E] dark:via-[#2E2E2E] dark:to-[#1A1A2E] relative overflow-hidden">
      {/* Water bubbles for light mode */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <div className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-water-bubble-1" style={{top: '20%', left: '10%'}}></div>
        <div className="absolute w-3 h-3 bg-cyan-400/20 rounded-full animate-water-bubble-2" style={{top: '60%', right: '15%'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-water-bubble-3" style={{bottom: '30%', left: '20%'}}></div>
        <div className="absolute w-2.5 h-2.5 bg-cyan-500/25 rounded-full animate-water-bubble-4" style={{top: '40%', right: '30%'}}></div>
      </div>

      {/* Fire embers for dark mode */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-ember-1 opacity-70"></div>
        <div className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full animate-float-ember-2 opacity-50" style={{top: '60%', right: '15%'}}></div>
        <div className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float-ember-3 opacity-60" style={{bottom: '30%', left: '20%'}}></div>
        <div className="absolute w-2 h-2 bg-orange-600 rounded-full animate-float-ember-4 opacity-40" style={{top: '40%', right: '30%'}}></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left animate-hero-content-entrance order-2 lg:order-1">
          <div className="relative group mb-8 transition-all duration-500">
            {/* Interactive background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-orange-500/10 dark:to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-10xl font-black text-[#333] dark:text-[#EDEDED] mb-6 leading-tight relative z-10 transition-all duration-500 p-6">
              <span className="relative inline-block transition-all duration-500 group w-full text-center lg:text-left">
                {/* Default state - ASH with theme-appropriate gradient */}
                <span className="water-gradient-text dark:fire-gradient-text group-hover:opacity-0 group-hover:scale-85 transition-all duration-1000 block">
                  ASH
                </span>
                
                {/* Hover state - Full name with theme animation */}
                <span className="absolute inset-0 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 flex items-center justify-center lg:justify-start w-full">
                  <span className="relative inline-block">
                    {"Ananda S Holla".split("").map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-letter-bounce text-blue-600 dark:text-orange-500 relative"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#333]/80 dark:text-[#EDEDED]/80 mb-8 font-bold animate-hero-subtitle">
            Full Stack Web Developer
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[#333]/70 dark:text-[#EDEDED]/70 mb-12 leading-relaxed animate-hero-description max-w-2xl lg:max-w-none">
            Crafting scalable and maintainable web applications with 2.7+ years of experience. 
            Passionate about clean architecture and performance optimization.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12 animate-hero-cta">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="water-gradient dark:fire-gradient hover:shadow-2xl hover-scale transition-all duration-300 text-white font-bold px-8 py-4 text-lg animate-cta-glow"
            >
              <Mail className="mr-3 h-6 w-6" />
              Hire Me
            </Button>
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500 hover-scale transition-all duration-300 font-bold px-8 py-4 text-lg backdrop-blur-sm"
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start space-x-8 animate-hero-social">
            <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer" 
               className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
               className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow">
              <Github className="h-8 w-8" />
            </a>
            <a href="mailto:anandsholla8@gmail.com"
               className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow">
              <Mail className="h-8 w-8" />
            </a>
            <a href="#" className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Right Side - Professional Photo Space */}
        <div className="flex justify-center items-center animate-hero-photo order-1 lg:order-2">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-blue-50 to-blue-200/30 dark:from-orange-500/10 dark:to-red-500/30 rounded-full flex items-center justify-center border-4 border-blue-500 dark:border-orange-500 shadow-2xl hover-scale group overflow-hidden">
            {/* Professional photo placeholder */}
            <div className="text-center p-12 relative z-10">
              <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto mb-8 bg-blue-500/20 dark:bg-orange-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-8xl lg:text-9xl xl:text-[120px] animate-photo-bounce">📸</span>
              </div>
              <p className="text-blue-600 dark:text-orange-500 font-bold text-xl lg:text-2xl mb-4">
                Professional Photo
              </p>
              <p className="text-sm lg:text-base text-[#333]/60 dark:text-[#EDEDED]/60">
                High-quality headshot recommended<br/>
                for maximum impact
              </p>
            </div>
            
            {/* Animated glowing border */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-orange-500 animate-glow-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 dark:bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-500 dark:bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-10 w-3 h-3 bg-blue-400 dark:bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;