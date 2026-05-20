import React from 'react';

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, item: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  onRowClick?: (item: T) => void;
}

export function DataTable<T extends { id: string }>({ 
  columns, 
  data, 
  className = '',
  onRowClick
}: DataTableProps<T>) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-surface-bright border-b border-outline-variant">
            {columns.map((col, i) => (
              <th 
                key={i} 
                className={`py-4 px-6 text-xs font-bold text-on-surface-variant uppercase tracking-wider ${
                  col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant font-body-md text-sm text-on-background">
          {data.map((item) => (
            <tr 
              key={item.id} 
              onClick={() => onRowClick?.(item)}
              className={`hover:bg-surface-container-low transition-colors group ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((col, i) => (
                <td 
                  key={i} 
                  className={`py-3 px-6 text-on-surface ${
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                  }`}
                >
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
