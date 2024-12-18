import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Package2, TrendingUp, Users, DollarSign } from 'lucide-react';
import { adminAPI } from '../../utils/api';
import OrderManagement from './OrderManagement';
import CustomerList from './CustomerList';
import RevenueChart from './RevenueChart';
import DriverManagement from './DriverManagement';

export default function AdminDashboard() {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => adminAPI.getStats(),
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Orders"
          value={stats?.totalOrders || 0}
          trend={stats?.ordersTrend || 0}
          icon={Package2}
        />
        <DashboardCard
          title="Revenue"
          value={`$${stats?.revenue || 0}`}
          trend={stats?.revenueTrend || 0}
          icon={DollarSign}
        />
        <DashboardCard
          title="Customers"
          value={stats?.totalCustomers || 0}
          trend={stats?.customersTrend || 0}
          icon={Users}
        />
        <DashboardCard
          title="Growth"
          value={`${stats?.growth || 0}%`}
          trend={stats?.growthTrend || 0}
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <RevenueChart />
        <CustomerList />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <OrderManagement />
        <DriverManagement />
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: React.ElementType;
}

function DashboardCard({ title, value, trend, icon: Icon }: DashboardCardProps) {
  const trendColor = trend >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      </div>
      <div className={`text-sm ${trendColor}`}>
        {trend >= 0 ? '+' : ''}{trend}% from last month
      </div>
    </div>
  );
}