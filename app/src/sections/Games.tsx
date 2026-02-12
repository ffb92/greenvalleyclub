import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Games() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-muted-foreground" />
              ) : (
                <VolumeX className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Quiet Area
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Teste dein Wissen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wie gut kennst du dich mit Cannabis aus? Wähle ein Spiel und finde heraus, 
            ob du bereit für den Green Valley Club bist!
          </p>
        </div>

        {/* Game Card */}
        <div className="reveal stagger-1">
          <div className="bg-card rounded-[2rem] p-8 sm:p-12 border border-border text-center">
            {/* Game Illustration */}
            <div className="flex justify-center mb-8">
              <img
                src="/images/game-illustration.png"
                alt="Green Valley Club Games"
                className="w-48 h-auto object-contain animate-float"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
              Green Valley Games
            </h3>
            <p className="text-muted-foreground mb-8">
              Wähle ein Spiel und teste dein Cannabis-Wissen!
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-[#F5F0E6] rounded-full px-8 py-6 text-base font-semibold group"
            >
              Spiele starten
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
