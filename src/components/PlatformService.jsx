import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { platformServicesData } from '../data/platformServices';

const PlatformService = () => {
  const { platformId } = useParams();
  const navigate = useNavigate();
  const platform = platformServicesData[platformId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [platformId]);

  if (!platform) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
        <h1 className="text-4xl font-bold mb-4">Platform Not Found</h1>
        <button onClick={() => navigate('/services')} className="text-primary hover:underline">
          Return to Services
        </button>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-32">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: platform.color }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8"
              style={{ backgroundColor: `${platform.color}15`, borderColor: `${platform.color}30` }}
            >
              <div style={{ color: platform.color }}>
                <Zap size={16} />
              </div>
              <span 
                className="font-bold tracking-widest uppercase text-xs"
                style={{ color: platform.color }}
              >
                {platform.name} Mastery
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
              {platform.heroTitle}
            </h1>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              {platform.heroSubtitle}
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-6"
          >
            {platform.stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 glass-edge flex items-center justify-between group hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-lg text-gray-400 font-medium">{stat.label}</span>
                <span 
                  className="text-3xl md:text-5xl font-display font-bold"
                  style={{ color: platform.color }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* The Masterplan (Workflows) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The Masterplan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Exactly how we engineer growth on {platform.name}. No guesswork. Just data-driven execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platform.workflows.map((workflow, i) => (
              <div 
                key={i} 
                className="relative bg-white/[0.02] border border-white/5 p-8 rounded-3xl glass-edge overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: platform.color }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${platform.color}20` }}>
                    <CheckCircle2 size={24} style={{ color: platform.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{workflow.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{workflow.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deep Dive Section ("10000 Words" feel) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] p-8 md:p-16 border border-white/10 bg-[#0d1116] overflow-hidden"
        >
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] opacity-10 rounded-full pointer-events-none"
            style={{ backgroundColor: platform.color }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp size={32} style={{ color: platform.color }} />
              <h2 className="text-3xl md:text-5xl font-display font-bold">The Strategic Deep-Dive</h2>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-loose text-lg md:text-xl font-light">
                {platform.deepDive}
              </p>
              
              <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-2xl font-bold text-white mb-4">Why This Works</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="shrink-0 mt-1" style={{ color: platform.color }} size={20} />
                    <span>We completely eliminate emotional decision making, relying purely on raw analytics and algorithmic data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="shrink-0 mt-1" style={{ color: platform.color }} size={20} />
                    <span>We build ecosystems, not isolated posts. Every asset is designed to push the prospect further down the funnel.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="shrink-0 mt-1" style={{ color: platform.color }} size={20} />
                    <span>Continuous iterative A/B testing ensures that performance compounds week over week, drastically lowering acquisition costs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to dominate {platform.name}?</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg bg-white text-black hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Let's Talk Strategy
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default PlatformService;
