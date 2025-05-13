import React from "react";
import Javascript from "../assets/Javascript.jpg";
import { Link } from "react-router-dom";

const JavascriptBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Javascript For Beginner
        </h1>

        {/* Gambar Javascript */}
        <div className="text-center mb-8">
          <img
            src={Javascript}
            alt="Javascript"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Quizz Javascript Pemula adalah sebuah
            kuis yang dirancang untuk membantu kamu menguji pemahaman dasar
            tentang bahasa pemrograman JavaScript. Kuis ini mencakup berbagai
            topik penting yang menjadi dasar untuk memulai perjalanan
            pemrograman dengan JavaScript.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pemahaman dasar kamu mengenai
            sintaks dan struktur kode JavaScript. Meningkatkan kemampuan kamu
            dalam menulis kode yang bersih dan efektif. Menyediakan latihan
            untuk memperkenalkan konsep-konsep dasar yang akan sering digunakan
            dalam pengembangan aplikasi JavaScript.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Sintaks Dasar JavaScript:</strong> Pengenalan terhadap
              cara menulis dan menjalankan kode JavaScript dengan benar.
            </li>
            <li>
              <strong>Variabel dan Tipe Data:</strong> Menggunakan variabel dan
              mengenal tipe data seperti string, integer, float, dan boolean.
            </li>
            <li>
              <strong>Pengkondisian dan Perulangan:</strong> Menggunakan if,
              else, dan loop (for, while) untuk mengontrol alur eksekusi
              program.
            </li>
            <li>
              <strong>Fungsi:</strong> Cara membuat dan menggunakan fungsi untuk
              mengorganisir kode JavaScript agar lebih modular dan terstruktur.
            </li>
            <li>
              <strong>Struktur Data:</strong> Mengenal berbagai struktur data di
              JavaScript seperti array dan objek serta cara penggunaannya.
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
            pengetahuan dasar JavaScript dan memberi penjelasan singkat tentang
            konsep yang diujikan setelah kamu menjawab. Beberapa soal berfokus
            pada sintaks dan penggunaan perintah dasar, sementara soal lainnya
            menguji kemampuan kamu dalam memecahkan masalah menggunakan konsep
            JavaScript.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Keterampilan:</strong> Cocok untuk kamu yang
              baru memulai belajar JavaScript dan ingin menguji pengetahuan
              dasar.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dirancang agar kamu bisa
              belajar sambil mengerjakan soal-soal praktis.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Mendapatkan sertifikat sebagai
              bukti kemampuan JavaScript dasar setelah menyelesaikan kuis ini.
            </li>
          </ul>

          <p>
            Ayo, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar
            JavaScript!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/javascript/beginner"}>
              {" "}
              {/* Perhatikan path URL */}
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

export default JavascriptBeginnerDeskription;
