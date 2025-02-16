<script setup lang="ts">
import { ref } from 'vue';
import { user } from '@/auth/auth';
import client from '@/api/client';
import { router } from '@/router';

const qrCode = ref<string | null>(null);
const pairCode = ref<string | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const loginMethod = ref<'qr' | 'pair'>('qr');

async function createQRSession() {
  loading.value = true;
  error.value = null;
  try {
    const response = await client.post(`/api/whatsapp/session/qr?userId=${user.value.id}`);
    qrCode.value = response.data.qrCode;
    startStatusCheck();
  } catch (err) {
    error.value = 'Failed to generate QR code';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

async function createPairSession() {
  loading.value = true;
  error.value = null;
  try {
    const response = await client.post('/whatsapp/session/pair', {
      userId: user.value.id
    });
    pairCode.value = response.data.pairCode;
    startStatusCheck();
  } catch (err) {
    error.value = 'Failed to generate pair code';
    console.error(err);
  } finally {
    loading.value = false;
  }
}

async function checkSessionStatus() {
  try {
    const response = await client.get(`/api/whatsapp/session/status/${user.value.id}`);
    if (response.data.status === 'connected') {
      // Redirect to dashboard or update UI
      router.push('/dashboard');
    }
  } catch (err) {
    console.error('Status check failed:', err);
  }
}

function startStatusCheck() {
  const interval = setInterval(async () => {
    const response = await client.get(`/api/whatsapp/session/status/${user.value.id}`);
    if (response.data.status === 'connected') {
      clearInterval(interval);
      router.push('/dashboard');
    }
  }, 3000);
}
</script>

<template>
  <v-card class="mx-auto mt-8" max-width="500">
    <v-card-title>Connect WhatsApp</v-card-title>
    
    <v-card-text>
      <v-btn-toggle v-model="loginMethod" mandatory>
        <v-btn value="qr">QR Code</v-btn>
        <v-btn value="pair">Pair Code</v-btn>
      </v-btn-toggle>

      <div v-if="loginMethod === 'qr'" class="mt-4">
        <v-btn
          block
          color="primary"
          :loading="loading"
          @click="createQRSession"
        >
          Generate QR Code
        </v-btn>
        <v-img
          v-if="qrCode"
          :src="qrCode"
          class="mt-4"
          contain
          height="300"
        />
      </div>

      <div v-else class="mt-4">
        <v-btn
          block
          color="primary"
          :loading="loading"
          @click="createPairSession"
        >
          Generate Pair Code
        </v-btn>
        <v-card-text v-if="pairCode" class="text-center text-h4">
          {{ pairCode }}
        </v-card-text>
      </div>

      <v-alert
        v-if="error"
        type="error"
        class="mt-4"
      >
        {{ error }}
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<style scoped>
/* Container para posicionamento relativo */
.card-container {
  position: relative;
  height: 400px; /* Altura fixa para o container */
}

/* Estilo para os cards sobrepostos */
.absolute-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Garante que os cards estejam na mesma camada */
}
</style>