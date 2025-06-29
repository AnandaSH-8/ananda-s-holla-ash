import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree, Netlify Forms, etc.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 dark:from-orange-900 dark:via-red-800 dark:to-orange-700 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/10 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/5 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white/8 rounded-full animate-float-bg-4"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 dark:from-orange-400 dark:to-red-300 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 dark:text-orange-100 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 hover-scale group">
                <div className="bg-blue-600 dark:bg-orange-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:anandsholla8@gmail.com" className="text-blue-300 dark:text-orange-300 hover:text-blue-200 dark:hover:text-orange-200 transition-colors">
                    anandsholla8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover-scale group">
                <div className="bg-cyan-600 dark:bg-red-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+918217754037" className="text-blue-300 dark:text-orange-300 hover:text-blue-200 dark:hover:text-orange-200 transition-colors">
                    +91 8217754037
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 hover-scale group">
                <div className="bg-blue-500 dark:bg-orange-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-blue-300 dark:text-orange-300">Moodabidri, Karnataka, India</p>
                  <p className="text-sm text-blue-400 dark:text-orange-400">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/ananda-s-holla" target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 dark:bg-orange-600 p-3 rounded-lg hover:bg-blue-700 dark:hover:bg-orange-700 transition-colors hover-scale group">
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/AnandaSH-8" target="_blank" rel="noopener noreferrer"
                   className="bg-cyan-600 dark:bg-red-600 p-3 rounded-lg hover:bg-cyan-700 dark:hover:bg-red-700 transition-colors hover-scale group">
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:anandsholla8@gmail.com"
                   className="bg-blue-500 dark:bg-orange-500 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-orange-600 transition-colors hover-scale group">
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="bg-cyan-500 dark:bg-red-500 p-3 rounded-lg hover:bg-cyan-600 dark:hover:bg-red-600 transition-colors hover-scale group">
                  <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-100 dark:text-orange-100 mb-2">Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 dark:placeholder:text-orange-200 focus:border-cyan-400 dark:focus:border-orange-400 transition-colors" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-100 dark:text-orange-100 mb-2">Email *</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 dark:placeholder:text-orange-200 focus:border-cyan-400 dark:focus:border-orange-400 transition-colors" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 dark:text-orange-100 mb-2">Subject *</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 dark:placeholder:text-orange-200 focus:border-cyan-400 dark:focus:border-orange-400 transition-colors" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 dark:text-orange-100 mb-2">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    rows={5} 
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 dark:placeholder:text-orange-200 resize-none focus:border-cyan-400 dark:focus:border-orange-400 transition-colors"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-orange-600 dark:to-red-600 hover:from-cyan-700 hover:to-blue-700 dark:hover:from-orange-700 dark:hover:to-red-700 hover-scale transition-all duration-300 text-white font-semibold"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-bounce-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-200 dark:text-orange-200 mb-6">
              Let's turn your ideas into reality. I'm here to help you build something amazing.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-orange-500 dark:to-red-500 hover:from-cyan-600 hover:to-blue-600 dark:hover:from-orange-600 dark:hover:to-red-600 hover-scale transition-all duration-300 text-white font-bold"
            >
              <a href="mailto:anandsholla8@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;