<script setup lang="ts">

</script>

<template>
  <v-sheet elevation="2" rounded class="sheet-size pa-2">
    <slot/>
  </v-sheet>
</template>

<style scoped lang="scss">
.sheet-size {
  min-height: calc(100vh - 150px);
}
</style>