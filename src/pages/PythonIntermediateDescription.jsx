import React from "react";
import Python from "../assets/Python.jpg";
import { Link } from "react-router-dom";

const PythonIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Python For Intermediate
        </h1>

        {/* Gambar Python */}
        <div className="text-center mb-8">
          <img
            src={Python}
            alt="Python"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Python Intermediate adalah sebuah
            kuis yang dirancang untuk menguji pengetahuan lebih lanjut tentang
            bahasa pemrograman Python. Kuis ini mencakup berbagai topik yang
            lebih mendalam terkait pemrograman Python dan cara-cara
            menyelesaikan masalah dengan pendekatan yang lebih kompleks.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            Python tingkat menengah. Meningkatkan kemampuan kamu dalam menulis
            kode Python yang efisien dan modular. Memperkenalkan teknik
            pemrograman yang lebih canggih untuk menyelesaikan berbagai masalah.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Penggunaan Fungsi dan Lambda:</strong> Menyusun fungsi
              Python lebih kompleks dengan lambda expressions, arguments
              variabel, dan penggunaan fungsi built-in seperti `map()`,
              `filter()`.
            </li>
            <li>
              <strong>Penanganan Exception:</strong> Teknik untuk menangani
              error dalam kode menggunakan `try`, `except`, `finally` untuk
              kontrol alur program.
            </li>
            <li>
              <strong>List, Set, dan Dictionary Comprehension:</strong>{" "}
              Menggunakan teknik comprehension untuk membuat list, set, dan
              dictionary secara lebih efisien.
            </li>
            <li>
              <strong>Modul dan Paket:</strong> Memahami cara mengorganisir kode
              menggunakan modul dan paket dalam Python.
            </li>
            <li>
              <strong>Penggunaan Generator dan Iterators:</strong> Memahami
              konsep generator dan iterators untuk efisiensi memori dalam
              pemrograman.
            </li>
            <li>
              <strong>Objek-Oriented Programming (OOP):</strong> Memahami cara
              kerja konsep OOP di Python, seperti pewarisan, polimorfisme, dan
              enkapsulasi.
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
            pengetahuan tingkat menengah tentang Python. Setelah menjawab soal,
            kamu akan mendapatkan penjelasan singkat untuk memperdalam
            pemahaman. Soal-soal melibatkan konsep-konsep seperti exception
            handling, lambda, comprehension, dan OOP.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Keterampilan:</strong> Kuis ini membantu kamu
              memperdalam pengetahuan Python untuk mempersiapkan projek lebih
              lanjut.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar dengan menyelesaikan masalah
              yang lebih kompleks dan melibatkan teknik tingkat menengah.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan Python tingkat menengah setelah menyelesaikan kuis
              ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal
            konsep-konsep lanjutan dalam Python!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/python/intermediate"}>
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

export default PythonIntermediateDescription;
