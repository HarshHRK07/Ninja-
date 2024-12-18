import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { adminAPI } from '../../utils/api';
import { Report } from '../../utils/types';

export default function Analytics() {
  const { data: report } = useQuery({
    queryKey: ['analytics'],
    queryFn: () => adminAPI.getReport('monthly'),
  });

  if (!report) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Monthly Performance
          </h2>
          <select className="border rounded-lg px-4 py-2">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Revenue"
            value={`$${report.metrics.revenue.toLocaleString()}`}
            icon={DollarSign}
          />
          <MetricCard
            title="Orders"
            value={report.metrics.orders}
            icon={BarChart}
          />
          <MetricCard
            title="New Customers"
            value={report.metrics.newCustomers}
            icon={TrendingUp}
          />
          <MetricCard
            title="Customer Satisfaction"
            value={`${report.metrics.customerSatisfaction}%`}
            icon={TrendingUp}
          />
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Top Services
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {report.topServices.map((service) => (
                  <tr key={service.service}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {service.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {service.count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      ${service.revenue.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      </div>
    </div>
  );
}