import React from 'react';

export default function LoadingSpinner({ size = 'medium' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="loading-spinner">
      <div className={`spinner ${sizeClasses[size]}`}></div>
      <style jsx>{`
        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        .spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #495E57;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}