import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-32 px-8 md:px-16 bg-transparent relative z-10 flex-grow">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4 leading-tight uppercase">
            Let's build <span className="text-primary">together.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a project in mind or looking for a digital partner? Drop a message and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background group-hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                <a href="mailto:contact@arshaon.com" className="text-xl font-medium text-white hover:text-primary transition-colors">
                  contact@arshaon.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background group-hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</h4>
                <a href="tel:+8801787081119" className="text-xl font-medium text-white hover:text-primary transition-colors">
                  +880 1787 081119
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background group-hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                <p className="text-xl font-medium text-white">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                <a href="https://x.com/arshaonx" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  X (Twitter)
                </a>
                <a href="https://www.youtube.com/@arshaonone" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  YouTube
                </a>
                <a href="https://www.linkedin.com/in/ashikurrahmanshaon/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.tiktok.com/@arshaonone?_r=1&_t=ZS-98McWmFtonp" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] border border-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-gray-600 resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white/10 hover:bg-primary text-white hover:text-background font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,143,0.3)]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
