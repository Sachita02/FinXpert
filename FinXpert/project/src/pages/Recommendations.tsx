import React from 'react';
import type { StockRecommendation } from '../types';

export default function Recommendations() {
  const recommendations: StockRecommendation[] = [
    {
      symbol: 'NVDA',
      confidence: 85,
      risk_level: 'medium',
      reason: 'Strong growth in AI and data center markets'
    },
    {
      symbol: 'TSLA',
      confidence: 75,
      risk_level: 'high',
      reason: 'Market leader in EV space with significant expansion plans'
    },
    {
      symbol: 'KO',
      confidence: 90,
      risk_level: 'low',
      reason: 'Stable dividend stock with consistent growth'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">AI-Powered Stock Recommendations</h1>
      <p className="text-gray-600">
        Personalized recommendations based on your risk profile and market analysis.
      </p>
      
      <div className="grid gap-6">
        {recommendations.map((rec) => (
          <div key={rec.symbol} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{rec.symbol}</h3>
                <div className="mt-1 flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${rec.risk_level === 'low' ? 'bg-green-100 text-green-800' :
                      rec.risk_level === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'}`}>
                    {rec.risk_level.charAt(0).toUpperCase() + rec.risk_level.slice(1)} Risk
                  </span>
                  <span className="text-gray-500 text-sm">
                    {rec.confidence}% Confidence
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Add to Watchlist
              </button>
            </div>
            <p className="mt-4 text-gray-600">{rec.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}