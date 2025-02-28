
import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: {
      [key: string]: string;
    };
  };
  className?: string;
}

const CalendlyEmbed = ({ url, prefill, className = "w-full min-h-[700px]" }: CalendlyEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: containerRef.current,
        prefill: prefill,
      });
    }
  }, [url, prefill, containerRef.current]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      data-processing-notice="This Calendar is currently loading..."
    >
      <div className="animate-pulse flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="rounded-full bg-secondary w-12 h-12 mb-4"></div>
        <div className="h-4 bg-secondary rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-secondary rounded w-1/4"></div>
      </div>
    </div>
  );
};

// Add type definition for Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: {
            [key: string]: string;
          };
        };
      }) => void;
    };
  }
}

export default CalendlyEmbed;
