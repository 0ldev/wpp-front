<script setup lang="ts">
import { shallowRef } from 'vue';
import sidebarItems from './sidebarItem';
import NavGroup from './NavGroup/NavGroup.vue';
import NavItem from './NavItem/NavItem.vue';
import NavCollapse from './NavCollapse/NavCollapse.vue';
import ExtraBox from './extrabox/ExtraBox.vue';
import Logo from '@/assets/wppcog.png';

const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
  <v-navigation-drawer
    left
    elevation="0"
    rail-width="100"
    mobile-breakpoint="lg"
    app
    class="leftSidebar"
    :rail="50"
    expand-on-hover
    color="containerBg"
  >
    <!---Logo part -->

    <div class="pa-5 ">
      <v-img :src="Logo" alt="WhatsApp Automation" contain height="60" />
      <h3 class="hide-menu" >Whatsapp Manager</h3>
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
<!--    <perfect-scrollbar class="scrollnavbar">-->
      <v-list class="pa-4">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!---Item Sub Header -->
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <!---Item Divider -->
          <v-divider class="my-3" v-else-if="item.divider" />
          <!---If Has Child -->
          <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
          <!---Single Item-->
          <NavItem :item="item" v-else class="leftPadding" />
          <!---End Single Item-->
        </template>
      </v-list>
      <div class="pa-4">
        <ExtraBox />
      </div>
      <div class="pa-4 text-center">
        <v-chip color="inputBorder" size="small"> v0.0.1 </v-chip>
      </div>
<!--    </perfect-scrollbar>-->
  </v-navigation-drawer>
</template>
