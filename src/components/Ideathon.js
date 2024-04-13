import React from "react";
import Image from "next/image";
import { light } from "./Fonts";

const Ideathon = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

const Desktop = () => {
  return (
    <div className="w-full h-screen justify-center hidden lg:flex flex-col px-40 items-center">
      <p className="text-6xl pb-10">
        Ideathon
      </p>
      <div className="flex space-x-10">
        <Image
          className="rounded-xl"
          src="/images/ideathon.jpg"
          height={350}
          width={350}
          alt="ideathon"
        />
        <div className="flex flex-col justify-center bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201f1e7a]  to-[#58523733] backdrop:blur-lg text-2xl p-10 rounded-2xl">
          <p className={light.className}>
            Ideathon is a platform for students to showcase their innovative ideas and solutions to real-world problems. The event is open to all students, regardless of their field of study. The event will be judged by a panel of experts from the industry, academia, and government. The top three teams will receive cash prizes and certificates.
          </p>
        </div>
      </div>

      <div>
        <a href="https://bit.ly/Ideathon-cev">
          <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
            Register
          </p>
        </a>
      </div>
    </div>
  )
}

const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center  lg:hidden mb-10">
      <div className="flex pb-10 flex-col items-center">
        <div className="text-6xl">Ideathon</div>
      </div>
      <Image
        className="rounded-xl"
        src="/images/ideathon.jpg"
        height={300}
        width={300}
        alt="ideathon"
      />
      <div className="bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201F1E] to-[#585237] text-xl m-10 p-10 rounded-2xl">
        <p className={light.className}>
          Ideathon is a platform for students to showcase their innovative ideas and solutions to real-world problems. The event is open to all students, regardless of their field of study. The event will be judged by a panel of experts from the industry, academia, and government. The top three teams will receive cash prizes and certificates.
        </p>
      </div>
      <div>
        <a href="https://bit.ly/Ideathon-cev">
          <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
            Register
          </p>
        </a>
      </div>
    </div>
  )
}

export default Ideathon;
