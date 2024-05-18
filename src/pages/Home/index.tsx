import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/organisms/hero";
import About from "@/components/Home/organisms/about";
import Projects from "@/components/Home/organisms/projects";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
};

export default HomePage;
