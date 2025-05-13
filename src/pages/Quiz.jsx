import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { TbNumber50Small, TbNumber25Small } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import Python from "../assets/Python.jpg";
import Javascript from "../assets/Javascript.jpg";
import CPP from "../assets/CPP.webp";
import C_Sharp from "../assets/C_Sharp.png";
import Math from "../assets/Math.jpg";
import Sains from "../assets/Sains.jpg";
import Physics from "../assets/Physics.jpg";
import Economy from "../assets/Economy.jpg";

const Quiz = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const beginnerItems = [
    {
      title: "Python",
      desc: "Quizz about Python basic syntax, variables, and simple functions at a beginner level.",
      img: Python,
      soal: 50,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "JavaScript",
      desc: "Quizz about JavaScript basic syntax, variables, and simple functions at a beginner level.",
      img: Javascript,
      soal: 50,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "C++",
      desc: "Quizz about C++ basic syntax, variables, and functions at a beginner level.",
      img: CPP,
      soal: 50,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "CSharp",
      desc: "Quizz about C# basic syntax, variables, and functions at a beginner level.",
      img: C_Sharp,
      soal: 50,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "Mathematics",
      desc: "Quizz about basic math concepts such as arithmetic, fractions, and basic algebra.",
      img: Math,
      soal: 25,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "Chemistry",
      desc: "Quizz about basic chemistry concepts such as elements, compounds, and basic reactions.",
      img: Sains,
      soal: 25,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "Physics",
      desc: "Quizz about basic physics concepts such as motion, forces, and simple laws of physics.",
      img: Physics,
      soal: 25,
      waktu: "30 Min",
      level: "Beginner",
    },
    {
      title: "Economy",
      desc: "Quizz about basic economic principles such as supply and demand, market structures, and basic economic terms.",
      img: Economy,
      soal: 25,
      waktu: "30 Min",
      level: "Beginner",
    },
  ];

  const intermediateItems = [
    {
      title: "Python",
      desc: "Quizz about Python syntax, functions, and data structures at an intermediate level.",
      img: Python,
      soal: 50,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "JavaScript",
      desc: "Quizz about JavaScript syntax, functions, and DOM manipulation at an intermediate level.",
      img: Javascript,
      soal: 50,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "C++",
      desc: "Quizz about C++ syntax, functions, and object-oriented programming at an intermediate level.",
      img: CPP,
      soal: 50,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "CSharp",
      desc: "Quizz about C# syntax, functions, and object-oriented programming at an intermediate level.",
      img: C_Sharp,
      soal: 50,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "Mathematics",
      desc: "Quizz about intermediate mathematics concepts including algebra, geometry, and calculus.",
      img: Math,
      soal: 25,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "Chemistry",
      desc: "Quizz about intermediate chemistry topics including chemical reactions, bonding, and stoichiometry.",
      img: Sains,
      soal: 25,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "Physics",
      desc: "Quizz about intermediate physics topics including motion, energy, and forces.",
      img: Physics,
      soal: 25,
      waktu: "1 Hour",
      level: "Intermediate",
    },
    {
      title: "Economy",
      desc: "Quizz about intermediate economics concepts including supply and demand, market structures, and fiscal policy.",
      img: Economy,
      soal: 25,
      waktu: "1 Hour",
      level: "Intermediate",
    },
  ];

  // Filter berdasarkan search term
  const filteredBeginnerItems = beginnerItems.filter((item) =>
    (item.title + item.desc).toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredIntermediateItems = intermediateItems.filter((item) =>
    (item.title + item.desc).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <div className="w-[90%] xl:w-full mx-auto mt-20 sm:mt-28 md:mt-32 px-4 sm:px-6 lg:px-8 max-w-5xl py-8 bg-blue-500 rounded-lg text-white relative overflow-hidden">
        <h2 className="text-xl xl:text-3xl font-bold mb-2 text-center md:text-left">
          Cari Quizz yang ingin kamu kerjakan disini
        </h2>
        <p className="text-sm sm:text-base mb-6 text-center md:text-left">
          Lebih dari 250+ quizz yang dapat kamu kerjakan disini (Soon)
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full shadow-md overflow-hidden max-w-full xl:max-w-2xl mx-auto md:mx-0 px-3">
          <input
            type="text"
            placeholder="Cari Materi"
            className="flex-1 w-full text-gray-800 focus:outline-none py-2 placeholder:text-center xl:placeholder:text-start xl:p-5"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>  

        {/* Trending Keywords */}
        <div className="mt-6 text-white">
          <p className="mb-2 text-center md:text-left">Trending Keywords:</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {["Python", "JavaScript", "Math", "Chemistry"].map((keyword, i) => (
              <span
                key={i}
                className="bg-white text-blue-500 px-4 py-1 rounded-full text-sm font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quizz Section */}
      <div className="wrapper py-5 px-3">
        <div className="container mx-auto">
          <h1 className="m-10 text-2xl font-bold text-center xl:text-start">
            Quizz Beginner
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
            {filteredBeginnerItems.map((item, index) => (
              <Link
                to={`/quiz/${item.title.toLowerCase()}/beginner`}
                key={index}
              >
                <div className="box bg-white h-full p-3 cursor-pointer rounded-2xl transition-transform hover:scale-105 hover:shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto rounded w-full h-52 object-cover"
                  />
                  <div className="deskripsi text-sm p-5">
                    <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className="flex m-5 gap-5">
                      <div className="item flex items-center gap-1">
                        {item.soal === 50 ? (
                          <TbNumber50Small className="text-2xl" />
                        ) : (
                          <TbNumber25Small className="text-2xl" />
                        )}
                        <p className="text-center">Soal</p>
                      </div>
                      <div className="item flex gap-2 items-center">
                        <FaRegClock className="text-sm" />
                        <p className="text-center">{item.waktu}</p>
                      </div>
                      <div className="item flex gap-2 items-center">
                        <FaRegChartBar className="text-sm" />
                        <p className="text-center">{item.level}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Intermediate Section */}
        <div className="container mx-auto mt-16">
          <h1 className="m-10 text-2xl font-bold text-center xl:text-start">
            Quizz Intermediate
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
            {filteredIntermediateItems.map((item, index) => (
              <Link
                to={`/quiz/${item.title.toLowerCase()}/intermediate`}
                key={index}
              >
                <div className="box bg-white h-full p-3 cursor-pointer rounded-2xl transition-transform hover:scale-105 hover:shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto rounded w-full h-52 object-cover"
                  />
                  <div className="deskripsi text-sm p-5">
                    <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className="flex m-5 gap-5">
                      <div className="item flex items-center gap-1">
                        {item.soal === 50 ? (
                          <TbNumber50Small className="text-2xl" />
                        ) : (
                          <TbNumber25Small className="text-2xl" />
                        )}
                        <p className="text-center">Soal</p>
                      </div>
                      <div className="item flex gap-2 items-center">
                        <FaRegClock className="text-sm" />
                        <p className="text-center">{item.waktu}</p>
                      </div>
                      <div className="item flex gap-2 items-center">
                        <FaRegChartBar className="text-sm" />
                        <p className="text-center">{item.level}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
