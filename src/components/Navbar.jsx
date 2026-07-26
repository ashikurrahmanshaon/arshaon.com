import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const ADMIN_EMAILS = ['arshaon146140@gmail.com', 'your-email@gmail.com'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
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
                  <Link 
                    to="/login"
                    className="px-4 py-2.5 text-[14px] font-medium tracking-wide text-gray-400 hover:text-white transition-all duration-300 leading-none"
                  >
                    Log In
                  </Link>
                  <Link 
                    to="/signup"
                    className="relative group px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 inline-block"
                  >
                    {/* Animated Glow Background */}
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary transition-colors duration-500"></div>
                    
                    {/* Border gradient */}
                    <div className="absolute inset-0 rounded-full border border-primary/50 group-hover:border-transparent transition-colors"></div>
                  
                    {/* Text */}
                    <span className="relative z-10 text-[14px] font-semibold tracking-wide text-primary group-hover:text-[#05070a] transition-colors duration-300 flex items-center gap-2 h-full">
                      Sign Up
                    </span>
                  </Link>
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#05070a]/95 backdrop-blur-3xl pt-24 px-6 flex flex-col lg:hidden"
            >
              <div className="flex flex-col gap-6 mt-8">
                {[{name: 'Home', path: '/'}, ...navItems, {name: 'Dashboard', path: '/dashboard'}].map((item) => {
                  const isActive = location.pathname === item.path;
                  // Don't show Dashboard link to logged out users
                  if (item.path === '/dashboard' && !user) return null;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-display font-bold text-left uppercase tracking-tight transition-colors border-b border-white/5 pb-4 ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-8 flex flex-col gap-4">
                {user ? (
                   <button 
                     onClick={() => { logout(); setIsOpen(false); }}
                     className="w-full py-4 rounded-xl border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 flex items-center justify-center gap-2"
                   >
                     <LogOut size={18} /> Sign Out
                   </button>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-4 rounded-xl bg-primary text-background font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,223,143,0.3)] text-center flex items-center justify-center gap-2"
                    >
                      Create Account
                    </Link>
                    <Link 
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-center inline-block"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-auto mb-12 flex justify-between items-center pt-8">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Connect</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-background transition-all">
                    in
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-background transition-all">
                    yt
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
