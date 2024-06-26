// Removed the unused import statement for "Image" component
// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

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
        <Image
          className=" object-cover h-full"
          src="/images/qlverse.png"
          alt="xdfsd"
          fill
        />
      </div>

      <div className="absolute  -z-10 backdrop-blur w-full h-full" />

      <div className="absolute -z-10 bg-gradient-to-t  from-black to-transparent w-full h-full"></div>
      <div className=" flex-col h-full flex justify-end pl-20 pb-20 ">
        <Link className="group" href="https://unstop.com/o/dj5K0wn?lb=79sIA48u">
          <Image
            className="group-hover:translate-x-5 group-hover:-translate-y-5 transition-all duration-500"
            src="/images/Group.png"
            width={250}
            height={250}
            alt="arrow"
          />

          <p className="text-[9em] text-white">Call for QL Verse</p>
        </Link>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="lg:hidden   justify-center items-center px-5 flex flex-col h-screen w-screen">
      <Image className="-z-20 " src="/images/mo_bg.png" alt="xdfsd" fill />
      <div className="absolute  -z-10 backdrop-blur-xl w-screen h-screen" />
      <Image
        className="-z-20 "
        src="/images/qlverse_poster1.png"
        alt="xdfsd"
        fill
      />

      <Image
        className="rounded-xl my-10 drop-shadow-lg  object-cover"
        width={250}
        height={250}
        src="/images/qlverse_poster1.png"
        alt="poster"
      />

      <p className="text-5xl text-white text-center">
        Call for <br />
        <span className="">Projects</span>
      </p>
      <Link
        className="group border border-[#FDC501] rounded-full p-2 mt-8 flex justify-center items-center text-white px-6"
        href="https://unstop.com/o/dj5K0wn?lb=79sIA48u"
      >
        Click here to apply
        <Image
          src="/images/arrow-right.png"
          width={50}
          height={50}
          className="drop-shadow-xl"
          alt="arrow"
        />
      </Link>
    </div>
  );
};
