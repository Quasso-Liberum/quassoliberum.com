import React from "react";
import { light, semiBold } from "./Fonts";

export default function Footer() {
  return (
    <div id="contact">
      <Desktop />
      <Mobile />
    </div>
  );
}

const Desktop = () => {
  return (
    <div className="hidden bg-black bg-opacity-35 lg:flex w-full justify-between px-16 py-10">
      <div className={semiBold.className}>
        <div className="flex flex-col space-y-3">
          <p className="text-3xl">Contact</p>
          <div className={light.className}>
            <div className="h-[150px] flex flex-col space-y-3">
              <p className="text-lg">Abhin Mohan: +918848733735</p>
              <p className="text-lg">Sooraj AT: +917994850124</p>
              <p className="text-lg">
                <a href="https://www.quassoliberum.com/">quassoliberum.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={semiBold.className}>
        <div className="flex flex-col space-y-3">
          <p className="text-3xl">Socials</p>
          <div className={light.className}>
            <div className="h-[150px] flex flex-col space-y-3">
              <p className="text-lg hover:underline">Instagram</p>
              <p className="text-lg hover:underline">WhatsApp Channel</p>
              <p className="text-lg hover:underline">Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div className={semiBold.className}>
        <p className="text-3xl mb-5 w-full justify-center flex">Location</p>
        <div >
          <iframe
            className="rounded-lg"
            width="200"
            height="126"
            frameborder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=college%20of%20engineering%20vadakara+(College%20of%20Engineering,%20Vadakara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="lg:hidden bg-black bg-opacity-35 flex flex-col space-y-5 justify-center items-center py-5">
      <div className="flex flex-col space-y-5">
        <p className="text-2xl w-full flex justify-center">Contact</p>
        <div className={light.className}>
          <p className="text-lg">Abhin Mohan: +918848733735</p>
          <p className="text-lg">Sooraj AT: +917994850124</p>
          <p className="text-lg">
            <a href="https://www.quassoliberum.com/">www.quassoliberum.com</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <p className="text-2xl w-full flex justify-center">Socials</p>
        <div className={light.className}>
          <a href="https://www.instagram.com/quasso_liberum">
            <p className="text-lg hover:underline">Instagram</p>
          </a>
          <a href="https://whatsapp.com/channel/0029VaWsIGFK5cDGw7XOwK1q">
            <p className="text-lg hover:underline">WhatsApp Channel</p>
          </a>
          <a href="https://www.youtube.com/@quassoliberum6004">
            <p className="text-lg hover:underline">Youtube</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <p className="text-2xl w-full flex justify-center">Location</p>
        <iframe
          className="rounded-lg"
          width="200"
          height="150"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=college%20of%20engineering%20vadakara+(College%20of%20Engineering,%20Vadakara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
};
