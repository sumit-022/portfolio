import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { gsap } from "gsap";

const HomePage = () => {
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
    <Layout>
      <div className="flex gap-8 h-[calc(100vh-88px)] items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">Hi, I'm Sumit Raj 👋</h1>
          <p className="text-lg">
            I'm a passionate software developer who loves
          </p>
          <p className="text-lg">
            <span ref={listRef} className="font-bold">
              Frontend Frameworks
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
