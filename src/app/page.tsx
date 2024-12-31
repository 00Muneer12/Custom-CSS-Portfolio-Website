'use client';

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "@/components/Hero";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, []);

  return (
  <div>
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
    </div>
  );
}
