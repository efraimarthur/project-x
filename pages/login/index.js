import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className=" bg-login ">
      <div className=" bg-dark text-white shadow p-3 mb-5  rounded bg-opacity-50 p-5 w-50  position-absolute top-50 start-50 translate-middle ">
        <div className=" mb-3 row  ">
          <h1 className="text-center">Login</h1>
        </div>

        <div class="d-grid gap-2">
          <Link
            href={"/login/guru"}
            class="btn btn-info btn-opacity-50 rounded"
            type="button"
          >
            Login Guru
          </Link>
          <Link
            href={"/login/siswa"}
            class="btn btn-warning btn-opacity-50"
            type="button"
          >
            Login Siswa
          </Link>
        </div>
      </div>
    </div>
  );
}
