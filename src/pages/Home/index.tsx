import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Home/organisms/hero";
import About from "@/components/Home/organisms/about";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default HomePage;
