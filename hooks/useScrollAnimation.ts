"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type AnimationType =
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "stagger"
  | "parallax";

interface ScrollAnimationOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
}

/**
 * Custom hook for scroll-triggered animations using GSAP
 *
 * @param type - Animation type to apply
 * @param options - Animation options (delay, duration, stagger, threshold)
 * @returns Ref to attach to the element to animate
 */
export const useScrollAnimation = <T extends HTMLElement>(
  type: AnimationType = "fadeInUp",
  options: ScrollAnimationOptions = {}
) => {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.1,
    threshold = 0.1,
  } = options;

  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current as T;
    if (!element) return;

    // Clean up previous animations
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === element) {
        trigger.kill();
      }
    });

    let animation: gsap.core.Tween | gsap.core.Timeline;

    switch (type) {
      case "fadeInUp":
        gsap.set(element, { opacity: 0, y: 60 });
        animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        });
        break;

      case "fadeInDown":
        gsap.set(element, { opacity: 0, y: -60 });
        animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        });
        break;

      case "fadeInLeft":
        gsap.set(element, { opacity: 0, x: -60 });
        animation = gsap.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        });
        break;

      case "fadeInRight":
        gsap.set(element, { opacity: 0, x: 60 });
        animation = gsap.to(element, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        });
        break;

      case "scaleIn":
        gsap.set(element, { opacity: 0, scale: 0.9 });
        animation = gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        });
        break;

      case "stagger":
        const children = element.children;
        gsap.set(children, { opacity: 0, y: 40 });
        animation = gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none reverse",
          },
        });
        break;

      case "parallax":
        animation = gsap.to(element, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        break;
    }

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.refresh();
    };
  }, [type, delay, duration, stagger, threshold]);

  return elementRef;
};

/**
 * Hook for parallax background effect
 */
export const useParallax = <T extends HTMLElement>(yPercent: number = 30) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current as T;
    if (!element) return;

    const animation = gsap.to(element, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, [yPercent]);

  return elementRef;
};

/**
 * Hook for counter animation (numbers counting up)
 */
export const useCounterAnimation = (
  endValue: number,
  duration: number = 2,
  startValue: number = 0
) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animate = () => {
      gsap.to(
        { value: startValue },
        {
          value: endValue,
          duration,
          ease: "power2.out",
          onUpdate: function () {
            const value = Math.round(this.targets()[0].value);
            element.textContent = value.toLocaleString();
          },
        }
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        if (!isInView.current) {
          isInView.current = true;
          animate();
        }
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [endValue, duration, startValue]);

  return elementRef;
};

/**
 * Hook for text reveal animation (words/chars appearing one by one)
 */
export const useTextReveal = <T extends HTMLDivElement>(delay: number = 0) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const text = element.textContent || "";
    element.textContent = "";

    // Create span for each word
    const words = text.split(" ");
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      element.appendChild(span);
    });

    gsap.to(element.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.05,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, [delay]);

  return elementRef;
};

export default useScrollAnimation;
