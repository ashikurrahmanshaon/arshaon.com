import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Globe, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const navigate = useNavigate();
  const { signupWithEmail, loginWithGoogle, loginWithApple } = useAuth();
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await signupWithEmail(formData.email, formData.password);
      
      // Save extra user details to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        address: formData.address,
        createdAt: new Date().toISOString()
      });

      navigate('/dashboard');
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = async (providerName, providerFn) => {
    setSocialLoading(true);
    try {
      const { user } = await providerFn();
      
      // Save user to Firestore if they don't exist
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName || 'User',
        email: user.email,
        photoURL: user.photoURL,
        lastLoginAt: new Date().toISOString()
      }, { merge: true });

      navigate('/dashboard');
    } catch (error) {
      console.error(`${providerName} signup error:`, error);
      alert(error.message);
    } finally {
      setSocialLoading(false);
    }
  };

  const handlePhoneSignup = () => {
    alert("Phone Authentication is coming soon!");
  };

  return (
    <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 relative z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl w-full bg-gradient-to-b from-white/[0.05] to-black/40 border border-white/[0.08] p-6 md:p-8 rounded-3xl backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden ring-1 ring-white/[0.02]"
      >
        {/* Top Highlight Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Glow behind the form inside the card */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00b373]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 text-center mb-8">
          <div className="w-12 h-12 bg-white/[0.05] border border-white/[0.08] rounded-xl mx-auto mb-6 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500 shadow-[0_0_30px_rgba(0,223,143,0.1)]">
             <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center rotate-45">
               <span className="text-background font-black text-[10px] -rotate-45">A</span>
             </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 uppercase tracking-wide">Create Account</h1>
          <p className="text-gray-400 text-sm">Join us to start your next big project and track orders in real-time.</p>
        </div>

        <form onSubmit={handleEmailSignup} className="space-y-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/50 transition-all text-sm shadow-inner"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/50 transition-all text-sm shadow-inner"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/50 transition-all text-sm shadow-inner"
                />
              </div>
            </div>
            
            {/* Country */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Country</label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select 
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/50 transition-all text-sm appearance-none cursor-pointer shadow-inner"
                >
                  <option value="" className="bg-[#05070a]">Select Country</option>
                  <option value="US" className="bg-[#05070a]">United States</option>
                  <option value="UK" className="bg-[#05070a]">United Kingdom</option>
                  <option value="CA" className="bg-[#05070a]">Canada</option>
                  <option value="AU" className="bg-[#05070a]">Australia</option>
                  <option value="BD" className="bg-[#05070a]">Bangladesh</option>
                  <option value="IN" className="bg-[#05070a]">India</option>
                  <option value="OTHER" className="bg-[#05070a]">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full Address</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <textarea 
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address, city, zip code..."
                className="w-full h-16 bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/50 transition-all text-sm resize-none custom-scrollbar shadow-inner"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="password" 
                name="password"
                required
                minLength="6"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.02] focus:ring-1 focus:ring-primary/50 transition-all text-sm shadow-inner"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-gradient-to-r from-primary to-[#00b373] text-background font-black uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(0,223,143,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:hover:scale-100 text-sm"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
              <>
                Create Account 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="relative z-10 text-center mt-6">
           <p className="text-gray-400 text-sm">
             Already have an account? <Link to="/login" className="text-primary font-bold hover:text-white transition-colors">Log in</Link>
           </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/[0.05] flex-grow"></div>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Or continue with</span>
            <div className="h-px bg-white/[0.05] flex-grow"></div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button 
              type="button"
              onClick={() => handleSocialSignup('Google', loginWithGoogle)}
              disabled={socialLoading}
              className="flex items-center justify-center bg-white/[0.02] border border-white/[0.05] py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/10 transition-all disabled:opacity-50 group shadow-lg"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </button>
            <button 
              type="button"
              onClick={() => handleSocialSignup('Apple', loginWithApple)}
              disabled={socialLoading}
              className="flex items-center justify-center bg-white/[0.02] border border-white/[0.05] py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/10 transition-all text-white disabled:opacity-50 group shadow-lg"
            >
              <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M16.326 12.353c-.015-2.7 2.203-4.004 2.302-4.062-1.258-1.84-3.21-2.092-3.906-2.115-1.65-.168-3.22.973-4.06.973-.84 0-2.12-.953-3.483-.925-1.78.026-3.418.995-4.335 2.593-1.865 3.23-.476 8.01 1.343 10.64.887 1.282 1.946 2.723 3.328 2.668 1.35-.054 1.86-.874 3.407-.874 1.536 0 1.996.874 3.426.85 1.458-.024 2.37-1.31 3.253-2.597 1.02-1.493 1.44-2.943 1.46-3.02-.03-.012-2.827-1.082-2.842-4.13zM14.972 6.89c.75-.907 1.252-2.17.114-3.434-1.08.044-2.4.722-3.17 1.62-.69.79-1.29 2.08-.12 3.32 1.2.09 2.43-.6 3.176-1.506z"/>
              </svg>
            </button>
            <button 
              type="button"
              onClick={handlePhoneSignup}
              disabled={socialLoading}
              className="flex items-center justify-center bg-white/[0.02] border border-white/[0.05] py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/10 transition-all text-white disabled:opacity-50 group shadow-lg"
            >
              <Phone className="w-5 h-5 text-gray-400 group-hover:scale-110 group-hover:text-white transition-all" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
