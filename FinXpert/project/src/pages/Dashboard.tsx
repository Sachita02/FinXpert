import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import StockCard from '../components/StockCard';
import type { Stock } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [stocks, setStocks] = useState<Stock[]>([
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 173.45,
      change: 2.3,
      volume: 82345678
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.92,
      change: -0.8,
      volume: 45678123
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 141.80,
      change: 1.5,
      volume: 34567890
    }
  ]);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [10000, 12000, 11500, 13000, 12800, 14500],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Portfolio Performance'
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stocks.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Line options={options} data={chartData} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Market News</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium">Fed Signals Potential Rate Cuts</h3>
              <p className="text-gray-600 text-sm mt-1">
                Federal Reserve officials indicate possibility of rate cuts later this year...
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-medium">Tech Sector Shows Strong Growth</h3>
              <p className="text-gray-600 text-sm mt-1">
                Major tech companies report better-than-expected earnings...
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Risk Analysis</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Portfolio Risk Level</span>
              <span className="text-yellow-600 font-medium">Medium</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Diversification Score</span>
              <span className="text-green-600 font-medium">8.5/10</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Volatility Index</span>
              <span className="text-red-600 font-medium">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}