<script setup lang="ts">
import { useDialog } from '@/components/base/dialog/useDialog';
import { defineEmits } from 'vue';

const props = defineProps<{
  id?: string;
  title: string;
}>();

const { isOpen, close } = useDialog(props.id);

const emit = defineEmits<{
  (event: 'cancel'): void;
  (event: 'save'): void;
}>();

async function handleCancel() {
  emit('cancel');
  close();
}

async function handleSave() {
  emit('save');
  close();
}
</script>

<template>
  <v-dialog v-model="isOpen" max-width="400">
    <v-card>
      <!-- Cabeçalho -->
      <v-toolbar density="compact">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="handleCancel">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- Conteúdo -->
      <v-card-text>
        <slot />
      </v-card-text>

      <!-- Rodapé com botões -->
      <v-card-actions class="justify-end">
        <v-btn color="grey" variant="tonal" @click="handleCancel">Cancelar</v-btn>
        <v-btn color="primary" variant="flat" @click="handleSave">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
