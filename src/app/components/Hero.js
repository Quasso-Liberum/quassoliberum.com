import localFont from "next/font/local";
import { Navbar } from "./Navbar";

const medium = localFont({
  src: [
    {
      path: "../../../public/font/medium.ttf",
    },
  ],
});

const semiBold = localFont({
  src: [
    {
      path: "../../../public/font/semi-bold.ttf",
    },
  ],
});

const light = localFont({
  src: [
    {
      path: "../../../public/font/light.ttf",
    },
  ],
});

export default function Hero() {
  return (
    <div className="h-[100svh]">
      <div className="h-[10%] pl-10 pt-10">
        <Navbar />
      </div>

      <div className="flex h-[90%] flex-col justify-around">
        <div className="flex p-28 justify-center flex-col space-y-5 items-center">
          <div className={medium.className}>
            <p className="text-2xl pb-10">Multiverse of Innovation</p>
          </div>
          <div className="text-6xl">Quasso</div>
          <div className="text-6xl">Liberum</div>
          <div className={semiBold.className}>
            <p className="text-4xl">National level techfest</p>
          </div>
        </div>
        <div className="w-full h-full flex items-end">
          <div className="flex w-full justify-between px-10">
            <div className={light.className}>
              <p className="text-2xl">11th Edition</p>
            </div>
            <div className="pb-10">
              <div className={semiBold}>
                <p className="text-3xl">April</p>
                <p className="text-3xl">18, 19, 20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
