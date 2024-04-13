"use client"
import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workshopsList } from "@/data/events";
import Link from "next/link";
import Image from "next/image";

const Workshop = () => {
  const [selected, setSelected] = useState(null);

  const events = workshopsList;
  const type = "Workshops";

  return (
    <div className="flex text-[#F4D12F] flex-col items-center justify-center w-full min-h-screen my-20">
      <div className="pb-10 text-6xl">{type}</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {events?.map((event, index) => {
          return (
            <motion.button
              whileTap={{ scale: 0.97, transition: { duration: 0.3 } }}
              whileHover={{ scale: 1.035, transition: { duration: 0.3 } }}
              key={index}
              className="rounded-xl "
              onClick={() => setSelected(event)}
            >
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={350}
                height={350}
                src={event.image}
                alt={event.title}
              />
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center drop-shadow-2xl  justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative flex w-3/5   bg-gradient-to-br ${color} backdrop-blur-lg p-10 rounded-xl`}
            >
              <div className="justify-end  flex gap-12 w-full items-center">
                <Image
                  className="object-contain w-96 h-96 rounded-xl"
                  width={350}
                  height={350}
                  src={selected.image}
                  alt={selected.title}
                />
                <div className="flex flex-col gap-4">
                  <div className="text-2xl ">{selected.title}</div>
                  <div className="w-3/4  text-white">
                    {selected.description}
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97, transition: { duration: 0.3 } }}
                    whileHover={{ scale: 1.035, transition: { duration: 0.3 } }}
                    className="px-4 py-2 w-fit bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl"
                  >
                    <Link href={selected.link}>Register Now</Link>
                  </motion.button>
                  <button
                    className="absolute top-0 right-0"
                    onClick={() => setSelected(null)}
                  >
                    <p className="pr-3 pt-3 text-xl">X</p>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Workshop;
