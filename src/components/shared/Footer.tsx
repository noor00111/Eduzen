import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="relative w-full bg-body-500 border-t border-surface-400 pt-24 pb-12 mt-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <div className="bg-brand-500 text-white p-2.5 rounded-2xl shadow-lg shadow-brand-500/20 group-hover:rotate-6 transition-all duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-serif font-black text-3xl tracking-tight text-brand-900">
                Eduzen
              </span>
            </Link>
            <p className="text-brand-800/70 text-md max-w-sm leading-relaxed font-sans mb-8">
              The most elegant way to connect with elite experts worldwide.
              <span className="text-brand-500 font-semibold italic"> Elevate your skills</span> with precision and personalized guidance.
            </p>

            <div className="flex items-center gap-2 max-w-sm p-1.5 pl-4 bg-white rounded-2xl border border-surface-300 shadow-sm focus-within:ring-2 ring-brand-500/20 transition-all">
              <input
                type="email"
                placeholder="Join the newsletter"
                className="bg-transparent border-none outline-none text-sm w-full font-sans"
              />
              <button className="bg-accent-400 hover:bg-accent-500 text-white p-2 rounded-xl transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3 className="font-sans font-black text-brand-900 mb-8 tracking-widest uppercase text-[10px]">Platform</h3>
            <ul className="space-y-4">
              {['Browse Tutors', 'Subjects', 'Pricing Info', 'Success Stories'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm font-medium text-brand-800/60 hover:text-brand-500 hover:translate-x-1 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3 className="font-sans font-black text-brand-900 mb-8 tracking-widest uppercase text-[10px]">Support</h3>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm font-medium text-brand-800/60 hover:text-brand-500 hover:translate-x-1 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 md:ml-auto">
            <div className="glass-warm p-6 rounded-[2rem] border-brand-500/10">
              <p className="text-brand-900 font-serif font-bold text-lg mb-2">Ready to start?</p>
              <p className="text-brand-800/60 text-xs mb-4 leading-relaxed">Join 5,000+ students mastering new skills today.</p>
              <Link href="/register" className="block text-center bg-brand-500 text-white text-sm font-bold py-3 rounded-xl hover:bg-brand-600 transition-colors shadow-md">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>


        <div className="pt-8 border-t border-surface-400 flex flex-col md:row justify-between items-center gap-1">
          <div className="flex">
            <Link
              href="#"
              className="w-11 h-11 text-brand-700 hover:text-accent-400 transition-all"
            >
              <FaFacebookSquare className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-11 h-11 text-brand-700 hover:text-accent-400 transition-all">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-11 h-11 text-brand-700 hover:text-accent-400 transition-all">
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
            <p className="text-[10px] text-brand-800/40 font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Eduzen Platform.
            </p>
          </div>
        </div>
    </footer>
  );
}