<script setup lang="ts">
import UiTable from '@/components/base/table/UiTable.vue';
import UiTableHead from '@/components/base/table/UiTableHead.vue';
import ParentSheet from '@/components/base/sheet/ParentSheet.vue';
import { useDummyStore } from '@/views/_main/group/useDummyStore.ts';
import { useUIStore } from '@/stores/ui.ts';
import { PlusIcon } from 'vue-tabler-icons';
import type { UiTableHeader } from '@/components/base/table/UiTableHeader.ts';

const { data, search } = useDummyStore();
const uiStore = useUIStore();
const headers: UiTableHeader[] = [
  { title: "First Name", key: "firstName" },
  { title: "Last Name", key: "lastName" },
  { title: "Maiden Name", key: "maidenName" },
  { title: "Age", key: "age" },
  { title: "Gender", key: "gender" },
  { title: "Email", key: "email" },
  { title: "Phone", key: "phone" },
  { title: "Username", key: "username" },
  { title: "Password", key: "password" }
];

function updateSearch(_search){
  search.value = _search
}
</script>

<template>
  <ParentSheet>
    <UiTableHead @update:search="updateSearch"  title="Users">
      <v-btn
        color="primary"
      >
        Create Group
        <PlusIcon class="ps-2" />
      </v-btn>
    </UiTableHead>
    <UiTable :items="data" :headers :loading="uiStore.isLoading">

    </UiTable>
  </ParentSheet>
</template>
