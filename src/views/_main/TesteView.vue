<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const methods = ['GET', 'POST', 'PUT', 'DELETE'];
const method = ref('GET');
const uri = ref<string>('');
const headers = ref<string>('{}');
const body = ref<string>('{}');
const response = ref<any>({});
const loading = ref(false);

const sendRequest = async () => {
  try {
    loading.value = true;
    response.value = await axios({
      url: uri.value,
      method: method.value,
      headers: JSON.parse(headers.value || '{}'),
      data: ['GET', 'DELETE'].includes(method.value) ? undefined : JSON.parse(body.value || '{}')
    });
  } catch (error) {
    response.value = error;
  }
  loading.value = false;
};
</script>

<template>
  <v-sheet class="pa-2" color="surface">
    <div class="height">
      <v-row>
        <!-- Method -->
        <v-col cols="12" sm="4" class="d-flex">
          <div class="w-100">
            <v-label class="text-subtitle-1 text-high-emphasis my-2">Method</v-label>
            <v-select
              v-model="method"
              :items="methods"
              variant="solo"
              bg-color="containerBg"
              rounded="false"
              class="min-w-50"
            ></v-select>
          </div>
        </v-col>
        <!-- URI -->
        <v-col cols="12" sm="8">
          <v-label class="text-subtitle-1 text-high-emphasis my-2">URI</v-label>
          <v-text-field v-model="uri" variant="solo" bg-color="containerBg" rounded="false" class="min-w-50"></v-text-field>
        </v-col>
      </v-row>
      <!-- Headers -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-label class="text-subtitle-1 text-high-emphasis my-2">Headers</v-label>
          <v-textarea
            v-model="headers"
            variant="solo"
            bg-color="containerBg"
            rounded="false"
            class="min-w-50"
            outlined
            rows="10"
          ></v-textarea>
          {{ JSON.parse(headers || '{}') }}
        </v-col>
      </v-row>
      <!-- Body -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-label class="text-subtitle-1 text-high-emphasis my-2">Body</v-label>
          <v-textarea
            v-model="body"
            variant="solo"
            bg-color="containerBg"
            rounded="false"
            class="min-w-50"
            outlined
            rows="10"
          ></v-textarea>
          {{ JSON.parse(body || '{}') }}
        </v-col>
      </v-row>
      <!-- Send Button -->
      <v-row no-gutters class="mt-5">
        <v-col cols="12" class="text-right">
          <v-btn @click="sendRequest" color="secondary">Send</v-btn>
        </v-col>
      </v-row>
      <!-- Response -->
      <v-row no-gutters>
        <v-col cols="12">
          <v-label class="text-subtitle-1 text-high-emphasis my-2">Response</v-label>
          <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
          <pre class="bg-containerBg rounded-sm p-4">{{ response }}</pre>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<style>
.height {
  height: calc(100vh - 185px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
