import React from "react";
import Link from "next/link";

export default function messege() {
  return (
    <div className="bg-home-guru">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold text-decoration-none text-white mx-5" href="/">
            Brand
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex w-100 bg-prima/ry justify-content-end fw-semibold gap-3">
              <Link class="nav-link active text-white" aria-current="page" href="/login/Guru/messege">
                Message
              </Link>
            </div>
          </div>
          <div className="mx-3">
            <Link href="/login/Guru/home" className="text-decoration-none color red fw-bold text-info">
              Teacher
            </Link>
          </div>
        </div>
      </nav>
      <table class="table bg-white mt-2">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Name</th>
            <th scope="col">date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>12-9-22</td>
            <td>
              <Link href="/login/siswa/baru" className="text-decoration-none color red fw-bold text-info" target={"_blank"}>
                <button className="btn btn-primary">balas</button>
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>12-9-22</td>
            <td>
              <Link href="#" className="text-decoration-none color red fw-bold text-info" target={"_blank"}>
                <button className="btn btn-primary">balas</button>
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Chelsea</td>
            <td>12-9-22</td>
            <td>
              <Link href="/login/Guru/messege" className="text-decoration-none color red fw-bold text-info" target={"_blank"}>
                <button className="btn btn-primary">balas</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
