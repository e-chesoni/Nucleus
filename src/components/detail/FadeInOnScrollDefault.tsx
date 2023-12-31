import React, { useState, useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  elementName: string; // New prop for the element's identifier
  fadeInThreshold: number;
  setFadeIn: boolean;
  titleRank: number;
  visibleOnLoad: boolean;
  visibilityThreshold: number;
}

const FadeInOnScrollDefault: React.FC<Props> = ({ children, elementName, fadeInThreshold, setFadeIn, titleRank, visibleOnLoad, visibilityThreshold }) => {
  const [isVisible, setIsVisible] = useState(visibleOnLoad);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined); // Define timeoutRef

  const handleScroll = () => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const scrollY = window.scrollY || window.pageYOffset;
      const screenHeight = window.innerHeight;
      const elementHeight = elementRef.current.clientHeight;
      
      if (elementName && ((elementTop < scrollY) && elementTop < (screenHeight)))
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
      // larger visibility threshold -> element is visible for a shorter amount of time (disapears closer to bottom of screen)
      if ((elementTop < scrollY) && elementTop < (screenHeight * visibilityThreshold)) {
        setIsVisible(false);
        clearTimeout(timeoutRef.current); 
      } else {
        setIsVisible(true);
        clearTimeout(timeoutRef.current); // Clear the timeout if element is not visible
      }

      if (setFadeIn) {
        if ((elementTop > (screenHeight * fadeInThreshold))) {
          setIsVisible(false);
          clearTimeout(timeoutRef.current);
        }
      }
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

  if (titleRank == 1) {
    return (
      <div ref={elementRef} className={`fade-in-on-scroll detail-header-text ${isVisible ? 'visible' : 'detail-header-text'}`}>
        {children}
      </div>
    );
  } else if (titleRank == 2) {
    return (
      <div ref={elementRef} className={`fade-in-on-scroll detail-header-text ${isVisible ? 'visible' : 'detail-header-text'}`}>
        {children}
      </div>
    );
  } else if (titleRank == 3) {
    return (
      <div ref={elementRef} className={`fade-in-on-scroll detail-how-sub-header ${isVisible ? 'visible' : 'detail-how-sub-header'}`}>
        {children}
      </div>
    );
  } else if (titleRank == 4) {
    return (
      <div ref={elementRef} className={`fade-in-on-scroll detail-how-sub-section-header ${isVisible ? 'visible' : 'detail-how-sub-section-header'}`}>
        {children}
      </div>
    );
  } else if (titleRank == 5) {
    return (
      <div ref={elementRef} className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    );
  } else if (titleRank == 6) {
      return (
        <div ref={elementRef} className={`fade-in-on-scroll conclusion-header ${isVisible ? 'visible' : 'conclusion-header'}`}>
          {children}
        </div>
      );
  } else {
    return (
      <div ref={elementRef} className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    );
  }
};

export default FadeInOnScrollDefault;
