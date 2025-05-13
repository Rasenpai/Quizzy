import React from "react";
import ChemistryImage from "../assets/Sains.jpg"; // Ganti dengan gambar Kimia
import { Link } from "react-router-dom";

const ChemistryIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Chemistry For Intermediate
        </h1>

        {/* Gambar Kimia */}
        <div className="text-center mb-8">
          <img
            src={ChemistryImage}
            alt="Kimia"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Kimia Tingkat Intermediate adalah
            sebuah kuis yang dirancang untuk menguji pengetahuan lanjutan
            tentang berbagai konsep dan prinsip kimia. Kuis ini mencakup
            berbagai topik kimia yang lebih kompleks untuk menguji pemahaman
            mendalam tentang reaksi, sifat, dan penerapan konsep kimia.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            kimia tingkat menengah. Meningkatkan pemahaman tentang prinsip kimia
            dan aplikasinya dalam berbagai konteks. Membantu mengasah kemampuan
            untuk memecahkan masalah kimia yang lebih kompleks.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Kesetimbangan Kimia:</strong> Faktor-faktor yang
              mempengaruhi kesetimbangan dan perhitungan konstanta
              kesetimbangan.
            </li>
            <li>
              <strong>Asam dan Basa:</strong> Kekuatan asam-basa, larutan
              buffer, dan perhitungan pH dalam berbagai larutan.
            </li>
            <li>
              <strong>Elektrokimia:</strong> Sel galvani, sel elektrolisis, dan
              perhitungan yang melibatkan potensial reduksi standar.
            </li>
            <li>
              <strong>Kinetika Kimia:</strong> Laju reaksi, orde reaksi, dan
              faktor-faktor yang mempengaruhi laju reaksi.
            </li>
            <li>
              <strong>Kimia Organik:</strong> Identifikasi dan reaksi berbagai
              gugus fungsi, stereokimia, dan mekanisme reaksi.
            </li>
            <li>
              <strong>Sifat Koligatif:</strong> Penurunan titik beku, tekanan
              osmotik, dan perhitungan yang berkaitan dengan sifat koligatif
              larutan.
            </li>
            <li>
              <strong>Struktur Atom dan Ikatan:</strong> Hibridisasi, bentuk
              molekul, gaya antarmolekul, dan spektroskopi.
            </li>
            <li>
              <strong>Termokimia:</strong> Perhitungan perubahan entalpi,
              entropi, dan energi bebas Gibbs pada reaksi kimia.
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
            pengetahuan tingkat menengah tentang konsep kimia. Setelah menjawab
            soal, kamu akan mendapatkan penjelasan singkat untuk memperdalam
            pemahaman. Soal-soal melibatkan konsep-konsep seperti kesetimbangan
            kimia, elektrokimia, kimia organik, dan struktur molekul.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Pengetahuan:</strong> Kuis ini membantu kamu
              memperdalam pemahaman konsep kimia untuk persiapan ujian atau
              kompetisi.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar dengan menyelesaikan masalah
              kimia yang lebih kompleks dan menantang.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan kimia tingkat menengah setelah menyelesaikan kuis
              ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa dalam pemahamanmu tentang
            konsep-konsep kimia tingkat intermediate!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/chemistry/intermediate"}>
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

export default ChemistryIntermediateDescription;
