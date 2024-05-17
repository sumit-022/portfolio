import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Heading = ({ heading }: { heading: string }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!headingRef.current) return;

    ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <h1
      className="italic font-poetsen font-bold text-center text-3xl mb-24 mt-20 opacity-0"
      ref={headingRef}
    >
      {heading}
    </h1>
  );
};

export default Heading;
