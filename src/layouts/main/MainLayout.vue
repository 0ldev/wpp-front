<script setup lang="ts">
import { RouterView } from 'vue-router';
import LoaderWrapper from './LoaderWrapper.vue';
import SidebarMain from '@/layouts/main/sidebar/SidebarMain.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import FooterPanel from './footer/FooterPanel.vue';

</script>

<template>
  <v-locale-provider>
    <v-app :class="[]">
      <SidebarMain />
      <VerticalHeaderVue />

      <v-main class="page-wrapper">
        <v-container fluid>
          <div>
            <!-- Loader start -->
            <LoaderWrapper />
            <!-- Loader end -->
            <RouterView />
          </div>
        </v-container>
        <v-container fluid class="pt-0">
          <div>
            <FooterPanel />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
