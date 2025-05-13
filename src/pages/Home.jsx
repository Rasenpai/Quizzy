import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.svg";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiMathOperationsFill } from "react-icons/pi";
import { MdScience } from "react-icons/md";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto p-4 mt-20 xl:mt-32">
        <div className="flex flex-col justify-center items-center gap-x-10 xl:flex-row">
          <div className="title text-center order-2 xl:order-1">
            <h1 className="text-xl font-bold m-5 md:text-2xl xl:m-10 xl:text-5xl">
              Test Your Knowledge With Quizzy
            </h1>
            <p className="font-semibold m-5 md:text-xl xl:m-10 xl:text-xl">
              Challenge yourself with a variety of quizzes on diffrent topics.
            </p>
            <Link to={"/quiz"} className="focus:bg-blue-500 focus:outline-none">
              <button className="bg-blue-500 text-white p-5 w-52 rounded-xl cursor-pointer hover:bg-blue-600 focus:bg-blue-500 focus:outline-none">
                Get Started
              </button>
            </Link>
          </div>
          <img
            src={Hero}
            alt="hero"
            className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[900px] order-1"
          />
        </div>
      </div>

      {/* Main  */}
      <main className="container w-full mx-auto p-4 mt-10 m-20">
        <h1 className="text-2xl font-bold text-center mb-10 m-10">
          Popular Topics
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {[
            {
              icon: <FaPython className="text-6xl text-blue-500" />,
              label: "Python",
            },
            {
              icon: <IoLogoJavascript className="text-6xl text-yellow-400" />,
              label: "JavaScript",
            },
            {
              icon: (
                <PiMathOperationsFill className="text-6xl text-green-500" />
              ),
              label: "Math",
            },
            {
              icon: <MdScience className="text-6xl text-purple-500" />,
              label: "Sains",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white py-6 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              {item.icon}
              <span className="mt-3 text-sm font-semibold text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold text-center mb-10 m-20">
          How It Works
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 justify-items-center">
          <div className="flex flex-col items-center bg-white py-6 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <h1 className="text-6xl text-blue-500">1</h1>
            <span className="mt-2 text-sm font-medium">Pilih topik</span>
          </div>

          <div className="flex flex-col items-center bg-white py-6 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <h1 className="text-6xl text-blue-500">2</h1>
            <span className="mt-2 text-sm font-medium">Jawab soal</span>
          </div>
          <div className="flex flex-col items-center bg-white py-6 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <h1 className="text-6xl text-blue-500">3</h1>
            <span className="mt-2 text-sm font-medium">
              Dapatkan score & Ranking
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
