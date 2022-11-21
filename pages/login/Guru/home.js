import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-home-guru ">
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

      <div className=" bg-dark text-white shadow p-3 mb-5  rounded bg-opacity-50 p-5 w-50  position-absolute top-50 start-50 translate-middle ">
        <div className=" mb-3 row  ">
          <h1>Hi</h1>
          <h5>Welcome back! upload student grade</h5>

          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary btn-opacity-50" type="button">
            <select class="form-select" aria-label="Default select example">
              <option selected>Select </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </button>
          <Link href={"/"} class=" mt-4 btn btn-info w-50 btn-opacity-50 rounded fw-bold" type="button">
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
