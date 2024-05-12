import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import { FaChevronRight } from "react-icons/fa6";

const variants = {
  primary: "bg-[#18181B] text-white",
  secondary: "bg-[#EDEADE] text-black",
};

const shapes = {
  curved: "rounded-md",
  pill: "rounded-full",
};

interface ButtonProps {
  variant?: keyof typeof variants;
  shape?: keyof typeof shapes;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  shape = "curved",
  children,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        duration: 0.5,
        keyframes: [
          { x: -5, y: 5 },
          { x: 5, y: -5 },
          { x: -5, y: 5 },
          { x: 5, y: -5 },
          { x: 0, y: 0 },
        ],
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <button
      className={clsx(
        variants[variant],
        shapes[shape],
        "px-4 font-medium py-2"
      )}
      ref={buttonRef}
    >
      <div className="flex items-center">
        {children}
        <FaChevronRight className="ml-2" />
      </div>
    </button>
  );
};

export default Button;
