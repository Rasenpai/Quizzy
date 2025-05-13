import React from "react";
import JavaScriptImage from "../assets/JavaScript.jpg"; // Ganti dengan gambar JavaScript
import { Link } from "react-router-dom";

const JavaScriptIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz JavaScript For Intermediate
        </h1>

        {/* Gambar JavaScript */}
        <div className="text-center mb-8">
          <img
            src={JavaScriptImage}
            alt="JavaScript"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz JavaScript Intermediate adalah
            sebuah kuis yang dirancang untuk menguji pengetahuan lebih lanjut
            tentang bahasa pemrograman JavaScript. Kuis ini mencakup berbagai
            topik yang lebih mendalam terkait pemrograman JavaScript dan
            cara-cara menyelesaikan masalah dengan pendekatan yang lebih
            kompleks.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            JavaScript tingkat menengah. Meningkatkan kemampuan kamu dalam
            menulis kode JavaScript yang efisien dan modular. Memperkenalkan
            teknik pemrograman yang lebih canggih untuk menyelesaikan berbagai
            masalah.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Penggunaan Operator:</strong> Memahami penggunaan operator
              logika dan perbandingan dalam JavaScript seperti `&&`, `||`,
              `===`, dan lainnya.
            </li>
            <li>
              <strong>Fungsi dan Lambda:</strong> Menyusun fungsi JavaScript
              lebih kompleks dengan lambda expressions dan penggunaan fungsi
              built-in seperti `map()`, `filter()`, dan `reduce()`.
            </li>
            <li>
              <strong>Penanganan Error:</strong> Teknik untuk menangani error
              dalam kode menggunakan `try`, `catch`, dan `finally` untuk kontrol
              alur program.
            </li>
            <li>
              <strong>Array, Object, dan String Methods:</strong> Memahami
              berbagai metode yang digunakan untuk manipulasi array, objek, dan
              string seperti `map()`, `reduce()`, `filter()`, dan lainnya.
            </li>
            <li>
              <strong>Callback dan Asinkronitas:</strong> Memahami konsep
              callback functions, promise, dan penggunaan `async/await` untuk
              menangani operasi asinkron.
            </li>
            <li>
              <strong>Modul dan Paket:</strong> Memahami cara mengorganisir kode
              menggunakan modul dan paket dalam JavaScript.
            </li>
            <li>
              <strong>Destructuring:</strong> Memahami cara mengambil data dari
              array dan objek dengan lebih mudah.
            </li>
            <li>
              <strong>Objek-Oriented Programming (OOP):</strong> Memahami konsep
              OOP di JavaScript, seperti pewarisan, polimorfisme, dan
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
            pengetahuan tingkat menengah tentang JavaScript. Setelah menjawab
            soal, kamu akan mendapatkan penjelasan singkat untuk memperdalam
            pemahaman. Soal-soal melibatkan konsep-konsep seperti callback,
            promise, OOP, dan manipulasi data.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Keterampilan:</strong> Kuis ini membantu kamu
              memperdalam pengetahuan JavaScript untuk mempersiapkan projek
              lebih lanjut.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar dengan menyelesaikan masalah
              yang lebih kompleks dan melibatkan teknik tingkat menengah.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan JavaScript tingkat menengah setelah menyelesaikan
              kuis ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal
            konsep-konsep lanjutan dalam JavaScript!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/javascript/intermediate"}>
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

export default JavaScriptIntermediateDescription;
