import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://facebook.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4">© 2024 Juan Tamad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
