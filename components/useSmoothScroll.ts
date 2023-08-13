import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e : any) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('.smooth-scroll');
    links.forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);
};

export default useSmoothScroll;
