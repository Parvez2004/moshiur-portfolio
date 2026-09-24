"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  CalendarDays,
  MapPin,
  GraduationCap,
  BookOpen,
  Globe,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function About() {
  const infoItems = [
    {
      icon: CalendarDays,
      label: "Birthday",
      value: "24 March 2004",
    },
    {
      icon: MapPin,
      label: "City",
      value: "Dhaka, Bangladesh",
    },
    {
      icon: GraduationCap,
      label: "Study",
      value: "Uttara University",
    },
    {
      icon: BookOpen,
      label: "Degree",
      value: "Bachelor Of Science",
    },
    {
      icon: Globe,
      label: "Website",
      value: "moshiurrahman.info",
      href: "https://moshiurrahman.info",
    },
    {
      icon: Mail,
      label: "Email",
      value: "mrmoshiur.info@gmail.com",
      href: "mailto:mrmoshiur.info@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801315-462223",
      href: "tel:+8801315462223",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+8801315-462223",
      href: "https://wa.me/8801315462223",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      {/* Background Decoration */}
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
        {/* Section Heading */}
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
            Hello, I&apos;m Mohammad Moshiur Rahman
          </h2>

          <motion.div
            className="mx-auto mt-4 h-1 rounded-full bg-[#6875F5]"
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 65,
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

        {/* Main Content */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Image */}
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
              {/* Decorative Background */}
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

              {/* Profile Image */}
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
                <Image
                  src="/images/profile1.jpeg"
                  alt="Mohammad Moshiur Rahman"
                  width={330}
                  height={430}
                  sizes="(max-width: 1024px) 330px, 28vw"
                  className="h-[430px] w-[330px] object-cover"
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#6875F5]/30 via-transparent to-transparent"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </motion.div>

              {/* Floating Profession Card */}
              <motion.div
                className="absolute -bottom-8 -left-6 z-20 hidden max-w-[250px] rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:block"
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
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Profession
                </p>

                <p className="mt-1 text-sm font-bold leading-5 text-gray-800">
                  Network & Hardware Engineer
                </p>

                <p className="mt-1 text-xs font-semibold text-[#6875F5]">
                  Graphic Designer
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Small Label */}
            <motion.div
              className="mb-3 flex items-center gap-2"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <span className="h-px w-8 bg-[#6875F5]" />

              <span className="text-xs font-semibold uppercase tracking-[2px] text-[#6875F5]">
                Who I Am
              </span>
            </motion.div>

            {/* Heading */}
            <h3 className="text-2xl font-bold leading-tight text-gray-800 md:text-3xl">
              Network & Hardware Engineer{" "}
              <span className="text-[#6875F5]">
                & Graphic Designer
              </span>
            </h3>

            {/* About Description */}
            <div className="mt-5 space-y-4">
              <p className="leading-8 text-gray-600">
                I&apos;m a passionate Network & Hardware Engineer and Graphic
                Designer with a strong interest in technology, IT
                infrastructure, and creative design. I enjoy exploring new
                technologies and finding practical solutions to technical
                challenges.
              </p>

              <p className="leading-8 text-gray-600">
                My expertise includes network configuration and
                troubleshooting, computer hardware maintenance, system support,
                and graphic design. I enjoy working on both technical and
                creative projects, where I can use my problem-solving skills
                and creativity to deliver effective results.
              </p>

              <p className="leading-8 text-gray-600">
                I believe that continuous learning is the key to growth.
                I&apos;m always eager to improve my skills, learn new
                technologies, and take on new challenges. My goal is to build a
                successful career in the technology sector by combining my
                technical knowledge, practical experience, and creativity.
              </p>
            </div>

            {/* Personal Information */}
            <motion.div
              className="mt-8"
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
              <h4 className="mb-5 text-lg font-bold text-gray-800">
                Personal Information
              </h4>

              <div className="grid gap-4 sm:grid-cols-2">
                {infoItems.map((item, index) => {
                  const Icon = item.icon;

                  const content = (
                    <motion.div
                      className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition-all duration-300 hover:border-[#6875F5]/20 hover:bg-white hover:shadow-lg"
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
                        delay: index * 0.07,
                        duration: 0.4,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6875F5]/10 text-[#6875F5] transition-all duration-300 group-hover:bg-[#6875F5] group-hover:text-white">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-gray-700 transition-colors group-hover:text-[#6875F5]">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.label === "Website" ||
                        item.label === "WhatsApp"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.label === "Website" ||
                        item.label === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.a
              href="/cv.pdf"
              download
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#6875F5] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6875F5]/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(104,117,245,0.30)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Download size={17} />

              <span>DOWNLOAD CV</span>

              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}