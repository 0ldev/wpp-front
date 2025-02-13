<script setup lang="ts">
// icons
import { SearchOutlined } from '@ant-design/icons-vue';

const search = defineModel<string>('search');
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- searchbar -->
  <!-- ---------------------------------------------- -->
  <v-text-field v-model="search" persistent-placeholder placeholder="Search" color="primary" variant="outlined" hide-details density="compact">
    <template v-slot:prepend-inner>
      <SearchOutlined :style="{ fontSize: '12px', color: 'rgb(var(--v-theme-lightText))' }" />
    </template>
  </v-text-field>
</template>
