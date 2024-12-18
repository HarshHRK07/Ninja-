import React from 'react';
import { Bell, Check } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useUserStore from '../../store/userStore';
import { userAPI } from '../../utils/api';
import { formatDistanceToNow } from 'date-fns';

export default function Notifications() {
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  const { data: notifications } = useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: () => userAPI.getNotifications(user?.id!),
    enabled: !!user?.id,
  });

  const markAsReadMutation = useMutation({
    mutationFn: (id: string) => userAPI.markNotificationAsRead(user?.id!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications', user?.id] });
    },
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
        <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      </div>

      <div className="space-y-4">
        {notifications?.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.read
                ? 'bg-gray-50 dark:bg-gray-700'
                : 'bg-indigo-50 dark:bg-indigo-900'
            }`}
          >
            <div className="flex justify-between">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                {notification.title}
              </h4>
              {!notification.read && (
                <button
                  onClick={() => markAsReadMutation.mutate(notification.id)}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
                >
                  <Check className="h-4 w-4" />
                </button>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {notification.message}
            </p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}