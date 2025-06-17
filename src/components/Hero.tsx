
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Ananda S Holla
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">
            Full Stack Web Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting scalable and maintainable web applications with 2.7+ years of experience. 
            Passionate about clean architecture and performance optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              View My Work
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:anandsholla8@gmail.com"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
