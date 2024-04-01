import Image from 'next/image';
const Competitions = () => {
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
    <div className="flex flex-col items-center justify-center w-full h-screen my-20 mt-36">
      <div className="py-10 text-6xl">Competitions</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {competitions.map((competition, index) => {
          return (
            <div key={index} className="relative my-10 w-96 rounded-xl h-96">
              <Image
                className="absolute object-contain w-full h-full rounded-xl"
                fill
                src={competition.image}
                alt={competition.title}
              />
            </div>
          );
        })}
        {/* <div style={{backgroundImage:""}} className="w-96 rounded-xl h-96"></div> */}
      </div>
      <button className="px-3 py-2 rounded-3xl outline">Explore</button>
    </div>
  );
}

export default Competitions