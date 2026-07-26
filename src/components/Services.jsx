import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, AlertCircle, Zap, TrendingUp, CheckCircle2, ShieldAlert, BarChart, Search, Users, DollarSign, RefreshCcw, LayoutDashboard, Crown } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'AUDIT & STRATEGY',
    icon: Search,
    problem: 'Most businesses run ads blindly, burning cash on outdated strategies. Their funnels are leaky, their messaging is off, and they have no idea where their customers are actually dropping off.',
    execution: 'I conduct a surgical deep-dive into your entire digital ecosystem. I map your customer journey, tear down your top competitors\' ad libraries, audit your SEO technical debt, and pinpoint exactly where you are bleeding money.',
    roi: 'A bespoke, bulletproof growth blueprint. You stop guessing and start executing a multi-channel strategy engineered strictly for profit.'
  },
  {
    num: '02',
    title: 'FIXING ISSUES',
    icon: ShieldAlert,
    problem: 'Shadowbans, disabled Meta ad accounts, suspended Google profiles, or demonetized YouTube channels. Technical roadblocks kill momentum and freeze your revenue overnight.',
    execution: 'I leverage insider protocols and direct support channels to recover restricted accounts, appeal complex policy violations, lift TikTok/YouTube shadowbans, and repair broken infrastructure. I clean your digital slate entirely.',
    roi: 'Zero downtime and risk mitigation. Your campaigns run uninterrupted, and you stop losing thousands of dollars to disabled assets.'
  },
  {
    num: '03',
    title: 'SETUP & TRACKING',
    icon: LayoutDashboard,
    problem: 'If you can\'t track it, you can\'t scale it. iOS 14+ destroyed basic pixel tracking. Most brands are flying blind, attributing sales to the wrong channels and feeding algorithms garbage data.',
    execution: 'I implement enterprise-grade Google Tag Manager (GTM) architectures, Server-Side Tracking (CAPI), and custom event mapping. Every click, add-to-cart, lead, and scroll is tracked perfectly across all platforms.',
    roi: 'Hyper-accurate data. You will know exactly which ad, keyword, or video generated every single dollar, allowing us to feed the ad algorithms perfect data for drastically cheaper conversions.'
  },
  {
    num: '04',
    title: 'ADVERTISING & TRAFFIC',
    icon: DollarSign,
    problem: 'Wasting budget on "brand awareness" instead of Direct Response marketing. High Cost-Per-Acquisition (CPA) is eating all your profit margins while competitors steal your market share.',
    execution: 'I build relentless, high-converting ad architectures across Meta, Google, TikTok, and Pinterest. I run rigorous A/B testing on creatives, copy, hooks, and audience targeting. We don\'t just buy traffic; we buy customers.',
    roi: 'Predictable, scalable revenue. We lower your CPA, skyrocket your Return on Ad Spend (ROAS), and turn your ad accounts into automated, high-margin cash-flow machines.'
  },
  {
    num: '05',
    title: 'SEO & MONETIZATION',
    icon: TrendingUp,
    problem: 'Paying for every single visitor. When you turn off your ads, your business dies. Social channels aren\'t optimized for discovery, leaving organic revenue on the table.',
    execution: 'I deploy advanced Technical SEO, keyword clustering, and high-authority backlink strategies to dominate Google Page 1. Simultaneously, I unlock monetization features across YouTube and TikTok, optimizing your organic content for algorithmic virality.',
    roi: 'Free, high-intent traffic compounding month over month, plus supplementary passive income streams directly from platform monetization programs.'
  },
  {
    num: '06',
    title: 'ACCOUNT MANAGEMENT',
    icon: Users,
    problem: 'Inconsistent posting, zero community engagement, and brand decay across social platforms. Your audience forgets you exist the moment they close the app.',
    execution: 'Complete hands-on management. I act as the architect of your digital community (Discord, IG, TikTok, YouTube). I foster engagement, manage moderators, plan relentless content calendars, and ensure your brand voice is omnipresent.',
    roi: 'Insane customer loyalty and high Lifetime Value (LTV). You build a cult-like, dedicated community that buys everything you launch.'
  }
];

const Services = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleOpen = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-16 bg-transparent relative z-10">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-[3rem] md:text-6xl lg:text-[5rem] font-display font-bold tracking-tighter leading-[0.9] mb-8">
            <span className="block text-white">STAGES OF DIGITAL</span>
            <span className="block text-stroke-primary">GROWTH<span className="text-primary" style={{ WebkitTextStroke: '0px' }}>.</span></span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A transparent, data-driven blueprint to scale your brand, fix critical infrastructure issues, and ruthlessly multiply your revenue. No fluff. Just execution.
          </p>
        </motion.div>

        {/* Core Philosophy Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {[
            { icon: AlertCircle, title: 'Stop the Bleeding', desc: 'Most brands lose 30% of their ad budget to poor tracking and technical debt. I fix the leaks first.' },
            { icon: BarChart, title: 'Data Over Feelings', desc: 'Every decision is backed by hard analytics. We scale what prints money and ruthlessly kill what doesn\'t.' },
            { icon: Zap, title: 'Full-Stack Execution', desc: 'From recovering banned accounts to scaling $10k/day ad spend. I handle the entire growth ecosystem.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 glass-edge hover:bg-white/[0.04] transition-colors duration-500">
              <item.icon className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-white font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* The Deep-Dive Accordion */}
        <div className="space-y-6 mb-32">
          {stages.map((stage, index) => {
            const isOpen = openIdx === index;
            const StageIcon = stage.icon;
            
            return (
               <motion.div 
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-[32px] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-[#0d1116] border border-primary/30 shadow-[0_10px_40px_rgba(0,223,143,0.1)] glass-edge' : 'bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/[0.02]'}`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full py-8 md:py-10 px-6 md:px-10 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className={`text-2xl md:text-3xl font-mono font-bold transition-colors duration-500 ${isOpen ? 'text-primary' : 'text-gray-600 group-hover:text-gray-400'}`}>
                      {stage.num}
                    </span>
                    <h3 className={`text-2xl md:text-4xl font-display font-bold tracking-tight transition-colors duration-500 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {stage.title}
                    </h3>
                  </div>
                  
                  <div className={`w-12 h-12 shrink-0 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,223,143,0.3)]' : 'border-white/10 text-white group-hover:border-white/30 group-hover:bg-white/5'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 px-6 md:px-10 md:pl-[6.5rem]">
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                          
                          {/* Text Content */}
                          <div className="md:col-span-8 space-y-8">
                            
                            {/* Problem */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <AlertCircle className="w-4 h-4 text-red-400" />
                                <h4 className="text-xs font-bold tracking-[0.2em] text-red-400 uppercase">The Problem</h4>
                              </div>
                              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{stage.problem}</p>
                            </div>

                            {/* Execution */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-4 h-4 text-primary" />
                                <h4 className="text-xs font-bold tracking-[0.2em] text-primary uppercase">My Execution</h4>
                              </div>
                              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{stage.execution}</p>
                            </div>

                            {/* ROI */}
                            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full" />
                              <div className="flex items-center gap-2 mb-3 relative z-10">
                                <CheckCircle2 className="w-5 h-5 text-[#00ffaa]" />
                                <h4 className="text-sm font-bold tracking-widest text-white uppercase">The Outcome / ROI</h4>
                              </div>
                              <p className="text-primary/90 font-medium text-sm md:text-base leading-relaxed relative z-10">{stage.roi}</p>
                            </div>

                          </div>

                          {/* Visual / Icon Display */}
                          <div className="md:col-span-4 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                            <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                              <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                              <div className="absolute inset-4 bg-primary/10 rounded-full blur-xl" />
                              <div className="w-20 h-20 md:w-28 md:h-28 bg-[#14181f] border border-white/10 rounded-full flex items-center justify-center relative z-10 shadow-2xl glass-edge">
                                <StageIcon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* The Subscription Pitch (Fractional CMO) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden p-10 md:p-16 border border-primary/30 glass-edge shadow-[0_20px_60px_rgba(0,223,143,0.15)] bg-gradient-to-br from-[#14181f] to-[#0d1116]"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px]">Retainer Partnership</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
                Why Hire Me On a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Monthly Subscription?</span>
              </h3>
              
              <div className="space-y-6 text-gray-400 font-light text-sm md:text-base leading-relaxed">
                <p>
                  Digital marketing isn't a one-time setup. Algorithms change weekly. Ad creatives fatigue. Tracking pixels break due to browser updates. What prints money today will bleed cash tomorrow if left unmonitored.
                </p>
                <p>
                  Hiring a full-time, in-house Chief Marketing Officer (CMO) costs upwards of <strong className="text-white font-medium">$120,000+ per year</strong>. Hiring a traditional agency means you get passed off to a junior account manager learning on your dime.
                </p>
                <p>
                  With my <strong className="text-primary font-medium">Fractional CMO Retainer</strong>, you get elite, founder-level execution 24/7. I become a dedicated extension of your business—constantly A/B testing, adapting to platform updates, fixing technical debt, and ruthlessly scaling your revenue while you focus on the product.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  'Continuous Optimization',
                  'Priority Support',
                  'Algorithm Adapting',
                  'Fractional CMO Level'
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full">
                    <RefreshCcw className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-[32px] p-8 glass-edge relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <h4 className="text-2xl font-bold text-white mb-8 tracking-tight">The Value Equation</h4>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                     <Minus className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <h5 className="text-white font-semibold mb-1">Traditional Agency / In-House</h5>
                     <p className="text-gray-500 text-sm">Slow execution, huge overhead, junior staff, bloated contracts, zero adaptability.</p>
                   </div>
                 </div>
                 
                 <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                 
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/30 shadow-[0_0_15px_rgba(0,223,143,0.3)]">
                     <Plus className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <h5 className="text-primary font-semibold mb-1">My Retainer Partnership</h5>
                     <p className="text-gray-300 text-sm">Agile, expert-level execution. Data-driven scaling, instant technical fixes, and absolute transparency.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Services;
