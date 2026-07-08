import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view so the navbar
 * can highlight the matching link.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
