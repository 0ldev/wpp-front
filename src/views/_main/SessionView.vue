<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { ReloadIcon } from 'vue-tabler-icons';
import client from '@/api/client';
import { user } from '@/auth/auth';

const qrCode = ref<string | null>(null);
const loading = ref(true);
const isHovering = ref(false); // Estado para controlar o hover

onMounted(async () => {
  await getQRCode();
  loading.value = false;
});


async function getQRCode() {
  try {
    const response = await client.post('/whatsapp/session/qr', {
      userId: user.value.uid
    })
    console.log(response)
    qrCode.value = response.data.qrCode; // Set the QR code data URL
  } catch (error) {
    console.error('Error fetching QR code:', error);
  }
}

async function refresh() {
  try {
    await axios.get('http://localhost:3000/wpp/refresh');
    const response = await axios.get('http://localhost:3000/wpp/qrcode');
    qrCode.value = response.data.qrCode; // Set the QR code data URL
  } catch (error) {
    console.error('Error fetching QR code:', error);
  }
}

// Funções para manipular o hover
function onMouseEnter() {
  isHovering.value = true;
}

function onMouseLeave() {
  isHovering.value = false;
}
</script>

<template>
  <div class="mt-16 d-flex align-center justify-center">
    <v-card :loading="loading" variant="flat" width="500">
      <v-card-item>
        <div class="d-flex align-center justify-space-between">
          <v-card-title>Connect your Device</v-card-title>
          <v-card-subtitle>Scan with your Whatsapp camera</v-card-subtitle>
        </div>
      </v-card-item>
      <v-card-text>
        <!-- Container relativo para posicionamento absoluto dos cards -->
        <div class="card-container">
          <v-fade-transition>
            <!-- QR Code Card (visible when not hovering) -->
            <v-card
              v-if="qrCode && !isHovering"
              elevation="0"
              class="d-flex justify-center absolute-card"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <v-img max-height="400" :src="qrCode" alt="WhatsApp QR Code" />
            </v-card>

            <!-- Reload Icon Card (visible when hovering) -->
            <v-card
              v-else
              height="400"
              elevation="0"
              class="d-flex align-center justify-center absolute-card"
              @click="refresh"
              @mouseenter="onMouseEnter"
              @mouseleave="onMouseLeave"
            >
              <ReloadIcon size="100" />
            </v-card>
          </v-fade-transition>
        </div>
      </v-card-text>
    </v-card>
  </div>
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