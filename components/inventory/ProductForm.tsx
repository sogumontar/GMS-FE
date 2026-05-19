"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

export const ProductForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white border border-slate-200 rounded-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Product Name</label>
        <input {...register("name", { required: true })} className="w-full p-2 border border-slate-300 rounded" />
        {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">SKU</label>
        <input {...register("id", { required: true })} className="w-full p-2 border border-slate-300 rounded" />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded">Create Product</button>
    </form>
  );
};
