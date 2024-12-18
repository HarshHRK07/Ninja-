import React, { useState } from 'react';
import { Package, AlertTriangle, Plus } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminAPI } from '../../utils/api';
import Button from '../common/Button';
import { InventoryItem } from '../../utils/types';

export default function InventoryManagement() {
  const [showLowStock, setShowLowStock] = useState(false);
  const queryClient = useQueryClient();

  const { data: inventory } = useQuery({
    queryKey: ['inventory'],
    queryFn: () => adminAPI.getInventory(),
  });

  const updateStockMutation = useMutation({
    mutationFn: (params: { itemId: string; quantity: number }) =>
      adminAPI.updateInventoryStock(params.itemId, params.quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
    },
  });

  const filteredInventory = showLowStock
    ? inventory?.filter((item) => item.quantity <= item.reorderPoint)
    : inventory;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Inventory Management
          </h2>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLowStock(!showLowStock)}
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              {showLowStock ? 'Show All' : 'Show Low Stock'}
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredInventory?.map((item) => (
                <InventoryRow
                  key={item.id}
                  item={item}
                  onUpdate={updateStockMutation.mutate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function InventoryRow({ item, onUpdate }: { item: InventoryItem; onUpdate: Function }) {
  const stockStatus = item.quantity <= item.reorderPoint ? 'Low Stock' : 'In Stock';
  const statusColor = item.quantity <= item.reorderPoint
    ? 'bg-red-100 text-red-800'
    : 'bg-green-100 text-green-800';

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {item.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white capitalize">
        {item.category}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        {item.quantity} {item.unit}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
          {stockStatus}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
        <div className="flex items-center gap-2">
          <input
            type="number"
            className="w-20 px-2 py-1 border rounded"
            placeholder="Qty"
            min="0"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdate({ itemId: item.id, quantity: item.quantity + 1 })}
          >
            Update
          </Button>
        </div>
      </td>
    </tr>
  );
}