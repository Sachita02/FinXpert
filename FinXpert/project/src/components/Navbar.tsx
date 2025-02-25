import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, User, Bell, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Navbar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8" />
              <span className="text-xl font-bold">FinXpert</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="hover:text-indigo-200 transition">
              Dashboard
            </Link>
            <Link to="/recommendations" className="hover:text-indigo-200 transition">
              Recommendations
            </Link>
            <Link to="/alerts" className="relative hover:text-indigo-200 transition">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link to="/profile" className="hover:text-indigo-200 transition">
              <User className="h-5 w-5" />
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-indigo-200 transition"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}