import { computed, onMounted, ref } from 'vue';
import dummy from '@/views/_main/group/dummy';
import { useUIStore } from '@/stores/ui';

const data = ref([]);
const search = ref('');
const uiStore = useUIStore();

export function useDummyStore() {
  onMounted(async () => {
    uiStore.isLoading = true;
    const res = await dummy.getAll();
    data.value = res.data.users;
    console.log(data.value);
    uiStore.isLoading = false;
  });

  // Computed property for filtered data based on the search term
  const filteredData = computed(() => {
    return data.value.filter((item) => {
      // Check if any value in the item contains the search string
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search.value.toLowerCase())
      );
    });
  });

  return {
    search,
    data: filteredData,
  };
}
