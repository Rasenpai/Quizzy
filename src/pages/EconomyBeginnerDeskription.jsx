import React from "react";
import EconomyImg from "../assets/Economy.jpg"; // Pastikan kamu punya gambar ekonomi
import { Link } from "react-router-dom";

const EconomyBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Economy For Beginner
        </h1>

        {/* Gambar Ekonomi */}
        <div className="text-center mb-8">
          <img
            src={EconomyImg}
            alt="Economy"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Ekonomi Pemula adalah sebuah kuis
            yang dirancang untuk membantu kamu menguji pemahaman dasar tentang
            konsep ekonomi. Kuis ini mencakup berbagai topik penting yang
            menjadi dasar untuk memulai belajar ekonomi dengan percaya diri.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pemahaman kamu mengenai konsep
            dasar ekonomi. Meningkatkan kemampuan analisis ekonomi dan
            keterampilan dasar dalam memecahkan masalah ekonomi. Menyediakan
            latihan soal interaktif untuk membangun fondasi kuat di bidang
            ekonomi.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Permintaan dan Penawaran:</strong> Memahami konsep dasar
              permintaan dan penawaran dalam pasar.
            </li>
            <li>
              <strong>Elastisitas:</strong> Konsep elastisitas harga dan
              pengaruhnya terhadap pasar.
            </li>
            <li>
              <strong>Biaya Peluang:</strong> Menjelajahi konsep biaya peluang
              dalam pengambilan keputusan.
            </li>
            <li>
              <strong>Kebijakan Fiskal:</strong> Pengenalan tentang kebijakan
              fiskal dan peran pemerintah.
            </li>
            <li>
              <strong>Inflasi dan Deflasi:</strong> Dasar teori inflasi,
              deflasi, dan dampaknya terhadap ekonomi.
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
            pemahaman dasar kamu tentang konsep ekonomi. Setelah menjawab soal,
            kamu akan diberikan penjelasan singkat untuk memperdalam pemahaman.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Fondasi Kuat:</strong> Sangat cocok untuk kamu yang ingin
              memperkuat pemahaman dasar ekonomi.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dibuat supaya kamu belajar
              sambil berlatih langsung.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Dapatkan sertifikat setelah
              menyelesaikan kuis sebagai tanda penguasaan ekonomi dasar.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar
            ekonomi!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/economy/beginner"}>
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

export default EconomyBeginnerDeskription;
