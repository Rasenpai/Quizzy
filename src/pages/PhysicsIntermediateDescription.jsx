import React from "react";
import PhysicsImage from "../assets/Physics.jpg"; // Ganti dengan gambar Fisika
import { Link } from "react-router-dom";

const PhysicsIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Physics For Intermediate
        </h1>

        {/* Gambar Fisika */}
        <div className="text-center mb-8">
          <img
            src={PhysicsImage}
            alt="Fisika"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Fisika Tingkat Intermediate adalah
            sebuah kuis yang dirancang untuk menguji pengetahuan lanjutan
            tentang berbagai konsep dan prinsip fisika. Kuis ini mencakup
            berbagai topik fisika yang lebih kompleks untuk menguji pemahaman
            mendalam tentang hukum-hukum fisika, perhitungan, dan penerapan
            konsep fisika dalam pemecahan masalah.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            fisika tingkat menengah. Meningkatkan pemahaman tentang prinsip
            fisika dan aplikasinya dalam berbagai konteks. Membantu mengasah
            kemampuan untuk memecahkan masalah fisika yang lebih kompleks.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Mekanika Klasik:</strong> Kinematika, dinamika, gaya
              gesek, energi, momentum, dan gerak melingkar.
            </li>
            <li>
              <strong>Dinamika Rotasi:</strong> Momen inersia, momentum sudut,
              dan kesetimbangan benda tegar.
            </li>
            <li>
              <strong>Getaran dan Gelombang:</strong> Gerak harmonik sederhana,
              gelombang mekanik, dan interferensi gelombang.
            </li>
            <li>
              <strong>Fluida:</strong> Tekanan, gaya apung, persamaan Bernoulli,
              dan viskositas.
            </li>
            <li>
              <strong>Termodinamika:</strong> Hukum-hukum termodinamika, siklus
              Carnot, dan entropi.
            </li>
            <li>
              <strong>Elektromagnetisme:</strong> Medan listrik, potensial
              listrik, kapasitor, arus listrik, dan medan magnet.
            </li>
            <li>
              <strong>Optik:</strong> Interferensi, difraksi, polarisasi, dan
              alat-alat optik.
            </li>
            <li>
              <strong>Fisika Modern:</strong> Teori relativitas, model atom,
              spektroskopi, dan efek fotolistrik.
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
              <strong>Durasi:</strong> 1 Jam
            </li>
            <li>
              <strong>Level:</strong> Intermediate
            </li>
          </ul>

          <p>
            <strong>Cara Kerja:</strong> Setiap soal dirancang untuk menguji
            pengetahuan tingkat menengah tentang konsep fisika. Setelah menjawab
            soal, kamu akan mendapatkan penjelasan singkat untuk memperdalam
            pemahaman. Soal-soal melibatkan konsep-konsep seperti mekanika,
            elektromagnetisme, termodinamika, gelombang, dan fisika modern.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Pengetahuan:</strong> Kuis ini membantu kamu
              memperdalam pemahaman konsep fisika untuk persiapan ujian atau
              kompetisi.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar dengan menyelesaikan masalah
              fisika yang lebih kompleks dan menantang.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan fisika tingkat menengah setelah menyelesaikan kuis
              ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa dalam pemahamanmu tentang
            konsep-konsep fisika tingkat intermediate!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/physics/intermediate"}>
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

export default PhysicsIntermediateDescription;
