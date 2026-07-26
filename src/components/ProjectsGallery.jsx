import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    return ['All', ...new Set(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Elegant Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">Selected Works</span>
          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-8">
            Featured Projects
          </h1>
          
          {/* Subtle Thin Filter Line */}
          <div className="flex flex-wrap justify-center gap-6 border-t border-b border-white/10 py-4 w-full max-w-3xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category 
                    ? 'text-white font-medium' 
                    : 'text-gray-500 hover:text-gray-300 font-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Clean Agency Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col"
              >
                <Link to={`/projects/${project.id}`} className="block w-full">
                  {/* Clean Image Wrapper */}
                  <div className="w-full aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden mb-6 relative bg-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Elegant Content */}
                  <div className="flex justify-between items-start pr-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">{project.category}</span>
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        <span className="text-gray-400 text-[11px] uppercase tracking-widest">{project.metrics[0].value}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-3 group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Minimal Arrow Button */}
                    <div className="w-12 h-12 rounded-full border border-white/10 flex flex-shrink-0 justify-center items-center group-hover:bg-primary group-hover:border-primary group-hover:text-[#05070a] text-white transition-all duration-500 -mt-2">
                      <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectsGallery;
