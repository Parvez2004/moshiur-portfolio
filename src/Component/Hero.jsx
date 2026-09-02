"use client";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const socialItems = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "#",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "#",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "#",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* =====================================================
          DECORATIVE LIGHT
      ====================================================== */}

      <motion.div
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#6875F5]/20 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#6875F5]/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating dots */}

      <motion.div
        className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-white/40"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-[#6875F5]"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[25%] h-1.5 w-1.5 rounded-full bg-white/50"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <motion.div
        className="relative z-10 flex flex-col items-center px-5 text-center text-white"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* =====================================================
            PROFILE IMAGE
        ====================================================== */}

        <motion.div
          className="relative mb-7"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.6,
              y: 30,
            },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
        >
          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#6875F5] blur-xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Image */}
          <motion.div
            className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/90 shadow-2xl md:h-36 md:w-36"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/profile1.jpeg"
              alt="Md Moshiur Rahman"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            NAME
        ====================================================== */}

        <motion.h1
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
          variants={{
            hidden: {
              opacity: 0,
              y: 35,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          Md Moshiur Rahman
        </motion.h1>

        {/* Underline */}
        <motion.div
          className="mt-4 h-1 rounded-full bg-[#6875F5]"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 70,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
            ease: "easeOut",
          }}
        />

        {/* =====================================================
            PROFESSION
        ====================================================== */}

        <motion.div
          className="mt-5 flex items-center gap-2 text-lg text-white/90 md:text-xl"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <span className="font-light">I&apos;m a</span>

          <span className="font-semibold text-[#8f9aff]">
            Network Engineer
          </span>

          <motion.span
            className="h-2 w-2 rounded-full bg-[#6875F5]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Small description */}

        <motion.p
          className="mt-4 max-w-xl text-sm leading-7 text-white/65 md:text-base"
          variants={{
            hidden: {
              opacity: 0,
              y: 15,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          Passionate about network infrastructure, system monitoring,
          troubleshooting and building reliable network solutions.
        </motion.p>

        {/* =====================================================
            SOCIAL ICONS
        ====================================================== */}

        <motion.div
          className="mt-7 flex items-center gap-4"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          {socialItems.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                delay: 1 + index * 0.12,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                y: -7,
                scale: 1.12,
                rotate: index % 2 === 0 ? 6 : -6,
                backgroundColor: "#6875F5",
                borderColor: "#6875F5",
                boxShadow: "0 12px 30px rgba(104,117,245,0.35)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              {/* Icon */}
              <motion.span
                whileHover={{
                  rotate: index % 2 === 0 ? -6 : 6,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                {social.icon}
              </motion.span>

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none absolute
                  -top-10 left-1/2
                  -translate-x-1/2 translate-y-2
                  whitespace-nowrap rounded-md
                  bg-black/80 px-2.5 py-1
                  text-[10px] font-medium
                  opacity-0 backdrop-blur-sm
                  transition-all duration-300
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* =====================================================
            BUTTONS
        ====================================================== */}

        <motion.div
          className="mt-9 flex flex-col gap-4 sm:flex-row"
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          {/* CONTACT BUTTON */}

          <motion.a
            href="#contact"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#6875F5] px-8 py-3.5 text-sm font-semibold shadow-lg shadow-[#6875F5]/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(104,117,245,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {/* Shine animation */}

            <motion.span
              className="absolute inset-y-0 -left-10 w-8 rotate-[25deg] bg-white/30 blur-sm"
              animate={{
                left: ["-20%", "120%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">CONTACT ME</span>

            <motion.span
              className="relative z-10"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>

          {/* INTRO BUTTON */}

          <motion.a
            href="#about"
            className="group flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/5 px-8 py-3.5 text-sm font-semibold backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.95)",
              color: "#111827",
              borderColor: "white",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <span>INTRO</span>

            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
      >
        <span className="text-[9px] uppercase tracking-[3px]">
          Scroll Down
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={17} />
        </motion.div>
      </motion.a>
    </section>
  );
}