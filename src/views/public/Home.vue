<script setup lang="ts">
import NavbarHome from '@/components/public/NavbarHome.vue';
import BgImage from '@/assets/images/wpp_background.jpg'

const features = [
  { title: 'Group Management', description: 'Extract phone numbers from groups and save them to TXT files' },
  { title: 'Custom Commands', description: 'Create custom /commands that trigger automatic responses' },
  { title: 'Message Scheduling', description: 'Schedule messages to be sent at specific times' },
  { title: 'Content Moderation', description: 'Moderate group content with word filters and message type restrictions' }
];
</script>

<template>
  <v-app>
    <NavbarHome />
      <v-parallax
          :src="BgImage"
          height="95vh"
          class="d-flex align-center justify-center"
        >
          <v-sheet class="text-center mx-16 py-8" color="rgba(0, 0, 0, 0.5)" rounded>
            <h1 class="text-h3 text-white font-weight-bold">WhatsApp Automations Made Easy</h1>
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
    <v-container>
      <!-- Hero Section -->
      <v-container class="text-center py-16">
        <h1 class="text-h3 font-weight-bold mb-4">Build amazing products with Vuetify</h1>
        <p class="text-subtitle-1 text-grey-darken-1">A powerful Vue framework for building rich applications</p>
        <v-btn color="primary" class="mt-4">Get Started</v-btn>
      </v-container>

      <!-- Company Logos Section -->
      <v-container class="text-center py-10">
        <p class="text-h6 text-grey-darken-1 mb-6">
          Over 2500 companies use our tools to better their business.
        </p>
        <v-row justify="center" class="align-center">
          <v-col v-for="n in 5" :key="n" cols="auto">
            <v-avatar size="56">
              <v-img :src="`/company-logo-${n}.svg`" alt="Company Logo" />
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>

      <!-- Features Section -->
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" md="4">
            <h2 class="text-h5 font-weight-bold">Develop faster</h2>
            <p class="text-body-1">Everything you need to build a great app.</p>
            <p class="text-body-2 text-grey-darken-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h2 class="text-h5 font-weight-bold">Bleeding edge technology</h2>
            <p class="text-body-2 text-grey-darken-1">
              Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h2 class="text-h5 font-weight-bold">Competitive pricing</h2>
            <p class="text-body-2 text-grey-darken-1">
              Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col cols="12" md="4">
            <h2 class="text-h5 font-weight-bold">Always up to date</h2>
            <p class="text-body-2 text-grey-darken-1">
              Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h2 class="text-h5 font-weight-bold">24/7 support</h2>
            <p class="text-body-2 text-grey-darken-1">
              Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>
