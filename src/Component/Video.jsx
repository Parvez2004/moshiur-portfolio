"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronDown, ChevronUp } from "lucide-react";

const videos = [
  {
    id: "VIDEO_ID_1",
    title: "Network Engineering Video",
  },
  {
    id: "VIDEO_ID_2",
    title: "Network Configuration",
  },
  {
    id: "VIDEO_ID_3",
    title: "Network Troubleshooting",
  },
  {
    id: "VIDEO_ID_4",
    title: "Network Monitoring",
  },
  {
    id: "VIDEO_ID_5",
    title: "Routing & Switching",
  },
  {
    id: "VIDEO_ID_6",
    title: "Network Security",
  },
  {
    id: "VIDEO_ID_7",
    title: "Server & Network Infrastructure",
  },
  {
    id: "VIDEO_ID_8",
    title: "NOC Operations",
  },
];

export default function Video() {
  const [showMore, setShowMore] = useState(false);

  const visibleVideos = showMore
    ? videos
    : videos.slice(0, 6);

  return (
    <section
      id="video"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12"
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
              My Videos
            </span>

            <span className="h-[2px] w-10 bg-[#6875F5]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            My{" "}
            <span className="text-[#6875F5]">
              Videos
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore my technical videos, projects and
            professional work.
          </p>
        </motion.div>

        {/* ================= VIDEO GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleVideos.map((video, index) => (
            <motion.div
              key={video.id}
              layout
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.5,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              {/* Video */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

                {/* Play Decoration */}
                <div className="pointer-events-none absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Play
                    size={16}
                    fill="currentColor"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= SEE MORE BUTTON ================= */}
        {videos.length > 6 && (
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
              duration: 0.5,
              delay: 0.2,
            }}
            className="mt-10 flex justify-center"
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#6875F5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6875F5]/20 transition-all duration-300 hover:bg-[#5663df] hover:shadow-xl hover:shadow-[#6875F5]/30"
            >
              {showMore ? "See Less" : "See More"}

              {showMore ? (
                <ChevronUp
                  size={18}
                  className="transition-transform duration-300"
                />
              ) : (
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}