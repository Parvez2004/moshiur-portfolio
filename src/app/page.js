"use client";

import { motion } from "framer-motion";

import About from "@/Component/About";
import Certification from "@/Component/Certification";
import Gallery from "@/Component/Gallery";
import Hero from "@/Component/Hero";
import Resume from "@/Component/Resume";
import Services from "@/Component/Services";
import Sidebar from "@/Component/Sidebar";
import Video from "@/Component/Video";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Section({ children }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -80px 0px",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="min-h-screen lg:ml-[250px]">
        {/* Hero */}
        <section>
          <Hero />
        </section>

        {/* About */}
        <Section>
          <About />
        </Section>

        {/* Services */}
        <Section>
          <Services />
        </Section>

        {/* Resume */}
        <Section>
          <Resume />
        </Section>

        {/* Gallery */}
        <Section>
          <Gallery />
        </Section>

        {/* Video */}
        <Section>
          <Video />
        </Section>

        {/* Certification */}
        <Section>
          <Certification />
        </Section>
      </div>
    </main>
  );
}