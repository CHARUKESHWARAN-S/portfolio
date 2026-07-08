import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight custom cursor: a small dot that tracks the pointer instantly,
 * and a trailing ring that eases toward it and expands on interactive elements.
 * Automatically disabled on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let glowX = 0, glowY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const handleOver = (e) => {
      setHovering(!!e.target.closest('a, button, input, textarea, [data-cursor-hover]'));
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);

    let raf;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      glowX += (mouseX - glowX) * 0.09;
      glowY += (mouseY - glowY) * 0.09;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? 'cursor-hover' : ''} ${clicking ? 'cursor-click' : ''}`}
      >
        <span className="cursor-tick cursor-tick-t" />
        <span className="cursor-tick cursor-tick-r" />
        <span className="cursor-tick cursor-tick-b" />
        <span className="cursor-tick cursor-tick-l" />
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
