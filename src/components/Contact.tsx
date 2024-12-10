import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading('Sending message...');
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
        const response = await fetch('/api/handle_contact', {
            method: 'POST',
            body: formData,
        });

        const result = await response.text();
        toast.dismiss(loadingToast);
        
        if (response.ok) {
            toast.success('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
        } else {
            toast.error(result || 'Failed to send message');
        }
    } catch (error) {
        toast.dismiss(loadingToast);
        toast.error('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-gray-800 dark:text-gray-100">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-field bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input-field bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="input-field bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          <div className="mt-12 flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <MapPin className="text-primary dark:text-primary-light" size={20} />
              <span className="text-gray-700 dark:text-gray-300">1234 Street Name, City, Country</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-primary dark:text-primary-light" size={20} />
              <span className="text-gray-700 dark:text-gray-300">+1 (234) 567-890</span>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-muted hover:text-primary dark:hover:text-primary-light transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted hover:text-primary dark:hover:text-primary-light transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted hover:text-primary dark:hover:text-primary-light transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;