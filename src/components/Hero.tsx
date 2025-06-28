
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [showFullName, setShowFullName] = useState(false);

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

  const handleNameClick = () => {
    setShowFullName(!showFullName);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-white via-[#FFF4E6] to-orange-50 dark:from-[#1A1A2E] dark:via-[#2E2E2E] dark:to-[#1A1A2E] relative overflow-hidden">
      {/* Floating embers background for dark mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ember ember-1 absolute w-1 h-1 bg-orange-400 rounded-full animate-float-ember-1 opacity-0 dark:opacity-70"></div>
        <div className="ember ember-2 absolute w-1.5 h-1.5 bg-orange-500 rounded-full animate-float-ember-2 opacity-0 dark:opacity-50"></div>
        <div className="ember ember-3 absolute w-1 h-1 bg-orange-300 rounded-full animate-float-ember-3 opacity-0 dark:opacity-60"></div>
        <div className="ember ember-4 absolute w-2 h-2 bg-orange-600 rounded-full animate-float-ember-4 opacity-0 dark:opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left animate-hero-content-entrance order-2 lg:order-1">
          <div 
            className="relative cursor-pointer group overflow-hidden rounded-2xl p-6 mb-8 transition-all duration-500"
            onClick={handleNameClick}
          >
            {/* Interactive background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/10 to-[#FFA500]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#333] dark:text-[#EDEDED] mb-6 leading-tight relative z-10 transition-all duration-500">
              <span className="saffron-gradient-text relative inline-block transition-all duration-500">
                {showFullName ? (
                  <span className="animate-fade-in">
                    {"Ananda S Holla".split("").map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-letter-bounce"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          filter: 'drop-shadow(0 0 10px rgba(255, 107, 0, 0.6))'
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="hover:scale-105 transition-transform duration-300">ASH</span>
                )}
              </span>
            </h1>
            
            {/* Click instruction tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-[#FF6B00] bg-[#FFF4E6] dark:bg-[#FF6B00]/20 px-4 py-2 rounded-full animate-bounce-gentle shadow-lg border border-[#FF6B00]/20">
                {showFullName ? 'Click to collapse' : 'Click to expand'} ✨
              </span>
            </div>
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
              className="saffron-gradient hover:shadow-2xl hover-scale transition-all duration-300 text-white font-bold px-8 py-4 text-lg animate-cta-glow"
            >
              <Mail className="mr-3 h-6 w-6" />
              Hire Me
            </Button>
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover-scale transition-all duration-300 font-bold px-8 py-4 text-lg backdrop-blur-sm"
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start space-x-8 animate-hero-social">
            <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer" 
               className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-[#FF6B00] transition-all duration-300 hover-scale social-glow">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
               className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-[#FF6B00] transition-all duration-300 hover-scale social-glow">
              <Github className="h-8 w-8" />
            </a>
            <a href="mailto:anandsholla8@gmail.com"
               className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-[#FF6B00] transition-all duration-300 hover-scale social-glow">
              <Mail className="h-8 w-8" />
            </a>
            <a href="#" className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-[#FF6B00] transition-all duration-300 hover-scale social-glow">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Right Side - Professional Photo Space */}
        <div className="flex justify-center items-center animate-hero-photo order-1 lg:order-2">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-[#FFF4E6] to-[#FF6B00]/20 dark:from-[#FF6B00]/10 dark:to-[#FFA500]/30 rounded-full flex items-center justify-center border-4 border-[#FF6B00] shadow-2xl hover-scale group overflow-hidden">
            {/* Professional photo placeholder */}
            <div className="text-center p-12 relative z-10">
              <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto mb-8 bg-[#FF6B00]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-8xl lg:text-9xl xl:text-[120px] animate-photo-bounce">📸</span>
              </div>
              <p className="text-[#FF6B00] dark:text-[#FFA500] font-bold text-xl lg:text-2xl mb-4">
                Professional Photo
              </p>
              <p className="text-sm lg:text-base text-[#333]/60 dark:text-[#EDEDED]/60">
                High-quality headshot recommended<br/>
                for maximum impact
              </p>
            </div>
            
            {/* Animated glowing border */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FF6B00] animate-glow-border opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              <div className="absolute top-10 left-10 w-4 h-4 bg-[#FF6B00] rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-6 h-6 bg-[#FFA500] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-10 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
