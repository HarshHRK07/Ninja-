import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authAPI } from '../utils/api';
import useUserStore from '../store/userStore';
import { toast } from 'react-hot-toast';

export function useAuth() {
  const queryClient = useQueryClient();
  const { setUser } = useUserStore();

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authAPI.login(email, password),
    onSuccess: (data) => {
      setUser(data.user);
      toast.success('Successfully logged in!');
    },
    onError: () => {
      toast.error('Failed to login. Please check your credentials.');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      setUser(null);
      queryClient.clear();
      toast.success('Successfully logged out!');
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  };
}