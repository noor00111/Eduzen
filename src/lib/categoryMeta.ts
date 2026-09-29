const EMOJI_MAP: Record<string, string> = {
  math: '🧮', mathematics: '🧮',
  physics: '⚛️',
  chemistry: '⚗️',
  biology: '🌱',
  programming: '💻',
  languages: '📚',
};

const TAGLINES: Record<string, string> = {
  math: 'Numbers, formulas, and problem solving.',
  mathematics: 'Numbers, formulas, and problem solving.',
  physics: 'Motion, energy, and the world around us.',
  chemistry: 'Atoms, molecules, and reactions.',
  biology: 'Life, organisms, and ecosystems.',
  programming: 'Logic, code, and build amazing things.',
  languages: 'Communicate, understand, connect.',
};

export function getCategoryEmoji(name: string): string {
  return EMOJI_MAP[name.toLowerCase().trim()] ?? '📖';
}

export function getCategoryTagline(name: string): string {
  return TAGLINES[name.toLowerCase().trim()] ?? 'Explore this subject with expert tutors.';
}

export const CARD_STYLES = [
  { cardBg: 'bg-[#EDE8FA]', iconGradient: 'bg-[linear-gradient(135deg,#7B68C5,#A78BFA)]', accent: 'text-[#7B68C5]', badgeBg: 'bg-[rgba(123,104,197,0.14)]', textDark: 'text-[#3D2878]', textDarkFaded: 'text-[#3D2878AA]', border: 'border-[rgba(167,139,250,0.30)]', borderRaw: 'rgba(167,139,250,0.30)' },
  { cardBg: 'bg-[#FCE9F5]', iconGradient: 'bg-[linear-gradient(135deg,#E879F9,#F472B6)]', accent: 'text-[#C026D3]', badgeBg: 'bg-[rgba(192,38,211,0.10)]', textDark: 'text-[#6B1A75]', textDarkFaded: 'text-[#6B1A75AA]', border: 'border-[rgba(232,121,249,0.30)]', borderRaw: 'rgba(232,121,249,0.30)' },
  { cardBg: 'bg-[#E0F6F6]', iconGradient: 'bg-[linear-gradient(135deg,#0D9488,#2DD4BF)]', accent: 'text-[#0D9488]', badgeBg: 'bg-[rgba(13,148,136,0.10)]', textDark: 'text-[#0F4F4B]', textDarkFaded: 'text-[#0F4F4BAA]', border: 'border-[rgba(45,212,191,0.30)]', borderRaw: 'rgba(45,212,191,0.30)' },
  { cardBg: 'bg-[#E9F7EE]', iconGradient: 'bg-[linear-gradient(135deg,#16A34A,#4ADE80)]', accent: 'text-[#16A34A]', badgeBg: 'bg-[rgba(22,163,74,0.10)]', textDark: 'text-[#14532D]', textDarkFaded: 'text-[#14532DAA]', border: 'border-[rgba(74,222,128,0.30)]', borderRaw: 'rgba(74,222,128,0.30)' },
];
