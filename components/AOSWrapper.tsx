import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: React.ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;
