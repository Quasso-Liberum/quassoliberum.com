import React from "react";
import Image from "next/image";
import Events from "./Events";

export default function Fashion() {
  return (
    <div>
      <Desktop />
    </div>
  );
}

const Desktop = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center pb-20">
      <Image
        className="rounded-3xl"
        src="/images/fasion.jpg"
        width={1000}
        height={500}
        alt="fashion show banner"
      />
      <a href="https://www.yepdesk.com/quasso-liberum-11">
        <p className="px-5 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
          Register Now
        </p>
      </a>
    </div>
  );
};
