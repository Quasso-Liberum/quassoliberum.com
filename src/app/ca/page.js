// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Ambassador() {
//   return (
//     <div>
//       <div className="lg:h-screen lg:w-full lg:flex lg:pl-20 lg:pb-20 hidden">
//         <div className="flex flex-col justify-end">
//           <Image className="-z-10" src="/images/ambassador.png" alt="xdfsd" fill />
//           <Link className="group" href="https://docs.google.com/forms/d/e/1FAIpQLSf9tq4YnC6vKxqz0jFPNp53-cHhs6ieBLU7Et1fkYIZhaxOcA/viewform?usp=sf_link" >
//             <Image className="group-hover:translate-x-5 group-hover:-translate-y-5 transition-all duration-500" src="/images/Group.png" width={250} height={250} alt="arrow" />
//             <p className="text-white text-[9em] w-1/2">
//               Call for Ambassadors
//             </p>
//           </Link>
//         </div>
//         <div className="pr-48 pt-28">
//           <Image className="flex-end" src="/images/poster.png" width={700} height={700} alt="poster" />
//         </div>
//       </div>
//       <div className="lg:hidden flex gap-10 justify-center items-center flex-col h-screen">
//         <Image className="flex-end" src="/images/poster.png" width={300} height={300} alt="poster" />

//         <Image className="-z-10" src="/images/mo_bg.png" alt="xdfsd" fill />
//         <p className="text-5xl text-white text-center">
//           Call for Ambassadors
//         </p>
//         <Link className="group" href="https://docs.google.com/forms/d/e/1FAIpQLSf9tq4YnC6vKxqz0jFPNp53-cHhs6ieBLU7Et1fkYIZhaxOcA/viewform?usp=sf_link" >
//           <Image src="/images/Group.png" width={150} height={150} relative alt="arrow" />
//         </Link>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default Page;


const Desktop = () => {
  return (
    <div className="flex-col h-screen w-screen  lg:flex hidden">
      <div className="h-full w-full -z-20 ">

        <Image className=" object-fill h-full" src="/images/ambass.png" alt="xdfsd" fill />
      </div>
      <div className="absolute  -z-10 backdrop-blur-sm w-full h-full" />

      <div className="absolute -z-10 bg-gradient-to-t  from-black to-transparent w-full h-full"></div>
      <div className=" flex-col h-full flex items-end justify-end pr-20 pb-20 ">
        <Link
          className="group flex flex-col"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf9tq4YnC6vKxqz0jFPNp53-cHhs6ieBLU7Et1fkYIZhaxOcA/viewform?usp=sf_link"
        >
          <Image
            className="group-hover:translate-x-5 flex items-end  group-hover:-translate-y-5 transition-all duration-500"
            src="/images/Group2.png"
            width={250}
            height={250}
            alt="arrow"
          />

          <p className="text-[9em] text-white">Call for Ambassadors</p>
        </Link>
      </div>
    </div>)
}



const Mobile = () => {
  return (
    <div className="lg:hidden   justify-center items-center px-5 flex flex-col h-screen w-screen">
      <Image className="-z-20 " src="/images/mo_bg.png" alt="xdfsd" fill />
      <div className="absolute  -z-10 backdrop-blur-xl w-full h-full" />
      <Image className="-z-20 " src="/images/ambass_poster.png" alt="xdfsd" fill />

      <Image className="rounded-xl py-10 drop-shadow-lg  object-cover" width={250} height={250} src="/images/qlverse_poster1.png" alt="poster" />

      <p className="text-5xl text-white text-center">
        Call for <br />
        <span className="">Ambassadors</span>
      </p>
      <Link className="group" href="https://docs.google.com/forms/d/e/1FAIpQLSf9tq4YnC6vKxqz0jFPNp53-cHhs6ieBLU7Et1fkYIZhaxOcA/viewform?usp=sf_link" >
        <Image src="/images/Group.png" width={150} height={150} className="drop-shadow-xl" alt="arrow" />
      </Link>
    </div>
  )
}
