import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {
  const constraintsRef = useRef(null);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Glare effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-8 md:px-16" id="home">

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative z-10" ref={constraintsRef}>
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center relative pl-8 md:pl-12"
        >
          {/* Animated Vertical Accent Line */}
          <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-white/10 rounded-full overflow-hidden">
             <motion.div 
               animate={{ y: ["-100%", "200%"] }}
               transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
               className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(0,223,143,0.8)]"
             />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">AI & Digital Expert</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
            <motion.span 
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00df8f] to-white bg-[length:200%_auto]"
            >
              DIGITAL
            </motion.span>
            <span className="block text-stroke-primary">EXPERTISE<span className="text-primary drop-shadow-[0_0_15px_rgba(0,223,143,0.8)]" style={{ WebkitTextStroke: '0px' }}>.</span></span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium drop-shadow-md">
            Specializing in Social Media Technical Issue Fixing, Account Management (Meta, TikTok, YouTube), Monetization, Multi-platform Ads (Google, Meta), and SEO Ranking.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/all-projects" className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-background font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300">
              View My Work
              <ArrowRight size={20} className="text-background" />
            </Link>
            <Link to="/contact" className="flex items-center gap-3 bg-background-surface border border-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-colors duration-300 group">
              Contact Me
              <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Cinematic Blended Portrait */}
        <div className="flex items-center justify-center lg:justify-center relative h-[450px] sm:h-[500px] lg:h-auto pointer-events-none w-full mt-8 lg:mt-0">
          
          {/* Subtle Backlight Glow */}
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 blur-[80px] rounded-full z-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[400px] flex flex-col items-center pointer-events-auto"
          >
            
            {/* Blended Image with Animated Border & CSS Mask */}
            <motion.div 
              animate={{ 
                borderColor: ['rgba(255,255,255,0.05)', 'rgba(0,223,143,0.6)', 'rgba(255,255,255,0.05)']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-t-[3rem] border-t-2 border-l-2 border-r-2 border-transparent [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] WebkitMaskImage:linear-gradient(to_bottom,black_60%,transparent_100%)"
            >
              <img 
                src="/PP.png" 
                alt="Ashikur Rahman Shaon" 
                className="w-full h-full object-cover object-center filter contrast-[1.05] saturate-110"
                draggable={false}
                fetchpriority="high"
                decoding="sync"
              />
            </motion.div>

            {/* Floating Details (Overlapping the faded part) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 flex flex-col items-center w-full px-6 text-center z-20"
            >
              
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-1 tracking-tight drop-shadow-2xl">
                Ashikur Rahman<span className="text-primary">.</span>
              </h3>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-8 drop-shadow-lg">Digital Marketing Expert</p>
              
              {/* Action buttons */}
              <div className="flex gap-4 w-full max-w-[300px]">
                <a 
                  href="https://www.instagram.com/ashikur.rahman.shaon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center bg-white/5 hover:bg-white/15 border border-white/10 transition-all py-3.5 rounded-full text-xs font-bold text-white backdrop-blur-xl shadow-xl hover:shadow-2xl"
                >
                  Follow
                </a>
                <a 
                  href="https://wa.me/8801787081119" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center bg-gradient-to-r from-primary to-[#00b373] text-[#05070a] hover:scale-[1.05] transition-transform py-3.5 rounded-full text-xs font-bold shadow-[0_10px_30px_rgba(0,223,143,0.3)] hover:shadow-[0_15px_40px_rgba(0,223,143,0.5)]"
                >
                  Message
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
