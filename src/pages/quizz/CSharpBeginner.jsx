import React, { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../../data/CSharp/quiz_c_sharp_beginner.json";
import CountdownTimer from "../../components/CountdownTimer";

const CSharpBeginner = ({ duration }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const getButtonStyle = (option) => {
    if (!selectedOption) return "bg-blue-500 hover:bg-blue-600";
    const isCorrect = option === questions[currentQuestion].answer;
    const isSelected = option === selectedOption;
    if (isSelected && isCorrect) return "bg-green-500";
    if (isSelected && !isCorrect) return "bg-red-500";
    if (!isSelected && isCorrect) return "bg-green-500";
    return "bg-blue-500";
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setTimeLeft(duration);
  };

  if (showResult) {
    return (
      <div className="wrapper p-4 text-center mt-32 xl:mt-[350px]">
        <h1 className="text-xl xl:text-3xl font-bold">Kuis Selesai!</h1>
        <p className="mt-4 text-xl">
          Nilai kamu:{" "}
          <i className="font-bold">
            {Math.round((score / questions.length) * 100)}/100
          </i>{" "}
          dari {questions.length} soal
        </p>
        <div className="flex flex-col xl:flex-row justify-center items-center space-y-5">
          <button
            className="p-5 bg-blue-500 w-32 xl:w-96 cursor-pointer rounded-xl xl:text-2xl text-white mt-10 xl:m-10 hover:bg-blue-600"
            onClick={handleRetry}
          >
            Coba Lagi
          </button>
          <Link to={"/quiz"}>
            <button className="p-5 bg-blue-500 xl:w-96 cursor-pointer rounded-xl xl:text-2xl text-white xl:m-10 hover:bg-blue-600">
              Back to menu
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-5 xl:mt-32 max-w-2xl">
        <h1 className="text-center">
          Note! <br />{" "}
          <i>
            Jangan sampai halaman website keRefresh, jika keRefresh semua
            progress akan dimulai dari awal!
          </i>
        </h1>
        <h1 className="text-2xl font-bold m-10 text-center">
          Sisa waktu pengerjaan:{" "}
          <CountdownTimer
            initialSeconds={timeLeft}
            onTimeUp={handleTimeUp}
            onTick={(s) => setTimeLeft(s)}
          />
        </h1>
        <h2 className="text-sm xl:text-[1.5rem] text-center font-semibold mb-6 m-10">
          Soal {currentQuestion + 1}: <br />
          {questions[currentQuestion].question}
        </h2>
        <div className="flex flex-col gap-3 mb-20">
          {questions[currentQuestion].options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(option)}
              disabled={!!selectedOption}
              className={`p-3 rounded w-full text-left cursor-pointer text-white ${getButtonStyle(
                option
              )}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSharpBeginner;
