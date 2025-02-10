<script setup lang="ts">
import type { Icon } from '@/types/Icon';

const props = withDefaults(defineProps<{ item: Icon, level?: number }>(), {
  level: 0
});
</script>

<template>
  <template v-if="props.level > 0">
    <component :is="props.item" size="5" fill="currentColor" stroke-width="1.5" class="iconClass"></component>
  </template>
  <template v-else>
    <component :is="props.item" size="20" stroke-width="1.5" class="iconClass"></component>
  </template>
</template>
