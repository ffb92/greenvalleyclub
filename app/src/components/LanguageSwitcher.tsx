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
      className={cn('flex items-center gap-1 text-sm font-medium', className)}
      role="radiogroup"
      aria-label="Language selection"
    >
      <button
        type="button"
        role="radio"
        aria-checked={lang === 'de'}
        onClick={() => setLang('de')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          lang === 'de'
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        DE
      </button>
      <span className="text-border select-none" aria-hidden>
        |
      </span>
      <button
        type="button"
        role="radio"
        aria-checked={lang === 'en'}
        onClick={() => setLang('en')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          lang === 'en'
            ? 'text-foreground font-semibold'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        EN
      </button>
    </div>
  );
}
