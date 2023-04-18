'use client'

import React from 'react'

const TambahRapat = () => {
  return (
    <>
    <label htmlFor="my-modal" className="btn btn-primary">
          Tambah Rapat
        </label>
        {/* modal tambah rapat */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Tambahkan data rapat
            </h3>
            <form>
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
            
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn btn-error">
                Batal
              </label>
               <label htmlFor="my-modal" className="btn ">
                Submit!
              </label>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default TambahRapat