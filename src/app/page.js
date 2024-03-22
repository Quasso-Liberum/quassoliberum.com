import Image from "next/image";

// export default function Home() {
//   return (
//     // <main className="w-screen flex-col h-screen bg-white justify-center flex items-center">
//     //   <p className="text-5xl md:text-5xl lg:text-7xl pb-2 bg-gradient-to-r from-[#7E1169] to-[#FDC501] via-[#DC2133] bg-clip-text text-transparent">
//     //     Coming Soon
//     //   </p>
//     // </main>
//     <>
//     {/* <iframe src={"/soon.webm"} className="w-screen h-screen" frameborder="0" allowfullscreen sandbox /> */}
//     <div className="w-screen h-screen  bg-black flex justify-center items-center">

//       <video className=" md:rotate-0 rotate-90" loop autoPlay playsInline >
//       <source src="/soon.webm" type="video/webm" />
      
//       Your browser does not support the video tag.
//     </video>
//     </div>
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <div className="w-screen h-[100svh]  bg-[#05090d] flex justify-center items-center">
        <video className="" loop autoPlay playsInline muted>
          <source src="/soon.webm" type="video/webm" />
          <source src="/soon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
