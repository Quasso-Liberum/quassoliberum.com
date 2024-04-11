import * as React from "react";

export default function Workshop() {
  return (
    <div className="flex flex-col">
      <div className="w-full px-5 rounded-2xl max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/images/workshop/1.jpg"
              className="grow w-full aspect-[0.88] rounded-3xl max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/images/workshop/1.jpg"
              className="grow w-full aspect-[0.88] rounded-3xl max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/images/workshop/1.jpg"
              className="grow w-full aspect-[0.88] rounded-3xl max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/images/workshop/1.jpg"
              className="rounded-3xl grow w-full aspect-[0.92] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow rounded-2xl max-md:mt-10">
              <img
                loading="lazy"
                srcSet="/images/workshop/1.jpg"
                className="w-full  rounded-3xl aspect-[0.88]"
              />
              <img
                loading="lazy"
                srcSet="/images/workshop/1.jpg"
                className="mt-24 w-full rounded-3xl aspect-[0.88] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
