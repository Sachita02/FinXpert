import React from 'react';
import { Bell, TrendingUp, Newspaper } from 'lucide-react';

interface Alert {
  id: string;
  type: 'price' | 'news' | 'recommendation';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

export default function Alerts() {
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'price',
      title: 'AAPL Price Movement',
      description: 'Apple Inc. stock has increased by 5% in the last hour',
      timestamp: '2024-02-28T10:30:00Z',
      read: false
    },
    {
      id: '2',
      type: 'news',
      title: 'Market Update',
      description: 'Federal Reserve announces new policy changes',
      timestamp: '2024-02-28T09:15:00Z',
      read: false
    },
    {
      id: '3',
      type: 'recommendation',
      title: 'New Stock Recommendation',
      description: 'Based on your profile, we recommend considering NVDA',
      timestamp: '2024-02-28T08:45:00Z',
      read: true
    }
  ];

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'price':
        return <TrendingUp className="h-5 w-5 text-blue-500" />;
      case 'news':
        return <Newspaper className="h-5 w-5 text-green-500" />;
      case 'recommendation':
        return <Bell className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Alerts</h1>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`bg-white rounded-lg shadow-md p-4 ${
              !alert.read ? 'border-l-4 border-indigo-500' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getAlertIcon(alert.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{alert.title}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="mt-1 text-gray-600">{alert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}