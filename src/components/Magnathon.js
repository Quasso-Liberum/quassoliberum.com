import React from "react";
import Image from "next/image";
import { light } from "./Fonts";

const Magnathon = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

const Desktop = () => {
  return (
    <div className="w-full h-screen justify-center hidden lg:flex flex-col px-20 items-center">
      <p className="text-6xl pb-10">Magnathon</p>
      <div className="flex gap-10 flex-row-reverse">
        <Image
          className="rounded-xl"
          src="/images/magnathon.png"
          height={350}
          width={350}
          alt="magnathon"
        />
        <div className="flex flex-col justify-center bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201f1e7a]  to-[#58523733] backdrop:blur-lg text-2xl p-10 rounded-2xl">
          <p className={light.className}>
            Magnathon 2.0 is a 24-hour national-level hackathon hosted by IEEE
            Student Branch College of Engineering Vadakara during the College
            annual tech fest, Quasso Liberum 11. Our focus is on tackling
            sustainability challenges such as climate change, energy use,
            environmental monitoring, disaster management, zero hunger,
            sustainable education, and tech-driven solutions aligned with the UN
            Sustainable Development Goals for a better future.
          </p>
        </div>
      </div>

      <div>
        <a href="https://magnathon2.ieeesbcev.org/">
          <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
            Register
          </p>
        </a>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center lg:hidden mb-10">
      <div className="flex pb-10 flex-col items-center">
        <div className="text-6xl">Magnathon</div>
      </div>
      <Image
        className="rounded-xl"
        src="/images/magnathon.png"
        height={300}
        width={300}
        alt="magnathon"
      />
      <div className="bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201F1E] to-[#585237] text-xl m-10 p-10 rounded-2xl">
        <p className={light.className}>
          Magnathon 2.0 is a 24-hour national-level hackathon hosted by IEEE
          Student Branch College of Engineering Vadakara during the College
          annual tech fest, Quasso Liberum 11. Our focus is on tackling
          sustainability challenges such as climate change, energy use,
          environmental monitoring, disaster management, zero hunger,
          sustainable education, and tech-driven solutions aligned with the UN
          Sustainable Development Goals for a better future.
        </p>
      </div>
    </div>
  );
};

export default Magnathon;
