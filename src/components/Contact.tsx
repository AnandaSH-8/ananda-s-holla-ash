
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-200 mx-auto mb-8"></div>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 hover-scale">
                <div className="bg-orange-600 p-3 rounded-lg animate-pulse-orange">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:anandsholla8@gmail.com" className="text-orange-300 hover:text-orange-200 transition-colors">
                    anandsholla8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover-scale">
                <div className="bg-orange-500 p-3 rounded-lg animate-pulse-orange">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-orange-300">Available for remote work</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer"
                   className="bg-orange-600 p-3 rounded-lg hover:bg-orange-700 transition-colors hover-scale">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
                   className="bg-orange-700 p-3 rounded-lg hover:bg-orange-800 transition-colors hover-scale">
                  <Github className="h-6 w-6" />
                </a>
                <a href="mailto:anandsholla8@gmail.com"
                   className="bg-orange-500 p-3 rounded-lg hover:bg-orange-600 transition-colors hover-scale">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="#" className="bg-orange-600 p-3 rounded-lg hover:bg-orange-700 transition-colors hover-scale">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm card-hover animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-orange-100 mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-white/20 border-white/30 text-white placeholder:text-orange-200 focus:border-orange-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-100 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-white/20 border-white/30 text-white placeholder:text-orange-200 focus:border-orange-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-100 mb-2">Subject</label>
                  <Input placeholder="Project discussion" className="bg-white/20 border-white/30 text-white placeholder:text-orange-200 focus:border-orange-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-100 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-orange-200 resize-none focus:border-orange-400 transition-colors"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 hover-scale animate-pulse-orange transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
