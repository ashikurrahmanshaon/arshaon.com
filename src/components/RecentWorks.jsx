import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const RecentWorks = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleCardClick = (index) => {
    if (index === activeIdx) {
      // If clicking the front card, cycle to the next one
      setActiveIdx((prev) => (prev + 1) % projects.length);
    } else {
      // If clicking a back card, bring it to the front
      setActiveIdx(index);
    }
  };

  return (
    <section id="work" className="py-32 px-8 md:px-16 bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter">
              RECENT WORKS<span className="text-primary">.</span>
            </h2>
          </div>
          <Link to="/all-projects" className="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-1 group w-fit">
            View All Projects
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stack & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Side - 3D Stack */}
          <div className="lg:col-span-7 h-[340px] sm:h-[450px] md:h-[480px] relative perspective-1000">
            {projects.map((project, index) => {
              // Calculate difference taking wrapping into account for a continuous stack
              const diff = (index - activeIdx + projects.length) % projects.length;
              const isFront = diff === 0;

              return (
                <motion.div
                  key={project.id}
                  onClick={() => handleCardClick(index)}
                  className={`absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden cursor-pointer border border-white/10 ${isFront ? 'shadow-2xl shadow-primary/10' : 'shadow-lg'}`}
                  animate={{
                    y: diff * 35,
                    scale: 1 - diff * 0.05,
                    rotateX: diff * 2,
                    zIndex: projects.length - diff,
                    opacity: diff > 2 ? 0 : 1 // Hide cards too far back
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  style={{ transformOrigin: 'top center' }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter brightness-90 contrast-125" 
                  />
                </motion.div>
              );
            })}
            
            {/* Nav Dots */}
            <div className="absolute -bottom-12 left-0 flex items-center gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIdx(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIdx ? 'w-8 bg-primary shadow-[0_0_10px_#00df8f]' : 'bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="lg:col-span-5 flex items-start pt-4 lg:pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col"
              >
                <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  {projects[activeIdx].category}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white">
                  {projects[activeIdx].title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {projects[activeIdx].description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {projects[activeIdx].tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-bold tracking-widest uppercase text-gray-300 glass-edge"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to={`/projects/${projects[activeIdx].id}`} className="flex items-center gap-3 bg-white text-background font-bold px-8 py-4 rounded-full hover:bg-primary transition-all duration-300 w-fit group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,223,143,0.4)]">
                  Read Full Case Study
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
