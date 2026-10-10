import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

export function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast-box">
        <CheckCircle size={18} color="#22d3ee" />
        <span>{message}</span>
      </div>
    </div>
  );
}
