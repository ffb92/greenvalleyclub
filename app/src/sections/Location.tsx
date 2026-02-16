import { MapPin, Train, Navigation } from 'lucide-react';

export default function Location() {
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
                Ausgabestelle am Alexanderplatz
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
              Mitten im
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
              Herzen Berlins
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Direkt am Alexanderplatz, im Zentrum der Hauptstadt. Durch die perfekte 
              Anbindung an den ÖPNV kommt ihr easy zu uns – egal aus welcher Richtung.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nach deiner Registrierung erhältst du die genaue Adresse und kannst 
              einen persönlichen Abholtermin reservieren.
            </p>

            <p className="text-primary font-semibold text-lg mb-10">
              Wir freuen uns auf euren Besuch! 🌿✨
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
                      Entfernung
                    </p>
                    <p className="text-foreground font-semibold">
                      Zentraler Knotenpunkt
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Train className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Anbindung
                    </p>
                    <p className="text-foreground font-semibold">
                      U-Bahn Alexanderplatz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="reveal stagger-1">
            <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
              {/* Map Placeholder with Berlin styling */}
              <div className="aspect-[4/3] bg-primary/5 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.7481197879524!2d13.41106577680663!3d52.52198453646726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1f9014ffeb%3A0xf2b03192ab1a4475!2sAlexanderplatz!5e0!3m2!1sde!2sde!4v1707753600000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Location Card Overlay */}
                <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      Standort
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground">Alexanderplatz</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    52°31'19.0"N · 13°24'15.0"E
                  </p>
                </div>

                {/* Bottom Right Card */}
                <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border max-w-[220px]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#F8F3DF]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">Zentraler Spot</h5>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Alexanderplatz<br />
                        Berlin Mitte
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
