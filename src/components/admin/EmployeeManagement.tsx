import React from 'react';
import { Users, UserPlus, Calendar } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { adminAPI } from '../../utils/api';
import Button from '../common/Button';
import { Employee } from '../../utils/types';

export default function EmployeeManagement() {
  const { data: employees } = useQuery({
    queryKey: ['employees'],
    queryFn: () => adminAPI.getEmployees(),
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Employee Management
          </h2>
          <Button variant="primary" size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees?.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {employee.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
            {employee.role}
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Performance Metrics
          </p>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <Metric
              label="Orders Processed"
              value={employee.performance.ordersProcessed}
            />
            <Metric
              label="Customer Rating"
              value={`${employee.performance.customerRating}/5`}
            />
            <Metric
              label="Efficiency"
              value={`${employee.performance.efficiency}%`}
            />
            <Metric
              label="Attendance"
              value={`${employee.performance.attendance}%`}
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Contact
          </p>
          <p className="mt-1 text-sm text-gray-900 dark:text-white">
            {employee.email}
          </p>
          <p className="text-sm text-gray-900 dark:text-white">
            {employee.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}