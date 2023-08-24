import React, { useState, useEffect, useRef } from 'react';

interface Props {
  targetHeight: number;
  fadeOutHeight: number;
  children: React.ReactNode;
  visibleOnLoad: boolean;
}

const FadeInOnScroll: React.FC<Props> = ({ visibleOnLoad, targetHeight, fadeOutHeight, children }) => {
  const [isVisible, setIsVisible] = useState(visibleOnLoad);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsVisible(scrollY >= targetHeight && scrollY <= fadeOutHeight);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useEffect(() => {
      if (elementRef.current) {
        console.log('Element height:', elementRef.current.clientHeight);
      }
    }, [isVisible]);

  return (
      <div ref={elementRef} className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
          { children }
      </div>
  )
}

export default FadeInOnScroll;
