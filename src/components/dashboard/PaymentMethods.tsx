import React, { useState } from 'react';
import { CreditCard, Plus, Trash2 } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import useUserStore from '../../store/userStore';
import { userAPI } from '../../utils/api';
import Button from '../common/Button';

export default function PaymentMethods() {
  const [isAdding, setIsAdding] = useState(false);
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  const { data: paymentMethods } = useQuery({
    queryKey: ['payment-methods', user?.id],
    queryFn: () => userAPI.getPaymentMethods(user?.id!),
    enabled: !!user?.id,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => userAPI.deletePaymentMethod(user?.id!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payment-methods', user?.id] });
      toast.success('Payment method removed successfully');
    },
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAdding(true)}
          className="flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <div className="space-y-4">
        {paymentMethods?.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  •••• {method.last4}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Expires {method.expiryDate}
                </p>
              </div>
            </div>
            <button
              onClick={() => deleteMutation.mutate(method.id)}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}