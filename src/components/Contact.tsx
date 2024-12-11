import { Github, Facebook ,Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useForm } from '@formspree/react';
import { FormspreeProvider } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkovpoq");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const errors: { name?: string; email?: string; message?: string } = {
      name: !formData.name.trim() ? 'Please enter your name' : undefined,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Please enter a valid email address' : undefined,
      message: !formData.message.trim() ? 'Please enter a message' : undefined,
    };

    setFormErrors(errors);
    const firstError = Object.values(errors).find(Boolean);
    if (firstError) {
      toast.error(firstError);
      return;
    }

    // Submit form using Formspree
    await handleSubmit(e);
    
    if (state.succeeded) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: undefined });
  };

  return (
    <FormspreeProvider project="your-project-id">
      <section 
        id="contact" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="section-title text-gray-900 dark:text-gray-50 mb-12 text-4xl font-bold text-center transition-colors">
            Get In Touch
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-auto backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
            <div className="flex flex-col md:flex-row md:space-x-12">
              {/* Left Side - Contact Info */}
              <div className="md:w-1/2 space-y-8 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6 transition-colors">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <MapPin className="text-primary dark:text-primary-light transition-colors" size={24} />
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      Tiniguiban, Puerto Princessa City, Palawan, PH
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <Phone className="text-primary dark:text-primary-light transition-colors" size={24} />
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      +639 168 379 259
                    </span>
                  </div>
                  <div className="flex space-x-8 mt-8">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-all duration-300 transform hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Facebook  size={28} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-all duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={28} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-all duration-300 transform hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail size={28} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="md:w-1/2">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      className={`input-field block w-full px-4 py-3 rounded-lg border-2 
                        ${formErrors.name ? 'border-red-500' : 'border-transparent'}
                        bg-white dark:bg-gray-600 
                        text-gray-900 dark:text-gray-50 
                        placeholder-gray-400 dark:placeholder-gray-300
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                        focus:border-transparent transition-all duration-300
                        hover:bg-gray-50 dark:hover:bg-gray-500`}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                      required
                    />
                    {formErrors.name && (
                      <p className="mt-2 text-sm text-red-500" id="name-error">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                       Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@example.com"
                      className={`input-field block w-full px-4 py-3 rounded-lg border-2 
                        ${formErrors.email ? 'border-red-500' : 'border-transparent'}
                        bg-white dark:bg-gray-600 
                        text-gray-900 dark:text-gray-50 
                        placeholder-gray-400 dark:placeholder-gray-300
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                        focus:border-transparent transition-all duration-300
                        hover:bg-gray-50 dark:hover:bg-gray-500`}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                      required
                    />
                    {formErrors.email && (
                      <p className="mt-2 text-sm text-red-500" id="email-error">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <label htmlFor="message" className="block text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={5}
                      className={`input-field block w-full px-4 py-3 rounded-lg border-2 
                        ${formErrors.message ? 'border-red-500' : 'border-transparent'}
                        bg-white dark:bg-gray-600 
                        text-gray-900 dark:text-gray-50 
                        placeholder-gray-400 dark:placeholder-gray-300
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                        focus:border-transparent transition-all duration-300
                        hover:bg-gray-50 dark:hover:bg-gray-500`}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                      required
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-2 text-sm text-red-500" id="message-error">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-6 text-lg font-medium text-white 
                      bg-primary hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary
                      rounded-xl transition-all duration-300 transform hover:scale-[1.02] 
                      focus:ring-2 focus:ring-offset-2 focus:ring-primary 
                      shadow-lg hover:shadow-xl 
                      disabled:opacity-50 disabled:cursor-not-allowed
                      ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FormspreeProvider>
  );
};

export default Contact;