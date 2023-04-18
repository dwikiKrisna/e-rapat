import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="p-5 ">

          <ul className="menu w-56">
            <li>
              <Link href="/dashboard"> 🏠 Home </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">⚙️ Settings </Link>
            </li>
          
          </ul>
        </div>

        <div className="flex-1 p-5">{children}</div>
      </div>
    </>
  );
};

export default layout;
