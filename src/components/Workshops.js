import Image from "next/image";
const Workshops = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default Workshops;

const Desktop = () => {
  let workshops = [
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col items-center justify-center w-full min-h-screen my-20">
      <div className="pb-10 text-6xl">Workshops</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {workshops.map((workshop, index) => {
          return (
            <div key={index} className="rounded-xl">
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={350}
                height={350}
                src={workshop.image}
                alt={workshop.title}
              />
            </div>
          );
        })}
      </div>
      <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
    </div>
  );
};

const Mobile = () => {
  let workshops = [
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
    {
      title: "Workshop 1",
      description: "This is a workshop",
      image: "/images/workshop/1.jpg",
    },
  ];
  return (
    <div className="lg:hidden flex flex-col items-center justify-center w-full min-h-screen my-20">
      <div className="pb-10 text-5xl">Workshops</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {workshops.map((workshop, index) => {
          return (
            <div key={index} className="rounded-xl">
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={300}
                height={300}
                src={workshop.image}
                alt={workshop.title}
              />
            </div>
          );
        })}
      </div>
      <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
    </div>
  );
};
