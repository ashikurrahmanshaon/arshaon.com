import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Target, Users, BarChart3, DollarSign, MousePointerClick, Search, Share2, LineChart, Database, Activity } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skills = [
  'Social Media Management', 'Meta Ads', 'Google Ads', 'TikTok Ads', 
  'Pinterest Ads', 'SEO Ranking', 'Monetization', 'Discord Management',
  'YouTube Channel Growth', 'Technical Issue Fixing', 'GTM Tracking',
  'Social Media Management', 'Meta Ads', 'Google Ads', 'TikTok Ads'
];

const Counter = ({ from, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(from + (to - from) * easeProgress);
      if (nodeRef.current) {
        nodeRef.current.textContent = current + '%';
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);
  
  return <span ref={nodeRef}>{from}%</span>;
};

// Visualizer Components for the Interactive Revenue Engine
const TrafficVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative z-10 w-full h-full flex items-center justify-center"
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Core Hub */}
        <div className="w-20 h-20 bg-background rounded-full border border-primary/30 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,223,143,0.2)] glass-edge">
          <Target className="text-primary w-8 h-8" />
        </div>
        
        {/* Orbiting Elements */}
        {[
          { icon: Search, color: 'text-blue-400', delay: 0 },
          { icon: MousePointerClick, color: 'text-purple-400', delay: -2 },
          { icon: Share2, color: 'text-pink-400', delay: -4 }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: item.delay }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#14181f] rounded-xl border border-white/10 flex items-center justify-center glass-edge shadow-lg">
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
          </motion.div>
        ))}

        {/* Pulsing rings */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-primary/20"
          animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 rounded-full border border-primary/20"
          animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
      </div>
    </motion.div>
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 w-full max-w-sm"
    >
      <div className="bg-[#14181f] rounded-2xl border border-white/10 p-6 glass-edge shadow-2xl relative overflow-hidden">
        {/* Scanning line effect */}
        <motion.div 
          className="absolute left-0 right-0 h-1 bg-primary/30 blur-[2px] shadow-[0_0_10px_rgba(0,223,143,0.5)] z-20"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium tracking-wider text-gray-400">GTM TRACKING</span>
          </div>
          <Activity className="w-4 h-4 text-green-400 animate-pulse" />
        </div>

        <div className="space-y-4">
          {[65, 85, 45].map((width, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-16 text-xs text-gray-500 font-mono">Event 0{i+1}</div>
              <div className="flex-1 h-2 bg-background rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary/50 to-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 1, delay: 0.2 + (i * 0.2) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const RevenueVisual = () => (
  <div className="w-full h-full relative flex items-center justify-center p-6">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 blur-[60px] rounded-full" />
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative z-10 w-full flex items-end justify-center gap-4 h-48"
    >
      {[40, 60, 75, 100].map((height, i) => (
        <motion.div
          key={i}
          className="w-12 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-lg border-t border-x border-white/10 glass-edge relative group"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 100 }}
        >
          {i === 3 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -30 }}
              transition={{ delay: 1 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 bg-background border border-primary/30 px-3 py-1 rounded-full text-xs font-bold text-primary shadow-[0_0_15px_rgba(0,223,143,0.3)] whitespace-nowrap"
            >
              ROI +300%
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 20, 
        mass: 1 
      } 
    }
  };

  const engineSteps = [
    { icon: Users, title: 'Attention Capture', desc: 'Precision-targeted Meta, Google & TikTok Ads combined with elite SEO ranking strategies.' },
    { icon: BarChart3, title: 'Data Architecture', desc: 'Implementing robust GTM frameworks and server-side tracking to monitor user behavior.' },
    { icon: DollarSign, title: 'Revenue Scaling', desc: 'Relentless A/B testing and CRO to maximize lifetime value and achieve exponential ROI.' }
  ];

  return (
    <section className="py-32 px-6 md:px-16 bg-background relative z-10 overflow-hidden" id="about">
      {/* Premium Background Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00ffaa]/5 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
      
      <div className="w-full max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]"
        >
          
          {/* Main Intro Card (Col 7, Row 2) */}
          <motion.div variants={itemVariants} className="md:col-span-7 md:row-span-2 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.05] rounded-[40px] p-10 md:p-14 relative overflow-hidden backdrop-blur-2xl glass-edge group hover:border-white/[0.1] transition-colors duration-700">
            {/* Inner subtle glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] w-fit glass-edge">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_#00df8f]"></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px]">About Me</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-display font-bold tracking-tighter mb-8 leading-[1.05] text-white">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#00ffaa] bg-[length:200%_auto] animate-gradient pb-2">Ashikur Rahman</span><br/>a Digital Marketing Expert.
              </h1>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl font-light tracking-wide">
                <p>
                  I help elite brands and ambitious creators exponentially scale their online presence, monetize their attention, and engineer seamless user journeys across all major digital touchpoints.
                </p>
                <p>
                  My methodology fuses advanced SEO, precision GTM tracking, and high-converting paid media architectures. I am relentlessly obsessed with delivering tangible, data-driven revenue growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Commitment Card (Col 5, Row 1) */}
          <motion.div variants={itemVariants} className="md:col-span-5 bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-10 flex flex-col justify-center relative overflow-hidden group hover:border-primary/20 transition-all duration-700 backdrop-blur-xl glass-edge">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated abstract circles */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full scale-150 group-hover:scale-110 transition-transform duration-1000 ease-out" />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 border border-primary/10 rounded-full scale-150 group-hover:scale-100 transition-transform duration-1000 delay-75 ease-out" />
            
            <div className="relative z-10 flex items-center justify-between h-full">
              <div>
                <div className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">Dedication</div>
                <div className="text-6xl lg:text-7xl font-display font-bold text-white mb-2 tracking-tighter">
                  <Counter from={0} to={100} />
                </div>
                <div className="text-xs font-semibold text-primary uppercase tracking-[0.2em] flex items-center gap-2 mt-4">
                  Commitment to ROI
                </div>
              </div>
              <div className="w-20 h-20 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/[0.05] group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(0,223,143,0.2)] transition-all duration-700 backdrop-blur-md glass-edge">
                <Target className="text-gray-400 group-hover:text-primary w-8 h-8 transition-colors duration-700" />
              </div>
            </div>
          </motion.div>

          {/* Marquee Toolkit (Col 5, Row 1) */}
          <motion.div variants={itemVariants} className="md:col-span-5 bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-10 backdrop-blur-xl flex flex-col justify-center overflow-hidden relative group hover:border-white/[0.1] transition-colors duration-700 glass-edge">
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">My Arsenal</h3>
            
            <div className="relative w-full overflow-hidden flex items-center">
              {/* Fade overlays for the edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <motion.div 
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 25
                }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] text-gray-400 text-sm font-medium hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default glass-edge"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive Visual Storytelling Card (Col 12, Row 1) */}
          <motion.div variants={itemVariants} className="md:col-span-12 bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-6 md:p-10 relative overflow-hidden group hover:border-white/[0.1] transition-colors duration-700 backdrop-blur-xl glass-edge">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
              
              {/* Left Side: Text & Interactive List */}
              <div className="lg:col-span-5 flex flex-col justify-center h-full relative z-10">
                <div className="mb-8 lg:mb-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tighter mb-4">The Revenue Engine</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide">Hover or click below to explore my proprietary 3-step framework for transforming raw traffic into predictable, scalable revenue.</p>
                </div>

                <div className="space-y-4">
                  {engineSteps.map((step, i) => (
                    <div 
                      key={i}
                      className={`relative p-4 md:p-6 rounded-3xl cursor-pointer transition-all duration-500 border ${activeStep === i ? 'bg-white/[0.05] border-white/10 glass-edge shadow-[0_8px_30px_rgba(0,0,0,0.2)]' : 'bg-transparent border-transparent hover:bg-white/[0.02]'}`}
                      onMouseEnter={() => setActiveStep(i)}
                      onClick={() => setActiveStep(i)}
                    >
                      {activeStep === i && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-r-full shadow-[0_0_10px_#00df8f] hidden lg:block"
                        />
                      )}
                      
                      <div className="flex items-start gap-4 md:gap-5">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-500 ${activeStep === i ? 'bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(0,223,143,0.2)]' : 'bg-[#14181f] border-white/5'}`}>
                          <step.icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${activeStep === i ? 'text-primary' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1 md:mb-2">
                            <span className={`text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${activeStep === i ? 'text-primary' : 'text-gray-600'}`}>Step 0{i + 1}</span>
                            <h4 className={`font-semibold tracking-tight text-sm md:text-base transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-gray-400'}`}>{step.title}</h4>
                          </div>
                          <p className={`text-xs md:text-sm font-light leading-relaxed transition-colors duration-500 ${activeStep === i ? 'text-gray-300' : 'text-gray-600'}`}>{step.desc}</p>
                        </div>
                      </div>

                      {/* Mobile Visualizer Accordion */}
                      <AnimatePresence>
                        {activeStep === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="block lg:hidden overflow-hidden"
                          >
                            <div className="mt-4 h-[250px] relative rounded-2xl border border-white/5 bg-[#0d1116]/80 glass-edge shadow-inner">
                              {i === 0 && <TrafficVisual />}
                              {i === 1 && <DataVisual />}
                              {i === 2 && <RevenueVisual />}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Visualizer Display Area (Desktop Only) */}
              <div className="hidden lg:block lg:col-span-7 bg-[#0d1116]/80 rounded-[32px] border border-white/5 relative overflow-hidden h-full glass-edge shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div key={activeStep} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    {activeStep === 0 && <TrafficVisual />}
                    {activeStep === 1 && <DataVisual />}
                    {activeStep === 2 && <RevenueVisual />}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
