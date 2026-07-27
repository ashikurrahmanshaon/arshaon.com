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
          <motion.div variants={itemVariants} className="md:col-span-7 md:row-span-2 bg-[#0d1116]/60 border border-white/10 rounded-[2rem] p-10 md:p-14 relative overflow-hidden backdrop-blur-xl group hover:border-primary/30 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,223,143,0.15)] flex flex-col justify-center">
            {/* Inner subtle glow */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_#00df8f]"></span>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px]">The Architect Behind The Growth</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold tracking-tighter mb-8 leading-[1.05] text-white">
                I don't just run campaigns.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffaa] to-[#00a368]">I engineer ecosystems.</span>
              </h1>
              
              <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light tracking-wide">
                <p>
                  My name is <strong className="text-white font-medium">Ashikur Rahman</strong>. For years, I've watched brands bleed money through poor tracking, broken funnels, and scattered social media strategies.
                </p>
                <p>
                  I step in to fix the leaks, build bulletproof <span className="text-primary font-medium">GTM tracking architectures</span>, and scale your revenue through aggressive, data-backed omnipresence across Facebook, Google, YouTube, and TikTok. 
                </p>
                <p className="border-l-2 border-primary/50 pl-6 text-gray-400 italic text-base md:text-lg">
                  "If you aren't tracking it flawlessly, you aren't growing. You're just guessing."
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

          {/* Readable Revenue Engine Grid (Col 12, Row 3) */}
          <motion.div variants={itemVariants} className="md:col-span-12 mt-12 mb-8">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter mb-6">
                The <span className="text-primary">Revenue Engine</span>
              </h3>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed tracking-wide">
                My proprietary 3-step framework for transforming raw traffic into predictable, scalable revenue. No fluff, just raw mechanics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineSteps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.7, type: "spring", stiffness: 80 }}
                  className="bg-[#0d1116]/60 border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden backdrop-blur-xl group hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,223,143,0.15)] flex flex-col"
                >
                  
                  {/* Big faded number background */}
                  <div className="absolute -top-6 -right-6 text-[10rem] font-display font-bold text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none select-none leading-none z-0">
                    0{i + 1}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-[#0d1116] transition-all duration-500 shadow-[0_0_15px_rgba(0,223,143,0.2)]">
                      <step.icon className="w-6 h-6" />
                    </div>
                    
                    <h4 className="text-2xl font-display font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mt-auto">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
