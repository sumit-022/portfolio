import React, { Suspense, useEffect, useRef } from "react";
import { Button, Social } from "@/components/atoms";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import GalaxyScene from "@/components/three/scenes/galaxy";

//Icons
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Hero = () => {
  const listRef = useRef<HTMLParagraphElement>(null);
  const fields = [
    "Frontend Frameworks",
    "Backend Architectures",
    "Content Management Systems",
    "Responsive Design",
    "API Designs",
    "Cloud Computing",
    "Database Management",
    "UI/UX Design",
  ];

  const socials = [
    {
      icon: <FaLinkedinIn />,
      to: "https://www.linkedin.com/in/sumit9687/",
    },
    {
      icon: <FaGithub />,
      to: "https://github.com/sumit-022",
    },
    {
      icon: <FaInstagram />,
      to: "https://www.instagram.com/ig.sumitraj",
    },
    {
      icon: <SiFiverr />,
      to: "https://www.fiverr.com/sumitraj783",
    },
  ];

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let counter = 0;
    const listLength = fields.length;

    const changeText = () => {
      gsap.to(list, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          list.textContent = fields[counter];
          gsap.to(list, { opacity: 1, duration: 0.5 });
        },
      });

      counter = counter === listLength - 1 ? 0 : counter + 1;
    };

    const interval = setInterval(changeText, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="grid h-[calc(100vh-88px)] grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl font-bold">Hi, I'm Sumit Raj 👋</h1>
        <p className="text-lg">I'm a passionate software developer who loves</p>
        <p className="text-lg">
          <span ref={listRef} className="font-bold">
            Frontend Frameworks
          </span>
        </p>
        <div className="flex gap-4 mt-4">
          <Button shape="pill">View Projects</Button>
          <Button shape="pill" variant="secondary">
            Contact Me
          </Button>
        </div>
        <div className="flex space-x-4 mt-4">
          {socials.map((social, index) => (
            <Social key={index} to={social.to}>
              {social.icon}
            </Social>
          ))}
        </div>
      </div>
      <Suspense fallback={null}>
        <Canvas resize={{ polyfill: ResizeObserver }}>
          <GalaxyScene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero;
