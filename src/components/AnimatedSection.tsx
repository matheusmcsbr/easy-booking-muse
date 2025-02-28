
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'blur-in' | 'slide-in-right' | 'slide-in-left' | 'bounce-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-up'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={sectionRef} 
      className={cn(
        'reveal',
        `animate-${animation}`,
        animation === 'fade-up' ? 'opacity-0 translate-y-8' : '',
        animation === 'fade-in' ? 'opacity-0' : '',
        animation === 'scale-in' ? 'opacity-0 scale-95' : '',
        animation === 'blur-in' ? 'opacity-0 blur-sm' : '',
        animation === 'slide-in-right' ? 'opacity-0 translate-x-8' : '',
        animation === 'slide-in-left' ? 'opacity-0 -translate-x-8' : '',
        animation === 'bounce-in' ? 'opacity-0 scale-95' : '',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
