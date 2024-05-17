import Section from "@/components/atoms/section";
import React, { useRef, useEffect } from "react";
import aboutImage from "@/assets/images/me.JPEG";
import Header from "@/components/Home/atoms/heading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const aboutRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    // underline effect on scroll in about section word by word
    if (!aboutRef.current) return;

    const aboutTextEl = aboutRef.current.children[0];

    const aboutText = aboutTextEl.textContent;

    if (!aboutTextEl) return;

    const words = aboutText?.split(" ");
    if (!words) return;

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.opacity = "0";
      aboutRef?.current?.appendChild(span);

      ScrollTrigger.create({
        trigger: span,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => {
          gsap.to(span, { opacity: 1, duration: 1 });
        },
        once: true,
      });
    });

    aboutTextEl.remove();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [aboutRef]);

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
