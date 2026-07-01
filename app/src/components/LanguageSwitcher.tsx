import { Globe } from 'lucide-react';
import { useI18n } from '@/i18n/use-i18n';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={cn('flex items-center gap-1.5', className)}
      role="radiogroup"
      aria-label="Language selection"
    >
      <Globe className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden />
      <div className="flex rounded-full border border-border bg-secondary p-0.5">
        <button
          type="button"
          role="radio"
          aria-checked={lang === 'de'}
          onClick={() => setLang('de')}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs font-semibold transition-all',
            lang === 'de'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          DE
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={lang === 'en'}
          onClick={() => setLang('en')}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs font-semibold transition-all',
            lang === 'en'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          EN
        </button>
      </div>
    </div>
  );
}
