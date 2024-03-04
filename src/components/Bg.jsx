import logo from "../assets/react.svg";

function bg() {
  return (
    <div className="w-full min-h-screen absolute z-[2]">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 py-6 md:py-10 flex justify-between items-center text-zinc-400">
        <img src={logo} alt="app logo" className="h-10 md:h-12" />
        <p className="text-lg md:text-xl">My docs app</p>
        <p className="text-lg md:text-xl">About</p>
      </div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl lg:text-7xl text-zinc-950 leading-none font-semibold tracking-tighter">
        Welcome To My DOCs...
      </h1>
    </div>
  );
}

export default bg;
