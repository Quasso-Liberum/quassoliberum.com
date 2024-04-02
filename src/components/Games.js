import Image from "next/image";
const Games = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

const Desktop = () => {
  let games = [
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
  ];
  return (
    <div className="lg:flex hidden flex-col items-center justify-center w-full min-h-screen my-10">
      <div className="pb-10 text-6xl ">Games</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 h-max">
        {games.map((game, index) => {
          return (
            <div key={index} className="rounded-xl">
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={350}
                height={350}
                src={game.image}
                alt={game.title}
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
  let games = [
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
    {
      title: "Game 1",
      description: "This is a game",
      image: "/images/game/1.jpg",
    },
  ];
  return (
    <div className="flex lg:hidden flex-col items-center justify-center w-full min-h-screen my-10">
      <div className="pb-10 text-5xl ">Games</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 h-max">
        {games.map((game, index) => {
          return (
            <div key={index} className="rounded-xl">
              <Image
                className="object-contain w-full h-full rounded-xl"
                width={300}
                height={300}
                src={game.image}
                alt={game.title}
              />
            </div>
          );
        })}
      </div>
      <button className="px-3 py-2 mt-10 rounded-3xl outline">Explore</button>
    </div>
  );
};

export default Games;
