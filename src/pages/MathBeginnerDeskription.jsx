import React from "react";
import MathImg from "../assets/Math.jpg"; // Pastikan kamu punya gambar math
import { Link } from "react-router-dom";

const MathBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Math For Beginner
        </h1>

        {/* Gambar Matematika */}
        <div className="text-center mb-8">
          <img
            src={MathImg}
            alt="Math"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Matematika Pemula adalah sebuah
            kuis yang dirancang untuk membantu kamu menguji pemahaman dasar
            tentang konsep matematika dasar. Kuis ini mencakup berbagai topik
            penting yang menjadi dasar untuk memulai belajar matematika dengan
            percaya diri.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pemahaman kamu mengenai operasi
            dasar matematika. Meningkatkan kemampuan logika dan keterampilan
            hitung dasar. Menyediakan latihan soal interaktif untuk membangun
            fondasi kuat di matematika.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Penjumlahan & Pengurangan:</strong> Operasi dasar yang
              sering digunakan dalam kehidupan sehari-hari.
            </li>
            <li>
              <strong>Perkalian & Pembagian:</strong> Konsep dasar perkalian dan
              pembagian untuk menyelesaikan soal hitungan cepat.
            </li>
            <li>
              <strong>Soal Cerita:</strong> Latihan pemahaman soal konteks
              sehari-hari yang membutuhkan logika.
            </li>
            <li>
              <strong>Pecahan dan Desimal:</strong> Pengenalan angka pecahan dan
              konversi ke desimal.
            </li>
            <li>
              <strong>Urutan Operasi:</strong> Mengerti prioritas operasi
              matematika (PEMDAS).
            </li>
          </ul>

          <p>
            <strong>Format Kuis:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Jumlah Soal:</strong> 25 soal
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
            kemampuan logika dasar dan pemahaman konsep matematika. Tersedia
            penjelasan singkat setelah menjawab soal.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Fondasi Kuat:</strong> Sangat cocok untuk kamu yang ingin
              memperkuat kemampuan berhitung dasar.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dibuat supaya kamu belajar
              sambil berlatih langsung.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Dapatkan sertifikat setelah
              menyelesaikan kuis sebagai tanda penguasaan matematika dasar.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar
            matematika!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/math/beginner"}>
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

export default MathBeginnerDeskription;
