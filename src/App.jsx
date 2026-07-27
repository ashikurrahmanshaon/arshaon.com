import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/admin/AdminRoute';
import { AuthProvider } from './context/AuthContext';

// Lazy loaded routes for extreme performance
const About = lazy(() => import('./components/About'));
const RecentWorks = lazy(() => import('./components/RecentWorks'));
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const ProjectsGallery = lazy(() => import('./components/ProjectsGallery'));
const Services = lazy(() => import('./components/Services'));
const PlatformService = lazy(() => import('./components/PlatformService'));
const Contact = lazy(() => import('./components/Contact'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const Pricing = lazy(() => import('./components/Pricing'));
const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const Payment = lazy(() => import('./components/dashboard/Payment'));
const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard') || location.pathname.includes('/admin');
  const isSignup = location.pathname === '/signup';

  return (
    <AuthProvider>
      <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30 relative overflow-hidden">
        <ScrollToTop />
        {/* Premium Animated Background */}
        <div className="fixed inset-0 z-0 bg-background overflow-hidden pointer-events-none">
          
          {/* Ultra-optimized Cinematic Orbs (No Blur Filter = 99.99 Performance, hidden on mobile for CPU savings) */}
          <div 
            className="hidden md:block absolute top-[-10%] left-[-20%] w-[600px] h-[600px] md:w-[80vw] md:h-[80vw] lg:w-[50vw] lg:h-[50vw] rounded-full animate-pulse pointer-events-none" 
            style={{ 
              background: 'radial-gradient(circle, rgba(0,223,143,0.12) 0%, rgba(0,223,143,0) 70%)',
              animationDuration: '8s'
            }}
          />
          <div 
            className="hidden md:block absolute bottom-[-10%] right-[-20%] w-[700px] h-[700px] md:w-[90vw] md:h-[90vw] lg:w-[60vw] lg:h-[60vw] rounded-full animate-pulse pointer-events-none" 
            style={{ 
              background: 'radial-gradient(circle, rgba(0,179,115,0.12) 0%, rgba(0,179,115,0) 70%)',
              animationDuration: '12s',
              animationDelay: '2s'
            }}
          />
          <div 
            className="hidden md:block absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] md:w-[60vw] md:h-[60vw] lg:w-[40vw] lg:h-[40vw] rounded-full animate-pulse pointer-events-none" 
            style={{ 
              background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)',
              animationDuration: '15s',
              animationDelay: '1s'
            }}
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-grid opacity-40 mix-blend-screen"></div>

          {/* Noise Texture Overlay for Cinematic Feel */}
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-[0.25]"
            style={{ backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cTwEXZGUaStatic.png")', backgroundRepeat: 'repeat' }}
          ></div>
          
          {/* Center Vignette for focus */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Suspense fallback={
              <div className="flex-grow flex items-center justify-center min-h-[50vh]">
                <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin shadow-[0_0_15px_rgba(0,223,143,0.3)]"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:platformId" element={<PlatformService />} />
                <Route path="/projects" element={<RecentWorks />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                <Route path="/all-projects" element={<ProjectsGallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                
                {/* New Routes */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/payment/:orderId" element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                } />
                <Route path="/admin" element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } />
              </Routes>
            </Suspense>
          </main>
          {!isDashboard && <Footer />}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
