import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { getTranslations, type Language } from './translations';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'de';
  try {
    const saved = localStorage.getItem('greenvalleyclub-lang');
    if (saved === 'de' || saved === 'en') return saved;
  } catch {
    // localStorage unavailable
  }
  // Default to browser language, fallback to German
  if (navigator.language?.startsWith('de')) return 'de';
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem('greenvalleyclub-lang', next);
    } catch {
      // ignore
    }
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string): string => {
      const map = getTranslations(lang);
      return map[key] ?? key;
    },
    [lang],
  );

  // Sync html lang attribute on mount
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside <I18nProvider>');
  }
  return ctx;
}
