export interface User {
  id: string;
  email: string;
  risk_level: 'low' | 'medium' | 'high';
  created_at: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
}

export interface StockRecommendation {
  symbol: string;
  confidence: number;
  risk_level: string;
  reason: string;
}