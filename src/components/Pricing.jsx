import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import { useState } from 'react';

const plans = [
  {
    name: 'Growth',
    price: '999',
    description: 'Perfect for startups ready to scale their digital presence.',
    features: [
      { name: 'Dedicated Account Manager', included: true },
      { name: 'Weekly Analytics Reports', included: true },
      { name: 'Basic SEO Optimization', included: true },
      { name: 'Standard Support', included: true },
      { name: 'Custom App Development', included: false },
      { name: 'Advanced Conversion Tracking', included: false },
    ],
    recommended: false,
  },
  {
    name: 'Scale',
    price: '2,499',
    description: 'Advanced features for aggressive scaling and revenue growth.',
    features: [
      { name: 'Dedicated Account Manager', included: true },
      { name: 'Daily Analytics Reports', included: true },
      { name: 'Advanced SEO & Content', included: true },
      { name: 'Priority 24/7 Support', included: true },
      { name: 'Advanced Conversion Tracking', included: true },
      { name: 'Custom App Development', included: false },
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'A complete, tailor-made digital ecosystem for industry leaders.',
    features: [
      { name: 'Dedicated Strategy Team', included: true },
      { name: 'Real-time Custom Dashboards', included: true },
      { name: 'Enterprise SEO & Authority', included: true },
      { name: 'Priority 24/7 Support', included: true },
      { name: 'Advanced Conversion Tracking', included: true },
      { name: 'Custom App Development', included: true },
    ],
    recommended: false,
  }
];

const Pricing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAction = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6"
        >
          Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00b373]">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          No hidden fees. No surprises. Just clear, ROI-focused plans designed to scale your business.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-[32px] p-8 glass-card border transition-all duration-300 flex flex-col ${
              plan.recommended 
                ? 'border-primary shadow-[0_0_30px_rgba(0,223,143,0.2)] transform md:-translate-y-4 bg-background-surface/80' 
                : 'border-white/10 hover:border-white/30 bg-background-surface/40'
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background font-bold px-4 py-1 rounded-full text-sm uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(0,223,143,0.5)]">
                <Zap size={14} /> Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm h-10">{plan.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                {plan.price !== 'Custom' && <span className="text-2xl font-bold text-gray-400">$</span>}
                <span className="text-5xl font-display font-black tracking-tighter text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500">/mo</span>}
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature) => (
                <div key={feature.name} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <X className="text-gray-600 w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleAction}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${
                plan.recommended
                  ? 'bg-primary text-background hover:bg-[#00ffaa] shadow-[0_0_20px_rgba(0,223,143,0.4)]'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Pricing;
