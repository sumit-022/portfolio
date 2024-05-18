import Section from "@/components/atoms/section";
import React, { useRef, useEffect } from "react";
import aboutImage from "@/assets/images/me.JPEG";
import Header from "@/components/Home/atoms/heading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const aboutRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!aboutRef.current) return;

    const aboutText = aboutRef.current.textContent || "";
    const aboutTextArray = aboutText.split(" ");
    aboutRef.current.textContent = "";

    aboutTextArray.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      aboutRef.current?.appendChild(span);

      gsap.fromTo(
        span,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <Section>
      <Header heading="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-14 items-center">
        <div>
          <p ref={aboutRef} className="text-lg">
            <span className="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit
              sint enim doloremque possimus a voluptas dolorem sequi ab velit
              similique numquam, repellendus natus, labore, laborum quos quae
              modi repellat impedit ipsa consequatur commodi in quasi maiores!
              Dolor consequatur cupiditate nam molestiae blanditiis, repudiandae
              ipsa delectus ullam id odit maxime inventore expedita optio non
              possimus tempore voluptatem dicta? Eos porro quibusdam repellat
              adipisci praesentium saepe vitae beatae rerum consequatur
              consequuntur molestiae, totam recusandae sequi hic explicabo!
              Debitis voluptas, provident error sint blanditiis ipsa tempora
              aperiam tempore ducimus ad, itaque fuga consequuntur voluptates
              expedita quos eaque repellat? Neque unde quasi inventore?
            </span>
          </p>
        </div>
        <div>
          <img
            src={aboutImage}
            alt="Sumit Raj"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
