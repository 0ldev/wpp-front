<script setup lang="ts">
import { ref } from 'vue';
import { registerWithEmailPassword } from '../auth';

const email = ref('');
const password = ref('');
const emit = defineEmits(['close']);

const register = async () => {
  try {
    await registerWithEmailPassword(email.value, password.value);
    emit('close');
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <h2>Register</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="register">Register</button>
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
}
</style>
