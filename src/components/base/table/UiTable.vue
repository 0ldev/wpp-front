<script lang="ts" setup>
import type { UiTableHeader } from '@/components/base/table/UiTableHeader.ts';

withDefaults(
  defineProps<{
    headers?: UiTableHeader[];
    items: any[];
    loading?: boolean;
  }>(),
  {
    items: () => [],
  }
);

</script>

<template>
  <v-data-table
    density="compact"
    fixed-header
    fixed-footer
    items-per-page="10"
    :headers
    :items="items"
    :items-length="items.length"
    :loading="loading || false"
    item-value=""
    return-object
    show-select
    class="customize-table"
  >
    <template #top>
      <span class="mt-4"></span>
    </template>

    <!-- Template de ações -->
    <template #item.actions="{ item }">
      <div class="d-inline-flex">
        <slot name="actions" :item="item"></slot>
      </div>
    </template>

    <!-- Template de sem dados -->
    <template #no-data>
      <template v-if="!loading && items.length === 0">
        No records found.
      </template>
    </template>
  </v-data-table>
</template>
