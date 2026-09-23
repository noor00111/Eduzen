import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="relative w-full pt-24 pb-12 mt-auto overflow-hidden"
      style={{
        backgroundColor: '#F5F0FF',
        borderTop: '1px solid rgba(212,184,216,0.45)',
      }}>

      <div className="blob-drift absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,184,216,0.30) 0%, transparent 70%)' }}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group inline-flex">
              <div
                className="text-white p-2.5 rounded-2xl transition-all duration-300 group-hover:rotate-6"
                style={{
                  background: 'linear-gradient(135deg, #7B68C5, #6255A8)',
                  boxShadow: '0 8px 24px rgba(123,104,197,0.28)',
                }}>
                <BookOpen className="w-6 h-6" />
              </div>
              <span
                className="font-serif font-black text-3xl tracking-tight"
                style={{ color: '#2D1F58' }}>
                Eduzen
              </span>
            </Link>

            <p className="text-md max-w-sm leading-relaxed font-sans mb-8" style={{ color: '#6255A8' }}>
              The most elegant way to connect with elite experts worldwide.
              <span className="font-semibold italic" style={{ color: '#7B68C5' }}> Elevate your skills</span> with precision and personalized guidance.
            </p>

            <div
              className="flex items-center gap-2 max-w-sm p-1.5 pl-4 bg-white rounded-2xl shadow-sm transition-all focus-within:ring-2"
              style={{ border: '1px solid rgba(212,184,216,0.60)', ringColor: 'rgba(123,104,197,0.20)' }}>
              <input
                type="email"
                placeholder="Join the newsletter"
                className="bg-transparent border-none outline-none text-sm w-full font-sans"
                style={{ color: '#2D1F58' }}
              />
              <button
                className="text-white p-2 rounded-xl transition-colors"
                style={{ backgroundColor: '#7B68C5' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6255A8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B68C5')}>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3
              className="font-sans font-black mb-8 tracking-widest uppercase text-[10px]"
              style={{ color: '#2D1F58' }}>
              Platform
            </h3>
            <ul className="space-y-4">
              {['Browse Tutors', 'Subjects', 'Pricing Info', 'Success Stories'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:translate-x-1 transition-all inline-block"
                    style={{ color: 'rgba(74,60,134,0.65)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#7B68C5')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(74,60,134,0.65)')}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 md:ml-auto">
            <h3
              className="font-sans font-black mb-8 tracking-widest uppercase text-[10px]"
              style={{ color: '#2D1F58' }}>
              Support
            </h3>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:translate-x-1 transition-all inline-block"
                    style={{ color: 'rgba(74,60,134,0.65)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#7B68C5')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(74,60,134,0.65)')}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 md:ml-auto">
            <div
              className="p-6 rounded-[2rem]"
              style={{
                background: 'rgba(237,232,250,0.70)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(154,142,209,0.22)',
              }}>
              <p className="font-serif font-bold text-lg mb-2" style={{ color: '#2D1F58' }}>
                Ready to start?
              </p>
              <p className="text-xs mb-4 leading-relaxed" style={{ color: 'rgba(74,60,134,0.65)' }}>
                Join 5,000+ students mastering new skills today.
              </p>
              <Link
                href="/register"
                className="block text-center text-white text-sm font-bold py-3 rounded-xl transition-colors shadow-md"
                style={{ background: 'linear-gradient(135deg, #7B68C5, #6255A8)', boxShadow: '0 6px 20px rgba(123,104,197,0.30)' }}>
                Get Started Free
              </Link>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:row justify-between items-center gap-1"
          style={{ borderTop: '1px solid rgba(212,184,216,0.45)' }}>
          <div className="flex">
            {[FaFacebookSquare, FaGithub, FaLinkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-11 h-11 transition-all"
                style={{ color: '#7B68C5' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7B68C5')}>
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
          <p
            className="text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ color: 'rgba(74,60,134,0.40)' }}>
            © {new Date().getFullYear()} Eduzen Platform.
          </p>
        </div>
      </div>
    </div>
  );
}
