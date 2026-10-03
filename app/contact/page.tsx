'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Users, HelpCircle, Mail, Send, CheckCircle2, Sparkles, Phone, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import contactImage from '@/public/images/contact.webp';

const REASONS = [
  { id: 'booking', icon: GraduationCap, label: 'Booking a tutor', note: "Tell us what you're looking to learn and we'll point you in the right direction." },
  { id: 'teaching', icon: Users, label: 'Becoming a tutor', note: "Share a bit about your expertise — we'll follow up about joining as a tutor." },
  { id: 'other', icon: HelpCircle, label: 'Something else', note: "Whatever's on your mind — we read every message." },
] as const;

type ReasonId = typeof REASONS[number]['id'];

export default function ContactPage() {
  const [reason, setReason] = useState<ReasonId>('booking');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const activeReason = REASONS.find((r) => r.id === reason)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-200 min-h-[calc(100vh-5rem)] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-brand-900 font-serif tracking-tight mb-3">
            Let&apos;s talk!
          </h1>
          <p className="text-brand-700/60 font-medium max-w-lg mx-auto">
            Whether you need assistance, have feedback, or simply want to learn more, we&apos;re here for you. Our team typically responds within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-[1.75rem] overflow-hidden shadow-[0_12px_40px_rgba(45,31,88,0.12)] min-h-80">
            <Image
              src={contactImage}
              alt="A desk with a phone, notebook and letters, ready for your message"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,31,88,0.05)_0%,rgba(45,31,88,0.55)_100%)]" />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 right-6 w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Phone className="w-5 h-5 text-brand-600" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-24 right-16 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <MessageCircle className="w-4 h-4 text-accent-500" />
            </motion.div>
            <Sparkles className="absolute -top-1 left-8 w-10 h-10 text-gray-100/70" strokeWidth={1.5} />
            <Star className="absolute top-20 left-16 w-6 h-6 fill-purple-100/50 text-gray-100/50" />
            <Star className="absolute top-28 left-10 w-6 h-6 fill-purple-100/50 text-gray-100/50" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Our team</p>
              <h3 className="text-white text-2xl font-black font-serif mb-3">Remote-first, worldwide</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <p className="flex items-center gap-1.5 text-white/85 text-sm font-semibold">
                  <Mail className="w-3.5 h-3.5" />
                  hello@eduzen.com
                </p>
                <p className="flex items-center gap-1.5 text-white/85 text-sm font-semibold">
                  <Phone className="w-3.5 h-3.5" />
                  Mon&ndash;Fri, 9am&ndash;6pm
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}>
            <div className="bg-white border border-surface-300 rounded-[1.75rem] shadow-[0_4px_24px_rgba(45,31,88,0.06)] overflow-hidden h-full">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-black text-brand-900 text-xl mb-1.5">Message sent</h3>
                  <p className="text-brand-700/50 text-sm max-w-xs">
                    Thanks for reaching out — we&apos;ll get back to you within a business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="px-6 sm:px-8 pt-7 pb-6 border-b border-surface-300">
                    <p className="text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-3">
                      What can we help with?
                    </p>
                    <div className="relative flex gap-2 p-1 rounded-2xl bg-surface-200">
                      {REASONS.map((r) => {
                        const active = reason === r.id;
                        return (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => setReason(r.id)}
                            className={`relative flex-1 flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-center transition-colors ${
                              active ? 'text-white bg-brand-600' : 'text-brand-700/60 hover:text-brand-700'
                            }`}>
                            {active && (
                              <motion.span
                                layoutId="reason-pill"
                                className="absolute inset-0 -z-10 rounded-xl bg-brand-600 shadow-[0_6px_16px_rgba(98,85,168,0.30)]"
                                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                              />
                            )}
                            <r.icon className="relative z-10 w-4 h-4" />
                            <span className="relative z-10 text-[11px] font-bold leading-tight">{r.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={reason}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-brand-500 mt-3 px-1">
                        {activeReason.note}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-7 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
                          Your name
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl border-surface-400 bg-surface-100 text-brand-900 focus:ring-brand-500 focus:border-brand-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
                          Email address
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl border-surface-400 bg-surface-100 text-brand-900 focus:ring-brand-500 focus:border-brand-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        required
                        className="w-full rounded-xl border border-surface-400 bg-surface-100 p-4 text-sm text-brand-900 outline-none resize-none focus:border-brand-500 transition-colors"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <Button type="submit" className="w-full rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-600/20 py-3">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
