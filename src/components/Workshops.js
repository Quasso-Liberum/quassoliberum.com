import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
// import "@splidejs/react-splide/css";`
import { workshopsList } from "../data/events";
import { AnimatePresence, motion } from "framer-motion";
import Events from "./Events";

const workshops = () => {
  return <Events events={workshopsList} type="Workshops" />;
};

// const Desktop = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-20">
//  x      <div className="pb-10 text-6xl">Workshop</div>
//       <div className="flex flex-wrap items-center justify-center w-full gap-5">
//         {workshopsList.map((workshop, index) => {
//           return (
//             <div
//               key={index}
//               className="rounded-xl"
//               onClick={() => setSelected(workshop)}
//             >
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={350}
//                 height={350}
//                 src={workshop.image}
//                 alt={workshop.title}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <AnimatePresence>
//         {selected && (
//           <motion.div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
//             <div className="relative flex w-3/5   bg-gradient-to-br from-qlPostRed/60 to-qlPostBlack/60 backdrop-blur-lg p-10 rounded-xl">
//               <div className="justify-end md:flex-col flex gap-12 w-full items-center">
//                 <Image
//                   className="object-contain w-96 h-96 rounded-xl"
//                   width={350}
//                   height={350}
//                   src={selected.image}
//                   alt={selected.title}
//                 />
//                 <div className="flex flex-col gap-4">
//                   <div className="text-2xl ">{selected.title}</div>
//                   <div className="w-3/4  text-white">
//                     {selected.description}
//                   </div>
//                   <button className="px-4 py-2 w-fit bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl">
//                     Register Now
//                   </button>
//                   <button
//                     className="absolute top-0 right-0"
//                     onClick={() => setSelected(null)}
//                   >
//                     <p className="pr-3 pt-3 text-xl">X</p>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
//     </div>
//   );
// };

// const Mobile = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="flex lg:hidden flex-col items-center justify-center w-full min-h-screen my-20">
//       <div className="pb-10 text-5xl">Workshop</div>

//       <Carousel
//         autoPlay
//         interval={4000}
//         infiniteLoop
//         // showThumbs={false}
//         showIndicators={false}
//       >
//         {workshopsList.map((workshop, index) => {
//           return (
//             <div
//               onClick={() => setSelected(workshop)}
//               key={index}
//               className="rounded-xl relative "
//             >
//               <Image
//                 className="object-contain w-96 h-96 rounded-xl"
//                 width={200}
//                 height={200}
//                 src={workshop.image}
//                 alt={workshop.title}
//               />
//             </div>
//           );
//         })}
//       </Carousel>
//       <AnimatePresence>
//         {selected && (
//           <motion.div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
//             <div className="relative flex w-3/5 h-4/5  bg-gradient-to-br from-qlPostRed/60 to-qlPostBlack/60 backdrop-blur-lg p-10 rounded-xl">
//               <div className="justify-end flex-col flex gap-12 w-full items-center">
//                 <Image
//                   className="object-contain w-96 h-96 rounded-xl"
//                   width={350}
//                   height={350}
//                   src={selected.image}
//                   alt={selected.title}
//                 />
//                 <div className="flex flex-col gap-4">
//                   <div className="text-2xl ">{selected.title}</div>
//                   <div className=" text-white">{selected.description}</div>
//                   <button className="px-4 py-2 w-fit active:scale-90  bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl">
//                     Register Now
//                   </button>
//                   <button
//                     className="absolute top-0 right-0"
//                     onClick={() => setSelected(null)}
//                   >
//                     <p className="pr-3 pt-3 text-xl">X</p>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
//     </div>
//   );
// };

// const Desktop = () => {
//   // let workshops = [
//   //   {
//   //     title: "workshop 1",
//   //     description: "This is a workshop",
//   //     image: "/images/workshop/1.jpg",
//   //   },
//   //   {
//   //     title: "workshop 1",
//   //     description: "This is a workshop",
//   //     image: "/images/workshop/2.jpg",
//   //   },
//   //   {
//   //     title: "workshop 1",
//   //     description: "This is a workshop",
//   //     image: "/images/workshop/3.jpg",
//   //   },
//   //   {
//   //     title: "workshop 1",
//   //     description: "This is a workshop",
//   //     image: "/images/workshop/1.jpg",
//   //   },
//   //   {
//   //     title: "workshop 1",
//   //     description: "This is a workshop",
//   //     image: "/images/workshop/1.jpg",
//   //   },
//   //   {
//   //     title: "workshop 1",
//   //     description: "This is a workshop",
//   //     image: "/images/workshop/1.jpg",
//   //   },
//   // ];
//   const [selected, setSelected] = useState(null);
//   return (
//     <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-20">
//       <div className="pb-10 text-6xl">workshops</div>
//       <div className="flex flex-wrap items-center justify-center w-full gap-5">
//         {workshopsList.map((workshop, index) => {
//           return (
//             <div
//               key={index}
//               className="rounded-xl"
//               onClick={() => setSelected(workshop)}
//             >
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={350}
//                 height={350}
//                 src={workshop.image}
//                 alt={workshop.title}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <AnimatePresence>{selected && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="relative w flex justify-center items-center gap-8 bg-white/20 backdrop-blur-lg p-10 rounded-xl">
//             <Image
//               className="object-contain w-full h-full rounded-xl"
//               width={350}
//               height={350}
//               src={selected.image}
//               alt={selected.title}
//             />
//             <div>
//               <div className="text-2xl">{selected.title}</div>
//               <div>{selected.description}</div>
//               <button
//                 className="absolute top-0 right-0"
//                 onClick={() => setSelected(null)}
//               >
//                 <p className="pr-3 pt-3 text-xl">X</p>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}</AnimatePresence>

//       <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
//     </div>
//   );
// };

// const Mobile = () => {
//   return (
//     <div className="flex lg:hidden flex-col items-center justify-center w-full min-h-screen my-20">
//       <div className="pb-10 text-5xl">workshops</div>
//       {/* <div className="flex flex-wrap items-center justify-center w-full gap-5">
//         {workshops.map((workshop, index) => {
//           return (
//             <div key={index} className="rounded-xl mx-6">
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={300}
//                 height={300}
//                 src={workshop.image}
//                 alt={workshop.title}
//               />
//             </div>
//           );
//         })}
//       </div> */}
//       <Carousel stopOnHover autoPlay preventMovementUntilSwipeScrollTolerance>
//         {workshopsList.map((workshop, index) => {
//           return (
//             <div key={index} className="rounded-xl mx-10">
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={200}
//                 height={200}
//                 src={workshop.image}
//                 alt={workshop.title}
//               />
//             </div>
//           );
//         })}
//       </Carousel>
//       {/*
//       <Splide aria-label="My Favorite Images">
//         {workshopsList.map((workshop, index) => {
//           return (
//             <SplideSlide key={index} className="rounded-xl mx-10">
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={200}
//                 height={200}
//                 src=x
//                 alt={workshop.title}
//               />
//             </SplideSlide>
//           );
//         })}
//       </Splide> */}
//       <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
//     </div>
//   );
// };

export default workshops;
