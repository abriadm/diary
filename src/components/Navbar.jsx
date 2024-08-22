import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(prev => !prev)
    }

  return (
    <>
    {/* Desktop */}
      <div className="hidden sm:inline-flex bg-transparent sm:w-full justify-between font-helvetica items-center py-6 px-28">
        <Link to="/" className="text-6xl text-[#ad9a2c] font-bold font-palmCanyon">
          Diary's
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
    <div className="inline-flex sm:hidden items-center w-full justify-between px-10 py-6">
        <h1 className="text-2xl text-[#9F8800] font-bold font-sans">Diary's</h1>
        <button onClick={handleMenu}><IoMenu className="text-3xl cursor-pointer font-medium" /></button>
    </div>
    {menu && (
        <div className="absolute z-10 top-0 right-0 h-full w-64 bg-[#E7FBE6] px-8 py-6 shadow-xl rounded-xl">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-3xl font-bold text-[#A02334]">Menu</h1>
                <button onClick={handleMenu}><IoClose className="text-4xl text-[#074173] font-bold" /></button>
            </div>
            <div className="flex flex-col my-9 gap-y-4">
                <Link to="/" className="text-2xl font-medium text-[#003C43]">Home</Link>
                <Link to="/konselor" className="text-2xl font-medium text-[#003C43]">Konselor</Link>
                <Link to="/about" className="text-2xl font-medium text-[#003C43]">About</Link>
            </div>
            <Link to="/" className="py-3 px-10 font-semibold rounded-lg bg-blue-500 text-white">Chat</Link>
        </div>
    )}
    </>
  );
}

export default Navbar;
