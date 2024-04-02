
const Workshops = () => {
  let workshops = [
    {title:"Workshop 1", description:"This is a workshop", image:"/workshop1.jpg"},
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="pb-10 text-6xl">Workshops</div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5">
        
        <div style={{backgroundImage:""}} className="w-96 rounded-xl h-96"></div>
      </div>
      <button className="px-3 py-2 rounded-3xl outline">Explore</button>
    </div>
  );
}

export default Workshops