import { ref } from 'vue';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const isLoggedIn = ref(false);
const user = ref(null);
const error = ref<string | null>(null);
const isPending = ref(false);

const BACKEND_URL = 'http://localhost:3131/api/auth';

auth.onAuthStateChanged((authUser) => {
  if (authUser) {
    isLoggedIn.value = true;
    user.value = authUser;
  } else {
    isLoggedIn.value = false;
    user.value = null;
  }
});

const sendToBackend = async (endpoint: string, userData: any) => {
  const response = await fetch(`${BACKEND_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error('Backend communication failed');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.token;
};

const googleSignIn = async () => {
  error.value = null;
  isPending.value = true;
  
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    const userData = {
      email: result.user.email,
      uid: result.user.uid,
      name: result.user.displayName
    };
    
    return await sendToBackend('google', userData);
  } catch (err) {
    console.error("Google Sign-In Error:", err);
    error.value = 'Could not complete sign in';
    throw err;
  } finally {
    isPending.value = false;
  }
};

const registerWithEmailPassword = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;
  
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    const userData = {
      email: result.user.email,
      uid: result.user.uid
    };
    
    return await sendToBackend('register', userData);
  } catch (err) {
    console.error("Registration Error:", err);
    error.value = 'Could not complete registration';
    throw err;
  } finally {
    isPending.value = false;
  }
};

const signInWithEmailPassword = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;
  
  try {
    const result = await signInWithEmailPassword(auth, email, password);
    
    const userData = {
      email: result.user.email,
      uid: result.user.uid
    };
    
    return await sendToBackend('login', userData);
  } catch (err) {
    console.error("Sign-In Error:", err);
    error.value = 'Invalid email or password';
    throw err;
  } finally {
    isPending.value = false;
  }
};

const logout = async () => {
  error.value = null;
  isPending.value = true;
  
  try {
    await signOut(auth);
    localStorage.removeItem('token');
  } catch (err) {
    console.error("Logout Error:", err);
    error.value = 'Could not complete logout';
    throw err;
  } finally {
    isPending.value = false;
  }
};

export { 
  isLoggedIn, 
  user, 
  error, 
  isPending, 
  googleSignIn, 
  logout, 
  registerWithEmailPassword, 
  signInWithEmailPassword 
};
