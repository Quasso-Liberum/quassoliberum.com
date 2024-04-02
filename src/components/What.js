import React from "react";
import localFont from "next/font/local";
import { light } from "./Fonts";
import Image from "next/image";

const regular = localFont({
  src: [
    {
      path: "../../public/font/light.ttf",
    },
  ],
});

export const What = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

const Desktop = () => {
  return (
    <div className="flex-col items-center justify-center hidden h-screen space-y-20 lg:flex lg:">
      <div className="flex px-16">
        <div className="space-y-3 mr-28">
          <div className="text-4xl">What is</div>
          <div className="text-7xl">Quasso</div>
          <div className="text-7xl">Liberum</div>
        </div>
        <div className="bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201f1e7a]  to-[#58523733] backdrop:blur-lg text-2xl p-32 rounded-2xl">
          <p className={regular.className}>
            Quasso Liberum is a unifying campaign inspiring each CEVian to focus
            their gaze upon progress, invention and technology. Playing the role
            of an opportunity to students, Quasso Liberum prolongs its legacy by
            inciting creativity and strengthening vision with each successive
            year.
          </p>
        </div>
      </div>
      <div className="w-full h-10 bg-[#F4D12F] flex justify-evenly">
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
        <Image
          src="/images/Moving_QL.png"
          width={100}
          height={100}
          alt="ql moving logo"
        />
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen lg:hidden">
      <div className="flex flex-col items-center">
        <div className="text-3xl italic">
          <div className={light.className}>What is</div>
        </div>
        <div className="text-6xl">Quasso</div>
        <div className="text-6xl">Liberum</div>
      </div>
      <div className="bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201F1E] to-[#585237] text-xl m-10 p-10 rounded-2xl">
        <p className={regular.className}>
          Quasso Liberum is a unifying campaign inspiring each CEVian to focus
          their gaze upon progress, invention and technology. Playing the role
          of an opportunity to students, Quasso Liberum prolongs its legacy by
          inciting creativity and strengthening vision with each successive
          year.
        </p>
      </div>
    </div>
  );
};
