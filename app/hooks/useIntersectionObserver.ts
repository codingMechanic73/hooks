import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
}

export function useIntersectionObserver<T extends Element = Element>(
  options?: IntersectionObserverOptions
) {
  const targetRef = useRef<T | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(target);

    return () => observer.disconnect();
  }, [options]);

  return { targetRef, entry, isIntersecting };
}
