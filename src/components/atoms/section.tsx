import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="container mx-auto min-h-screen px-4 py-20">
      {children}
    </section>
  );
};

export default Section;
