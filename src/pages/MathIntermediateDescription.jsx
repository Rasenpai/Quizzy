import React from "react";
import MathImage from "../assets/Math.jpg"; // Ganti dengan gambar Matematika
import { Link } from "react-router-dom";

const MathIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Mathematics For Intermediate
        </h1>

        {/* Gambar Matematika */}
        <div className="text-center mb-8">
          <img
            src={MathImage}
            alt="Matematika"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Matematika Tingkat Intermediate
            adalah sebuah kuis yang dirancang untuk menguji pengetahuan lanjutan
            tentang berbagai topik matematika. Kuis ini mencakup berbagai konsep
            matematika yang lebih kompleks dan menantang untuk menguji kemampuan
            pemecahan masalah matematika.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji kemampuan kamu dalam konsep-konsep
            matematika tingkat menengah. Meningkatkan kemampuan kamu dalam
            menyelesaikan persoalan matematika yang lebih kompleks. Membantu
            mengasah logika dan keterampilan analitis dalam pemecahan masalah.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Geometri:</strong> Menghitung luas dan volume bangun datar
              dan ruang, termasuk segitiga, lingkaran, tabung, dan kerucut
              terpancung.
            </li>
            <li>
              <strong>Aljabar:</strong> Menyelesaikan persamaan, pertidaksamaan,
              dan fungsi komposisi termasuk penerapan rumus kuadrat.
            </li>
            <li>
              <strong>Trigonometri:</strong> Menghitung nilai fungsi
              trigonometri dan menerapkannya dalam berbagai konteks.
            </li>
            <li>
              <strong>Barisan dan Deret:</strong> Menghitung jumlah suku dalam
              barisan aritmatika dan deret geometri.
            </li>
            <li>
              <strong>Matriks dan Vektor:</strong> Melakukan operasi pada
              matriks dan vektor termasuk determinan dan dot product.
            </li>
            <li>
              <strong>Statistika dan Peluang:</strong> Menyelesaikan persoalan
              yang melibatkan kombinasi, permutasi, dan peluang kejadian.
            </li>
            <li>
              <strong>Kalkulus Dasar:</strong> Menerapkan konsep dasar kalkulus
              seperti limit, turunan, dan integral.
            </li>
            <li>
              <strong>Matematika Finansial:</strong> Menghitung bunga majemuk,
              pertumbuhan, dan perhitungan investasi.
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
            pengetahuan tingkat menengah tentang konsep matematika. Setelah
            menjawab soal, kamu akan mendapatkan penjelasan singkat untuk
            memperdalam pemahaman. Soal-soal melibatkan konsep-konsep seperti
            geometri, aljabar, trigonometri, dan analisis matematika.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Kemampuan:</strong> Kuis ini membantu kamu
              memperdalam pengetahuan matematika untuk persiapan ujian atau
              kompetisi.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar dengan menyelesaikan masalah
              yang lebih kompleks dan melibatkan teknik tingkat menengah.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan matematika tingkat menengah setelah menyelesaikan
              kuis ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kemampuan matematikamu
            dalam menyelesaikan persoalan tingkat intermediate!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/math/intermediate"}>
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

export default MathIntermediateDescription;
