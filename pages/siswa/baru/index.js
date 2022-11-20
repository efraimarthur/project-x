import React from "react";
import Link from "next/link";
import Image from "next/image";

const Baru = () => {
  return (
    <div className="min-vh-100">
      <div className="text-bg-dark d-flex flex-row gap-5 justify-content-end">
        <span className="me-4 py-2 btn-logout-siswa">
          <Link
            href={"/login/siswa/baru"}
            className="text-decoration-none text-info"
          >
            Logout
          </Link>
        </span>
      </div>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center ">
        {/* <h1 className="me-5">⬅️</h1> */}
        <div className="shadow gap-3 d-flex flex-column">
          <h2 className="mb-5 fw-lighter h2-siswabaru">
            Selamat datang siswa baru
          </h2>
          <div className="position-relative imageSiswa-wrap">
            <Image
              className="position-absolute"
              alt="gambar"
              src={"/examPic.jpg"}
              // width={500}
              // height={500}
              layout={"fill"}
              objectFit="cover"
            ></Image>
          </div>

          <Link
            href="/siswa/baru/tes"
            className="btn btn-dark fs-3 fw-semibold font-monospace shadow "
          >
            <span className="px-5">Ikut Tes</span>
          </Link>
          <Link
            href="/siswa/baru/pendaftaran"
            className="btn btn-dark fs-3 fw-semibold font-monospace shadow "
          >
            <span className="px-5">Formulir pendaftaran</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baru;
