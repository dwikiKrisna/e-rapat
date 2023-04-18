import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "e-rapat",
  description: "Aplikasi e-rapat untuk keperluan rapat di lingkungan PPATK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50">
        <section>
          <div className="navbar shadow-md shadow-blue-50 bg-white">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost normal-case text-xl">
                💡e-rapat
              </Link>
            </div>
            <div className="flex-none gap-1">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href="/jadwal">📅 Jadwal</Link>
                </li>

                <li>
                  <Link href='/dashboard'>🗝️ Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {children}

        <div className="flex-1"></div>

        <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-10">
          <div className="items-center grid-flow-col">
            💡
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
