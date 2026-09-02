"use client";

import { motion } from "framer-motion";
import {
  Network,
  Server,
  Activity,
  ShieldCheck,
  Wrench,
  Boxes,
} from "lucide-react";

const services = [
  {
    title: "Network Infrastructure",
    description:
      "Design, configuration and maintenance of reliable LAN, WAN, VLAN and network infrastructure.",
    icon: Network,
  },
  {
    title: "Server Management",
    description:
      "Server setup, configuration, monitoring and basic administration to keep systems stable and reliable.",
    icon: Server,
  },
  {
    title: "Network Monitoring",
    description:
      "Continuous network monitoring, performance analysis and incident detection for better network availability.",
    icon: Activity,
  },
  {
    title: "Network Security",
    description:
      "Basic firewall, access control and security practices to help maintain a secure network environment.",
    icon: ShieldCheck,
  },
  {
    title: "Troubleshooting",
    description:
      "Diagnosing and resolving network, connectivity, hardware and system-related technical issues.",
    icon: Wrench,
  },
  {
    title: "Virtualization",
    description:
      "Virtual machine and virtualization solutions for efficient server and network infrastructure management.",
    icon: Boxes,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gray-50 px-6 py-20 md:px-12 lg:px-20"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#6875F5]/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#6875F5]/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
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
            ease: "easeOut",
          }}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-[#6875F5]">
            What I Do
          </p>

          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            My Services
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Professional network and infrastructure solutions focused on
            reliability, performance, security and efficient system
            management.
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

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
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
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
              >
                {/* Top Accent Line */}

                <motion.div
                  className="absolute left-0 top-0 h-1 w-full origin-left bg-[#6875F5]"
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                />

                {/* Background Glow */}

                <motion.div
                  className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#6875F5]/5 blur-2xl"
                  whileHover={{
                    scale: 2,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

                {/* =================================================
                    ICON
                ================================================== */}

                <motion.div
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#6875F5]/10 text-[#6875F5]"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "#6875F5",
                    color: "#ffffff",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Icon size={25} strokeWidth={1.8} />

                  {/* Icon Ring */}

                  <motion.div
                    className="absolute inset-0 rounded-xl border border-[#6875F5]/30"
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    whileHover={{
                      scale: 1.25,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />
                </motion.div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3 className="relative mt-6 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#6875F5]">
                  {service.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p className="relative mt-3 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                {/* Bottom Indicator */}

                <div className="mt-6 flex items-center gap-2">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-[#6875F5]"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400 transition-colors duration-300 group-hover:text-[#6875F5]">
                    Network Engineering
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          className="mt-14 flex justify-center"
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
          }}
        >
          <div className="flex items-center gap-3 rounded-full border border-[#6875F5]/10 bg-white px-5 py-3 shadow-sm">
            <motion.div
              className="h-2 w-2 rounded-full bg-[#6875F5]"
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
              Focused on reliable & scalable network solutions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}