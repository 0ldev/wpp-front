<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailPasswordFunc, googleSignIn, error, isPending } from '@/auth/auth';

const email = ref('');
const password = ref('');
const dialogVisible = ref(false);

const login = async () => {
    try {
      await signInWithEmailPasswordFunc(email.value, password.value);
      dialogVisible.value = false;
    } catch (err) {
      // Error is handled in auth.ts
    }
};

const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
    dialogVisible.value = false;
  } catch (err) {
  }
};
</script>

<template>
  <v-dialog v-model="dialogVisible" width="500">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="primary"
        text="Login"
        variant="flat"
      />
    </template>
    <v-card v-if="!isPending" class="pa-1">
      <v-card-title class="text-h5 d-flex align-center">
        <div>
          Login
        </div>
        <v-btn
          icon
          @click="dialogVisible = false"
          aria-label="Close"
          class="ml-auto"
          flat
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
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
      </v-card-text>

      <v-divider class="mx-6">or</v-divider>

      <v-card-actions class="d-flex flex-column mx-2 mt-4 mb-2">
        <v-btn
          @click="handleGoogleSignIn"
          class="w-100"
          variant="flat"
          color="borderLight"
          :disabled="isPending"
        >
          <v-icon class="me-2">mdi-google</v-icon>
          {{ isPending ? 'Loading...' : 'Sign in with Google' }}
        </v-btn>

        <v-spacer></v-spacer>
        <div class="d-flex justify-end w-100 ga-2">
          <v-btn variant="flat" color="inputBorder" @click="dialogVisible = false">Cancel</v-btn>
          <v-btn variant="flat" @click="login" color="primary" :disabled="isPending" >
            {{ isPending ? 'Loading...' : 'Login' }}
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
    <v-sheet min-height="460" v-if="isPending" height="60" class="d-flex align-center justify-center w-100 h-100 pa-1">
      <v-progress-circular
        indeterminate
        color="primary"
        size="100"
      />
    </v-sheet>
  </v-dialog>
</template>
