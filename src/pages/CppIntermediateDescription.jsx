import React from "react";
import CPlusPlusImage from "../assets/CPP.webp"; 
import { Link } from "react-router-dom";

const CppIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz C++ For Intermediate
        </h1>

        {/* Gambar C++ */}
        <div className="text-center mb-8">
          <img
            src={CPlusPlusImage}
            alt="C++"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz C++ Intermediate adalah sebuah
            kuis yang dirancang untuk menguji pengetahuan lebih lanjut tentang
            bahasa pemrograman C++. Kuis ini mencakup berbagai topik yang lebih
            mendalam terkait pemrograman C++ dan cara-cara menyelesaikan masalah
            dengan pendekatan yang lebih kompleks.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            C++ tingkat menengah. Meningkatkan kemampuan kamu dalam menulis kode
            C++ yang efisien dan modular. Memperkenalkan teknik pemrograman yang
            lebih canggih untuk menyelesaikan berbagai masalah.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Pointer dan Referensi:</strong> Memahami penggunaan
              pointer dan referensi di C++ untuk pengelolaan memori yang
              efisien.
            </li>
            <li>
              <strong>Overloading Operator:</strong> Menggunakan operator
              overloading untuk memperluas fungsionalitas operator di C++.
            </li>
            <li>
              <strong>Template Function dan Class:</strong> Memahami konsep
              template dalam C++ untuk membuat kode lebih generik dan fleksibel.
            </li>
            <li>
              <strong>Exception Handling:</strong> Teknik untuk menangani error
              dalam kode menggunakan `try`, `catch`, dan `throw` untuk kontrol
              alur program.
            </li>
            <li>
              <strong>Standard Template Library (STL):</strong> Menggunakan
              berbagai fitur dari STL seperti vector, map, set, dan
              algoritma-algoritma standar di C++.
            </li>
            <li>
              <strong>Inheritance dan Polimorfisme:</strong> Memahami konsep
              pewarisan dan polimorfisme dalam pemrograman berbasis objek di
              C++.
            </li>
            <li>
              <strong>Memory Management:</strong> Memahami pengelolaan memori
              menggunakan `new`, `delete`, serta teknik pengelolaan memori
              lainnya.
            </li>
            <li>
              <strong>Multi-threading dan Concurrency:</strong> Memahami
              dasar-dasar multi-threading dan cara mengelola thread di C++.
            </li>
          </ul>

          <p>
            <strong>Format Kuis:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Jumlah Soal:</strong> 50 soal
            </li>
            <li>
              <strong>Durasi:</strong> 1 Jam
            </li>
            <li>
              <strong>Level:</strong> Intermediate
            </li>
          </ul>

          <p>
            <strong>Cara Kerja:</strong> Setiap soal dirancang untuk menguji
            pengetahuan tingkat menengah tentang C++. Setelah menjawab soal,
            kamu akan mendapatkan penjelasan singkat untuk memperdalam
            pemahaman. Soal-soal melibatkan konsep-konsep seperti pointer,
            template, exception handling, dan OOP.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Keterampilan:</strong> Kuis ini membantu kamu
              memperdalam pengetahuan C++ untuk mempersiapkan projek lebih
              lanjut.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar dengan menyelesaikan masalah
              yang lebih kompleks dan melibatkan teknik tingkat menengah.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan C++ tingkat menengah setelah menyelesaikan kuis
              ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal
            konsep-konsep lanjutan dalam C++!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/cpp/intermediate"}>
              <button className="p-5 bg-blue-500 w-52 xl:w-96 cursor-pointer rounded-xl text-2xl text-white m-10 hover:bg-blue-600">
                Start Quizz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppIntermediateDescription;
