import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="p-5 ">
          <h1 className="text-lg font-bold">Dashboard Menu</h1>

          <ul className="menu bg-base-100 w-56">
            <li>
              <Link href="/dashboard"> 🏠 Home </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">⚙️ Settings </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default layout;
