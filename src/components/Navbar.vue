<script setup lang="ts">
import { ref } from 'vue';
import { isLoggedIn, logout } from '../auth';
import Login from './Login.vue';
import Register from './Register.vue';

const showLogin = ref(false);
const showRegister = ref(false);

const openLogin = () => {
  showLogin.value = true;
  showRegister.value = false;
};

const openRegister = () => {
  showRegister.value = true;
  showLogin.value = false;
};

const closeAuthModal = () => {
  showLogin.value = false;
  showRegister.value = false;
};
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/wppcog.png" alt="WhatsApp Automation" />
    </div>
    <div class="nav-buttons">
      <template v-if="!isLoggedIn">
        <button @click="openLogin" class="btn-primary">Login</button>
        <button @click="openRegister" class="btn-secondary">Register</button>
      </template>
      <button v-else @click="logout" class="btn-primary">Logout</button>
    </div>
    
    <Login v-if="showLogin" @close="closeAuthModal" />
    <Register v-if="showRegister" @close="closeAuthModal" />
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #075e54;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 4em); /* Adjust width to account for padding */
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-buttons {
  display: flex;
  gap: 1em;
  margin-left: auto;
  min-width: 200px;
  justify-content: flex-end;
}

.btn-primary, .btn-secondary {
  min-width: 90px;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1em;
    width: calc(100% - 2em); /* Adjust width for mobile padding */
  }
  
  .buttons {
    display: flex;
    gap: 0.5em; /* Use gap instead of margin for better spacing */
  }
  
  .buttons button {
    margin-left: 0; /* Remove margin and use gap instead */
    padding: 0.5em 1em; /* Slightly reduce padding on mobile */
  }
  
  .logo img {
    height: 30px;
  }
}

.btn-google {
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.7em 1.3em;
  cursor: pointer;
  margin-left: 0.5em;
}
</style>
