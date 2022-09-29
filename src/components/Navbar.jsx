const Navbar = () => {
  return (
    <div className="bg-slate-900  h-16   ">
      <div className="container p-1 flex flex-row justify-between mx-auto h-full  w-full items-center">
        <div className="navbar-title text-5xl w-1/2">
          <div className="text-5xl text-cyan-500">Portfolio</div>
        </div>
        <div className="hidden md:flex felx-row justify-between p-4 w-1/2 text-white">
          <div className="hover:shadow-lg hover:bg-cyan-800 hover:text-black hover rounded-lg ">
            <a href="#Home">
              <div className="p-4 text-2xl">Home</div>
            </a>
          </div>
          <div className="hover:shadow-lg hover:bg-cyan-800 hover:text-black hover rounded-lg ">
            <a href="#About">
              <div className="p-4 text-2xl">About</div>
            </a>
          </div>
          <div className="hover:shadow-lg hover:bg-cyan-800 hover:text-black hover rounded-lg ">
            <a href="#Projects">
              <div className="p-4 text-2xl">Projects</div>
            </a>
          </div>
          <div className="hover:shadow-lg hover:bg-cyan-800 hover:text-black hover rounded-lg ">
            <a href="#about">
              <div className="p-4 text-2xl">Contact</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
