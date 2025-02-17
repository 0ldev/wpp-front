const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:3131/api/auth';

export const createUserDB = async (userId: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/create-database`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `userId=${userId}`
    });

    if (!response.ok) {
      throw new Error('Failed to create user database');
    }

    return await response.json();
  } catch (err) {
    console.error("Database Creation Error:", err);
    throw err;
  }
};




/*const registerWithEmailPassword = async (email: string, password: string, name: string) => {
  error.value = null;
  isPending.value = true;
  
  try {
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });
    
    if (signUpError) throw signUpError;
    
    if (data.user) {
      await createUserDatabase(data.user.id);  // Create database after successful registration
    }
    
    return data.session?.access_token;
  } catch (err) {
    console.error("Registration Error:", err);
    error.value = 'Could not complete registration';
    throw err;
  } finally {
    isPending.value = false;
  }
};

const signInWithEmailPasswordFunc = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;
  
  try {
    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (signInError) throw signInError;
    
    if (data.user) {
      await createUserDatabase(data.user.id);  // Create database after successful sign-in
    }
    
    return data.session?.access_token;
  } catch (err) {
    console.error("Sign-In Error:", err);
    error.value = 'Invalid email or password';
    throw err;
  } finally {
    isPending.value = false;
  }
};*/
