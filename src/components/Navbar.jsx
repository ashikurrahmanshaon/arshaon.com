import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const ADMIN_EMAILS = ['arshaon146140@gmail.com', 'your-email@gmail.com'];

// Brand SVGs since lucide-react removed them
const FacebookIcon = ({ size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const InstagramIcon = ({ size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const LinkedinIcon = ({ size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const YoutubeIcon = ({ size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const location = useLocation();
  const { user, logout } = useAuth();
  const isAdmin = user && ADMIN_EMAILS.includes(user.email);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/all-projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}>
        <div 
          className={`absolute top-0 left-0 w-full h-[130%] pointer-events-none bg-[#0d1116]/20 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] -z-10 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        />
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="relative z-50 max-w-7xl mx-auto px-8 md:px-16 lg:px-20 flex items-center justify-between"
        >
            {/* Logo */}
            <Link 
              to="/"
              className="cursor-pointer flex items-center group relative leading-none"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-xl md:text-2xl font-display tracking-tighter relative z-10 flex items-baseline uppercase">
                <span className="font-black text-white transition-colors duration-300 group-hover:text-gray-200">
                  ARSHAON
                </span>
                <span className="font-bold text-primary ml-0.5 drop-shadow-[0_0_8px_rgba(0,223,143,0.3)]">
                  .COM
                </span>
              </div>
              {/* Subtle glow behind the logo on hover */}
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </Link>

            {/* Center Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/');
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-[14px] font-medium tracking-wide transition-all duration-300 relative group leading-none px-1 py-2 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 rounded-full shadow-[0_0_12px_rgba(0,223,143,0.8)] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Right Action (Desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {user ? (
                <div className="flex items-center gap-4 relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 hover:bg-white/5 rounded-full p-1 pr-3 transition-all cursor-pointer group"
                  >
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full object-cover border border-white/10 group-hover:border-primary/30 transition-colors" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                        <User className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-300 max-w-[120px] truncate group-hover:text-white transition-colors">
                      {user.displayName || user.email?.split('@')[0]}
                    </span>
                    <ChevronDown size={14} className={`text-gray-400 group-hover:text-white transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-[#0d1116] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
                      >
                        <Link 
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <Link 
                          to="/admin"
                          className="block px-4 py-2 text-sm text-primary hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Admin Panel
                        </Link>
                        <button 
                          onClick={() => {
                            setIsDropdownOpen(false);
                            logout();
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors border-t border-white/10"
                        >
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => { setAuthMode('login'); setIsAuthModalOpen(true); }}
                    className="px-4 py-2.5 text-[14px] font-medium tracking-wide text-gray-400 hover:text-white transition-all duration-300 leading-none cursor-pointer"
                  >
                    Log In
                  </button>
                  <button 
                    onClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }}
                    className="relative group px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 inline-block cursor-pointer"
                  >
                    {/* Animated Glow Background */}
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary transition-colors duration-500"></div>
                    
                    {/* Border gradient */}
                    <div className="absolute inset-0 rounded-full border border-primary/50 group-hover:border-transparent transition-colors"></div>
                  
                    {/* Text */}
                    <span className="relative z-10 text-[14px] font-semibold tracking-wide text-primary group-hover:text-[#05070a] transition-colors duration-300 flex items-center gap-2 h-full">
                      Sign Up
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-primary transition-colors p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#0d1116]/90 backdrop-blur-2xl pt-24 px-6 flex flex-col lg:hidden overflow-y-auto pb-8"
            >
              <div className="flex flex-col gap-1 mt-4">
                {[{name: 'Home', path: '/'}, ...navItems, {name: 'Dashboard', path: '/dashboard'}].map((item, i) => {
                  const isActive = location.pathname === item.path;
                  // Don't show Dashboard link to logged out users
                  if (item.path === '/dashboard' && !user) return null;
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                      className="w-full"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-center text-xl md:text-2xl font-display font-medium tracking-wide transition-all py-3.5 rounded-2xl ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-8 mb-8 flex flex-col gap-4">
                {user ? (
                   <motion.button 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     onClick={() => { logout(); setIsOpen(false); }}
                     className="w-full py-3.5 rounded-xl border border-red-500/20 text-red-400 font-semibold tracking-wide hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2"
                   >
                     <LogOut size={18} /> Sign Out
                   </motion.button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    <button 
                      onClick={() => { setAuthMode('login'); setIsAuthModalOpen(true); setIsOpen(false); }}
                      className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold tracking-wide hover:bg-white/10 transition-colors text-center text-sm"
                    >
                      Log In
                    </button>
                    <button 
                      onClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); setIsOpen(false); }}
                      className="w-full py-3.5 rounded-xl bg-primary text-background font-semibold tracking-wide shadow-[0_0_15px_rgba(0,223,143,0.3)] text-center text-sm"
                    >
                      Sign Up
                    </button>
                  </motion.div>
                )}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto flex justify-center items-center gap-6 pb-4"
              >
                <a href="#" className="text-gray-400 hover:text-[#00df8f] transition-all hover:scale-110 hover:-translate-y-1">
                  <FacebookIcon size={22} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00df8f] transition-all hover:scale-110 hover:-translate-y-1">
                  <InstagramIcon size={22} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00df8f] transition-all hover:scale-110 hover:-translate-y-1">
                  <LinkedinIcon size={22} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#00df8f] transition-all hover:scale-110 hover:-translate-y-1">
                  <YoutubeIcon size={24} />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;
