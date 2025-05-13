import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-10 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-300 text-center">
            About Us
          </h2>
          <p className="text-gray-300 text-center text-sm">
            Welcome to <span className="font-bold">Quizzy</span> — a fun and
            interactive platform where learning meets entertainment. Test your
            knowledge, discover new facts, and enjoy quizzes across various
            topics. We’re here to make learning enjoyable for everyone. Let’s
            quiz and grow together!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-300 text-center xl:text-start">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-5 text-center xl:text-start">
            <li>
              <Link to={"/"} className="hover:underline text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/quiz"} className="hover:underline text-gray-300">
                Quizz
              </Link>
            </li>
            <li>
              <Link to={"/"} className="hover:underline text-gray-300">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-300 text-center xl:text-start">
            Follow Us
          </h2>
          <ul className="flex space-x-4 justify-center xl:justify-start">
            <li>
              <a
                href="https://github.com/Rasenpai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold mb-4 text-gray-300 hover:text-gray-400 "
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rasenaa-8786ba362/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold mb-4 text-gray-300 hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-gray-600 border-t p-4 text-gray-300">
        <p>© 2025 Made with 💙 by Rasena</p>
      </div>
    </footer>
  );
};

export default Footer;
