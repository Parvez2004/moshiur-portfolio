"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Eye, X } from "lucide-react";

const certifications = [
  {
    title: "26th Rover Mate Course",
    description: "Certificate from Bangladesh Scouts.",
    image: "/certificates/26th ROVER MATE COURSE - BANGLADESH SCOUTS.jpg",
  },
  {
    title: "Bangladesh Scouts - Achievement",
    description: "Achievement certificate from Bangladesh Scouts.",
    image: "/certificates/BANGLADESH SCOUTS - ACHIEVEMENT.jpg",
  },
  {
    title: "Bangladesh Scouts - Achievement",
    description: "Achievement certificate from Bangladesh Scouts.",
    image: "/certificates/BANGLADESH SCOUTS - ACHIEVEMENT(1).jpg",
  },
  {
    title: "Bangladesh Scouts - Achievement",
    description: "Achievement certificate from Bangladesh Scouts.",
    image: "/certificates/BANGLADESH SCOUTS - ACHIEVEMENT(2).jpg",
  },
  {
    title: "Bangladesh Scouts - Achievement",
    description: "Achievement certificate from Bangladesh Scouts.",
    image: "/certificates/BANGLADESH SCOUTS - ACHIEVEMENT(3).jpg",
  },
  {
    title: "Bangladesh Scouts Camp Certificate 2015",
    description: "Camp participation certificate from Bangladesh Scouts.",
    image: "/certificates/BANGLADESH SCOUTS - CAMP CERTIFICATE 2015.jpg",
  },
  {
    title: "Bangladesh Scouts Camp Certificate 2016",
    description: "Camp participation certificate from Bangladesh Scouts.",
    image: "/certificates/BANGLADESH SCOUTS - CAMP CERTIFICATE 2016.jpg",
  },
  {
    title: "BBDS District Co-Ordinator",
    description: "District Co-Ordinator certificate for 2023-2024.",
    image: "/certificates/BBDS DISTRICT CO-ORDINATOR 2023-2024.jpg",
  },
  {
    title: "BPI Scout Completion Certificate",
    description: "Scout completion certificate from Barishal Polytechnic Institute.",
    image: "/certificates/BPI SCOUT COMPLETATION CERTIFICATE.jpg",
  },
  {
    title: "Communication Secrets",
    description: "Communication skills course certificate from 10 Minute School.",
    image: "/certificates/COMMUNICATION SECRETS - 10 MINUTES SCHOOL.jpg",
  },
  {
    title: "Community Service 2022",
    description: "Community service participation certificate.",
    image: "/certificates/COMMUNITY SERVICE - 2022.jpg",
  },
  {
    title: "Computer Operation Level III",
    description: "Computer Operation Level III certification under BTEB.",
    image: "/certificates/COMPUTER OPERATION LEVEL - III (BTEB).jpg",
  },
  {
    title: "Diploma Appeared Certificate",
    description: "Diploma appeared certificate from Barishal Polytechnic Institute.",
    image: "/certificates/DIPLOMA APPEARED CERTIFICATE - BPI.jpg",
  },
  {
    title: "EIM Level I",
    description: "EIM Level I certification under BTEB.",
    image: "/certificates/EIM LEVEL - I (BTEB).jpg",
  },
  {
    title: "English Speaking",
    description: "English Speaking course certificate from 10 Minute School.",
    image: "/certificates/ENGLISH SPEAKING - 10 MINUTES SCHOOL.jpg",
  },
  {
    title: "FET Test",
    description: "English proficiency related certificate from British Council.",
    image: "/certificates/FET TEST - BRITISH COUNCIL.jpg",
  },
  {
    title: "Freelancing in Data Entry",
    description: "Data Entry freelancing course certificate from 10 Minute School.",
    image: "/certificates/FREELANCING IN DATA ENTRY - 10 MINUTES SCHOOL.jpg",
  },
  {
    title: "Graphics Design",
    description: "Graphic Design training certificate from ICT Division.",
    image: "/certificates/GRAPHICS DESIGN - ICT DIVISION.jpg",
  },
  {
    title: "Graphics Design Level II",
    description: "Graphics Design Level II certification under BTEB.",
    image: "/certificates/GRAPHICS DESIGN LEVEL - II (BTEB).jpg",
  },
  {
    title: "IT Support Level I",
    description: "IT Support Level I certification under BTEB.",
    image: "/certificates/IT SUPPORT LEVEL - I (BTEB).jpg",
  },
  {
    title: "Junior School Certificate",
    description: "Junior School Certificate (JSC).",
    image: "/certificates/JUNIOR SCHOOL CERTIFICATE (JSC).jpg",
  },
  {
    title: "Data Center Internship",
    description: "Data Center internship certificate from One Sky Communication.",
    image: "/certificates/ONE SKY COMMUNICATION DATA CENTER INTERNSHIP.jpg",
  },
  {
    title: "Presentation & Public Speaking",
    description: "Presentation and Public Speaking course from 10 Minute School.",
    image: "/certificates/PRESENTATION & PUBLIC SPEAKING - 10 MINUTES SCHOOL.jpg",
  },
  {
    title: "Secondary School Certificate",
    description: "Secondary School Certificate (SSC).",
    image: "/certificates/SECONDARY SCHOOL CERTIFICATE (SSC).jpg",
  },
  {
    title: "Skill Development Course",
    description: "Skill Development Course certificate from Bangladesh Scouts.",
    image: "/certificates/SKILL DEVELOPMENT COURSE - BANGLADESH SCOUTS.jpg",
  },
  {
    title: "Student Hacks",
    description: "Student Hacks course certificate from 10 Minute School.",
    image: "/certificates/STUDENT HACKS - 10 MINUTES SCHOOL.jpg",
  },
  {
    title: "World Literature Award 2017",
    description: "World Literature Award received in 2017.",
    image: "/certificates/WORLD LITERATURE AWARD - 2017.jpg",
  },
];

export default function Certification() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden";
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="certification"
        className="relative overflow-hidden bg-gray-50 px-5 py-20 sm:px-8 lg:px-12"
      >
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#6875F5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            {/* Small Label */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#6875F5]" />

              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#6875F5]">
                Achievements
              </span>

              <span className="h-[2px] w-10 bg-[#6875F5]" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              My{" "}
              <span className="text-[#6875F5]">
                Certifications
              </span>
            </h2>

            {/* Short Description */}
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              A collection of certifications that reflect my networking and
              technical skills.
            </p>
          </motion.div>

          {/* ================= CERTIFICATES ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                {/* Certificate Image */}
                <div
                  onClick={() => openCertificate(certificate)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-gray-100"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/45" />

                  {/* Eye Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.65,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6875F5] shadow-xl opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                    >
                      <Eye
                        size={25}
                        strokeWidth={2.2}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6875F5]/10 text-[#6875F5]">
                      <Award size={20} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-gray-800">
                        {certificate.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-gray-500">
                        {certificate.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6875F5]/15 bg-white px-5 py-2.5 text-xs font-medium text-gray-500 shadow-sm">
              <Award
                size={15}
                className="text-[#6875F5]"
              />

              <span>
                Click any certificate to view in full size
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
            className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          >
            {/* Close Button */}
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              onClick={closeCertificate}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-gray-700 shadow-xl transition-all duration-300 hover:bg-[#6875F5] hover:text-white sm:right-7 sm:top-7"
              aria-label="Close certificate"
            >
              <X size={23} />
            </motion.button>

            {/* Large Certificate */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[95vw] cursor-default rounded-2xl bg-white p-2 shadow-2xl sm:max-w-[90vw]"
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[85vh] max-w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}