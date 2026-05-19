import React from 'react';
import { SalesRecord } from '@/lib/types/inventory';

interface SalesHistoryTableProps {
  records: SalesRecord[];
}

export const SalesHistoryTable: React.FC<SalesHistoryTableProps> = ({ records }) => {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg overflow-x-auto">
      <h3 className="font-bold text-slate-900 mb-4">Sales History</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Order ID</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id} className="border-b">
              <td>{record.id}</td>
              <td>{record.date}</td>
              <td>{record.quantity}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
