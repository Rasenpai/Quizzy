import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./components/About";
import PythonBeginner from "./pages/PythonBeginnerDeskription";
import JavascriptBeginner from "./pages/JavascriptBeginnerDeskription";
import CppBeginner from "./pages/CppBeginnerDeskription";
import CSharpBeginner from "./pages/CSharpBeginnerDeskription";
import MathBeginner from "./pages/MathBeginnerDeskription";
import ChemistryBeginner from "./pages/ChmistryBeginnerDeskription";
import PhysicsBeginner from "./pages/PhysicsBeginnerDeskription";
import EconomyBeginner from "./pages/EconomyBeginnerDeskription";
import PythonBeginnerQuestion from "./pages/quizz/PythonBeginner";
import JavascriptBeginnerQuestion from "./pages/quizz/JavascriptBeginner";
import CppBeginnerQuestion from "./pages/quizz/CppBeginner";
import CSharpBeginnerQuestion from "./pages/quizz/CSharpBeginner";
import MathBeginnerQuestion from "./pages/quizz/MathBeginner";
import ChemistryBeginnerQuestion from "./pages/quizz/ChemistryBeginner";
import PhysicsBeginnerQuestion from "./pages/quizz/PhysicsBeginner";
import EconomyBeginnerQuestion from "./pages/quizz/EconomyBeginner";
// Intermediate
import PythonIntermediate from "./pages/PythonIntermediateDescription";
import JavascriptIntermediate from "./pages/JavascriptIntermediateDescription";
import CppIntermediate from "./pages/CppIntermediateDescription";
import CSharpIntermediate from "./pages/CSharpIntermediateDescription";

import MathIntermediate from "./pages/MathIntermediateDescription";
import ChemistryIntermediate from "./pages/ChemistryIntermediateDescription";
import PhysicsIntermediate from "./pages/PhysicsIntermediateDescription";
import EconomyIntermediate from "./pages/EconomyIntermediateDescription";

// Intermediate
import PythonIntermediateQuestion from "./pages/quizz/PythonIntermediate";
import JavascriptIntermediateQuestion from "./pages/quizz/JavascriptIntermediate";
import CppIntermediateQuestion from "./pages/quizz/CppIntermediate";
import CSharpIntermediateQuestion from "./pages/quizz/CSharpIntermediate";

import MathIntermediateQuestion from "./pages/quizz/MathIntermediate";
import ChemistryIntermediateQuestion from "./pages/quizz/ChemistryIntermediate";
import PhysicsIntermediateQuestion from "./pages/quizz/PhysicsIntermediate";
import EconomyIntermediateQuestion from "./pages/quizz/EconomyIntermediate";

const App = () => {
  const location = useLocation();
  const hideLayout = [
    "/python/beginner",
    "/javascript/beginner",
    "/cpp/beginner",
    "/csharp/beginner",
    "/math/beginner",
    "/chemistry/beginner",
    "/physics/beginner",
    "/economy/beginner",
    "/python/intermediate",
    "/javascript/intermediate",
    "/cpp/intermediate",
    "/csharp/intermediate",
    "/math/intermediate",
    "/chemistry/intermediate",
    "/physics/intermediate",
    "/economy/intermediate",
  ].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        {/* Beginner Level */}
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz/python/beginner" element={<PythonBeginner />} />
        <Route
          path="/quiz/javascript/beginner"
          element={<JavascriptBeginner />}
        />
        <Route path="/quiz/c++/beginner" element={<CppBeginner />} />
        <Route path="/quiz/csharp/beginner" element={<CSharpBeginner />} />
        <Route path="/quiz/mathematics/beginner" element={<MathBeginner />} />
        <Route
          path="/quiz/chemistry/beginner"
          element={<ChemistryBeginner />}
        />
        <Route path="/quiz/physics/beginner" element={<PhysicsBeginner />} />
        <Route path="/quiz/economy/beginner" element={<EconomyBeginner />} />

        {/* Intermediate level */}
        <Route
          path="/quiz/python/intermediate"
          element={<PythonIntermediate />}
        />
        <Route
          path="/quiz/javascript/intermediate"
          element={<JavascriptIntermediate />}
        />
        <Route path="/quiz/c++/intermediate" element={<CppIntermediate />} />
        <Route
          path="/quiz/csharp/intermediate"
          element={<CSharpIntermediate />}
        />
        <Route
          path="/quiz/mathematics/intermediate"
          element={<MathIntermediate />}
        />
        <Route
          path="/quiz/chemistry/intermediate"
          element={<ChemistryIntermediate />}
        />
        <Route
          path="/quiz/physics/intermediate"
          element={<PhysicsIntermediate />}
        />
        <Route
          path="/quiz/economy/intermediate"
          element={<EconomyIntermediate />}
        />

        {/* Beginner Level */}
        <Route
          path="/python/beginner"
          element={<PythonBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/javascript/beginner"
          element={<JavascriptBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/cpp/beginner"
          element={<CppBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/csharp/beginner"
          element={<CSharpBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/math/beginner"
          element={<MathBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/chemistry/beginner"
          element={<ChemistryBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/physics/beginner"
          element={<PhysicsBeginnerQuestion duration={1800} />}
        />
        <Route
          path="/economy/beginner"
          element={<EconomyBeginnerQuestion duration={1800} />}
        />

        {/* Intermediate level */}
        <Route
          path="/python/intermediate"
          element={<PythonIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/javascript/intermediate"
          element={<JavascriptIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/cpp/intermediate"
          element={<CppIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/csharp/intermediate"
          element={<CSharpIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/math/intermediate"
          element={<MathIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/chemistry/intermediate"
          element={<ChemistryIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/physics/intermediate"
          element={<PhysicsIntermediateQuestion duration={3600} />}
        />
        <Route
          path="/economy/intermediate"
          element={<EconomyIntermediateQuestion duration={3600} />}
        />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
