"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  BriefcaseBusiness,
  FileText,
  Layers3,
  Video,
  Award,
  Menu,
  X,
  Moon,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

/* =====================================================
   MENU ITEMS
===================================================== */

const menuItems = [
  {
    name: "Home",
    id: "home",
    icon: Home,
  },
  {
    name: "About",
    id: "about",
    icon: User,
  },
  {
    name: "Services",
    id: "services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Resume",
    id: "resume",
    icon: FileText,
  },
  {
    name: "Gallery",
    id: "gallery",
    icon: Layers3,
  },
  {
    name: "Video",
    id: "video",
    icon: Video,
  },
  {
    name: "Certification",
    id: "certification",
    icon: Award,
  },
];

/* =====================================================
   SIDEBAR ANIMATION
===================================================== */

const sidebarVariants = {
  hidden: {
    x: -40,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   PROFILE IMAGE ANIMATION
===================================================== */

const profileVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   NAME ANIMATION
===================================================== */

const nameVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      delay: 0.35,
      ease: "easeOut",
    },
  },
};

/* =====================================================
   NAVIGATION ANIMATION
===================================================== */

const navContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.45,
      staggerChildren: 0.07,
    },
  },
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* =====================================================
   SIDEBAR COMPONENT
===================================================== */

export default function Sidebar() {
  /*
    Website load হলে Home active থাকবে
  */
  const [activeSection, setActiveSection] = useState("home");

  const [mobileOpen, setMobileOpen] = useState(false);

  /*
    Navigation button click করার সময়
    auto scroll detection temporarily বন্ধ থাকবে
  */
  const [isNavigating, setIsNavigating] = useState(false);

  /* =====================================================
     ACTIVE SECTION DETECTION
  ===================================================== */

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      /*
        Button click করে smooth scroll চললে
        automatic active section change করব না
      */
      if (isNavigating) {
        ticking = false;
        return;
      }

      /*
        Website একদম উপরে থাকলে
        Home forcefully active থাকবে
      */
      if (window.scrollY < 80) {
        setActiveSection("home");
        ticking = false;
        return;
      }

      /*
        Viewport-এর top থেকে 180px নিচে
        section detection point
      */
      const triggerPoint = 180;

      let currentSection = "home";

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
          Section trigger point cross করলে
          সেটাকে active ধরব
        */
        if (rect.top <= triggerPoint) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      /*
        requestAnimationFrame ব্যবহার করায়
        scroll অনেক smooth থাকবে
      */
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(updateActiveSection);
    };

    /*
      Initial Load
    */
    if (window.scrollY < 80) {
      setActiveSection("home");
    } else {
      updateActiveSection();
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isNavigating]);

  /* =====================================================
     NAVIGATION HANDLER
  ===================================================== */

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    /*
      Click করার সঙ্গে সঙ্গে clicked item active
    */
    setActiveSection(id);

    /*
      Auto section detection বন্ধ
    */
    setIsNavigating(true);

    /*
      Mobile drawer বন্ধ
    */
    setMobileOpen(false);

    /*
      Smooth Scroll
    */
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*
      Smooth scrolling complete হওয়ার পরে
      automatic detection আবার চালু হবে
    */
    window.setTimeout(() => {
      setIsNavigating(false);
    }, 900);
  };

  return (
    <>
      {/* =================================================
          DESKTOP SIDEBAR
      ================================================= */}

      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className="
          fixed
          left-0
          top-0
          z-50
          hidden
          h-screen
          w-[250px]
          overflow-hidden
          border-r
          border-gray-200
          bg-white
          shadow-[4px_0_25px_rgba(0,0,0,0.04)]
          lg:block
        "
      >
        {/* =================================================
            PROFILE HEADER
        ================================================= */}

        <div className="relative h-[265px] overflow-hidden">
          {/* Blue Gradient */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              absolute
              inset-x-0
              top-0
              h-[190px]
              overflow-hidden
              bg-gradient-to-br
              from-[#6875F5]
              via-[#6473f4]
              to-[#5663df]
            "
          >
            {/* Circle */}

            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-white/10
              "
            />

            {/* Second Circle */}

            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
              }}
              className="
                absolute
                -left-20
                top-20
                h-32
                w-32
                rounded-full
                bg-white/5
              "
            />
          </motion.div>

          {/* =================================================
              SVG WAVE
          ================================================= */}

          <div className="absolute bottom-[38px] left-0 z-[1] w-full">
            <svg
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
              className="block h-[90px] w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="
                  M0 48
                  C70 78 135 88 205 62
                  C285 32 345 20 425 48
                  C460 60 480 65 500 58
                  L500 100
                  L0 100
                  Z
                "
                fill="white"
              />
            </svg>
          </div>

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            className="
              absolute
              left-1/2
              top-[38px]
              z-10
              -translate-x-1/2
            "
          >
            <div className="relative">
              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -inset-2
                  rounded-full
                  bg-white
                  blur-md
                "
              />

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                className="
                  relative
                  h-[110px]
                  w-[110px]
                  overflow-hidden
                  rounded-full
                  border-[5px]
                  border-white
                  bg-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                "
              >
                <img
                  src="/images/profile1.jpeg"
                  alt="Mohammad Moshiur Rahman"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              NAME + TITLE
          ================================================= */}

          <motion.div
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            className="
              absolute
              bottom-[10px]
              left-0
              z-10
              w-full
              text-center
            "
          >
            <h2 className="text-[17px] font-bold tracking-[-0.2px] text-gray-700">
              Mohammad Moshiur Rahman
            </h2>

            <p className="mt-1 text-[11px] font-medium uppercase tracking-[2px] text-gray-400">
              Network Engineer
            </p>
          </motion.div>
        </div>

        {/* Divider */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="
            mx-6
            origin-left
            border-t
            border-gray-100
          "
        />

        {/* Navigation */}

        <Navigation
          activeSection={activeSection}
          onNavigate={handleNavigation}
        />

        {/* Theme */}

        <motion.button
          type="button"
          whileHover={{
            scale: 1.1,
            rotate: 15,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            absolute
            bottom-6
            left-6
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#202020]
            text-white
            shadow-lg
          "
          aria-label="Theme"
        >
          <Moon size={17} />
        </motion.button>
      </motion.aside>

      {/* =================================================
          MOBILE HEADER
      ================================================= */}

      <motion.header
        initial={{
          y: -70,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          flex
          h-[65px]
          items-center
          justify-between
          border-b
          border-gray-200
          bg-white/95
          px-5
          shadow-sm
          backdrop-blur-md
          lg:hidden
        "
      >
        {/* Profile */}

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#6875F5]">
            <img
              src="/images/profile1.jpeg"
              alt="Mohammad Moshiur Rahman"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700">
              Mohammad Moshiur Rahman
            </p>

            <p className="text-[10px] uppercase tracking-wider text-gray-400">
              Network Engineer
            </p>
          </div>
        </div>

        {/* Menu */}

        <motion.button
          type="button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-xl
            border
            border-gray-200
            text-gray-700
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
              >
                <X size={23} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                }}
              >
                <Menu size={23} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* =================================================
          MOBILE DRAWER
      ================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            />

            {/* Drawer */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="
                absolute
                right-0
                top-0
                h-full
                w-[290px]
                overflow-y-auto
                bg-white
                pt-[80px]
                shadow-2xl
              "
            >
              {/* Mobile Profile */}

              <div className="mb-5 flex flex-col items-center border-b border-gray-100 pb-6">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#6875F5] p-1 shadow-md">
                  <img
                    src="/images/profile1.jpeg"
                    alt="Mohammad Moshiur Rahman"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <h3 className="mt-3 text-base font-bold text-gray-700">
                  Mohammad Moshiur Rahman
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-widest text-gray-400">
                  Network Engineer
                </p>
              </div>

              <Navigation
                activeSection={activeSection}
                onNavigate={handleNavigation}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =====================================================
   NAVIGATION COMPONENT
===================================================== */

function Navigation({ activeSection, onNavigate }) {
  return (
    <motion.nav
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="px-3 py-5"
    >
      <motion.p
        initial={{
          opacity: 0,
          x: -8,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        className="
          mb-3
          px-4
          text-[10px]
          font-bold
          uppercase
          tracking-[2px]
          text-gray-400
        "
      >
        Navigation
      </motion.p>

      <ul className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = activeSection === item.id;

          return (
            <motion.li key={item.id} variants={navItemVariants}>
              <motion.button
                type="button"
                onClick={() => onNavigate(item.id)}
                whileHover={{
                  x: isActive ? 0 : 3,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 30,
                }}
                className={`
                  group
                  relative
                  flex
                  h-[50px]
                  w-full
                  cursor-pointer
                  select-none
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  text-left
                  text-[14px]
                  font-medium
                  transition-colors
                  duration-200
                  ${
                    isActive
                      ? "text-[#6875F5]"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                {/* Active Background */}

                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                      mass: 0.7,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-[#6875F5]/[0.07]
                    "
                  />
                )}

                {/* Active Left Line */}

                {isActive && (
                  <motion.span
                    layoutId="activeLine"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-6
                      w-[3px]
                      -translate-y-1/2
                      rounded-r-full
                      bg-[#6875F5]
                    "
                  />
                )}

                {/* Icon */}

                <motion.span
                  animate={{
                    backgroundColor: isActive
                      ? "#6875F5"
                      : "#f9fafb",

                    color: isActive
                      ? "#ffffff"
                      : "#6b7280",

                    scale: isActive ? 1.05 : 0.96,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </motion.span>

                {/* Text */}

                <motion.span
                  animate={{
                    x: isActive ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="
                    relative
                    z-10
                    tracking-[0.1px]
                  "
                >
                  {item.name}
                </motion.span>

                {/* Active Dot */}

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                      className="
                        relative
                        z-10
                        ml-auto
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#6875F5]
                      "
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.li>
          );
        })}
      </ul>
    </motion.nav>
  );
}