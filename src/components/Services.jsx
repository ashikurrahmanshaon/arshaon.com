import { useState } from 'react';
import { Link } from 'react-router-dom';
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

const platforms = [
  { 
    id: 'facebook',
    name: 'Facebook', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
    color: '#1877F2', desc: 'Community building & highly targeted ad campaigns.' 
  },
  { 
    id: 'instagram',
    name: 'Instagram', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    color: '#E1306C', desc: 'Visual storytelling, Reels growth & engagement.' 
  },
  { 
    id: 'linkedin',
    name: 'LinkedIn', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
    color: '#0A66C2', desc: 'B2B networking, thought leadership & lead gen.' 
  },
  { 
    id: 'youtube',
    name: 'YouTube', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    color: '#FF0000', desc: 'Long-form content, SEO optimization & monetization.' 
  },
  { 
    id: 'tiktok',
    name: 'TikTok', 
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg',
    color: '#00f2fe', 
    desc: 'Viral short-form content & trend hijacking strategies.' 
  }
];

const Services = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleOpen = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-16 bg-transparent relative z-10 overflow-hidden">
      
      {/* Ambient Background Glows like Home Page */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#00b373]/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        
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
        </motion.div>



        {/* Social Media Management Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 mt-12"
        >
          <div className="flex flex-wrap justify-center items-end gap-12 md:gap-20 max-w-6xl mx-auto pt-10 pb-20">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="group relative flex flex-col items-center w-32 md:w-40 text-center cursor-pointer"
              >
                <Link 
                  to={`/services/${platform.id}`} 
                  className="flex flex-col items-center w-full"
                >
                  {/* Floating Icon with continuous gentle bounce */}
                  <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4 + (i * 0.5), repeat: Infinity, ease: "easeInOut" }}
                    className="relative mb-6"
                  >
                    {/* Constant subtle brand glow behind the icon */}
                    <div 
                      className="absolute inset-0 opacity-20 blur-[30px] rounded-full scale-[1.8] group-hover:opacity-70 transition-opacity duration-700"
                      style={{ backgroundColor: platform.color }}
                    />
                    
                    {/* The Icon */}
                    <img 
                      src={platform.logoUrl} 
                      alt={platform.name} 
                      className="w-16 h-16 md:w-24 md:h-24 object-contain relative z-10 group-hover:scale-[1.15] transition-transform duration-700 drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
                    />

                    {/* 3D Floor Reflection Shadow */}
                    <div 
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-4 rounded-[100%] blur-[10px] opacity-40 group-hover:opacity-80 group-hover:scale-75 transition-all duration-700"
                      style={{ backgroundColor: platform.color }}
                    />
                  </motion.div>
                  
                  <div className="mt-8 relative z-20">
                    <h4 
                      className="text-white font-display font-bold text-xl md:text-2xl transition-all duration-500 group-hover:-translate-y-2"
                      style={{ textShadow: `0 0 20px ${platform.color}50` }}
                    >
                      {platform.name}
                    </h4>
                    
                    {/* Reveal description on hover for ultra-clean default look */}
                    <div className="overflow-hidden absolute top-full left-1/2 -translate-x-1/2 w-[200px]">
                      <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 text-center">
                        {platform.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {stages.map((stage, index) => {
            const StageIcon = stage.icon;
            
            return (
              <motion.div 
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-[#0d1116]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,223,143,0.1)] hover:-translate-y-2"
              >
                {/* Background Number */}
                <div className="absolute -top-4 -right-4 text-[8rem] font-display font-bold text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none select-none leading-none">
                  {stage.num}
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-[#0d1116] transition-all duration-500 shadow-[0_0_15px_rgba(0,223,143,0.2)]">
                    <StageIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                    {stage.title}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="space-y-5 relative z-10 flex-grow">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                      <h4 className="text-[10px] font-bold tracking-widest text-red-400 uppercase">The Problem</h4>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{stage.problem}</p>
                  </div>

                  {/* Execution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-3.5 h-3.5 text-primary" />
                      <h4 className="text-[10px] font-bold tracking-widest text-primary uppercase">Execution</h4>
                    </div>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{stage.execution}</p>
                  </div>
                </div>

                {/* ROI Container */}
                <div className="mt-6 pt-5 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ffaa]" />
                    <h4 className="text-[10px] font-bold tracking-widest text-[#00ffaa] uppercase">The ROI</h4>
                  </div>
                  <p className="text-[#00ffaa]/90 font-medium text-xs md:text-sm leading-relaxed">
                    {stage.roi}
                  </p>
                </div>
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
