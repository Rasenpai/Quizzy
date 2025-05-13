import React from "react";
import EconomicsImage from "../assets/Economy.jpg"; // Ganti dengan gambar Ekonomi
import { Link } from "react-router-dom";

const EconomicsIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Economics For Intermediate
        </h1>

        {/* Gambar Ekonomi */}
        <div className="text-center mb-8">
          <img
            src={EconomicsImage}
            alt="Ekonomi"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Ekonomi Tingkat Intermediate
            adalah sebuah kuis yang dirancang untuk menguji pengetahuan lanjutan
            tentang berbagai konsep dan prinsip ekonomi. Kuis ini mencakup
            berbagai topik ekonomi yang lebih kompleks untuk menguji pemahaman
            mendalam tentang teori ekonomi, penerapan model ekonomi, dan
            kemampuan analisis ekonomi pada berbagai kasus.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            ekonomi tingkat menengah. Meningkatkan pemahaman tentang prinsip
            ekonomi dan aplikasinya dalam berbagai konteks. Membantu mengasah
            kemampuan untuk memecahkan masalah ekonomi yang lebih kompleks
            dengan pendekatan analitis.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Mikroekonomi:</strong> Teori permintaan dan penawaran,
              elastisitas, struktur pasar, teori produksi, dan teori permainan.
            </li>
            <li>
              <strong>Makroekonomi:</strong> Model IS-LM, PDB dan komponennya,
              siklus bisnis, dan pertumbuhan ekonomi.
            </li>
            <li>
              <strong>Ekonomi Moneter:</strong> Sistem perbankan, kebijakan
              moneter, penawaran uang, dan keseimbangan pasar uang.
            </li>
            <li>
              <strong>Ekonomi Internasional:</strong> Teori perdagangan, nilai
              tukar, neraca pembayaran, dan model ekonomi terbuka.
            </li>
            <li>
              <strong>Ekonomi Publik:</strong> Kebijakan fiskal, barang publik,
              eksternalitas, dan perpajakan.
            </li>
            <li>
              <strong>Ekonomi Pembangunan:</strong> Ketimpangan pendapatan,
              indikator pembangunan, dan strategi pembangunan.
            </li>
            <li>
              <strong>Ekonomi Tenaga Kerja:</strong> Teori upah, pasar tenaga
              kerja, pengangguran, dan modal manusia.
            </li>
            <li>
              <strong>Ekonomi Manajerial:</strong> Analisis biaya-manfaat,
              pengambilan keputusan, dan optimalisasi bisnis.
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
            pengetahuan tingkat menengah tentang konsep ekonomi. Soal-soal
            melibatkan perhitungan, analisis grafis, dan pemahaman model
            ekonomi. Setelah menjawab soal, kamu akan mendapatkan penjelasan
            singkat untuk memperdalam pemahaman tentang teori ekonomi yang
            diterapkan.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Pengetahuan:</strong> Kuis ini membantu kamu
              memperdalam pemahaman konsep ekonomi untuk persiapan ujian,
              kompetisi, atau meningkatkan kompetensi profesional.
            </li>
            <li>
              <strong>Pengembangan Analitis:</strong> Belajar menganalisis
              situasi ekonomi dengan pendekatan yang sistematis dan berdasarkan
              teori.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan ekonomi tingkat menengah setelah menyelesaikan
              kuis ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa dalam pemahamanmu tentang
            konsep-konsep ekonomi tingkat intermediate!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/economy/intermediate"}>
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

export default EconomicsIntermediateDescription;
