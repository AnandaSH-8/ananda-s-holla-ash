
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:anandsholla8@gmail.com" className="text-blue-300 hover:text-blue-200">
                    anandsholla8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-blue-300">Available for remote work</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
                   className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="mailto:anandsholla8@gmail.com"
                   className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="#" className="bg-blue-500 p-3 rounded-lg hover:bg-blue-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-100 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Subject</label>
                  <Input placeholder="Project discussion" className="bg-white/20 border-white/30 text-white placeholder:text-blue-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
