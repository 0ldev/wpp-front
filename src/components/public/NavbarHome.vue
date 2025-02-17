<script setup lang="ts">
import RegisterDialog from '@/components/public/RegisterDialog.vue';
import Logo from '../../assets/images/wppcog.png';
import LoginDialog from '@/components/public/LoginDialog.vue';
</script>

<template>
  <v-app-bar elevation="3" height="80" color="secondary">
    <div class="v-col-1">
      <v-img :src="Logo" alt="WhatsApp Automation" contain height="55" />
    </div>

    <v-spacer />
    <div class="d-flex pa-4 ga-2">
      <RegisterDialog />
<!--      <LoginDialog v-else />-->
      <LoginDialog />
    </div>
  </v-app-bar>
</template>
