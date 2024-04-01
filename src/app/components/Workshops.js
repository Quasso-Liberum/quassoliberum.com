import Image from 'next/image';
const Workshops = () => {
  let workshops = [
    {title:"Workshop 1", description:"This is a workshop", image:"/images/workshop/1.jpg"},
    {title:"Workshop 1", description:"This is a workshop", image:"/images/workshop/1.jpg"},
    {title:"Workshop 1", description:"This is a workshop", image:"/images/workshop/1.jpg"},
    {title:"Workshop 1", description:"This is a workshop", image:"/images/workshop/1.jpg"},
    {title:"Workshop 1", description:"This is a workshop", image:"/images/workshop/1.jpg"},
    {title:"Workshop 1", description:"This is a workshop", image:"/images/workshop/1.jpg"},
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen my-20">
      <div className="pb-10 text-6xl">Workshops</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        {workshops.map((workshop, index) => {
          return (
            <div key={index} className="relative w-96 rounded-xl h-96">
              <Image
                className="absolute object-contain w-full h-full rounded-xl"
                fill
                src={workshop.image}
                alt={workshop.title}
              />
            </div>
          );
        })}
      </div>
      <button className="px-3 py-2 rounded-3xl outline">Explore</button>
    </div>
  );
}

export default Workshops