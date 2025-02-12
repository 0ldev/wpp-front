import {computed, onUnmounted, ref} from 'vue';
import type {ComputedRef, Ref} from 'vue';

type DialogState = Record<string, boolean>;

const isDialogOpen: Ref<DialogState> = ref({});

interface UseDialogReturn {
  isOpen: ComputedRef<boolean>;
  open: () => void;
  close: () => void;
}

type useDialogState = (id?: string) => UseDialogReturn;

export const useDialog: useDialogState = (id?: string): UseDialogReturn => {
  const isOpen: ComputedRef<boolean> = computed<boolean>(() => (id ? isDialogOpen.value[id] || false : isDialogOpen.value.default || false));

  const open = (): void => {
    if (id) {
      isDialogOpen.value[id] = true;
    } else {
      isDialogOpen.value.default = true;
    }
  };

  const close = (): void => {
    if (id) {
      isDialogOpen.value[id] = false;
    } else {
      isDialogOpen.value.default = false;
    }
  };

  onUnmounted(() => {
    close();
  });

  return {
    isOpen,
    open,
    close,
  };
};