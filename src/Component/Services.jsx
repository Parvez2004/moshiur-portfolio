"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Router,
  Activity,
  Radio,
  Cpu,
  Wrench,
  Server,
  Palette,
  PenTool,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    title: "Network Solutions",
    description:
      "Reliable network setup, configuration and management solutions for stable and efficient connectivity.",
    icon: Network,
    category: "Network Engineering",
  },
  {
    title: "MikroTik & Routing",
    description:
      "MikroTik router configuration, routing, bandwidth management, firewall and network connectivity solutions.",
    icon: Router,
    category: "Routing & MikroTik",
  },
  {
    title: "Network Monitoring & Management",
    description:
      "Network performance monitoring, device management, uptime observation and troubleshooting for smooth operations.",
    icon: Activity,
    category: "Network Monitoring",
  },
  {
    title: "OLT/ONU Management",
    description:
      "OLT and ONU configuration, monitoring, management and troubleshooting for reliable fiber network connectivity.",
    icon: Radio,
    category: "Fiber Network",
  },
  {
    title: "Hardware Solutions",
    description:
      "Computer hardware installation, maintenance, upgrades and technical support for reliable system performance.",
    icon: Cpu,
    category: "Hardware Support",
  },
  {
    title: "Hardware & Network Troubleshooting",
    description:
      "Diagnosing and resolving hardware, network, connectivity and system-related technical problems.",
    icon: Wrench,
    category: "Technical Support",
  },
  {
    title: "Data Center & IT Support",
    description:
      "Technical support for data center operations, networking equipment, systems and day-to-day IT infrastructure.",
    icon: Server,
    category: "IT Infrastructure",
  },
  {
    title: "Graphic Design",
    description:
      "Creative and professional graphic design solutions for digital media, social platforms and business needs.",
    icon: Palette,
    category: "Creative Design",
  },
  {
    title: "Branding & Creative Design",
    description:
      "Modern branding and creative visual solutions including brand identity, promotional materials and digital designs.",
    icon: PenTool,
    category: "Branding",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gray-50 px-6 py-20 md:px-12 lg:px-20"
    >
      {/* Background Decoration */}
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
        {/* Heading */}
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
            What I Do
          </p>

          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            My Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            Providing professional network, hardware, IT support and creative
            design solutions focused on reliability, performance and quality.
          </p>

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

        {/* Services */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  layout
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Top Line */}
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

                  {/* Glow */}
                  <motion.div
                    className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#6875F5]/5 blur-2xl"
                    whileHover={{
                      scale: 2,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />

                  {/* Icon */}
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
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative mt-6 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#6875F5]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>

                  {/* Category */}
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
                      {service.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        <motion.div
          layout
          className="mt-10 flex justify-center"
        >
          <motion.button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group flex items-center gap-2 rounded-full bg-[#6875F5] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6875F5]/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(104,117,245,0.30)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <span>{showAll ? "SEE LESS" : "SEE MORE"}</span>

            <motion.span
              animate={{
                y: showAll ? [0, -3, 0] : [0, 3, 0],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
              }}
            >
              {showAll ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-10 flex justify-center"
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
              Network • Hardware • IT Support • Creative Design
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}