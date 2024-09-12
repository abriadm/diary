import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      {/* Desktop */}
      <div className="flex bg-transparent z-20 w-full justify-start sm:justify-between font-helvetica sm:items-center py-3 sm:py-6 sm:px-28">
        <Link to="/" className="text-4xl ml-[1.7rem] sm:text-6xl text-[#597445] font-bold font-palmCanyon">
          Diary&#39;s
        </Link>
        <div className="flex sm:flex-row gap-x-6 font-semibold text-xl">
          <Link
            to="/"
            className="hidden sm:block transition ease-in duration-300 delay-100 hover:text-[#FF8343]"
          >
            Home
          </Link>
          <Link
            to="/konselor"
            className="hidden sm:block transition ease-in duration-300 delay-100 hover:text-[#FF8343]"
          >
            Konselor
          </Link>
          <Link
            to="/about"
            className="hidden sm:block transition ease-in duration-300 delay-100 hover:text-[#FF8343]"
          >
            About
          </Link>
        </div>
        <Link
          to="https://discord.gg/y5Qa6PPW"
          className="text-white hidden sm:block font-semibold rounded-lg py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-lg duration-300"
        >
          Chat
        </Link>
      </div>
    </>
  );
}

export default Navbar;
