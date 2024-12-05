import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, Code, Briefcase, Info, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Apply default dark theme if no preference is saved
      document.documentElement.classList.add('dark');
    }

    // Add scroll listener to update active section
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { label: 'Home', href: '#home', icon: <Home className="w-5 h-5 mr-1" /> },
    { label: 'Skills', href: '#skills', icon: <Code className="w-5 h-5 mr-1" /> },
    { label: 'Projects', href: '#projects', icon: <Briefcase className="w-5 h-5 mr-1" /> },
    { label: 'About', href: '#about', icon: <Info className="w-5 h-5 mr-1" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5 mr-1" /> },
  ];

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-secondary/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-primary">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link flex items-center transition-all duration-300 ease-in-out border-b-2 ${
                  activeSection === item.href.replace('#', '')
                    ? 'border-primary text-primary'
                    : 'border-transparent hover:border-primary'
                }`}
              >
                {item.icon}
                <span className="ml-1">{item.label}</span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-primary hover:text-highlight transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-primary hover:text-highlight transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button 
              className="text-muted hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block py-2 nav-link flex items-center transition-all duration-300 ease-in-out border-b-2 ${
                  activeSection === item.href.replace('#', '')
                    ? 'border-primary text-primary'
                    : 'border-transparent hover:border-primary'
                }`}
              >
                {item.icon}
                <span className="ml-1">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;