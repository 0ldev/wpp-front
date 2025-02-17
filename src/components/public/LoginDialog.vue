<script setup lang="ts">
import { ref } from 'vue';
import SDialog from '@/components/base/dialog/SDialog.vue';
import { useDialog } from '@/components/base/dialog/useDialog.ts';
import useSession from '@/auth/session.ts';

const email = ref('');
const password = ref('');
const { open, close } = useDialog('@login');
const { status, login } = useSession()

const handleMailogin = async () => {
    try {
      //await signInWithEmailPasswordFunc(email.value, password.value);
      close();
    } catch (err) {
      // Error is handled in auth.ts
    }
};

const handleLogin = async () => {
  try {
    await login();
    close();
  } catch (err) {

  }
};
</script>

<template>
  <v-btn
    @click="open"
    color="primary"
    text="Login"
    variant="flat"
  />
  <SDialog id="@login" title="Login" width="500">
    <template #default v-if="!status">
      <v-text-field
        variant="solo-filled"
        density="comfortable"
        v-model="email"
        label="Email"
        type="email"
      />
      <v-text-field
        variant="solo-filled"
        density="comfortable"
        v-model="password"
        label="Password"
        type="password"
      />

      <!--TODO FIX HERE-->
      <v-alert
        color="error"
        v-if="status && typeof status !== 'string' && 'error' in status"
        :text="status.error.message"
      />


      <v-divider class="mx-3">or</v-divider>
    </template>
      <template #actions>
        <v-row no-gutters class="w-100">
          <v-col cols="12">
            <v-btn
              @click="handleLogin"
              class="w-100"
              variant="flat"
              color="lightsecondary"
              :disabled="status === 'pending'"
            >
              <BrandGoogleIcon class="me-2" />
              {{ status === 'pending' ? 'Loading...' : 'Sign in with Google' }}
            </v-btn>
          </v-col>

          <v-col cols="12" class="d-flex justify-end mt-5 w-100 ga-2">
            <v-btn variant="flat" color="inputBorder" @click="close">Cancel</v-btn>
            <v-btn variant="flat" @click="handleMailogin" color="primary" :disabled="status === 'pending'" >
              {{ status === 'pending' ? 'Loading...' : 'Login' }}
            </v-btn>
          </v-col>
        </v-row>
    </template>
    <v-sheet min-height="460" v-if="status === 'pending'" height="60" class="d-flex align-center justify-center w-100 h-100">
      <v-progress-circular
        indeterminate
        color="primary"
        size="100"
      />
    </v-sheet>
  </SDialog>
</template>
