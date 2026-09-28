'use client';

import { useState } from 'react';
import { useAuthStore } from '@/src/store/useAuthStore';
import { api } from '@/src/lib/api';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles, ChevronRight } from 'lucide-react';
import { fadeUp } from '@/src/lib/animation';
import { AuthFormInput } from './FormInput';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const setAuth = useAuthStore((state) => state.setAuth);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/auth/login', { email, password });
      const { user, token } = res.data.data;
      setAuth(user, token);
      toast.success('Welcome back!');
      if (user.role === 'ADMIN') router.push('/admin/users');
      else if (user.role === 'TUTOR') router.push('/tutor/dashboard');
      else router.push('/dashboard');
    } catch (error: unknown) {
      const msg = (error as { response?: { data?: { message?: string } } })?.response?.data?.message;
      toast.error(msg || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" className="w-full max-w-md relative z-10">
      <motion.div variants={fadeUp} custom={0} className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Sign In to Continue!</span>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthFormInput
          label="Email Address"
          icon={Mail}
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="name@example.com"
          focusKey="email"
          focused={focused}
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          animationIndex={1}
          required
        />
        <AuthFormInput
          label="Password"
          icon={Lock}
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••"
          focusKey="password"
          focused={focused}
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          animationIndex={2}
          required
        />

        <motion.div variants={fadeUp} custom={3} className="pt-2">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-lg transition-opacity disabled:opacity-60 bg-[linear-gradient(135deg,var(--color-brand-500)_0%,var(--color-brand-700)_100%)] text-body-500">
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 rounded-full border-2 border-[#F5FAE1] border-t-transparent"/>
            ) : (
              <>Sign In <ChevronRight className="w-5 h-5" /></>
            )}
          </motion.button>
        </motion.div>
      </form>

      <motion.p variants={fadeUp} custom={4} className="text-sm text-center mt-6 font-medium text-brand-600">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-black transition-colors text-brand-500">
          Sign up
        </Link>
      </motion.p>
    </motion.div>
  );
}
