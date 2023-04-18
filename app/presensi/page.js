"use client";

import React from "react";
import SignatureCanvas from "react-signature-canvas";

const Presensi = () => {
  return (
    <div className="container max-w-screen-md mx-auto">
      <div className="flex flex-col  shadow-xl shadow-blue-100 rounded-xl mt-10 p-5 bg-white">
        <div>
          <h1 className=" text-3xl font-bold dark:text-white">
            Presensi
            <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
              Rapat Perencanaan Anggaran Pusat TI 2024
            </small>
          </h1>
          <div>
            <p>⌚ 08.00 s.d. 10.00 WIB </p>
            <p>📍 Ruang Rapat Lt. 5 </p>
          </div>
        </div>
        <div className="divider"></div>

        <form>
          <div className="flex flex-col gap-4 ">
            <div>
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Nama"
                className="input w-full  bg-slate-50"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Jabatan</span>
              </label>
              <input
                type="text"
                placeholder="Jabatan"
                className="input w-full  bg-slate-100"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Unit Kerja</span>
              </label>
              <input
                type="text"
                placeholder="Unit Kerja"
                className="input w-full  bg-slate-100"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Paraf</span>
              </label>
              <SignatureCanvas
                penColor="black"
                canvasProps={{
                  className: "bg-slate-100 rounded-xl width-100",
                }}
              />
            </div>

            <div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Presensi;
