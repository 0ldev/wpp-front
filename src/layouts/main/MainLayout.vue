<script setup lang="ts">
import MainSidebar from '@/layouts/main/sidebar/MainSidebar.vue';
import "./styles.css"
</script>

<template>
  <v-locale-provider>
    <v-container fluid class="pa-0">
      <v-app
        theme="WhatsappLight"
      >

        <MainSidebar />
        <!--<VerticalHeaderVue />-->

        <v-main>
          <div>
            <RouterView />
          </div>
          <v-container fluid class="pt-0">
            <div>
            </div>
          </v-container>
        </v-main>

      </v-app>
    </v-container>
  </v-locale-provider>
</template>
