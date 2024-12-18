import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { orderAPI } from '../utils/api';
import { Order } from '../utils/types';
import { toast } from 'react-hot-toast';

export function useOrders(userId: string) {
  const queryClient = useQueryClient();

  const ordersQuery = useQuery({
    queryKey: ['orders', userId],
    queryFn: () => orderAPI.getOrders(userId),
  });

  const createOrderMutation = useMutation({
    mutationFn: (orderData: Partial<Order>) => orderAPI.createOrder(orderData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders', userId] });
      toast.success('Order created successfully!');
    },
    onError: () => {
      toast.error('Failed to create order. Please try again.');
    },
  });

  return {
    orders: ordersQuery.data,
    isLoading: ordersQuery.isLoading,
    createOrder: createOrderMutation.mutate,
    isCreating: createOrderMutation.isPending,
  };
}