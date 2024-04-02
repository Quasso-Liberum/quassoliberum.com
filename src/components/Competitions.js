import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { competitions } from "../data/events";
import Events from "./Events";
const Competitions = () => {
  return <Events events={competitions} type="Competition" />;

};


// const Desktop = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-20">
//       <div className="pb-10 text-6xl">Competitions</div>
//       <div className="flex flex-wrap items-center justify-center w-full gap-5">
//         {competitions.map((competition, index) => {
//           return (
//             <div
//               key={index}
//               className="rounded-xl"
//               onClick={() => setSelected(competition)}
//             >
//               <Image
//                 className="object-contain w-full h-full rounded-xl"
//                 width={350}
//                 height={350}
//                 src={competition.image}
//                 alt={competition.title}
//               />
//             </div>
//           );
//         })}
//       </div>
//       {selected && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
//           <div className="relative flex w-3/5   bg-gradient-to-br from-qlPostGreen/60 to-qlPostBlack/60 backdrop-blur-lg p-10 rounded-xl">
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
//                 <button className="px-4 py-2 w-fit bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl">Register Now</button>
//                 <button
//                   className="absolute top-0 right-0"
//                   onClick={() => setSelected(null)}
//                 >
//                   <p className="pr-3 pt-3 text-xl">
//                     X
//                   </p>
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
//     <div className="flex lg:hidden flex-col items-center justify-center w-full min-h-screen my-20">
//       <div className="pb-10 text-5xl">Competitions</div>

//       <Carousel autoPlay interval={4000} infiniteLoop swipeable>
//         {competitions.map((competition, index) => {
//           return (
//             <div onClick={() => setSelected(competition)} key={index} className="rounded-xl  ">
//               <Image
//                 className="object-contain w-96 h-96 rounded-xl"
//                 width={200}
//                 height={200}
//                 src={competition.image}
//                 alt={competition.title}
//               />
//             </div>
//           );
//         })}
//       </Carousel>
//       {selected && (
//         <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center">
//           <div className="relative flex w-3/5 h-4/5  bg-gradient-to-br from-qlPostGreen/60 to-qlPostBlack/60 backdrop-blur-lg p-10 rounded-xl">
//             <div className="justify-end flex-col flex gap-12 w-full items-center">

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
//                 <button className="px-4 py-2 w-fit bg-black hover:text-black hover:bg-qlYellow transition-all duration-500 rounded-xl">Register Now</button>
//                 <button
//                   className="absolute top-0 right-0"
//                   onClick={() => setSelected(null)}
//                 >
//                   <p className="pr-3 pt-3 text-xl">
//                     X
//                   </p>
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

export default Competitions;
