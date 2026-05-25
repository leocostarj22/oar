import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/** Attaches reveal to every child with class "reveal" inside a container */
export function useScrollRevealGroup<T extends HTMLElement>(threshold = 0.08) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(".reveal");
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            item.classList.add("in-view");
            obs.disconnect();
          }
        },
        { threshold }
      );
      obs.observe(item);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [threshold]);

  return ref;
}
