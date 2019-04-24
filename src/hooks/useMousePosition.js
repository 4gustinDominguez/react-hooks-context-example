import { useState, useEffect } from 'react';

// Creating a custom hook to track mouse position
// https://reactjs.org/docs/hooks-custom.html
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

export { useMousePosition as default };
