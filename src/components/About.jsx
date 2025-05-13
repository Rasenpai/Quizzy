// About.jsx

import React from "react";
import { Brain, Code, BookOpen, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-2">
          <Brain className="w-8 h-8 text-purple-600" />
          Tentang <span className="text-purple-600">Quizzy</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Platform kuis interaktif buat Kamu yang mau belajar sambil
          seru-seruan!
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Rocket className="text-green-500" />
            Misi Kami
          </h2>
          <p className="text-gray-700 mt-2">
            Kami pengen bikin belajar jadi lebih asik dan menantang. Lewat
            kumpulan kuis yang terus diupdate, Kamu bisa ningkatin skill sambil
            having fun!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Code className="text-blue-500" />
            Topik Kuis
          </h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              <strong>Pemrograman:</strong> Python, C++, JavaScript, dan lainnya
            </li>
            <li>
              <strong>Pelajaran Umum:</strong> Matematika, Fisika, Kimia, dll
            </li>
            <li>Kuis ringan dan fun buat isi waktu luang Kamu</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <BookOpen className="text-yelKamuw-500" />
            About Developer
          </h2>
          <p className="text-gray-700 mt-2">
            Hai! Saya <strong>Rasena</strong>, developer yang suka dunia coding
            dan teknologi. Saya bikin{" "}
            <span className="font-semibold text-purple-600">Quizzy</span> supaya
            belajar bisa lebih seru dan nggak ngebosenin. Saya percaya, belajar
            gak harus selalu serius — lewat kuis-kuis ringan tapi berbobot, Kamu
            bisa terus berkembang sambil enjoy!
          </p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg text-center">
          <p className="text-purple-700 text-lg font-semibold">
            Yuk mulai belajar dan asah skill Kamu bareng{" "}
            <span className="underline">Quizzy</span>! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
