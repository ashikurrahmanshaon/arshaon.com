import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loader2 } from 'lucide-react';

// IMPORTANT: Replace this with your actual login email!
const ADMIN_EMAILS = ['arshaon146140@gmail.com', 'your-email@gmail.com'];

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (!ADMIN_EMAILS.includes(user.email)) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          You do not have permission to view the Admin Dashboard. If you are the owner, please add your email to the <code>ADMIN_EMAILS</code> array in <code>src/components/admin/AdminRoute.jsx</code>.
        </p>
        <p className="text-white bg-white/10 px-4 py-2 rounded-lg font-mono text-sm">
          Your current email: {user.email}
        </p>
      </div>
    );
  }

  return children;
};

export default AdminRoute;
