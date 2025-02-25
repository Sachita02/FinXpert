import React, { useState } from 'react';
import { User } from '../types';

export default function Profile() {
  const [user, setUser] = useState<Partial<User>>({
    email: 'user@example.com',
    risk_level: 'medium'
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h1>
      
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 px-3 py-2"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Investment Preferences</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Risk Tolerance Level
                </label>
                <select
                  value={user.risk_level}
                  onChange={(e) => setUser({ ...user, risk_level: e.target.value as 'low' | 'medium' | 'high' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="low">Low - Conservative</option>
                  <option value="medium">Medium - Balanced</option>
                  <option value="high">High - Aggressive</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Notification Settings</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="price-alerts"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="price-alerts" className="ml-3 text-sm text-gray-700">
                  Price movement alerts
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="news-alerts"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="news-alerts" className="ml-3 text-sm text-gray-700">
                  Important news alerts
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="recommendation-alerts"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="recommendation-alerts" className="ml-3 text-sm text-gray-700">
                  New stock recommendations
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}