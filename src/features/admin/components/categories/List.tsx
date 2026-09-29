'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Save, X, FolderOpen, Pencil, Trash2 } from 'lucide-react';
import { Category, CategoryListProps } from '@/src/types';
import { getCategoryIcon } from '@/src/lib/categoryIcons';

const CARDS = [
  { bg: 'bg-[#EDE8FA]', text: 'text-[#3D2878]', iconGradient: 'bg-[linear-gradient(135deg,#7B68C5,#A78BFA)]', border: 'border-[#7B68C522]', actionBg: 'bg-[rgba(123,104,197,0.12)]' },
  { bg: 'bg-[#FCE9F5]', text: 'text-[#6B1A75]', iconGradient: 'bg-[linear-gradient(135deg,#E879F9,#F472B6)]', border: 'border-[#C026D322]', actionBg: 'bg-[rgba(192,38,211,0.10)]' },
  { bg: 'bg-[#E0F6F6]', text: 'text-[#0F4F4B]', iconGradient: 'bg-[linear-gradient(135deg,#0D9488,#2DD4BF)]', border: 'border-[#0D948822]', actionBg: 'bg-[rgba(13,148,136,0.10)]' },
  { bg: 'bg-[#E9F7EE]', text: 'text-[#14532D]', iconGradient: 'bg-[linear-gradient(135deg,#16A34A,#4ADE80)]', border: 'border-[#16A34A22]', actionBg: 'bg-[rgba(22,163,74,0.10)]' },
  { bg: 'bg-[#FEF9E7]', text: 'text-[#5C4A08]', iconGradient: 'bg-[linear-gradient(135deg,#D97706,#FCD34D)]', border: 'border-[#D9770622]', actionBg: 'bg-[rgba(217,119,6,0.10)]' },
  { bg: 'bg-[#FDE8F0]', text: 'text-[#6B2040]', iconGradient: 'bg-[linear-gradient(135deg,#DB2777,#F9A8D4)]', border: 'border-[#DB277722]', actionBg: 'bg-[rgba(219,39,119,0.10)]' },
  { bg: 'bg-[#F3F0EA]', text: 'text-[#3D3929]', iconGradient: 'bg-[linear-gradient(135deg,#78716C,#D6D3D1)]', border: 'border-[#78716C22]', actionBg: 'bg-[rgba(120,113,108,0.10)]' },
  { bg: 'bg-[#E0F4FA]', text: 'text-[#0C3A4A]', iconGradient: 'bg-[linear-gradient(135deg,#0891B2,#67E8F9)]', border: 'border-[#0891B222]', actionBg: 'bg-[rgba(8,145,178,0.10)]' },
];

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: 'transform 0.15s ease', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

export function List({ categories, onUpdate, onDelete, isUpdating, isDeleting }: CategoryListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');

  const startEditing = (cat: Category) => { setEditingId(cat.id); setEditName(cat.name); };
  const cancelEditing = () => { setEditingId(null); setEditName(''); };

  if (categories.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 bg-[rgba(123,104,197,0.10)]">
          <FolderOpen className="w-9 h-9 text-surface-500" />
        </div>
        <h3 className="font-black text-xl mb-1 text-brand-900">No categories yet</h3>
        <p className="text-brand-400">Add your first one above.</p>
      </motion.div>
    );
  }

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

        {categories.map((cat, i) => {
          const c = CARDS[i % CARDS.length];
          const Icon = getCategoryIcon(cat.name);
          const isEditing = editingId === cat.id;

          return (
            <motion.div
              key={cat.id}
              variants={{ hidden: { opacity: 0, scale: 0.85, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}>

              {isEditing ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl p-4 flex flex-col gap-3 min-h-[180px] bg-[rgba(255,255,255,0.95)] shadow-[0_8px_32px_rgba(123,104,197,0.18)] border-2 border-brand-500">
                  <p className="text-xs font-black tracking-widest uppercase text-brand-400">Editing</p>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    autoFocus
                    className="flex-1 px-3 py-2 rounded-xl text-sm font-black outline-none bg-[rgba(123,104,197,0.08)] text-brand-900 border-[1.5px] border-[rgba(123,104,197,0.30)]"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => { onUpdate(cat.id, editName); cancelEditing(); }}
                      disabled={isUpdating}
                      className="flex-1 py-2 rounded-xl text-xs font-black text-white flex items-center justify-center gap-1 disabled:opacity-50 bg-[linear-gradient(135deg,#7B68C5,#4A3C86)]">
                      <Save className="w-3 h-3" /> Save
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="w-9 rounded-xl flex items-center justify-center bg-[rgba(212,184,216,0.40)]">
                      <X className="w-3.5 h-3.5 text-[#6B5FA0]" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <TiltCard className={`group relative rounded-3xl pt-10 overflow-hidden cursor-default flex flex-col p-5 min-h-[180px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-[1.5px] ${c.bg} ${c.border}`}>
                  <div className={`w-20 h-20 rounded-2xl flex items-center mx-auto justify-center shrink-0 ${c.iconGradient}`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.7} />
                  </div>

                  <p className={`mt-5 text-center font-semibold text-base leading-tight flex-1 ${c.text}`}>
                    {cat.name}
                  </p>

                  <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                    <button
                      onClick={() => startEditing(cat)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 ${c.actionBg} ${c.text}`}>
                      <Pencil className="w-3 h-3" /> Edit
                    </button>
                    <button
                      onClick={() => onDelete(cat.id, cat.name)}
                      disabled={isDeleting}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all hover:scale-105 disabled:opacity-50 bg-[rgba(220,38,38,0.12)] text-[#991B1B]">
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </TiltCard>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
