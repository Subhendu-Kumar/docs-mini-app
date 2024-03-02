import logo from "../assets/react.svg";

function bg() {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <div className="w-full px-40 py-10 font-normal text-[20px] flex justify-between text-zinc-400">
        <img src={logo} alt="app logo" />
        <p>My docs app</p>
        <p>About</p>
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[5vw] text-zinc-950 leading-none font-semibold tracking-tighter">
        Welcome To My DOCs...
      </h1>
    </div>
  );
}

export default bg;
