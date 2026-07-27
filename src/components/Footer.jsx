import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative pt-12 pb-6 border-t border-white/5 overflow-hidden bg-transparent">
      
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10 flex flex-col items-center">
        
        {/* Top Content Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Left Side: Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-6 text-white drop-shadow-lg">
              LET'S WORK<br/><span className="text-stroke-primary text-transparent" style={{ WebkitTextStroke: '1px var(--color-primary)' }}>TOGETHER<span className="text-primary drop-shadow-[0_0_10px_rgba(0,223,143,0.8)]" style={{ WebkitTextStroke: '0px' }}>.</span></span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
              Ready to scale your digital presence? I'm currently open to new projects and exciting collaborations.
            </p>
            <a href="mailto:contact@arshaon.com" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] border border-white/10 bg-white/5 text-white px-8 py-4 rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,223,143,0.15)] transition-all duration-300">
              contact@arshaon.com <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Side: Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full justify-between w-full md:w-auto pr-4 md:pr-0"
          >
            <div className="flex flex-wrap lg:flex-nowrap justify-between md:justify-start gap-10 lg:gap-16 xl:gap-20 lg:justify-end md:pt-4 w-full">
              <div className="flex flex-col gap-6 min-w-[120px]">
                <h4 className="text-white font-semibold tracking-widest uppercase text-xs mb-2">Navigation</h4>
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Services', path: '/services' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'About', path: '/about' }
                ].map((link) => (
                  <Link key={link.name} to={link.path} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                ))}
              </div>
  
              <div className="flex flex-col gap-6 min-w-[120px]">
                <h4 className="text-white font-semibold tracking-widest uppercase text-xs mb-2">Community</h4>
                {[
                  { name: 'Blog', path: '/blog' },
                  { name: 'Discussions', path: '#' },
                  { name: 'Newsletter', path: '#' },
                  { name: 'Events', path: '#' }
                ].map((link) => (
                  <Link key={link.name} to={link.path} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-6 min-w-[120px] w-full md:w-auto mt-6 md:mt-0">
                <h4 className="text-white font-semibold tracking-widest uppercase text-xs mb-2 text-center md:text-left">Socials</h4>
                
                {/* Desktop View (Original pristine list) */}
                <ul className="hidden md:flex flex-col gap-6">
                  <li>
                    <a href="https://x.com/arshaonx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-primary transition-colors">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                      </svg> X
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@arshaonone" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                        <path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 4 3.5 5.2 3.5 5.8 3.4 8.4 3.2 12 3.2 12 3.2s3.6 0 6.2.2c.6.1 1.8.1 2.8 1.2.7.8.5 2.5.5 2.5s.2 2 .2 4.1v1.9c0 2.1-.2 4.1-.2 4.1s-.2 1.7-.9 2.5c-1 1-2.1 1-2.7 1.1-3 .3-6.1.3-6.1.3s-3.6 0-6.2-.2c-.6-.1-1.8-.1-2.8-1.2-.7-.8-.5-2.5-.5-2.5s-.2-2-.2-4.1v-1.9c0-2.1.2-4.1.2-4.1z"/><polygon points="9.7,15.5 15.5,12 9.7,8.5"/>
                      </svg> YouTube
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ashikurrahmanshaon/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@arshaonone?_r=1&_t=ZS-98McWmFtonp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium group">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                      </svg> TikTok
                    </a>
                  </li>
                </ul>

                {/* Mobile View (Glowing Circular Buttons) */}
                <ul className="flex md:hidden flex-row justify-center gap-4 w-full">
                  <li>
                    <a href="https://x.com/arshaonx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,223,143,0.2)] transition-all duration-300 group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform duration-300">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                      </svg> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@arshaonone" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,223,143,0.2)] transition-all duration-300 group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                        <path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 4 3.5 5.2 3.5 5.8 3.4 8.4 3.2 12 3.2 12 3.2s3.6 0 6.2.2c.6.1 1.8.1 2.8 1.2.7.8.5 2.5.5 2.5s.2 2 .2 4.1v1.9c0 2.1-.2 4.1-.2 4.1s-.2 1.7-.9 2.5c-1 1-2.1 1-2.7 1.1-3 .3-6.1.3-6.1.3s-3.6 0-6.2-.2c-.6-.1-1.8-.1-2.8-1.2-.7-.8-.5-2.5-.5-2.5s-.2-2-.2-4.1v-1.9c0-2.1.2-4.1.2-4.1z"/><polygon points="9.7,15.5 15.5,12 9.7,8.5"/>
                      </svg> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ashikurrahmanshaon/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,223,143,0.2)] transition-all duration-300 group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg> 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@arshaonone?_r=1&_t=ZS-98McWmFtonp" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(0,223,143,0.2)] transition-all duration-300 group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                      </svg> 
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </motion.div>
          
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 pt-6 border-t border-white/5 text-[11px] font-semibold tracking-widest uppercase text-gray-500">
          <p>© 2026 Ashikur Rahman Shaon.</p>

          {/* Premium Trust Badge */}
          <div className="flex items-center gap-4 text-gray-500 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-primary/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="text-[10px] tracking-[0.2em]">SECURED BY</span>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src="/payments-logo.png" 
                alt="Accepted Payments" 
                className="h-6 sm:h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
