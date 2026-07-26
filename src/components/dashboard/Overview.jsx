import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, query, where, orderBy, getDocs, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';
import { Clock, CheckCircle, ExternalLink, MessageSquare, Loader2, Activity, TrendingUp } from 'lucide-react';

const Overview = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'orders'),
      where('clientId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const ordersData = [];
      querySnapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() });
      });
      setOrders(ordersData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching orders:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Pending': return <Clock className="w-5 h-5 text-orange-400" />;
      case 'In Progress': return <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />;
      case 'Completed': return <CheckCircle className="w-5 h-5 text-primary" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'In Progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Completed': return 'text-primary bg-primary/10 border-primary/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white mb-2">Active Projects</h2>
        <p className="text-gray-400">Track the status of your ongoing orders.</p>
      </div>

      {orders.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center opacity-70">
          <Clock className="w-16 h-16 text-gray-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No active projects</h3>
          <p className="text-gray-400 max-w-sm">You don't have any projects yet. Go to the Purchase Services tab to start a new project.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
          {orders.map((order) => (
            <div key={order.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{order.serviceName}</h3>
                  <p className="text-sm text-gray-400">Order ID: #{order.id.slice(-6).toUpperCase()}</p>
                  <p className="text-sm font-bold text-white mt-2">${order.price}</p>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="font-bold text-sm tracking-wider uppercase">{order.status}</span>
                </div>
              </div>

              {order.status === 'Completed' ? (
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Delivery Received</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed bg-black/30 p-4 rounded-lg border border-white/5">
                    {order.adminMessage || "Your project has been completed and delivered!"}
                  </p>
                  {order.deliveryLink && (
                    <a 
                      href={order.deliveryLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-background bg-primary hover:bg-[#00ffaa] px-5 py-2.5 rounded-lg font-bold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Final Delivery
                    </a>
                  )}
                </div>
              ) : (
                <div className="bg-black/30 rounded-xl p-4 border border-white/5 flex items-start gap-4">
                  <MessageSquare className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">We are working on your project!</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Our team is currently reviewing your requirements and executing the project. You will be notified here once the delivery is ready.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Overview;
