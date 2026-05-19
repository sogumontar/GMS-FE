import React from 'react';
import { Attachment } from '@/lib/types/tasks';

interface AttachmentListProps {
  attachments: Attachment[];
}

export const AttachmentList: React.FC<AttachmentListProps> = ({ attachments }) => {
  return (
    <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
        <h3 className="text-sm font-bold text-primary uppercase tracking-wider">Attachments ({attachments.length})</h3>
        <button className="text-primary text-xs font-bold hover:underline">Download All</button>
      </div>
      <div className="divide-y divide-outline-variant">
        {attachments.map((file) => (
          <div key={file.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant">description</span>
              <div>
                <p className="text-sm font-semibold text-primary">{file.name}</p>
                <p className="text-xs text-on-surface-variant">{file.size} • {file.type}</p>
              </div>
            </div>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
          </div>
        ))}
      </div>
      {attachments.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-sm text-on-surface-variant italic">No attachments found for this task.</p>
        </div>
      )}
    </div>
  );
};
