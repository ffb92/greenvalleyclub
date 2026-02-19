import { useEffect } from 'react';

const CANNANAS_SCRIPT_ID = 'cannanas-embed-script';
const CANNANAS_SCRIPT_SRC = 'https://account.cannanas.club/static/frame.js';

export default function CannanasForm() {
  useEffect(() => {
    const existingScript = document.getElementById(CANNANAS_SCRIPT_ID) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = CANNANAS_SCRIPT_ID;
      script.src = CANNANAS_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="cannannas" className="py-8 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="cannanas"
          data-key="yD8tHUL81vk85GrHl9Lk2SAzgTzmbY3Q"
          className="reveal"
        />
      </div>
    </section>
  );
}
