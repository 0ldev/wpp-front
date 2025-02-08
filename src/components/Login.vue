<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailPassword, googleSignIn, error, isPending } from '../auth';

const email = ref('');
const password = ref('');
const emit = defineEmits(['close']);

const login = async () => {
  try {
    await signInWithEmailPassword(email.value, password.value);
    emit('close');
  } catch (err) {
    // Error is handled in auth.ts
  }
};

const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
    emit('close');
  } catch (err) {
    // Error is handled in auth.ts
  }
};
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <input type="email" v-model="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Password" required />
        </div>
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" class="btn-login" :disabled="isPending">
          {{ isPending ? 'Loading...' : 'Login' }}
        </button>
        <div class="divider">
          <span>or</span>
        </div>
        <button type="button" @click="handleGoogleSignIn" class="btn-google" :disabled="isPending">
          <img src="https://www.google.com/favicon.ico" alt="Google" />
          {{ isPending ? 'Loading...' : 'Sign in with Google' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  position: relative;
  max-width: 400px;
  width: 90%;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 42px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  height: 42px;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.form-group {
  width: 100%;
}

.btn-login {
  background-color: #25d366;
  color: white;
  font-weight: 500;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1em 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ccc;
}

.divider span {
  padding: 0 1em;
  color: #666;
  font-size: 0.9em;
}

.btn-google {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  background-color: white;
  color: #757575;
  border: 1px solid #ddd;
  font-weight: 500;
}

.btn-google img {
  width: 18px;
  height: 18px;
}

.error {
  color: #ff4444;
  font-size: 0.9em;
  margin-top: 0.5em;
}
</style>
