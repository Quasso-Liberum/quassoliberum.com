import Image from "next/image";
const Games = () => {
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
    <div className="flex flex-col items-center justify-center w-full min-h-screen my-10">
      <div className="pb-10 text-6xl">Games</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 h-max">
        {games.map((game, index) => {
          return (
            <div key={index} className="relative w-96 rounded-xl h-96">
              <Image
                className="absolute object-contain w-full h-full rounded-xl"
                fill
                src={game.image}
                alt={game.title}
              />
            </div>
          );
        })}
      </div>
      <button className="px-3 py-2 rounded-3xl outline">Explore</button>
    </div>
  );
}

export default Games