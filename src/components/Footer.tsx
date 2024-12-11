import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg">Connect with me:</p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group hover:text-primary transition-colors duration-300 relative"
          >
            <Github className="w-6 h-6" />
            <span className="absolute bottom--full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group hover:text-primary transition-colors duration-300 relative"
          >
            <Linkedin className="w-6 h-6" />
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="group hover:text-primary transition-colors duration-300 relative"
          >
            <Twitter className="w-6 h-6" />
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Twitter
            </span>
          </a>
          <a 
            href="https://facebook.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group hover:text-primary transition-colors duration-300 relative"
          >
            <Facebook className="w-6 h-6" />
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Facebook
            </span>
          </a>
          <a 
            href="https://instagram.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group hover:text-primary transition-colors duration-300 relative"
          >
            <Instagram className="w-6 h-6" />
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Instagram
            </span>
          </a>
        </div>
        <p className="mt-6 text-sm">© 2024 Joshua Bacay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
