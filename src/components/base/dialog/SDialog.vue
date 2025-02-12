<script setup lang="ts">
import { computed, defineEmits, useSlots } from 'vue';
import { useDialog } from '@/components/base/dialog/useDialog';
import { VDialog } from 'vuetify/components/VDialog';
import type { ExtractPropTypes } from 'vue';

type VDialogProps = ExtractPropTypes<typeof VDialog['props']>;

const props = defineProps<{
  id?: string;
  title: string;
  options?: VDialogProps & { buttons?: boolean };
}>();

const emit = defineEmits<{
  (event: 'cancel'): void;
  (event: 'save'): void;
}>();

const { isOpen, close } = useDialog(props.id);
const slots = useSlots();

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
  <v-dialog  v-model="isOpen" v-bind="options" @click:outside="handleCancel">
    <v-card>
      <v-card-title class="d-flex align-center w-100">
        <span class="headline">{{ title }}</span>
        <v-spacer />
        <v-btn variant="text" color="error" icon @click="handleCancel">
          <XIcon />
        </v-btn>
      </v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-card-actions class="px-2">
        <template v-if="!slots.actions">
          <div class="d-flex align-end justify-end w-100 ga-2">
            <v-btn variant="tonal" @click="handleCancel">Cancel</v-btn>
            <v-btn color="primary" variant="flat" @click="handleSave">Save</v-btn>
          </div>
        </template>
        <template v-else>
          <slot name="actions"></slot>
        </template>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
