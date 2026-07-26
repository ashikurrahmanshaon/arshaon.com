import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft, Loader2, CheckCircle, ShieldCheck, User } from 'lucide-react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Payment = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form states
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderDoc = await getDoc(doc(db, 'orders', orderId));
        if (orderDoc.exists()) {
          setOrder({ id: orderDoc.id, ...orderDoc.data() });
        } else {
          console.error("Order not found");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(async () => {
      try {
        // Update order status to Pending (Paid)
        await updateDoc(doc(db, 'orders', orderId), {
          status: 'Pending', // It becomes a real pending order now
          paidAt: new Date().toISOString()
        });
        setSuccess(true);
        setTimeout(() => {
          navigate('/dashboard'); // Go back to dashboard after success
        }, 3000);
      } catch (error) {
        console.error("Error updating order:", error);
        alert("Payment failed. Please try again.");
      } finally {
        setProcessing(false);
      }
    }, 2000);
  };

  // Auto-format card number
  const handleCardChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    const parts = value.match(/.{1,4}/g) || [];
    setCardNumber(parts.join(' '));
  };

  // Auto-format expiry
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setExpiry(value);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-background relative z-10">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/30">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-4xl font-display font-bold text-white mb-4">Payment Successful!</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">
          Thank you for your purchase. Your order for <strong className="text-white">{order?.serviceName}</strong> has been confirmed.
        </p>
        <p className="text-primary font-bold animate-pulse">Redirecting to Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative z-10">
      {/* Background glow specific to payment page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Side: Order Summary */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Cancel Payment
          </button>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Order Summary</h3>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <p className="text-white font-bold">{order?.serviceName}</p>
                  <p className="text-sm text-gray-400 mt-1">Order #{order?.id.slice(-6).toUpperCase()}</p>
                </div>
                <span className="text-xl font-bold text-white">${order?.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">${order?.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Tax</span>
                <span className="text-white">$0.00</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-6 border-t border-white/10">
              <span className="text-lg font-bold text-white uppercase tracking-widest">Total Due</span>
              <span className="text-3xl font-bold text-primary">${order?.price}</span>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <p>Secure SSL Encrypted Checkout. Your information is safe.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Payment Form */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="bg-[#0d1116] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Glossy highlight */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">Checkout</h2>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center"><span className="text-[10px] font-bold text-white">VISA</span></div>
                <div className="w-10 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center"><span className="text-[10px] font-bold text-white">MC</span></div>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Cardholder Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="JOHN DOE"
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white font-bold tracking-wider placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="text" 
                    required
                    value={cardNumber}
                    onChange={handleCardChange}
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white font-bold tracking-widest placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Expiry Date</label>
                  <input 
                    type="text" 
                    required
                    value={expiry}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-4 text-white font-bold tracking-widest placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">CVV</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="password" 
                      required
                      maxLength="4"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      placeholder="•••"
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white font-bold tracking-widest placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={processing || cardNumber.length < 19 || expiry.length < 5 || cvv.length < 3 || !name}
                className="w-full py-4 mt-4 bg-primary text-background font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(0,223,143,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:pointer-events-none group"
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Pay ${order?.price} Securely
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
