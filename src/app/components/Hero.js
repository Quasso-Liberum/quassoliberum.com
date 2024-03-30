import { Navbar } from "./Navbar";
import { semiBold, light, medium } from "./Fonts";
import Image from "next/image";

export default function Hero() {
  return <>
    <Desktop />
    <Mobile />
  </>;
}

const Desktop = () => {
  return (
    <div className="h-[100svh] hidden lg:flex lg:flex-col">
      <div className="h-[10%] pl-10 pt-10">
        <Navbar />
      </div>

      <div className="px-10 flex h-[90%] flex-col justify-around">
        <div className="flex flex-col space-y-5 pt-20">
          <div className={medium.className}>
            <p className="text-3xl text-[#F4D12F]">Multiverse of Innovation</p>
          </div>
          <div className="text-9xl">Quasso</div>
          <div className="text-9xl">Liberum</div>
          <div className={semiBold.className}>
            <p className="text-4xl">National level techfest</p>
          </div>
        </div>
        <div className="w-full h-full flex items-end">
          <div className="flex w-full justify-between">
            <div className={light.className}>
              <p className="text-2xl">11th Edition</p>
            </div>
            <div className="pb-10">
              <div className={light.className}>
                <p className="text-3xl">April</p>
                <p className="text-3xl">18, 19, 20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="lg:hidden h-screen flex flex-col space-y-10 justify-center items-center">
      <div className="pb-10">
        <Image src="/images/QL.png" width={60} height={60} alt="ql logo" />
      </div>
      <div className="w-full flex flex-col space-y-3">
        <p className="text-6xl w-full flex justify-center">
          Quasso
        </p>
        <p className="text-6xl flex justify-center">
          Liberum
        </p>
      </div>
      <div className={light.className}>
        <p className="text-2xl">National Level Techfest</p>
      </div>

      <div className="mt-28">
        <div className={light.className}>
          <p className="text-2xl italic w-full flex justify-center">
            April
          </p>
          <p className="text-2xl italic">
            18, 19 & 20
          </p>
        </div>
      </div>

    </div>
  )
}
