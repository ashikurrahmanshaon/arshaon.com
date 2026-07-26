import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { Loader2, ExternalLink, CheckCircle, Clock, Search, Link as LinkIcon, Send } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Delivery State
  const [deliveryLink, setDeliveryLink] = useState('');
  const [adminMessage, setAdminMessage] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData = [];
      snapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() });
      });
      setOrders(ordersData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching orders:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      setUpdating(true);
      await updateDoc(doc(db, 'orders', orderId), {
        status: newStatus,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setUpdating(false);
    }
  };

  const deliverOrder = async (orderId) => {
    if (!deliveryLink && !adminMessage) return;
    try {
      setUpdating(true);
      await updateDoc(doc(db, 'orders', orderId), {
        status: 'Completed',
        deliveryLink: deliveryLink,
        adminMessage: adminMessage,
        completedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      setSelectedOrder(null);
      setDeliveryLink('');
      setAdminMessage('');
    } catch (error) {
      console.error("Error delivering order:", error);
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'In Progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Completed': return 'text-primary bg-primary/10 border-primary/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8">
      
      {/* Sidebar: Order List */}
      <aside className="w-full md:w-1/3 lg:w-1/4 shrink-0 flex flex-col gap-6">
        <div className="glass-card p-6 rounded-[24px] border border-white/10 flex flex-col h-[calc(100vh-160px)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold uppercase tracking-widest text-white">All Orders</h2>
            <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
              {orders.length}
            </div>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3">
            {orders.length === 0 ? (
              <p className="text-gray-500 text-center py-10 text-sm">No orders yet.</p>
            ) : (
              orders.map(order => (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedOrder?.id === order.id 
                      ? 'bg-primary/10 border-primary/30 shadow-[0_0_15px_rgba(0,223,143,0.1)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-gray-400 truncate max-w-[120px]">#{order.id.slice(-6).toUpperCase()}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1 truncate">{order.serviceName}</h3>
                  <p className="text-xs text-gray-400 truncate">{order.clientEmail}</p>
                </button>
              ))
            )}
          </div>
        </div>
      </aside>

      {/* Main Content: Order Details */}
      <main className="flex-grow glass-card rounded-[32px] border border-white/10 p-6 md:p-10 relative overflow-hidden h-[calc(100vh-160px)] flex flex-col">
        {selectedOrder ? (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-white">{selectedOrder.serviceName}</h1>
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getStatusColor(selectedOrder.status)}`}>
                    {selectedOrder.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400">Order placed by <strong className="text-white">{selectedOrder.clientEmail}</strong></p>
                <p className="text-xs text-gray-500 mt-1">Order ID: {selectedOrder.id}</p>
              </div>

              {/* Status Actions */}
              <div className="flex gap-3">
                {selectedOrder.status === 'Pending' && (
                  <button 
                    onClick={() => updateOrderStatus(selectedOrder.id, 'In Progress')}
                    disabled={updating}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors text-sm font-bold uppercase tracking-wider"
                  >
                    {updating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
                    Start Work
                  </button>
                )}
              </div>
            </div>

            {/* Content body */}
            <div className="flex-grow overflow-y-auto pr-2 flex flex-col gap-6">
              
              {/* Order Info */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Client Requirements</h3>
                <p className="text-white text-sm whitespace-pre-wrap leading-relaxed">
                  {selectedOrder.requirements || "No specific requirements provided."}
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Price</p>
                    <p className="text-xl font-bold text-white">${selectedOrder.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Placed On</p>
                    <p className="text-sm font-medium text-white">{new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              {/* Delivery Section (If not completed) */}
              {selectedOrder.status !== 'Completed' ? (
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Deliver Final Work
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Delivery Link (Google Drive, Figma, etc)</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input 
                          type="url" 
                          value={deliveryLink}
                          onChange={(e) => setDeliveryLink(e.target.value)}
                          placeholder="https://..."
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message to Client</label>
                      <textarea 
                        value={adminMessage}
                        onChange={(e) => setAdminMessage(e.target.value)}
                        placeholder="Hi! Here is your completed project..."
                        className="w-full h-32 bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    
                    <button 
                      onClick={() => deliverOrder(selectedOrder.id)}
                      disabled={updating || (!deliveryLink && !adminMessage)}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-background font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,223,143,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {updating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      Send Delivery & Complete Order
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Order Delivered
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">Delivered On: {new Date(selectedOrder.completedAt).toLocaleDateString()}</p>
                  
                  {selectedOrder.deliveryLink && (
                    <a 
                      href={selectedOrder.deliveryLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline mt-4 text-sm font-medium bg-primary/10 px-4 py-2 rounded-lg border border-primary/20"
                    >
                      View Delivery Link <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {selectedOrder.adminMessage && (
                    <div className="mt-6">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Your Message</p>
                      <p className="text-white text-sm bg-black/30 p-4 rounded-xl border border-white/5">{selectedOrder.adminMessage}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
            <LayoutDashboard className="w-16 h-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Select an Order</h3>
            <p className="text-gray-400 text-sm max-w-sm">Click on any order from the left sidebar to view its details, update status, or deliver files.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
