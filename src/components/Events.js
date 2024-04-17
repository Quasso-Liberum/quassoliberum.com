import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
// import "@splidejs/react-splide/css";`
// import { events } from "../data/events";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Events = ({ events, type }) => {
  let color = "";
  if (type.toLowerCase() === "competition") {
    color = "from-qlPostGreen/60 to-qlPostBlack/60";
  } else if (type.toLowerCase() === "workshop") {
    color = "from-qlPostRed/60 to-qlPostBlack/60";
  } else if (type.toLowerCase() === "games") {
    color = "from-qlPostPink/60 to-qlPostBlack/60";
  } else {
    color = "from-qlPostRed/60 to-qlPostBlack/60"; // default color
  }
  return (
    <>
      <Desktop color={color} type={type} events={events} />
      <Mobile color={color} type={type} events={events} />
    </>
  );
};

const Desktop = ({ events, type, color }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-20" id="events">
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
      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.035, transition: { duration: 0.3 } }}
        className="px-5 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300"
      >
        <Link href={`/${type.toLowerCase()}`}>Explore</Link>
      </motion.button>{" "}
    </div>
  );
};

const Mobile = ({ events, type, color }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex lg:hidden flex-col items-center justify-center w-full my-20">
      <div className="pb-10 text-5xl">{type}</div>

      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        // showThumbs={false}
        showIndicators={false}
      >
        {events?.map((event, index) => {
          return (
            <motion.div
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(event)}
              key={index}
              className="rounded-xl relative "
            >
              <div>
                <Image
                  className="object-contain aspect-square w-96  h-96 rounded-xl"
                  width={200}
                  height={200}
                  src={event.image}
                  alt={event.title}
                />
              </div>
            </motion.div>
          );
        })}
      </Carousel>
      <AnimatePresence>
        {selected && (
          <div className="fixed z-20 top-0 left-0 w-full drop-shadow-2xl h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative flex w-3/5 h-4/5  bg-gradient-to-br ${color} backdrop-blur-lg p-10 rounded-xl`}
            >
              <div className="justify-end flex-col flex gap-12 w-full items-center">
                <Image
                  className="object-contain w-96 h-96 rounded-xl"
                  width={350}
                  height={350}
                  src={selected.image}
                  alt={selected.title}
                />
                <div className="flex flex-col gap-4">
                  <div className="text-2xl ">{selected.title}</div>
                  <div className=" text-white">{selected.description}</div>
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
      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.035, transition: { duration: 0.3 } }}
        className="px-5 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300"
      >
        <Link href={`/${type.toLowerCase()}`}>Explore</Link>
      </motion.button>
    </div>
  );
};

export default Events;
