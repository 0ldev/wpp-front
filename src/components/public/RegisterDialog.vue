<script setup lang="ts">
import { ref } from 'vue';
import { registerWithEmailPassword } from '@/auth/auth';

const newUser = ref({
  email: '',
  password: '',
  name: '',
});

const dialogVisible = ref(false);

const register = async () => {
  try {
    await registerWithEmailPassword(newUser.value);
  } catch (error: any) {
    alert(error.message);
  }
};

const closeDialog = () => {
  dialogVisible.value = false;
};
</script>

<template>
  <v-dialog v-model="dialogVisible" width="500">
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="primary"
        text="Register"
        variant="flat"
        @click="dialogVisible = true"
      />
    </template>

    <v-card>
      <v-card-title class="text-h5 d-flex align-center">
        <div>
          Register
        </div>
        <v-btn
          icon
          @click="closeDialog"
          aria-label="Close"
          class="ml-auto"
          flat
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-text-field variant="solo-filled" density="comfortable" v-model="newUser.name" label="Name"></v-text-field>
        <v-text-field variant="solo-filled" density="comfortable" v-model="newUser.email" label="Email" type="email"></v-text-field>
        <v-text-field variant="solo-filled" density="comfortable" v-model="newUser.password" label="Password" type="password"></v-text-field>
      </v-card-text>

      <v-card-actions class="d-flex mx-2 mt-4 mb-2">
        <v-btn variant="flat" color="inputBorder" @click="closeDialog" >Cancel</v-btn>
        <v-btn variant="flat" color="primary"  @click="register" type="button">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>