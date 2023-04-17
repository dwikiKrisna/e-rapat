import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex-1"></div>

      <section>
        <div className="hero ">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">e-rapat </h1>
              <p className="py-6">
                Aplikasi untuk mengelola rapat secara online pada lingkungan
                Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK)
              </p>
              <Link href="/login">
                <button className="btn btn-primary mr-2">Get Started</button>
              </Link>
              <button className="btn btn-outline btn-primary">
                Petunjuk Teknis
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
