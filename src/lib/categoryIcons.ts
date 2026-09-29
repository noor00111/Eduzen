import { Calculator, FlaskConical, Code2, Microscope, Languages, Atom, BookOpen } from 'lucide-react';

export type CategoryIcon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const ICON_MAP: Record<string, CategoryIcon> = {
  programming: Code2,
  mathematics: Calculator, math: Calculator,
  chemistry: FlaskConical,
  biology: Microscope, physics: Atom,
  languages: Languages, language: Languages,
};

export function getCategoryIcon(name: string): CategoryIcon {
  return ICON_MAP[name.toLowerCase().trim()] ?? BookOpen;
}
