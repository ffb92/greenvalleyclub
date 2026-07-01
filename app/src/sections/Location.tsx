import { Navigation } from 'lucide-react';
import { useI18n } from '@/i18n/use-i18n';

export default function Location() {
  const { t } = useI18n();

  return (
    <section id="location" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-[0.15em] text-primary uppercase">
                {t('location.badge')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
              {t('location.title_line1')}
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
              {t('location.title_line2')}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('location.desc1')}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('location.desc2')}
            </p>

            <p className="text-primary font-semibold text-lg mb-10">
              {t('location.visit')}
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {t('location.distance_label')}
                    </p>
                    <p className="text-foreground font-semibold">
                      {t('location.distance_value')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="reveal stagger-1">
            <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
              <div className="aspect-[4/3] bg-primary/5 relative">
                <iframe
                  src="https://www.google.com/maps?q=Bertha-Benz-Stra%C3%9Fe+10557+Berlin&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
