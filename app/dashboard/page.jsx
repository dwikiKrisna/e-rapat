import Link from "next/link";
import React from "react";

const listRapat = [
  {
    judul:
      "Anim do consequat dolore minim amet laboris non dolor aliquip reprehenderit do.",
    waktu: "20-04-2023 09.00 wib",
    tempat: "ruang rapat lt 5",
    unit_kerja: "Logis",
  },
  {
    judul:
      "Anim do consequat dolore minim amet laboris non dolor aliquip reprehenderit do.",
    waktu: "20-04-2023 09.00 wib",
    tempat: "ruang rapat lt 5",
    unit_kerja: "Logis",
  },
  {
    judul:
      "Anim do consequat dolore minim amet laboris non dolor aliquip reprehenderit do.",
    waktu: "20-04-2023 09.00 wib",
    tempat: "ruang rapat lt 5",
    unit_kerja: "Logis",
  },
  {
    judul:
      "Anim do consequat dolore minim amet laboris non dolor aliquip reprehenderit do.",
    waktu: "20-04-2023 09.00 wib",
    tempat: "ruang rapat lt 5",
    unit_kerja: "Logis",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold">Dashboard</h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Selamat Datang</div>
          <div className="stat-value">Dwiki Krisna</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Rapat Anda</div>
          <div className="stat-value">20</div>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        {/* tambah rapat  */}
        <button className="btn btn-primary">Tambah Rapat</button>
        {/* search */}
        <div className=" flex gap-3">
          <input
            type="text"
            placeholder="Masukan nama rapat"
            className="input input-bordered w-full max-w-sm"
          />

          <button className="btn btn-primary">Cari</button>
        </div>
      </div>

      {/* table  */}

      <div className="bg-white  rounded-xl shadow-md shadow-blue-50 mt-5">
        <div className=" relative overflow-x-auto shadow-sm sm:rounded-lg ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3">
                  Waktu
                </th>
                <th scope="col" className="px-6 py-3">
                  Tempat
                </th>

                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {listRapat.map((jadwal, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th className="px-6 py-4 font-medium text-blue-500 link dark:text-white">
                    <Link href="/presensi">{jadwal.judul}</Link>
                  </th>
                  <td className="px-6 py-4">{jadwal.waktu}</td>
                  <td className="px-6 py-4">{jadwal.tempat}</td>
                  <td className="px-6 py-4 ">
                    <Link
                      href="/presensi"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      edit
                    </Link>
                    <Link
                      href="/presensi"
                      className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                      hapus
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* paginasi  */}

          <div className="btn-group ml-5 my-5 mx-auto">
            <button className="btn-sm">1</button>
            <button className="btn-sm btn-active">2</button>
            <button className="btn-sm">3</button>
            <button className="btn-sm">4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
