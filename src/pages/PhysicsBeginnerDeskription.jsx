import React from "react";
import PhysicsImg from "../assets/Physics.jpg"; // Pastikan kamu punya gambar fisika
import { Link } from "react-router-dom";

const PhysicsBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Physics For Beginner
        </h1>

        {/* Gambar Fisika */}
        <div className="text-center mb-8">
          <img
            src={PhysicsImg}
            alt="Physics"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Fisika Pemula adalah sebuah kuis
            yang dirancang untuk membantu kamu menguji pemahaman dasar tentang
            konsep fisika dasar. Kuis ini mencakup berbagai topik penting yang
            menjadi dasar untuk memulai belajar fisika dengan percaya diri.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pemahaman kamu mengenai konsep
            dasar fisika. Meningkatkan kemampuan logika dan keterampilan dasar
            dalam memecahkan masalah fisika. Menyediakan latihan soal interaktif
            untuk membangun fondasi kuat di fisika.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Gerak dan Hukum Newton:</strong> Memahami konsep dasar
              gerakan benda dan hukum Newton.
            </li>
            <li>
              <strong>Energi dan Usaha:</strong> Konsep energi dan bagaimana
              usaha berhubungan dengan perubahan energi.
            </li>
            <li>
              <strong>Gaya Gravitasi:</strong> Menjelajahi gaya gravitasi dan
              aplikasinya dalam kehidupan sehari-hari.
            </li>
            <li>
              <strong>Pembelajaran Gelombang:</strong> Pengenalan tentang
              gelombang mekanik dan sifat-sifatnya.
            </li>
            <li>
              <strong>Listrik dan Magnet:</strong> Dasar teori listrik dan
              magnet serta aplikasinya.
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
            pemahaman dasar kamu tentang konsep fisika. Setelah menjawab soal,
            kamu akan diberikan penjelasan singkat untuk memperdalam pemahaman.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Fondasi Kuat:</strong> Sangat cocok untuk kamu yang ingin
              memperkuat pemahaman dasar fisika.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dibuat supaya kamu belajar
              sambil berlatih langsung.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Dapatkan sertifikat setelah
              menyelesaikan kuis sebagai tanda penguasaan fisika dasar.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar
            fisika!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/physics/beginner"}>
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

export default PhysicsBeginnerDeskription;
