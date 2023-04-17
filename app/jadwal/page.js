import React from "react";

const listJadwal = [
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

const Jadwal = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <h1 className=" my-8 text-3xl font-bold dark:text-white">
          Jadwal
          <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            rapat hari ini
          </small>
        </h1>

        <div className=" relative overflow-x-auto shadow-sm sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  Unit Kerja
                </th>
                <th scope="col" className="px-6 py-3">
                  Presensi
                </th>
              </tr>
            </thead>
            <tbody>
              {listJadwal.map((jadwal, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {jadwal.judul}
                  </th>
                  <td className="px-6 py-4">{jadwal.waktu}</td>
                  <td className="px-6 py-4">{jadwal.tempat}</td>
                  <td className="px-6 py-4">{jadwal.unit_kerja}</td>
                  <td className="px-6 py-4 ">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      isi
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Jadwal;
