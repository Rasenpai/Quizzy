import React from "react";
import CppImg from "../assets/CPP.webp"; // Pastikan kamu punya gambar pemrograman C++
import { Link } from "react-router-dom";

const CppBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz C++ For Beginner
        </h1>

        {/* Gambar Pemrograman C++ */}
        <div className="text-center mb-8">
          <img
            src={CppImg}
            alt="C++ Programming"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Kuis Pemrograman C++ Pemula dirancang untuk menguji dan memperkuat pemahaman dasar kamu tentang konsep-konsep dasar dalam pemrograman C++. Sangat cocok untuk pelajar atau siapa saja yang baru memulai belajar C++.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pengetahuan dasar kamu tentang C++. Membantu memahami sintaks dan konsep dasar pemrograman C++ secara lebih menyenangkan. Menyediakan latihan soal sebagai media pembelajaran aktif.
          </p>

          <p>
            <strong>Topik yang Dibahas:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Sintaks Dasar C++:</strong> Mengenal struktur dasar program dan sintaks C++.
            </li>
            <li>
              <strong>Variabel dan Tipe Data:</strong> Penggunaan variabel dan tipe data dasar di C++.
            </li>
            <li>
              <strong>Pengendalian Alur:</strong> Struktur kontrol seperti if, switch, dan loop (for, while).
            </li>
            <li>
              <strong>Fungsi dan Prosedur:</strong> Cara membuat dan memanggil fungsi dalam C++.
            </li>
            <li>
              <strong>Konsep Pengenalan OOP:</strong> Penggunaan kelas dan objek dalam C++.
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
              <strong>Level:</strong> Pemula
            </li>
          </ul>

          <p>
            <strong>Cara Kerja:</strong> Setiap soal akan menguji pengetahuan dasar kamu mengenai C++. Setelah menjawab, akan ada penjelasan singkat untuk membantu pemahaman kamu.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Dasar Kuat:</strong> Ideal untuk membangun pondasi awal dalam mempelajari pemrograman C++.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dirancang agar kamu aktif belajar, bukan hanya membaca.
            </li>
            <li>
              <strong>Sertifikat:</strong> Dapatkan sertifikat setelah menyelesaikan kuis sebagai bukti penguasaan dasar pemrograman C++.
            </li>
          </ul>

          <p>
            Yuk, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar pemrograman C++!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/cpp/beginner"}>
              <button className="p-5 bg-blue-500 w-52 xl:w-96 cursor-pointer rounded-xl text-2xl text-white m-10 hover:bg-blue-600">
                Mulai Kuis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppBeginnerDeskription;
