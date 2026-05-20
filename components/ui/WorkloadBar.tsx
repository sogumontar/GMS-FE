import React from 'react';

interface WorkloadBarProps {
  current: number;
  max: number;
}

export const WorkloadBar: React.FC<WorkloadBarProps> = ({ current, max }) => {
  const percentage = Math.min((current / max) * 100, 100);
  const isFull = current >= max;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-label-sm text-on-surface-variant text-xs">Current Workload</span>
        <span className={`font-label-sm font-bold text-sm ${isFull ? 'text-error' : 'text-primary'}`}>
          {current}/{max} Tasks
        </span>
      </div>
      <div className="w-full bg-surface-container rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${isFull ? 'bg-error' : 'bg-secondary-container'}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
