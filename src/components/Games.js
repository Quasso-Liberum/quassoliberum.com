import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { games } from "../data/events";
import { Carousel } from "react-responsive-carousel";
import Events from "./Events";
const Games = () => {
  return <Events events={games} type="Games" />;
};

// const Desktop = () => {
//   const [selected, setSelected] = useState(null);
//   return (
//     <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-10">
//       <div className="pb-10 text-6xl ">Games</div>
//       <div className="flex flex-wrap items-center justify-center w-full gap-5 h-max">
//         {games.map((game, index) => {
//           return (
//             <div
//               key={index}
//               className="rounded-xl"
//               onClick={() => setSelected(game)}
//             >
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={350}
//                 height={350}
//                 src={game.image}
//                 alt={game.title}
//               />
//             </div>
//           );
//         })}
//       </div>
//       {selected && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
//           <div className="relative flex w-3/5   bg-gradient-to-br from-qlPostPink/60 to-qlPostBlack/60 backdrop-blur-lg p-10 rounded-xl">
//             <div className="justify-end md:flex-col flex gap-12 w-full items-center">
//               <Image
//                 className="object-contain w-96 h-96 rounded-xl"
//                 width={350}
//                 height={350}
//                 src={selected.image}
//                 alt={selected.title}
//               />
//               <div className="flex flex-col gap-4">
//                 <div className="text-2xl ">{selected.title}</div>
//                 <div className="w-3/4  text-white">{selected.description}</div>
//                 <button className="px-4 py-2 w-fit bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl">
//                   Register Now
//                 </button>
//                 <button
//                   className="absolute top-0 right-0"
//                   onClick={() => setSelected(null)}
//                 >
//                   <p className="pr-3 pt-3 text-xl">X</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
//     </div>
//   );
// };

// const Mobile = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="flex lg:hidden flex-col items-center justify-center w-full min-h-screen">
//       <div className="pb-10 text-5xl">Games</div>
//       <Carousel
//         autoPlay
//         interval={4000}
//         infiniteLoop
//         // showThumbs={false}
//         showIndicators={false}
//       >
//         {games.map((game, index) => {
//           return (
//             <div
//               onClick={() => setSelected(game)}
//               key={index}
//               className="rounded-xl relative "
//             >
//               <Image
//                 className="object-contain w-96 h-96 rounded-xl"
//                 width={200}
//                 height={200}
//                 src={game.image}
//                 alt={game.title}
//               />
//             </div>
//           );
//         })}
//       </Carousel>
//       {selected && (
//         <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
//           <div className="relative flex w-3/5 h-4/5  bg-gradient-to-br from-qlPostPink/60 to-qlPostBlack/60 backdrop-blur-lg p-10 rounded-xl">
//             <div className="justify-end flex-col pt-4 flex gap-12 w-full items-center">
//               <Image
//                 className="object-contain w-96 h-96 rounded-xl"
//                 width={350}
//                 height={350}
//                 src={selected.image}
//                 alt={selected.title}
//               />
//               <div className="flex flex-col gap-4">
//                 <div className="text-2xl ">{selected.title}</div>
//                 <div className=" text-white">{selected.description}</div>
//                 <button className="px-4 py-2 w-fit active:scale-90  bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl">
//                   Register Now
//                 </button>
//                 <button
//                   className="absolute top-0 right-0"
//                   onClick={() => setSelected(null)}
//                 >
//                   <p className="pr-3 pt-3 text-xl">X</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
//     </div>
//   );
// };

export default Games;
