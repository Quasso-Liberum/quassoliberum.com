import React from "react";
import Image from "next/image";
import { light } from "./Fonts";

export default function DanceCompetition() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

const Desktop = () => {
  return (
    <div className="flex-col items-center justify-center hidden w-full pb-20 lg:flex">
      <p className="pb-10 text-6xl">Mistic Motions</p>
      <Image
        className="rounded-xl"
        src="/images/dance.jpg"
        width={1200}
        height={500}
        alt="fashion show banner"
      />
      <div className={light.className}>
        <p className="w-[1200px] text-xl flex justify-center pt-5">
          Calling all college dance teams! Secure your spot in the spotlight and
          compete against the top talent in the region. This ticket grants entry
          for your team to participate in the Mistic Motions Intercollege Dance
          Competition. Show off your skills, creativity, and passion for dance
          as you battle it out for glory. Don&apos;t miss this opportunity to
          showcase your talent and represent your college - reserve your
          team&apos;s spot now! Date - 18 April 2024, 7PM onwards
        </p>
      </div>
      <a href="https://www.yepdesk.com/quasso-liberum-11">
        <p className="px-5 py-2 mt-10 transition-colors duration-300 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack">
          Register
        </p>
      </a>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-10 lg:hidden">
      <p className="mb-10 text-5xl">Mistic Motions</p>
      <Image
        className="rounded-lg"
        src="/images/dance.jpg"
        width={350}
        height={500}
        alt="fashion show banner"
      />
      <div>
        <a href="https://www.yepdesk.com/quasso-liberum-11">
          <p className="px-3 py-2 mt-10 transition-colors duration-300 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack">
            Register
          </p>
        </a>
      </div>
    </div>
  );
};
