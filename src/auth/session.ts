import { ref, onMounted, type Ref, computed } from 'vue';
import { supabase } from '@/auth/supabase.ts';
import type { Session, AuthError } from '@supabase/supabase-js';
import { createUserDB } from '@/auth/backend.ts';
import { router } from '@/router';

type UseSessionT = {
  session: Ref<Session | null>;
  status: Ref<'pending' | { error: AuthError } | null>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const session: Ref<Session | null> = ref(null);
const status: Ref<'pending' | { error: AuthError } | null> = ref(null);

export default function useSession(): UseSessionT {
  onMounted(async () => {
    const { data } = await supabase.auth.getSession();
    session.value = data.session;
  });
  const user = computed(() => session.value?.user);

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session; // Atualiza a sessão corretamente
  });

  const login = async () => {
    status.value = 'pending';

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error while logging in:', error);
      status.value = { error };
      return;
    }

    if (data?.user) {
      await createUserDB(data.user.id);
    }

    status.value = null;
  };

  const logout = async () => {
    session.value = null;
    await router.push('/home')
    await supabase.auth.signOut();
  };

  return {
    session,
    user,
    status,
    login,
    logout,
  };
}
