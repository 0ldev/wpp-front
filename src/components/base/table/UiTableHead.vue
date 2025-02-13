<script setup lang="ts">
import SearchBarPanel from '@/layouts/main/vertical-header/SearchBarPanel.vue';

defineProps<{
  title: string,
}>();

const search = defineModel<string>('search');
</script>

<template>
    <div class="pa-4">
      <v-row align="center">
        <v-col class="d-flex align-center" cols="12" md="4">
            <span class="text-h4">{{ title }}</span>
        </v-col>
        <v-col cols="12" md="4">
              <SearchBarPanel v-model="search" />
        </v-col>
        <v-col cols="12" md="4">
          <v-row align="center" justify="end" class="ga-2">
            <slot />
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn v-bind="props" outlined>
                  Actions
                  <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item title="Mass Edit" />
                <v-list-item title="Delete All" />
              </v-list>
            </v-menu>
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn v-bind="props" outlined>
                  <v-icon start>mdi-filter-variant</v-icon>
                  Filter
                  <v-icon end>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h6">Category</v-card-title>
                <v-card-text>
                  <v-checkbox
                    label="Apple (56)"
                    value="apple"
                  />
                  <v-checkbox
                    label="Fitbit (56)"
                    value="fitbit"
                  />
                  <v-checkbox
                    label="Dell (56)"
                    value="dell"
                  />
                  <v-checkbox
                    label="Asus (97)"
                    value="asus"
                    model-value
                  />
                </v-card-text>
              </v-card>
            </v-menu>
          </v-row>
        </v-col>
      </v-row>
    </div>
</template>
