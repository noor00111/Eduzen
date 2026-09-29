'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import categoryImg from '@/public/images/category.png';

interface FormProps {
  onCreate: (name: string) => void;
  isPending: boolean;
}

export function Form({ onCreate, isPending }: FormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onCreate(name.trim());
    setName('');
  };

  return (
    <div className="mb-10">
      <div className="border border-accent-200 p-2 py-8 rounded-xl overflow-hidden mb-8 flex items-center">
        <div className="px-8 py-6 flex-1">
          <h1 className="text-5xl font-black leading-tight text-brand-800 font-serif">
            Category Management
          </h1>
          <p className="text-sm mt-1">Organise subjects for your tutoring platform.</p>
        </div>

        <div className="relative h-40 w-52 shrink-0 mr-4 hidden sm:block">
          <Image
            src={categoryImg}
            alt="Category illustration"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          className="flex items-center gap-0 rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.90)] shadow-[0_8px_40px_rgba(123,104,197,0.14)] border-[1.5px] border-[rgba(212,184,216,0.50)]">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type a category name and press Add…"
            className="flex-1 pl-5 py-4 text-sm outline-none bg-transparent text-brand-900"
          />

          <motion.button
            type="submit"
            disabled={isPending || !name.trim()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-4 font-black text-sm text-white disabled:opacity-40 bg-[linear-gradient(135deg,#7B68C5,#4A3C86)]">
            <Plus className="w-4 h-4" />
            {isPending ? 'Adding…' : 'Add'}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
