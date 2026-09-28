import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative w-full pt-24 pb-12 mt-auto overflow-hidden bg-body-500 border-t border-[rgba(212,184,216,0.45)]">
      <div className="blob-drift absolute -top-32 right-0 w-125 h-125 rounded-full blur-3xl pointer-events-none bg-[radial-gradient(circle,rgba(212,184,216,0.30)_0%,transparent_70%)]"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <div className="text-white p-2.5 rounded-2xl transition-all duration-300 group-hover:rotate-6 bg-[linear-gradient(135deg,#7B68C5,#6255A8)] shadow-[0_8px_24px_rgba(123,104,197,0.28)]">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-serif font-black text-3xl tracking-tight text-brand-900">
                Eduzen
              </span>
            </Link>

            <p className="text-md max-w-sm leading-relaxed font-sans mb-8 text-brand-600">
              The most elegant way to connect with elite experts worldwide.
              <span className="font-semibold italic text-brand-500"> Elevate your skills</span> with precision and personalized guidance.
            </p>

            <div className="flex items-center gap-2 max-w-sm p-1.5 pl-4 bg-white rounded-2xl shadow-sm transition-all focus-within:ring-2 border border-[rgba(212,184,216,0.60)] focus-within:ring-[rgba(123,104,197,0.20)]">
              <input
                type="email"
                placeholder="Join the newsletter"
                className="bg-transparent border-none outline-none text-sm w-full font-sans text-brand-900"
              />
              <button className="text-white p-2 rounded-xl transition-colors bg-brand-500 hover:bg-brand-600">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3 className="font-sans font-black mb-8 tracking-widest uppercase text-[10px] text-brand-900">
              Platform
            </h3>
            <ul className="space-y-4">
              {['Browse Tutors', 'Subjects', 'Pricing Info', 'Success Stories'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:translate-x-1 transition-all inline-block text-[rgba(74,60,134,0.65)] hover:text-brand-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3 className="font-sans font-black mb-8 tracking-widest uppercase text-[10px] text-brand-900">
              Support
            </h3>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:translate-x-1 transition-all inline-block text-[rgba(74,60,134,0.65)] hover:text-brand-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 md:ml-auto">
            <div className="p-6 rounded-4xl bg-[rgba(237,232,250,0.70)] backdrop-blur-lg border border-[rgba(154,142,209,0.22)]">
              <p className="font-serif font-bold text-lg mb-2 text-brand-900">
                Ready to start?
              </p>
              <p className="text-xs mb-4 leading-relaxed text-[rgba(74,60,134,0.65)]">
                Join 5,000+ students mastering new skills today.
              </p>
              <Link
                href="/register"
                className="block text-center text-white text-sm font-bold py-3 rounded-xl transition-colors bg-[linear-gradient(135deg,#7B68C5,#6255A8)] shadow-[0_6px_20px_rgba(123,104,197,0.30)]">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:row justify-between items-center gap-1 border-t border-[rgba(212,184,216,0.45)]">
          <div className="flex">
            {[FaFacebookSquare, FaGithub, FaLinkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-11 h-11 transition-all text-brand-500 hover:text-accent-400">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(74,60,134,0.40)]">
            © {new Date().getFullYear()} Eduzen Platform.
          </p>
        </div>
      </div>
    </div>
  );
}
