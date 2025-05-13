import React from "react";
import CSharpImage from "../assets/C_Sharp.png";
import { Link } from "react-router-dom";

const CSharpIntermediateDescription = () => {
  return (
    <div className="wrapper p-4">
      <div className="container mx-auto mt-32">
        <h1 className="text-xl xl:text-5xl font-bold text-center mb-8">
          Quizz C# For Intermediate
        </h1>

        {/* Gambar C# */}
        <div className="text-center mb-8">
          <img
            src={CSharpImage}
            alt="C#"
            className="mx-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Deskripsi */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            <strong>Deskripsi:</strong> Kuis C# Intermediate adalah kuis yang
            dirancang untuk menguji kemampuan kamu dalam menggunakan bahasa
            pemrograman C# di tingkat menengah. Kuis ini mencakup konsep penting
            seperti OOP, LINQ, async, hingga manipulasi data dan memori.
          </p>

          <p>
            <strong>Tujuan:</strong> Meningkatkan pemahaman kamu tentang bahasa
            C# melalui soal-soal tantangan nyata, menulis kode yang efisien, dan
            memahami konsep-konsep pemrograman modern di C#.
          </p>

          <p>
            <strong>Topik yang Dicover:</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>OOP (Object-Oriented Programming):</strong> Kelas,
              pewarisan, enkapsulasi, polimorfisme.
            </li>
            <li>
              <strong>Interface dan Abstraksi:</strong> Penggunaan interface,
              abstract class dan implementasinya.
            </li>
            <li>
              <strong>LINQ (Language Integrated Query):</strong> Query data
              secara efisien di koleksi.
            </li>
            <li>
              <strong>Exception Handling:</strong> Penggunaan try, catch,
              finally, dan throw.
            </li>
            <li>
              <strong>Delegates dan Events:</strong> Pemrograman event-driven
              dan callback di C#.
            </li>
            <li>
              <strong>Asynchronous Programming:</strong> async, await, dan
              pengelolaan task.
            </li>
            <li>
              <strong>Memory Management:</strong> Garbage Collection, `new`,
              `Dispose`, dan `using` statement.
            </li>
            <li>
              <strong>Collection dan Generic:</strong> List, Dictionary, Stack,
              Queue, dan penggunaan generic method/class.
            </li>
            <li>
              <strong>Extension Method:</strong> Menambah fungsionalitas ke tipe
              yang sudah ada tanpa mengubah kodenya.
            </li>
            <li>
              <strong>Operator Overloading:</strong> Menyesuaikan perilaku
              operator terhadap class buatan.
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
              <strong>Durasi:</strong> 1 Jam
            </li>
            <li>
              <strong>Level:</strong> Intermediate
            </li>
          </ul>

          <p>
            <strong>Cara Kerja:</strong> Setiap soal dirancang untuk menguji
            pemahaman kamu tentang konsep-konsep penting dalam C# level
            menengah. Setelah menjawab, kamu akan mendapatkan feedback singkat
            untuk memperdalam pemahamanmu.
          </p>

          <p>
            <strong>Kenapa Harus Ikut Kuis Ini?</strong>
          </p>
          <ul className="list-inside list-disc pl-4">
            <li>
              <strong>Peningkatan Skill:</strong> Mengasah logika dan pemahaman
              konsep C# dengan cara yang menyenangkan.
            </li>
            <li>
              <strong>Interaktif:</strong> Belajar melalui kuis membuat kamu
              aktif berpikir, bukan hanya membaca teori.
            </li>
            <li>
              <strong>Bersertifikat:</strong> Dapatkan sertifikat setelah
              menyelesaikan seluruh soal sebagai bukti kemampuan kamu.
            </li>
          </ul>

          <p>Ayo mulai kuis dan uji seberapa dalam pemahamanmu terhadap C#!</p>

          <div className="container flex justify-center items-center">
            <Link to={"/csharp/intermediate"}>
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

export default CSharpIntermediateDescription;
