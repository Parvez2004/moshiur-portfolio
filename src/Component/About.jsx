"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Network,
  Server,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function About() {
  const infoItems = [
    {
      label: "Name",
      value: "Md Moshiur Rahman",
    },
    {
      label: "Profession",
      value: "Network Engineer",
    },
    {
      label: "Specialization",
      value: "Network & NOC",
    },
    {
      label: "Location",
      value: "Bangladesh",
    },
  ];

  const skills = [
    {
      icon: Network,
      title: "Network Infrastructure",
      text: "LAN, WAN, TCP/IP, VLAN & routing fundamentals",
    },
    {
      icon: Activity,
      title: "Network Monitoring",
      text: "Monitoring network performance, uptime & incidents",
    },
    {
      icon: Server,
      title: "Server & Systems",
      text: "Basic server administration and system troubleshooting",
    },
    {
      icon: ShieldCheck,
      title: "Network Security",
      text: "Understanding firewall, access control & security practices",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#6875F5]/5 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-[#6875F5]/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          className="mb-14 text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#6875F5]">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Let&apos;s Introduce Myself
          </h2>

          <motion.div
            className="mx-auto mt-4 h-1 rounded-full bg-[#6875F5]"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          />
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================================
              IMAGE
          ================================================== */}

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="relative">

              {/* Decorative Border */}

              <motion.div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-[#6875F5]"
                initial={{
                  x: -10,
                  y: -10,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
              />

              {/* Image */}

              <motion.div
                className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <img
                  src="/images/profile1.jpeg"
                  alt="Md Moshiur Rahman"
                  className="h-[380px] w-[320px] object-cover"
                />

                {/* Image Overlay */}

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#6875F5]/25 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating Badge */}

              <motion.div
                className="absolute -bottom-7 -left-7 z-20 hidden rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:block"
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
                  delay: 0.6,
                  duration: 0.6,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6875F5]/10 text-[#6875F5]">
                    <Network size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Focus Area
                    </p>

                    <p className="text-sm font-bold text-gray-700">
                      Network & NOC
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              TEXT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            {/* Small Label */}

            <motion.div
              className="mb-3 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-px w-8 bg-[#6875F5]" />

              <span className="text-xs font-semibold uppercase tracking-[2px] text-[#6875F5]">
                Who I Am
              </span>
            </motion.div>

            {/* Heading */}

            <h3 className="text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
              Passionate About{" "}
              <span className="text-[#6875F5]">
                Network Engineering
              </span>
            </h3>

            {/* Paragraph */}

            <p className="mt-5 leading-8 text-gray-600">
              I am a passionate Network Engineer with a strong interest
              in network infrastructure, monitoring, troubleshooting and
              system reliability. I enjoy solving technical problems and
              ensuring that network services remain stable, secure and
              available.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              My goal is to build a strong career in Network and NOC
              Engineering by continuously improving my knowledge of
              routing, switching, network monitoring, server systems and
              network security.
            </p>

            {/* =================================================
                INFORMATION
            ================================================== */}

            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="group border-b border-gray-100 pb-3"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.15 * index,
                    duration: 0.5,
                  }}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#6875F5]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                DOWNLOAD CV
            ================================================== */}

            <motion.a
              href="/cv.pdf"
              download
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#6875F5] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6875F5]/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(104,117,245,0.25)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Download size={17} />

              <span>DOWNLOAD CV</span>

              <motion.span
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            CORE AREAS
        ====================================================== */}

        <motion.div
          className="mt-24"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#6875F5]">
              Core Areas
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-800">
              What I Focus On
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-6 transition-colors duration-300 hover:border-[#6875F5]/20 hover:bg-white hover:shadow-xl"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                >
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6875F5]/10 text-[#6875F5]"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    <Icon size={21} />
                  </motion.div>

                  <h4 className="mt-5 text-base font-bold text-gray-800">
                    {skill.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {skill.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}