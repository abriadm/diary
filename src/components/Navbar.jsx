import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

function Navbar() {

  const [open, isOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    isOpen((prev) => !prev);
  }

  const handleClickOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      isOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);

    return () => document.removeEventListener('mousedown', handleClickOutSide);
  }, [])


  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:inline-flex bg-transparent sm:w-full justify-between font-helvetica items-center py-6 px-28">
        <Link to="/" className="text-6xl text-[#ad9a2c] font-bold font-palmCanyon">
          Diary&#39;s
        </Link>
        <div className="flex sm:flex-row gap-x-6 font-semibold text-xl">
          <Link
            to="/"
            className="transition ease-in duration-300 delay-100 hover:text-[#FF8343]"
          >
            Home
          </Link>
          <Link
            to="/konselor"
            className="transition ease-in duration-300 delay-100 hover:text-[#FF8343]"
          >
            Konselor
          </Link>
          <Link
            to="/about"
            className="transition ease-in duration-300 delay-100 hover:text-[#FF8343]"
          >
            About
          </Link>
        </div>
        <Link
          to="https://discord.gg/Zpa85fRy"
          className="text-white font-semibold rounded-lg py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-lg duration-300"
        >
          Chat
        </Link>
      </div>

      {/* Mobile */}
      <div className="inline-flex fixed top-0 sm:hidden items-center justify-between  overflow-hidden w-[90%] py-4 mt-2">
        <h1 className="text-4xl font-palmCanyon pl-3">Diary&#39;s</h1>
        <button onClick={handleClick} className="transition ease-in duration-300 delay-100 hover:bg-[#FFEAC5] p-1 rounded-md text-[#603F26] hover:shadow-md"><IoMenu className="text-3xl" /></button>
      </div>
      <div ref={menuRef} className={`absolute z-40 transition ease-in duration-300 top-0 right-0 ${open ? 'translate-x-0' : 'translate-x-72'} w-64 bg-[#FFEAC5] text-[#603F26] h-screen`}>
        <div className="flex items-center justify-between py-4 px-6">
          <h1 className="font-palmCanyon text-4xl">Diary&#39;s</h1>
          <button onClick={handleClick} className="pt-2 hover:text-black transition ease-in duration-200"><IoClose className="text-4xl" /></button>
        </div>
        <div className="flex flex-col mt-8 gap-y-3 px-6">
          <Link className="text-2xl font-helvetica font-semibold transition ease-in duration-300 hover:text-black" to='/'>Home</Link>
          <Link className="text-2xl font-helvetica font-semibold transition ease-in duration-300 hover:text-black" to='/konselor'>Konselor</Link>
          <Link className="text-2xl font-helvetica font-semibold transition ease-in duration-300 hover:text-black" to='/about'>About</Link>
        </div>
        <hr className="bg-[#603F26] my-8 w-[80%] ml-6" />
      </div>
    </>
  );
}

export default Navbar;
