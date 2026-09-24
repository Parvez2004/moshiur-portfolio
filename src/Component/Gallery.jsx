"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, X, ZoomIn } from "lucide-react";

/* ============================================================
   GALLERY ITEMS
   13.jpg থেকে 65.jpg পর্যন্ত
============================================================ */

const galleryItems = Array.from({ length: 53 }, (_, index) => {
  const imageNumber = index + 13;
  const extension = [54, 57, 59].includes(imageNumber) ? "JPG" : "jpg";

  return {
    image: `/images/gallery/${imageNumber}.${extension}`,
    alt: `Gallery Image ${imageNumber}`,
  };
});

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-gray-50 px-5 py-20 sm:px-8 lg:px-12"
      >
        {/* =====================================================
            BACKGROUND DECORATION
        ====================================================== */}

        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#6875F5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

        {/* =====================================================
            CONTAINER
        ====================================================== */}

        <div className="relative mx-auto w-full max-w-6xl">
          {/* ===================================================
              HEADING
          ==================================================== */}

          <motion.div
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
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            {/* Small Line */}

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#6875F5]" />

              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#6875F5]">
                Gallery
              </span>

              <span className="h-[2px] w-10 bg-[#6875F5]" />
            </div>

            {/* Main Heading */}

            <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              My{" "}
              <span className="text-[#6875F5]">
                Gallery
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              A collection of network infrastructure, hardware, technical
              work and creative design projects.
            </p>
          </motion.div>

          {/* ===================================================
              GALLERY GRID
          ==================================================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.image}
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
                  delay: (index % 6) * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                onClick={() => openImage(item)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}

                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Hover Overlay */}

                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/45" />

                {/* Center Eye */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.65,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#6875F5] shadow-xl opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <Eye
                      size={25}
                      strokeWidth={2.2}
                    />
                  </motion.div>
                </div>

                {/* Top Right Zoom */}

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#6875F5] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn size={17} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===================================================
              BOTTOM TEXT
          ==================================================== */}

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
              <Eye
                size={15}
                className="text-[#6875F5]"
              />

              <span>
                Click any image to view in full size
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {selectedImage && (
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
            transition={{
              duration: 0.25,
            }}
            onClick={closeImage}
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
              onClick={closeImage}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-gray-700 shadow-xl transition-all duration-300 hover:bg-[#6875F5] hover:text-white sm:right-7 sm:top-7"
              aria-label="Close image"
            >
              <X size={23} />
            </motion.button>

            {/* Full Image */}

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
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                width={1600}
                height={1200}
                className="max-h-[85vh] max-w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}