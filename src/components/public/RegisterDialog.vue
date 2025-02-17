<script setup lang="ts">
import { ref } from 'vue';
/*import { registerWithEmailPassword } from '@/auth/auth';*/
import SDialog from '@/components/base/dialog/SDialog.vue';
import { useDialog } from '@/components/base/dialog/useDialog';

const newUser = ref({
  email: '',
  password: '',
  name: '',
});

const { open, close } = useDialog('@register')

const register = async () => {
  try {
   // await registerWithEmailPassword(newUser.value);
    alert('register is disabled');
  } catch (error: any) {
    alert(error.message);
  }
};
</script>

<template>
  <v-btn
    color="primary"
    text="Register"
    variant="flat"
    @click="open"
  />
  <SDialog id="@register" width="500" title="Register">
<!--    <v-card>
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
      </v-card-title>-->

      <v-text-field variant="solo-filled" density="comfortable" v-model="newUser.name" label="Name"></v-text-field>
      <v-text-field variant="solo-filled" density="comfortable" v-model="newUser.email" label="Email" type="email"></v-text-field>
      <v-text-field variant="solo-filled" density="comfortable" v-model="newUser.password" label="Password" type="password"></v-text-field>


      <template #actions >
        <div class="d-flex align-end justify-end w-100 ga-2">
          <v-btn variant="flat" color="inputBorder" @click="close" >Cancel</v-btn>
          <v-btn variant="flat" color="primary"  @click="register" type="button">Register</v-btn>
        </div>
      </template>
  </SDialog>
</template>