import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, AlertCircle, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={20} />
          <span className="font-semibold tracking-wide">Back to Portfolio</span>
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden mb-24 border border-white/10 glass-edge shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          {/* Overlay Metric Badge */}
          <div className="absolute bottom-10 left-10 z-20 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 glass-edge">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">Verified Result</span>
             </div>
             <p className="text-4xl font-display font-bold text-white">
               {project.metrics[0].value}
             </p>
          </div>
        </motion.div>

        {/* Massive Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {project.metrics.map((metric, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center text-center glass-edge"
            >
              <h4 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 tracking-tight">
                {metric.value}
              </h4>
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* The Challenge */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertCircle className="text-red-400 w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">The Challenge</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* The Strategy */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Zap className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">My Strategy & Execution</h3>
              </div>
              <div className="space-y-6">
                {project.strategy.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 glass-edge">
                    <span className="text-blue-400 font-mono font-bold mt-1">0{index + 1}</span>
                    <p className="text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Results */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00ffaa]/10 border border-[#00ffaa]/20 flex items-center justify-center">
                  <TrendingUp className="text-[#00ffaa] w-6 h-6" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white">The Results</h3>
              </div>
              <div className="p-8 md:p-10 rounded-[32px] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 glass-edge relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
                <CheckCircle2 className="w-12 h-12 text-[#00ffaa] mb-6 relative z-10" />
                <p className="text-xl leading-relaxed text-white relative z-10 font-light">
                  {project.resultsText}
                </p>
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 glass-edge">
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-6">Technologies & Skills Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-widest uppercase text-gray-300 bg-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <h4 className="text-2xl font-display font-bold text-white mb-4">Want similar results?</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Stop burning ad spend on strategies that don't convert. Let's build a profitable acquisition engine for your brand.
                </p>
                <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-primary text-background font-bold hover:bg-white transition-colors">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
