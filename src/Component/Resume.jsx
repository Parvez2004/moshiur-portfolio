"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Network,
  Router,
  Server,
  ShieldCheck,
  Activity,
  Cable,
  Wifi,
} from "lucide-react";

/* ============================================================
   NETWORKING SKILLS
============================================================ */

const skills = [
  {
    name: "TCP/IP & Networking",
    percentage: 90,
  },
  {
    name: "Routing & Switching",
    percentage: 85,
  },
  {
    name: "Network Troubleshooting",
    percentage: 88,
  },
  {
    name: "Network Monitoring",
    percentage: 82,
  },
  {
    name: "LAN / WAN / VLAN",
    percentage: 86,
  },
  {
    name: "Network Security",
    percentage: 78,
  },
];

/* ============================================================
   EDUCATION
============================================================ */

const education = [
  {
    year: "2023 - Present",
    title: "Bachelor of Science in Computer Science",
    place: "University / Institution Name",
    description:
      "Currently pursuing a degree in Computer Science with a strong interest in networking, computer systems, network infrastructure and information technology.",
  },
  {
    year: "2021 - 2023",
    title: "Higher Secondary Certificate",
    place: "College Name",
    description:
      "Completed higher secondary education with a strong foundation in mathematics, computer science and technical studies.",
  },
];

/* ============================================================
   EXPERIENCE
============================================================ */

const experience = [
  {
    year: "2025 - Present",
    title: "Network Engineer",
    place: "Company / Organization",
    description:
      "Working with network infrastructure, monitoring, troubleshooting and maintaining reliable network connectivity. Focused on network performance, incident handling and system availability.",
  },
  {
    year: "2024 - 2025",
    title: "Junior Network / NOC Engineer",
    place: "Company / Organization",
    description:
      "Assisted with network monitoring, connectivity troubleshooting, system support and resolving network-related incidents while maintaining service availability.",
  },
];

/* ============================================================
   TIMELINE ITEM
============================================================ */

function TimelineItem({ item, Icon, index }) {
  return (
    <motion.div
      className="relative pl-14"
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    >
      {/* Timeline Dot */}

      <motion.div
        className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#6875F5] text-white shadow-lg shadow-[#6875F5]/20"
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <Icon size={18} />
      </motion.div>

      {/* Content Card */}

      <motion.div
        className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-6 shadow-sm transition-colors duration-300 hover:border-[#6875F5]/20 hover:bg-white"
        whileHover={{
          y: -5,
          boxShadow: "0 15px 35px rgba(0,0,0,0.07)",
        }}
      >
        {/* Year */}

        <span className="inline-flex rounded-full bg-[#6875F5]/10 px-4 py-1.5 text-xs font-semibold text-[#6875F5]">
          {item.year}
        </span>

        {/* Title */}

        <h3 className="mt-4 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#6875F5]">
          {item.title}
        </h3>

        {/* Place */}

        <p className="mt-1 text-sm font-medium text-[#6875F5]">
          {item.place}
        </p>

        {/* Description */}

        <p className="mt-3 text-sm leading-7 text-gray-500">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   RESUME
============================================================ */

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      {/* ======================================================
          BACKGROUND DECORATION
      ======================================================= */}

      <motion.div
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#6875F5]/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#6875F5]/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ====================================================
            SECTION HEADING
        ===================================================== */}

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
            My Journey
          </p>

          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Resume
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            My academic background, professional experience and technical
            expertise in network engineering and infrastructure.
          </p>

          {/* Animated Line */}

          <motion.div
            className="mx-auto mt-5 h-1 rounded-full bg-[#6875F5]"
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 64,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          />
        </motion.div>

        {/* ====================================================
            EDUCATION & EXPERIENCE
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-2">

          {/* ==================================================
              EDUCATION
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Heading */}

            <div className="mb-8 flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6875F5]/10 text-[#6875F5]"
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
              >
                <GraduationCap size={24} />
              </motion.div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Academic
                </p>

                <h3 className="text-2xl font-bold text-gray-800">
                  Education
                </h3>
              </div>
            </div>

            {/* Timeline */}

            <div className="relative space-y-6">

              {/* Vertical Line */}

              <div className="absolute bottom-5 left-5 top-5 w-px bg-[#6875F5]/20" />

              {education.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  Icon={GraduationCap}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* ==================================================
              EXPERIENCE
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Heading */}

            <div className="mb-8 flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6875F5]/10 text-[#6875F5]"
                whileHover={{
                  scale: 1.08,
                  rotate: -5,
                }}
              >
                <BriefcaseBusiness size={24} />
              </motion.div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Professional
                </p>

                <h3 className="text-2xl font-bold text-gray-800">
                  Experience
                </h3>
              </div>
            </div>

            {/* Timeline */}

            <div className="relative space-y-6">

              {/* Vertical Line */}

              <div className="absolute bottom-5 left-5 top-5 w-px bg-[#6875F5]/20" />

              {experience.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  Icon={BriefcaseBusiness}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            TECHNICAL SKILLS
        ===================================================== */}

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
          {/* Skills Heading */}

          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#6875F5]">
              Technical Expertise
            </p>

            <h3 className="text-3xl font-bold text-gray-800">
              Network Skills
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
              Core networking technologies and technical areas I am
              continuously developing.
            </p>
          </div>

          {/* ==================================================
              SKILL GRID
          =================================================== */}

          <div className="grid gap-x-10 gap-y-7 lg:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                {/* Skill Header */}

                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6875F5]" />

                    <span className="text-sm font-semibold text-gray-700">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#6875F5]">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Background */}

                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    className="relative h-full rounded-full bg-[#6875F5]"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.percentage}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {/* Progress Shine */}

                    <motion.div
                      className="absolute inset-y-0 left-0 w-16 bg-white/25 blur-sm"
                      animate={{
                        x: ["-100%", "600%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ====================================================
            NETWORK TECHNOLOGY CARDS
        ===================================================== */}

        <motion.div
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
            duration: 0.7,
          }}
        >
          {[
            {
              icon: Router,
              title: "Routing",
              text: "Routing & IP fundamentals",
            },
            {
              icon: Cable,
              title: "Switching",
              text: "LAN, VLAN & switching",
            },
            {
              icon: Wifi,
              title: "Connectivity",
              text: "Network connectivity",
            },
            {
              icon: ShieldCheck,
              title: "Security",
              text: "Network security basics",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5"
                whileHover={{
                  y: -5,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.06)",
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <motion.div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6875F5]/10 text-[#6875F5]"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <Icon size={20} />
                </motion.div>

                <div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#6875F5]">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xs text-gray-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ====================================================
            NOC STATUS
        ===================================================== */}

        <motion.div
          className="mt-14 flex justify-center"
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="flex items-center gap-3 rounded-full border border-[#6875F5]/10 bg-gray-50 px-5 py-3">
            <motion.span
              className="h-2 w-2 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <span className="text-xs font-medium text-gray-500">
              Network Infrastructure • Monitoring • Troubleshooting
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}