'use client';

import { useState } from 'react';
import { useAuthStore } from '@/src/store/useAuthStore';
import { api } from '@/src/lib/api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {Mail, Lock, User, ChevronRight, GraduationCap, BookOpen} from 'lucide-react';
import { fadeUp } from '@/src/lib/animation';
import { AuthFormInput } from './FormInput';

export function RegisterForm() {
  const [formData, setFormData] = useState({name: '', email: '', password: '', role: 'STUDENT'});
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post('/auth/register', formData);
      const { user, token } = res.data.data;
      setAuth(user, token);
      toast.success('Registration successful!');

      if (user.role === 'TUTOR') {
        router.push(`/tutors/${user.id}`);
      } else {
        router.push('/dashboard');
      }
    } catch (error: unknown) {
      const msg = (
        error as {
          response?: { data?: {message?: string;};
          };
        }
      )?.response?.data?.message;

      toast.error(msg || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  const patch = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const roleOptions = [
              {
                role: 'STUDENT',
                label: 'Student',
                icon: BookOpen,
                desc: 'I want to learn',
              },
              {
                role: 'TUTOR',
                label: 'Tutor',
                icon: GraduationCap,
                desc: 'I want to teach',
              },
            ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full max-w-md relative z-10">

      <motion.div variants={fadeUp} custom={0} className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-md font-bold uppercase tracking-[0.3em] text-brand-600">
            Create Your Account!
          </span>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthFormInput
          label="Full Name"
          icon={User}
          value={formData.name}
          onChange={(v) => patch('name', v)}
          placeholder="John Doe"
          focusKey="name"
          focused={focused}
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          animationIndex={1}
          required
        />

        <AuthFormInput
          label="Email Address"
          icon={Mail}
          type="email"
          value={formData.email}
          onChange={(v) => patch('email', v)}
          placeholder="john@example.com"
          focusKey="email"
          focused={focused}
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          animationIndex={2}
          required
        />

        <AuthFormInput
          label="Password"
          icon={Lock}
          type="password"
          value={formData.password}
          onChange={(v) => patch('password', v)}
          placeholder="••••••••"
          focusKey="password"
          focused={focused}
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          animationIndex={3}
          required
        />

        <motion.div variants={fadeUp} custom={4}>
          <label
            className="block text-xs font-bold uppercase tracking-[0.2em] mb-3 text-brand-600">
            I am a...
          </label>

          <div className="grid grid-cols-2 gap-3">
            {roleOptions.map(({ role, label, icon: Icon, desc }) => {
              const selected = formData.role === role;

              return (
                <motion.button
                  key={role}
                  type="button"
                  onClick={() => patch('role', role)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl transition-all duration-200 border-2 ${selected ? 'bg-brand-500 border-brand-500 text-body-500' : 'bg-surface-400 border-transparent text-brand-500'}`}>

                  <Icon className="w-5 h-5 text-accent-400" />
                  <span className="font-black text-sm">{label}</span>
                  <span className="text-xs font-medium opacity-70">{desc}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={5} className="pt-1">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-lg transition-opacity disabled:opacity-60 bg-[linear-gradient(135deg,var(--color-brand-500)_0%,var(--color-brand-700)_100%)] text-body-500">

            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
                className="w-5 h-5 rounded-full border-2 border-body-500 border-t-transparent"
              />
            ) : (
              <>
                Create Account<ChevronRight className="w-5 h-5" />
              </>)}
          </motion.button>
        </motion.div>
      </form>

      <motion.p variants={fadeUp} custom={6}
        className="text-sm text-center mt-6 font-medium text-brand-600">
        Already have an account?{' '}

        <Link href="/login" className="font-black transition-colors text-brand-500">
          Sign in
        </Link>
      </motion.p>
    </motion.div>
  );
}