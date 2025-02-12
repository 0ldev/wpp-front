<script setup lang="ts">
import Navbar from '../../../../src/components/public/Navbar.vue'
import BgImage from '../../../../src/assets/images/wpp_background.jpg'

const features = [
  { title: 'Group Management', description: 'Extract phone numbers from groups and save them to TXT files' },
  { title: 'Custom Commands', description: 'Create custom /commands that trigger automatic responses' },
  { title: 'Message Scheduling', description: 'Schedule messages to be sent at specific times' },
  { title: 'Content Moderation', description: 'Moderate group content with word filters and message type restrictions' }
];
</script>

<template>
  <v-app>
    <Navbar />
      <v-parallax
          :src="BgImage"
          height="95vh"
          class="d-flex align-center justify-center"
        >
          <v-sheet class="text-center mx-16 py-8" color="rgba(0, 0, 0, 0.5)" rounded>
            <h1 class="text-h3 text-white font-weight-bold">WhatsApp Automation Made Easy</h1>
            <p class="text-h6 text-white">Powerful tools to enhance your WhatsApp experience</p>
          </v-sheet>
        </v-parallax>
        <v-sheet class="text-center py-8" elevation="2" rounded>
          <h2 class="text-h4 mb-6">Key Features</h2>
          <v-row>
            <v-col v-for="feature in features" :key="feature.title" cols="12" md="6" lg="3">
              <v-sheet class="pa-6" elevation="4" rounded>
                <h3 class="text-h6 font-weight-bold">{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
  </v-app>
</template>
