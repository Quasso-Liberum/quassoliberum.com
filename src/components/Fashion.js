import React from "react";
import Image from "next/image";
import { light } from "./Fonts";

export default function Fashion() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

const Desktop = () => {
  return (
    <div className="lg:flex hidden w-full flex-col justify-center items-center pb-20">
      <p className="text-6xl pb-10">Fashion Show</p>
      <Image
        className="rounded-xl"
        src="/images/fasion.jpg"
        width={1200}
        height={500}
        alt="fashion show banner"
      />
      <div className={light.className}>
        <p className="w-[1200px] text-xl flex justify-center pt-5">
          Welcome to FashionTech Runway, a dynamic competition at Quasso
          Liberums Tech Fest! Witness designers merging fashion and technology
          to create groundbreaking pieces. With a prize pool of 30k, contestants
          vie for the title of FashionTech Champion. Registration fee is 1.5k.
          Join us for a glimpse into the future of wearable innovation!
        </p>
      </div>
      <a href="https://www.yepdesk.com/quasso-liberum-11">
        <p className="px-5 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
          Register
        </p>
      </a>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="lg:hidden flex flex-col w-full justify-center items-center mb-10">
      <p className="text-5xl mb-10">Fashion Show</p>
      <Image
        className="rounded-lg"
        src="/images/fasion.jpg"
        width={350}
        height={500}
        alt="fashion show banner"
      />
      <div>
        <a href="https://www.yepdesk.com/quasso-liberum-11">
          <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
            Register
          </p>
        </a>
      </div>
    </div>
  );
};
