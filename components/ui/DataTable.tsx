import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export function DataTable<T extends { id: string }>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              {columns.map((col, i) => (
                <td key={i} className="px-6 py-4 text-sm text-gray-700">
                  {col.render ? col.render(item[col.accessor], item) : (item[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
