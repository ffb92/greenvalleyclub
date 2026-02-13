import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const quickQuestions = [
  'Welche Sorte hilft bei Schlafproblemen?',
  'Ich brauche Fokus für den Nachmittag.',
  'Was macht am meisten Spaß für einen kreativen Abend?',
];

export default function AISommelier() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ type: 'user' | 'ai'; text: string }[]>([]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages((prev) => [...prev, { type: 'user', text }]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        'Welche Sorte hilft bei Schlafproblemen?':
          'Für Schlafprobleme empfehle ich unsere **Indica Lounge** Sorten wie Orion F1 oder Northern Lights. Diese haben einen hohen Myrcen-Gehalt, der entspannend wirkt.',
        'Ich brauche Fokus für den Nachmittag.':
          'Für Fokus und Konzentration sind **Sativa Sparks** Sorten ideal. Probiere unsere Sour Diesel oder Jack Herer – beide bieten klare, energiegeladene Effekte.',
        'Was macht am meisten Spaß für einen kreativen Abend?':
          'Für kreative Abende empfehle ich **Hybrid Flow** Sorten wie Blue Dream oder Gelato. Sie bieten die perfekte Balance aus Entspannung und mentaler Klarheit.',
      };
      
      const response = responses[text] ||
        'Basierend auf deiner Anfrage würde ich dir eine unserer **Signature High** Sorten empfehlen. Besuche uns im Club für eine persönliche Beratung!';
      
      setMessages((prev) => [...prev, { type: 'ai', text: response }]);
    }, 1000);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium tracking-[0.15em] text-primary uppercase">
              AI Sommelier
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Finde deinen Strain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frag unseren AI-Experten nach der perfekten Sorte für deine Stimmung. 
            Egal ob Schlafprobleme oder Kreativ-Boost.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Hinweis: Antworten stammen aus einem KI-Modell und ersetzen keine medizinische Beratung.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Chat Input */}
          <div className="reveal bg-card rounded-3xl p-6 border border-border">
            {/* TV Tower Illustration */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/tv-tower.png"
                alt="Berlin TV Tower"
                className="w-32 h-auto object-contain"
              />
            </div>

            {/* Quick Questions */}
            <div className="space-y-3 mb-6">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  className="w-full text-left p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Input Field */}
            <div className="relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                placeholder="Beschreibe deine Wunsch-Wirkung..."
                className="pr-12 py-6 rounded-xl bg-secondary border-0 text-foreground placeholder:text-muted-foreground"
              />
              <Button
                size="icon"
                onClick={() => handleSend(inputValue)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-lg"
              >
                <Send className="w-4 h-4 text-[#F8F3DF]" />
              </Button>
            </div>
          </div>

          {/* Right: Results Area */}
          <div className="reveal stagger-1 bg-card rounded-3xl p-6 border border-border min-h-[400px]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Warte auf Empfehlungen...
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Deine persönlichen Strain-Vorschläge erscheinen hier als interaktive Karten.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`animate-fade-in ${
                      msg.type === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block max-w-[80%] p-4 rounded-2xl ${
                        msg.type === 'user'
                          ? 'bg-primary text-[#F8F3DF] rounded-br-md'
                          : 'bg-secondary text-foreground rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
