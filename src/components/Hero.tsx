import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Twitter, ArrowRight, Facebook, Instagram, ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-12 px-4 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-highlight/20 to-transparent blur-3xl" />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto text-center relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary">Joshua Bacay</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted mb-6 sm:mb-8 font-inter"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Front end Developer | UI/UX Enthusiast | Skilled in Design Tools
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-5 py-4 sm:px-6 sm:py-3">
            See Projects
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <button 
            onClick={() => window.open('/your-cv.pdf', '_blank')}
            className="inline-flex items-center gap-2 px-5 py-4 sm:px-6 sm:py-3 font-semibold text-primary border-2 border-primary rounded-lg hover:bg-highlight hover:text-secondary hover:border-highlight transition-colors duration-300"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download CV
          </button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://facebook.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-300"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://instagram.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-300"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text hover:text-primary transition-colors duration-300"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>
        {isVisible && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-16 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-highlight transition-colors duration-300"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;