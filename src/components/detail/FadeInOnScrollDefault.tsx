import React, { useState, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  elementName: string; // New prop for the element's identifier
  visibilityThreshold: number;
  exitThreshold: number; // lower than visibility threshold to stay longer
}

const FadeInOnScrollDefault: React.FC<Props> = ({ elementName, visibilityThreshold, exitThreshold, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined); // Define timeoutRef

  const handleScroll = () => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const scrollY = window.scrollY || window.pageYOffset;
      const screenHeight = window.innerHeight;
      const elementHeight = elementRef.current.clientHeight;
      
      if (elementName && ((elementTop < scrollY) && elementTop > (screenHeight * visibilityThreshold)))
      {
        console.log('elementName:', elementName);
        console.log('visibility:', isVisible);
        console.log('elementTop:', elementTop);
        console.log('scrollY:', scrollY);
        console.log('screenHeight:', screenHeight);
        console.log('elementHeight:', elementHeight);
        console.log(visibilityThreshold);
      }

      // left side is start of visibility, right side is end of visiblity
      if ((elementTop < scrollY) && elementTop > (screenHeight * visibilityThreshold)) {
        setIsVisible(true);
        clearTimeout(timeoutRef.current); 
      } else {
        setIsVisible(false);
        clearTimeout(timeoutRef.current); // Clear the timeout if element is not visible
      }

      /*
      // left side is start of visibility, right side is end of visiblity
      if ((elementTop < scrollY) && elementTop > (screenHeight * visibilityThreshold)) {
        setIsVisible(true);
        clearTimeout(timeoutRef.current); // Clear any previous timeouts
      } else if ((elementTop < scrollY) && elementTop > (screenHeight * exitThreshold)) {
        setIsVisible(true);
        clearTimeout(timeoutRef.current); // Clear any previous timeouts
      } else {
        setIsVisible(false);
        clearTimeout(timeoutRef.current); // Clear the timeout if element is not visible
      }
      */
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
