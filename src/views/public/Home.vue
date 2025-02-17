<script setup lang="ts">
import NavbarHome from '@/components/public/NavbarHome.vue';
import BgImage from '@/assets/images/wpp_background.jpg';
import { CalendarIcon, CommandIcon, UsersGroupIcon, UserStarIcon } from 'vue-tabler-icons';

const features = [
  { title: 'Group Management', icon: UsersGroupIcon, description: 'Extract phone numbers from groups and save them to TXT files.' },
  { title: 'Custom Commands', icon: CommandIcon, description: 'Create custom /commands that trigger automatic responses.' },
  { title: 'Message Scheduling', icon: CalendarIcon, description: 'Schedule messages to be sent at specific times.' },
  { title: 'Content Moderation', icon: UserStarIcon, description: 'Moderate group content with word filters and message type restrictions.' }
];
</script>

<template>
  <v-app>
    <NavbarHome />
    <v-parallax :src="BgImage" height="95vh" class="d-flex align-center justify-center">
      <v-sheet class="text-center mx-16 py-8" color="rgba(0, 0, 0, 0.5)" rounded>
        <h1 class="text-h3 text-white font-weight-bold">WhatsApp Automations Made Easy</h1>
        <p class="text-h6 text-white">Powerful tools to enhance your WhatsApp experience</p>
      </v-sheet>
    </v-parallax>
    <v-container>
      <!-- Hero Section -->
<!--      <v-container class="text-center py-16">
        <h1 class="text-h3 font-weight-bold mb-4"></h1>
        <p class="text-subtitle-1 text-grey-darken-1">Build rich Whatsapp communities and manage your Business</p>
        <v-btn color="primary" class="mt-4">Get Started</v-btn>
      </v-container>-->

<!--      &lt;!&ndash; Company Logos Section &ndash;&gt;
      <v-container class="text-center py-10">
        <p class="text-h6 text-grey-darken-1 mb-6">Over 2500 companies use our tools to better their business.</p>
        <v-row justify="center" class="align-center">
          <v-col v-for="n in 5" :key="n" cols="auto">
            <v-avatar size="56">
              <v-img :src="`/company-logo-${n}.svg`" alt="Company Logo" />
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>-->

      <!-- Features Section -->
      <v-container class="py-16">
        <div class="text-center">
            <h2 class="text-h4 mb-6">Key Features</h2>
        </div>
        <v-row>
          <v-col v-for="feat in features" :key="feat.title" cols="12" md="3">
            <v-card class="pa-4" height="150">
              <div class="d-flex ga-3">
                <component :is="feat.icon" />
                <h2 class="text-h5 font-weight-bold">{{feat.title}}</h2>
              </div>
              <p class="text-body-1">{{ feat.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>
