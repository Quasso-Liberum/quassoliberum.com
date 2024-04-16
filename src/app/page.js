// export default function Home() {
//   return (
//     // <main className="flex flex-col items-center justify-center w-screen h-screen bg-white">
//     //   <p className="text-5xl md:text-5xl lg:text-7xl pb-2 bg-gradient-to-r from-[#7E1169] to-[#FDC501] via-[#DC2133] bg-clip-text text-transparent">
//     //     Coming Soon
//     //   </p>
//     // </main>
//     <>
//     {/* <iframe src={"/soon.webm"} className="w-screen h-screen" frameborder="0" allowfullscreen sandbox /> */}
//     <div className="flex items-center justify-center w-screen h-screen bg-black">

//       <video className="rotate-90 md:rotate-0" loop autoPlay playsInline >
//       <source src="/soon.webm" type="video/webm" />

//       Your browser does not support the video tag.
//     </video>
//     </div>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <div className="w-screen h-[100svh]  bg-[#05090d] flex justify-center items-center">
//         <video className="" loop autoPlay playsInline muted>
//           <source src="/soon.webm" type="video/webm" />
//           <source src="/soon.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { What } from "@/components/What";
import "./cursor.css";
import Workshops from "@/components/Workshops";
import Competitions from "@/components/Competitions";
import Games from "@/components/Games";
import Fashion from "@/components/Fashion";
import Ideathon from "@/components/Ideathon";
import Magnathon from "@/components/Magnathon";
import DanceCompetition from "@/components/DanceCompetition";
import Conclave from "@/components/Conclave";
import Metapass from "@/components/Metapass";

export default function Home() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);
  return (
    <div className="text-[#FDC501] bg-[#1C1B1B]">
      <div ref={blobRef} id="blob"></div>
      <div id="blur"></div>
      <div className="relative z-10">
        <Hero />
        <What />
        {/* <DanceCompetition /> */}
        <Metapass />
        <Conclave />
        <Magnathon />
        <Ideathon />
        <Workshops />
        <Competitions />
        <Games />
        {/* <Fashion /> */}
        <Footer />
      </div>
    </div>
  );
}
