import { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  OAuthProvider
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const appleProvider = new OAuthProvider('apple.com');
const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe;
    let timeoutId;
    
    try {
      unsubscribe = onAuthStateChanged(auth, 
        (user) => {
          setUser(user);
          setLoading(false);
          if (timeoutId) clearTimeout(timeoutId);
        }, 
        (err) => {
          console.error("Auth Error:", err);
          setError(err.message);
          setLoading(false);
          if (timeoutId) clearTimeout(timeoutId);
        }
      );
      
      // Safety timeout just in case it hangs forever
      timeoutId = setTimeout(() => {
        setError("Firebase connection timeout.");
        setLoading(false);
      }, 8000);

    } catch (err) {
      console.error("Auth Init Error:", err);
      setError(err.message);
      setLoading(false);
    }
    
    return () => {
      if (unsubscribe) unsubscribe();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithApple = () => {
    return signInWithPopup(auth, appleProvider);
  };

  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signupWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    loginWithGoogle,
    loginWithApple,
    loginWithEmail,
    signupWithEmail,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
