import { motion } from 'framer-motion';
import { fadeUp } from '@/src/lib/animation';
import { FormInputProps } from '@/src/types';

export function AuthFormInput({label, icon: Icon, type = 'text', value, onChange, placeholder, focusKey, focused, onFocus, onBlur, animationIndex, required}: FormInputProps) {
  const isFocused = focused === focusKey;

  return (
    <motion.div variants={fadeUp} custom={animationIndex}>
      <label
        className="block text-xs font-bold uppercase tracking-[0.2em] mb-2 text-brand-600">
        {label}
      </label>

      <div className="relative">
        <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${isFocused ? 'text-brand-600' : 'text-brand-700'}`}/>
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => onFocus(focusKey)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 rounded-2xl text-sm outline-none transition-all duration-200 bg-surface-400 text-brand-900 h-13 border-2 ${isFocused ? 'border-brand-500' : 'border-transparent'}`}/>
      </div>
    </motion.div>
  );
}