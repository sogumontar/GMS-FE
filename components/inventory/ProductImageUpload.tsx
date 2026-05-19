"use client";
import React, { useState } from 'react';

export const ProductImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg">
      <h3 className="text-sm font-medium text-slate-700 mb-2">Product Image</h3>
      <input type="file" onChange={handleFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
      {image && (
        <div className="mt-4 relative w-32 h-32 border rounded overflow-hidden">
          <img src={image} alt="Preview" className="w-full h-full object-cover" />
          <button onClick={() => setImage(null)} className="absolute top-0 right-0 p-1 bg-red-500 text-white text-xs">Delete</button>
        </div>
      )}
    </div>
  );
};
