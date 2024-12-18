import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Package2, CreditCard, Award, Bell } from 'lucide-react';
import { userAPI, orderAPI } from '../../utils/api';
import useUserStore from '../../store/userStore';
import OrderHistory from './OrderHistory';
import LoyaltyCard from './LoyaltyCard';
import PaymentMethods from './PaymentMethods';
import Notifications from './Notifications';

export default function CustomerDashboard() {
  const { user } = useUserStore();

  const { data: orders } = useQuery({
    queryKey: ['orders', user?.id],
    queryFn: () => orderAPI.getOrders(user?.id!),
    enabled: !!user?.id,
  });

  const { data: profile } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: () => userAPI.getProfile(user?.id!),
    enabled: !!user?.id,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Active Orders"
          value={orders?.filter(o => o.status !== 'delivered').length || 0}
          icon={Package2}
        />
        <DashboardCard
          title="Loyalty Points"
          value={profile?.loyaltyPoints || 0}
          icon={Award}
        />
        <DashboardCard
          title="Saved Cards"
          value={profile?.paymentMethods?.length || 0}
          icon={CreditCard}
        />
        <DashboardCard
          title="Notifications"
          value={profile?.unreadNotifications || 0}
          icon={Bell}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <OrderHistory />
        </div>
        <div className="space-y-6">
          <LoyaltyCard />
          <PaymentMethods />
          <Notifications />
        </div>
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
}

function DashboardCard({ title, value, icon: Icon }: DashboardCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      </div>
    </div>
  );
}