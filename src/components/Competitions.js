import Image from "next/image";
const Competitions = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

const Desktop = () => {
  let competitions = [
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
  ];
  return (
    <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-20">
      <div className="pb-10 text-6xl">Competitions</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {competitions.map((competition, index) => {
          return (
            <div key={index} className="rounded-xl">
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={350}
                height={350}
                src={competition.image}
                alt={competition.title}
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
  let competitions = [
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
    {
      title: "Competition 1",
      description: "This is a competition",
      image: "/images/competition/1.jpg",
    },
  ];
  return (
    <div className="flex lg:hidden flex-col items-center justify-center w-full min-h-screen my-20">
      <div className="pb-10 text-5xl">Competitions</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {competitions.map((competition, index) => {
          return (
            <div key={index} className="rounded-xl mx-6">
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={300}
                height={300}
                src={competition.image}
                alt={competition.title}
              />
            </div>
          );
        })}
      </div>
      <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
    </div>
  );
};

export default Competitions;
