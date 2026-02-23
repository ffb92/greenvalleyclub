import { ArrowRight, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = 'info@greenvalleyclub.de';
const INSTAGRAM_URL = 'https://www.instagram.com/greenvalley.gvc/';

export default function StayConnected() {
  return (
    <section id="kontakt" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Stay Connected
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Bleib nah dran.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Updates direkt in dein Postfach – und echte Einblicke hinter die Kulissen auf Instagram.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5 reveal">
          <article className="lg:col-span-3 rounded-3xl border border-primary/20 bg-card px-6 py-8 sm:px-8 sm:py-10 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <Mail className="h-4 w-4" />
              E-Mail Kontakt
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-foreground">
              Schreib uns direkt
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Ob Mitgliedschaft, Ablauf oder allgemeine Fragen – unser Team ist für dich da.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {CONTACT_EMAIL}
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <article className="lg:col-span-2 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary to-[#2D6B54] p-8 text-primary-foreground relative">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-background/20 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-background/15 blur-2xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                <Instagram className="h-4 w-4" />
                Instagram
              </div>
              <h3 className="mt-5 text-2xl sm:text-3xl font-semibold">
                Folge @greenvalley.gvc
              </h3>
              <p className="mt-3 text-primary-foreground/85 leading-relaxed">
                News, Behind the Scenes und Community-Momente aus dem Green Valley Club.
              </p>
              <Button asChild className="mt-7 h-11 rounded-full bg-background text-primary hover:bg-background/90">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Zu Instagram
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
