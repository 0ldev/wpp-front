<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailPasswordFunc, googleSignIn, error, isPending } from '@/auth/auth';
import SDialog from '@/components/base/dialog/SDialog.vue';
import { useDialog } from '@/components/base/dialog/useDialog.ts';

const email = ref('');
const password = ref('');
const { open, close } = useDialog('@login');

const login = async () => {
    try {
      await signInWithEmailPasswordFunc(email.value, password.value);
      close();
    } catch (err) {
      // Error is handled in auth.ts
    }
};

const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
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
    <template #default v-if="!isPending">
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
      <v-alert color="error" v-if="error" :text="error"></v-alert>

      <v-divider class="mx-3">or</v-divider>
    </template>
      <template #actions>
        <v-row no-gutters class="w-100">
          <v-col cols="12">
            <v-btn
              @click="handleGoogleSignIn"
              class="w-100"
              variant="flat"
              color="lightsecondary"
              :disabled="isPending"
            >
              <BrandGoogleIcon class="me-2" />
              {{ isPending ? 'Loading...' : 'Sign in with Google' }}
            </v-btn>
          </v-col>

          <v-col cols="12" class="d-flex justify-end mt-5 w-100 ga-2">
            <v-btn variant="flat" color="inputBorder" @click="close">Cancel</v-btn>
            <v-btn variant="flat" @click="login" color="primary" :disabled="isPending" >
              {{ isPending ? 'Loading...' : 'Login' }}
            </v-btn>
          </v-col>
        </v-row>
    </template>
    <v-sheet min-height="460" v-if="isPending" height="60" class="d-flex align-center justify-center w-100 h-100">
      <v-progress-circular
        indeterminate
        color="primary"
        size="100"
      />
    </v-sheet>
  </SDialog>
</template>
