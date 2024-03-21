import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Ambassador() {
  return (
    <div className="h-screen w-full flex flex-col justify-end pl-20 pb-20">
      <Link href="quassoliberum.com">
        <Image className="-z-10" src="/images/ambassador.jpg" alt="xdfsd" fill />
      </Link>
      <Image src="/images/Group.png" width={250} height={250} alt="arrow" />
      <p className="text-white text-9xl w-1/2">
        Call for Ambassadors
      </p>
    </div>
  );
}
