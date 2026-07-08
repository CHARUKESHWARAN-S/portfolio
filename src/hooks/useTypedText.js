import { useEffect, useState } from 'react';

/**
 * Cycles through an array of phrases, typing and deleting each one
 * character-by-character to create the hero "typing" effect.
 */
export function useTypedText(phrases, { typingSpeed = 55, deletingSpeed = 30, pause = 1600 } = {}) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => prev + 1);
    } else {
      const next = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return text;
}
