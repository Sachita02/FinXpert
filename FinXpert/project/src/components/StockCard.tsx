import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Stock } from '../types';

interface StockCardProps {
  stock: Stock;
}

export default function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{stock.symbol}</h3>
          <p className="text-gray-600 text-sm">{stock.name}</p>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          <span className="ml-1">{Math.abs(stock.change)}%</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold">${stock.price.toFixed(2)}</div>
        <div className="text-gray-500 text-sm">
          Volume: {stock.volume.toLocaleString()}
        </div>
      </div>
    </div>
  );
}