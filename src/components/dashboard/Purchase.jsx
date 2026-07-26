import { useState, useEffect } from 'react';
import { CreditCard, Loader2, CheckCircle, Clock } from 'lucide-react';
import { db } from '../../firebase';
import { collection, addDoc, query, where, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [requirements, setRequirements] = useState('');
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'orders'), where('clientId', '==', user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const orders = [];
      snapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      setUserOrders(orders);
    });
    return () => unsubscribe();
  }, [user]);

  const services = [
    { id: 'meta-ads', name: 'Meta Ads Management', price: 999, desc: 'Full-service Facebook & Instagram Ads management. Minimum 1 month.' },
    { id: 'google-ads', name: 'Google Ads Setup', price: 799, desc: 'Search & Display campaign setup + optimization.' },
    { id: 'seo-audit', name: 'Technical SEO Audit', price: 499, desc: 'Deep dive into your website technical SEO with a 30-page action plan.' },
    { id: 'web-dev', name: 'Custom Website', price: 1999, desc: 'A premium, animated website just like this one.' },
  ];

  const handlePurchase = async (service) => {
    try {
      setLoading(true);
      
      const docRef = await addDoc(collection(db, 'orders'), {
        serviceId: service.id,
        serviceName: service.name,
        price: service.price,
        clientId: user.uid,
        clientEmail: user.email,
        requirements: requirements,
        status: 'Pending Payment', 
        createdAt: new Date().toISOString()
      });

      navigate(`/payment/${docRef.id}`);

    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
      setLoading(false);
    } 
  };

  const getServiceStatus = (serviceId) => {
    // Find the most recent active order for this service
    const order = userOrders
      .filter(o => o.serviceId === serviceId && o.status !== 'Completed')
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    return order ? order.status : null;
  };

  if (selectedService) {
    return (
      <div>
        <button 
          onClick={() => setSelectedService(null)}
          className="text-gray-400 hover:text-white mb-6 text-sm font-bold uppercase tracking-widest"
        >
          &larr; Back to Services
        </button>
        <div className="bg-white/5 rounded-2xl p-6 md:p-10 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">{selectedService.name}</h2>
          <p className="text-gray-400 mb-6">{selectedService.desc}</p>
          <div className="text-3xl font-bold text-white mb-8">${selectedService.price}</div>
          
          <div className="mb-8">
            <label className="block text-sm font-bold text-white mb-2">Project Requirements</label>
            <textarea 
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Tell me about your project, target audience, and specific goals..."
              className="w-full h-32 bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button 
            onClick={() => handlePurchase(selectedService)}
            disabled={loading}
            className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CreditCard className="w-5 h-5" />}
            {loading ? 'Processing...' : 'Place Order Now'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white mb-2">Purchase Services</h2>
        <p className="text-gray-400">Select a service to start a new project with us.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map(service => {
          const status = getServiceStatus(service.id);
          const isActive = !!status;

          return (
            <div key={service.id} className={`bg-white/5 border p-6 rounded-2xl flex flex-col h-full transition-colors ${isActive ? 'border-primary/30 shadow-[0_0_15px_rgba(0,223,143,0.1)]' : 'border-white/10 hover:border-primary/50'}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                {isActive && (
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${
                    status === 'Pending Payment' ? 'text-orange-400 border-orange-400/30 bg-orange-400/10' :
                    status === 'Pending' ? 'text-primary border-primary/30 bg-primary/10' :
                    'text-blue-400 border-blue-400/30 bg-blue-400/10'
                  }`}>
                    {status === 'Pending' ? 'Paid & Ready' : status}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-6 flex-grow">{service.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="text-2xl font-bold text-white">${service.price}</span>
                {isActive ? (
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 px-5 py-2 bg-white/5 text-gray-300 rounded-full font-bold uppercase tracking-wider text-xs hover:text-white transition-colors"
                  >
                    View Status &rarr;
                  </button>
                ) : (
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="px-6 py-2 bg-white/10 hover:bg-primary hover:text-background text-white rounded-full font-bold uppercase tracking-wider text-xs transition-colors"
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
        <div className="p-3 bg-white/5 rounded-full shrink-0">
          <CreditCard className="text-gray-400" size={24} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-1">Secure Payments</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Payment links will be securely sent to your email after the order requirements are reviewed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
