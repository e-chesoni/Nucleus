import React, { useState, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  elementName: string; // New prop for the element's identifier
}

const FadeInOnScrollDefault: React.FC<Props> = ({ elementName, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const scrollY = window.scrollY || window.pageYOffset;
      const screenHeight = window.innerHeight;
      const elementHeight = elementRef.current.clientHeight;
      
      if (elementName && (elementTop > (screenHeight / 3) && elementTop < scrollY))
      {
        console.log('elementName:', elementName);
        console.log('visibility:', isVisible);
        console.log('elementTop:', elementTop);
        console.log('scrollY:', scrollY);
        console.log('screenHeight:', screenHeight);
        console.log('elementHeight:', elementHeight);
      }

      setIsVisible(
        elementTop > (screenHeight / 3) && elementTop < scrollY
      );
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      console.log(`Element '${elementName}' height:`, elementRef.current.clientHeight);
    }
  }, [isVisible, elementName]);

  return (
    <div ref={elementRef} className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInOnScrollDefault;
