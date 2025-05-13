import React from "react";
import ChemistryImg from "../assets/Sains.jpg"; // Pastikan kamu punya gambar kimia
import { Link } from "react-router-dom";

const ChemistryBeginnerDeskription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz Kimia For Beginner
        </h1>

        {/* Gambar Kimia */}
        <div className="text-center mb-8">
          <img
            src={ChemistryImg}
            alt="Chemistry"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Kuis Kimia Pemula adalah kuis yang
            dirancang untuk menguji dan memperkuat pemahaman dasar kamu terhadap
            konsep-konsep penting dalam ilmu kimia. Sangat cocok untuk pelajar
            atau siapa saja yang baru memulai belajar kimia.
          </p>

          <p>
            <strong>Tujuan:</strong> Menguji pengetahuan dasar kamu tentang
            kimia. Membantu memahami istilah dan konsep kimia secara lebih
            menyenangkan. Menyediakan latihan soal sebagai media pembelajaran
            aktif.
          </p>

          <p>
            <strong>Topik yang Dibahas:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Simbol dan Unsur:</strong> Mengenal lambang kimia dasar
              dan nama unsur-unsur umum.
            </li>
            <li>
              <strong>Struktur Atom:</strong> Komponen atom seperti elektron,
              proton, dan neutron.
            </li>
            <li>
              <strong>Reaksi Kimia Sederhana:</strong> Contoh reaksi dan
              perubahan zat.
            </li>
            <li>
              <strong>Asam dan Basa:</strong> Mengenal perbedaan asam dan basa
              serta pH.
            </li>
            <li>
              <strong>Penggunaan Kimia di Kehidupan Sehari-hari:</strong>{" "}
              Seperti garam dapur, air, dan bahan rumah tangga lainnya.
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
              <strong>Level:</strong> Pemula
            </li>
          </ul>

          <p>
            <strong>Cara Kerja:</strong> Setiap soal akan menguji pengetahuan
            dasar kamu mengenai kimia. Setelah menjawab, akan ada penjelasan
            singkat untuk membantu pemahaman kamu.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Dasar Kuat:</strong> Ideal untuk membangun pondasi awal
              dalam mempelajari kimia.
            </li>
            <li>
              <strong>Interaktif:</strong> Kuis ini dirancang agar kamu aktif
              belajar, bukan hanya membaca.
            </li>
            <li>
              <strong>Sertifikat:</strong> Dapatkan sertifikat setelah
              menyelesaikan kuis sebagai bukti penguasaan dasar kimia.
            </li>
          </ul>

          <p>
            Yuk, mulai kuis ini dan uji seberapa baik kamu mengenal dasar-dasar
            kimia!
          </p>

          <div className="container flex justify-center items-center">
            <Link to={"/chemistry/beginner"}>
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

export default ChemistryBeginnerDeskription;
