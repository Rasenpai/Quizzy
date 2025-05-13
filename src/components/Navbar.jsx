import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);

  // Tutup navbar saat klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="flex justify-between items-center text-black p-5 xl:py-7 px-8 xl:px-32">
          <Link to={"/"} className="text-xl font-bold focus:outline-none">
            Quizzy
          </Link>

          {/* Menu navigasi */}
          {/*  Top Navbar */}
          <ul className="space-x-12 hidden items-center font-semibold text-base ml-12 xl:flex">
            <li>
              <Link
                to="/"
                className="list-none p-3 hover:bg-blue-500 hover:text-white rounded-md transition-all focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/quiz"}
                className="list-none p-3 hover:bg-blue-500 hover:text-white rounded-md transition-all focus:outline-none"
              >
                Quizz
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="list-none p-3 hover:bg-blue-500 hover:text-white rounded-md transition-all focus:outline-none"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="list-none p-3 hover:bg-blue-500 hover:text-white rounded-md transition-all focus:outline-none"
              >
                Leaderboard
              </Link>
            </li>
          </ul>

          <MdMenu
            className="xl:hidden text-2xl cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          />

          {/* Overlay */}
          {openNav && (
            <div
              className="fixed inset-x-0 top-96 bottom-0 bg-black/50 opacity-50 z-40"
              onClick={() => setOpenNav(false)}
            />
          )}

          <div
            className={`absolute xl:hidden left-0 w-full bg-white rounded shadow-xl p-5 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
              openNav ? "top-16" : "-top-96"
            } z-50`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <Link
              to={"/"}
              className=" w-full text-center p-4 hover:bg-blue-500 hover:text-white rounded transition-all cursor-pointer"
            >
              <li className="list-none">Home</li>
            </Link>
            <Link
              to={"/quiz"}
              className="w-full text-center p-4 hover:bg-blue-500 hover:text-white rounded transition-all cursor-pointer"
            >
              <li className="list-none ">Quizz</li>
            </Link>
            <Link
              to={"/about"}
              className="w-full text-center p-4 hover:bg-blue-500 hover:text-white rounded transition-all cursor-pointer"
            >
              <li className="list-none">About</li>
            </Link>

            <li className="list-none w-full text-center p-4 hover:bg-blue-500 hover:text-white rounded transition-all cursor-pointer">
              Leaderboard
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
