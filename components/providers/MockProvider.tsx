'use client';

import React, { createContext, useContext } from 'react';
import { Toaster, toast } from 'sonner';

interface MockContextType {
  mockAction: (message: string, callback?: () => void) => void;
}

const MockContext = createContext<MockContextType | undefined>(undefined);

export const MockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mockAction = (message: string, callback?: () => void) => {
    toast.success(message || 'Action completed successfully (Mock)');
    if (callback) {
      setTimeout(callback, 1000);
    }
  };

  return (
    <MockContext.Provider value={{ mockAction }}>
      {children}
      <Toaster position="top-right" richColors />
    </MockContext.Provider>
  );
};

export const useMockAction = () => {
  const context = useContext(MockContext);
  if (!context) {
    throw new Error('useMockAction must be used within a MockProvider');
  }
  return context.mockAction;
};
