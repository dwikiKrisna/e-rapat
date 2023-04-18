import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex-1"></div>
      <form>
        <div className="flex flex-col gap-4 max-w-sm mx-auto p-5 shadow-xl shadow-blue-100 rounded-xl bg-white">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Masuk ke aplikasi e-rapat
          </h1>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Enter your details below.
          </p>
          <input
            type="text"
            placeholder="Username"
            className="input w-full  bg-slate-100"
          />

          <input
            type="password"
            placeholder="Password"
            className="input w-full  bg-slate-100"
          />

          <button className="btn btn-primary">Login</button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Belum memiliki akun e-rapat?{" "}
            <Link
              href="/register"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
