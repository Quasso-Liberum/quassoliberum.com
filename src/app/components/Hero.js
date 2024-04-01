// "use client"
import { Navbar } from "./Navbar";
import { semiBold, light, medium } from "./Fonts";
import Image from "next/image";
// import style from "./Hero.module.css";
import "./Hero.css";
import { useEffect, useRef } from "react";
import Header from "@/app/components/Header";


export default function Hero() {
  return <>
    <Desktop />
    <Mobile />
  </>;
}

const Desktop = () => {
    const textRef = useRef(null);
    const textRef2 = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    useEffect(() => {
      const handleMouseOver = (event) => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
          event.target.innerText = event.target.dataset.value
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }
          iteration += 1 / 3;
        }, 30);
      };

      textRef.current.addEventListener("mouseover", handleMouseOver);
      textRef2.current.addEventListener("mouseover", handleMouseOver);
      return () => {
        textRef.current.removeEventListener("mouseover", handleMouseOver);
        textRef2.current.removeEventListener("mouseover", handleMouseOver);
    }
    }, [letters]);

  //   return (
  //     <h1 ref={textRef} data-value="Your Text">
  //       Your Text
  //     </h1>
  //   );
  // };

  return (
    <div className="h-[100svh] hidden lg:flex lg:flex-col">
      <div className="h-[10%] pl-16 pt-10">
        <Navbar />
        <Header />
      </div>
   
      <div className="px-16  flex h-[90%] flex-col justify-around">
        <div className="flex flex-col space-y-5 pt-20">
          <div className={medium.className}>
            <p className="text-3xl text-[#F4D12F]">Multiverse of Innovation</p>
          </div>
          <div ref={textRef} data-value="Quasso" className="text-9xl">Quasso</div>
          <div ref={textRef2} data-value="Liberum" className="text-9xl">Liberum</div>
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
