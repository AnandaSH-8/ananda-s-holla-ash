import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter, FaDownload } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import LazyImage from "@/components/LazyImage";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You'll need to add your resume to the public folder
    link.download = "Ananda_S_Holla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-white/55 via-blue-50/40 to-cyan-50/40 dark:from-[#1A1A2E]/70 dark:via-[#2E2E2E]/60 dark:to-[#1A1A2E]/70 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Water bubbles for light mode */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <div
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-water-bubble-1"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-cyan-400/20 rounded-full animate-water-bubble-2"
          style={{ top: "60%", right: "15%" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-water-bubble-3"
          style={{ bottom: "30%", left: "20%" }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 bg-cyan-500/25 rounded-full animate-water-bubble-4"
          style={{ top: "40%", right: "30%" }}
        ></div>
      </div>

      {/* Fire embers for dark mode */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div
          className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-ember-1 opacity-70"
          style={{ top: "20%", left: "10%" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full animate-float-ember-2 opacity-50"
          style={{ top: "60%", right: "15%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-orange-300 rounded-full animate-float-ember-3 opacity-60"
          style={{ bottom: "30%", left: "20%" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-orange-600 rounded-full animate-float-ember-4 opacity-40"
          style={{ top: "40%", right: "30%" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left animate-hero-content-entrance order-2 lg:order-1">
          <div className="relative group mb-8 transition-all duration-500">
            {/* Interactive background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-orange-500/10 dark:to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#333] dark:text-[#EDEDED] mb-6 leading-tight relative z-10 transition-all duration-500 p-6">
              <span className="relative inline-block transition-all duration-500 group w-full text-center lg:text-left">
                {/* Default state - ASH with theme-appropriate gradient */}
                <span className="water-gradient-text dark:fire-gradient-text group-hover:opacity-0 group-hover:scale-85 transition-all duration-1000 block">
                  ASH
                </span>

                {/* Hover state - Full name with theme animation and responsive sizing */}
                <span className="absolute inset-0 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 flex items-center justify-center lg:justify-start w-full overflow-hidden">
                  <span className="relative inline-block whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    {/* Light theme - Wave animation */}
                    <span className="block dark:hidden">
                      {"Ananda S Holla".split("").map((letter, index) => (
                        <span
                          key={index}
                          className="inline-block text-blue-600 relative animate-letter-bounce"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                            transform: `translateY(${Math.sin(index * 0.5) * 3}px)`,
                            animation: `letterWave 2s ease-in-out infinite ${index * 0.1}s, letterBounce 0.8s ease-out ${index * 0.1}s`,
                          }}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      ))}
                    </span>

                    {/* Dark theme - Flame animation */}
                    <span className="hidden dark:block">
                      {"Ananda S Holla".split("").map((letter, index) => (
                        <span
                          key={index}
                          className="inline-block text-orange-500 relative animate-letter-bounce"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                            filter: `brightness(${1 + Math.sin(index * 0.8) * 0.3}) hue-rotate(${Math.sin(index * 0.6) * 20}deg)`,
                            animation: `letterFlame 1.5s ease-in-out infinite ${index * 0.1}s, letterBounce 0.8s ease-out ${index * 0.1}s`,
                          }}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#333]/80 dark:text-[#EDEDED]/80 mb-8 font-bold animate-hero-subtitle">
            Full Stack Web Developer
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-[#333]/70 dark:text-[#EDEDED]/70 mb-12 leading-relaxed animate-hero-description max-w-2xl lg:max-w-none">
            Full-Stack Developer with 3.5+ years of experience designing and developing scalable web applications.
            Experienced in building robust backend services, intuitive user interfaces, and end-to-end solutions that
            deliver real business value.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-hero-cta">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="water-gradient dark:fire-gradient hover:shadow-2xl hover-scale transition-all duration-300 text-white font-bold px-8 py-4 text-lg animate-cta-glow"
            >
              <FaEnvelope className="mr-3 h-6 w-6" />
              Hire Me
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:border-orange-500 dark:text-orange-500 dark:hover:bg-orange-500 dark:hover:text-white hover-scale transition-all duration-300 font-bold px-8 py-4 text-lg backdrop-blur-sm"
            >
              View Projects
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white hover-scale transition-all duration-300 font-bold px-8 py-4 text-lg backdrop-blur-sm"
            >
              <FaDownload className="mr-3 h-6 w-6" />
              Resume
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-8 animate-hero-social">
            <a
              href="https://linkedin.com/in/ananda-s-holla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/AnandaSH-8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="mailto:anandsholla8@gmail.com"
              aria-label="Email Ananda"
              className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow"
            >
              <FaEnvelope className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/anandsholla8"
              aria-label="Twitter profile"
              className="text-[#333]/60 dark:text-[#EDEDED]/60 hover:text-blue-500 dark:hover:text-orange-500 transition-all duration-300 hover-scale social-glow"
            >
              {/* uPDATE LATEST TWITTER / X ICON
               */}

              <FaXTwitter className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Right Side - Professional Photo Space (50% of hero section) */}
        <div className="flex justify-center items-center animate-hero-photo order-1 lg:order-2">
          <div className="relative w-full max-w-[500px] aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-orange-500/20 dark:to-orange-600/30 rounded-full flex items-center justify-center border-4 border-blue-500 dark:border-orange-500 shadow-2xl hover-scale group overflow-hidden">
            {/* Professional photo */}
            <LazyImage
              src={profileImg}
              alt="Ananda S Holla"
              loading="eager"
              wrapperClassName="w-full h-full rounded-full relative z-10"
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
            />

            {/* Animated glowing border - Theme appropriate colors */}
            <div className="absolute inset-0 rounded-full border-4 border-orange-500 dark:border-blue-500 animate-glow-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>

            {/* Background pattern - Theme appropriate colors */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20">
              <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 dark:bg-orange-500 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-500 dark:bg-red-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 right-10 w-3 h-3 bg-blue-400 dark:bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
