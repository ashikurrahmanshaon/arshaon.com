import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, ShoppingCart, History, User, CreditCard } from 'lucide-react';
import Overview from './Overview';
import Purchase from './Purchase';
import PaymentHistory from './History';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'purchase', name: 'Purchase Services', icon: <ShoppingCart size={20} /> },
    { id: 'history', name: 'Payment History', icon: <History size={20} /> },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
        <div className="glass-card p-6 rounded-[24px] border border-white/10 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30 mb-4 overflow-hidden">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User size={32} className="text-primary" />
            )}
          </div>
          <h3 className="font-bold text-white mb-1 truncate w-full">{user?.displayName || 'Client'}</h3>
          <p className="text-xs text-gray-500 truncate w-full mb-6">{user?.email}</p>
          
          <div className="w-full h-[1px] bg-white/10 mb-6"></div>
          
          <nav className="w-full flex flex-col gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 font-semibold text-sm ${
                  activeTab === tab.id 
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,223,143,0.1)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow glass-card rounded-[32px] border border-white/10 p-6 md:p-10 relative overflow-hidden bg-background-surface/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'purchase' && <Purchase />}
            {activeTab === 'history' && <PaymentHistory />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
