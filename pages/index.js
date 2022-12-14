import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-vh-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-white mx-5" href="#">
            Brand
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex w-100 bg-prima/ry justify-content-end fw-semibold gap-3">
              <Link class="nav-link active text-white" aria-current="page" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-houses-fill" viewBox="0 0 16 16">
                  <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z" />
                  <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z" />
                </svg>
              </Link>
              <Link class="nav-link active text-white" href="#about" scroll={false}>
                About
              </Link>
            </div>
          </div>
          <div className="mx-3">
            <Link href="/login/siswa/baru" className="text-decoration-none color red fw-bold text-info" target={"_blank"}>
              Siswa Baru
            </Link>
          </div>
        </div>
      </nav>

      <header className="bg-header ">
        <div className="bg-dark bg-opacity-25 min-vh-100">
          <div className="h-100 d-flex text-white justify-content-start px-5  content-header">
            <div className="">
              <h2>Universitas Klabat</h2>
              <Link href={"/login/"} passHref>
                <button type="submit" className="btn btn-outline-light px-5">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="main min-vh-100">
        <div id="about" className="">
          <h2 className="text-center my-2">About</h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
