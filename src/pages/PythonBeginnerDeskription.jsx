import React from "react";
import Python from "../assets/Python.jpg";
import { Link } from "react-router-dom";

const PythonBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Python For Beginner
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
            <strong>Deskripsi:</strong> Quizz Python Pemula adalah sebuah kuis
            yang dirancang untuk membantu kamu menguji pemahaman dasar tentang
            bahasa pemrograman Python. Kuis ini mencakup berbagai topik penting
            yang menjadi dasar untuk memulai perjalanan pemrograman dengan
            Python.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pemahaman dasar kamu mengenai
            sintaks dan struktur kode Python. Meningkatkan kemampuan kamu dalam
            menulis kode yang bersih dan efektif. Menyediakan latihan untuk
            memperkenalkan konsep-konsep dasar yang akan sering digunakan dalam
            pengembangan aplikasi Python.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Sintaks Dasar Python:</strong> Pengenalan terhadap cara
              menulis dan menjalankan kode Python dengan benar.
            </li>
            <li>
              <strong>Variabel dan Tipe Data:</strong> Menggunakan variabel dan
              mengenal tipe data seperti string, integer, float, dan boolean.
            </li>
            <li>
              <strong>Pengkondisian dan Perulangan:</strong> Menggunakan if,
              else, elif, dan loop (for, while) untuk mengontrol alur eksekusi
              program.
            </li>
            <li>
              <strong>Fungsi:</strong> Cara membuat dan menggunakan fungsi untuk
              mengorganisir kode Python agar lebih modular dan terstruktur.
            </li>
            <li>
              <strong>Struktur Data:</strong> Mengenal berbagai struktur data di
              Python seperti list, tuple, set, dan dictionary serta cara
              penggunaannya.
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
              <strong>Durasi:</strong> 30 menit
            </li>
            <li>
              <strong>Level:</strong> Beginner (Pemula)
            </li>
          </ul>

          <p>
            <strong>Cara Kerja:</strong> Setiap soal dirancang untuk menguji
            pengetahuan dasar Python dan memberi penjelasan singkat tentang
            konsep yang diujikan setelah kamu menjawab. Beberapa soal berfokus
            pada sintaks dan penggunaan perintah dasar, sementara soal lainnya
            menguji kemampuan kamu dalam memecahkan masalah menggunakan konsep
            Python.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Keterampilan:</strong> Cocok untuk kamu yang
              baru memulai belajar Python dan ingin menguji pengetahuan dasar.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dirancang agar kamu bisa
              belajar sambil mengerjakan soal-soal praktis.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan Python dasar setelah menyelesaikan kuis ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar
            Python!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/python/beginner"}>
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

export default PythonBeginnerDeskription;
