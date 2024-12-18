import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '../../store/userStore';
import { userAPI } from '../../utils/api';

export default function LoyaltyCard() {
  const { user } = useUserStore();
  const { data: loyalty } = useQuery({
    queryKey: ['loyalty', user?.id],
    queryFn: () => userAPI.getLoyalty(user?.id!),
    enabled: !!user?.id,
  });

  if (!loyalty) return null;

  const progress = (loyalty.points / loyalty.pointsToNextTier) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Loyalty Program</h3>
        <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Current Tier</span>
            <span className="font-medium text-gray-900 dark:text-white capitalize">{loyalty.tier}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Points</span>
            <span className="font-medium text-gray-900 dark:text-white">{loyalty.points}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600 dark:text-gray-400">Next Tier Progress</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {loyalty.points}/{loyalty.pointsToNextTier}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <button className="w-full flex items-center justify-between text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
          View Benefits
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}