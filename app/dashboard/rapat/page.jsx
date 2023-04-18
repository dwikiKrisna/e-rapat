import Link from "next/link";
import React from "react";

const RapatDetail = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md shadow-blue-100 flex gap-10">
      <div className="w-5/12">
        <h1 className="text-xl font-bold mb-5">Detail Rapat</h1>
        <form >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Judul Rapat</span>
            </label>
            <input
              type="text"
              placeholder="Masukan judul rapat"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Waktu Rapat</span>
            </label>
            <input
              type="text"
              placeholder="Masukan waktu rapat"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tempat Rapat</span>
            </label>
            <input
              type="text"
              placeholder="Masukan tempat rapat"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Unit Kerja</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
              <option>Logis</option>
              <option>Keuangan</option>
              <option>Personalia</option>
              <option>SDM</option>
              <option>IT</option>
            </select>
          </div>
        </form>
      </div>


      <div className="flex-1">
        <h1 className="text-xl font-bold mb-5">Alat Rapat</h1>

         <div className="form-control">
            <label className="label">
              <span className="label-text">Link Presensi Rapat</span>
             
              <Link className="label-text link link-primary" href='#'>Cek halaman presensi</Link>
            </label>
            <textarea
              placeholder="Ini link presensi rapat"
              className="textarea textarea-bordered"
            />
          </div>
          <Link href='/dashboard/rekap'>

          <button className="btn btn-primary mt-10">Rekap presensi</button>
          </Link>
      </div>
    </div>
  );
};

export default RapatDetail;
