import React from "react";

export default function Login() {
  return (
    <div className=" bg-login ">
      <div className=" bg-dark text-white shadow p-3 mb-5  rounded bg-opacity-50 p-5 w-50  position-absolute top-50 start-50 translate-middle ">
        <div className=" mb-3 row  ">
          <h1>Login Guru</h1>
          <h5>Welcome back! Please enter your details</h5>
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control rounded-pill" id="staticEmail" placeholder="email@example.com" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control rounded-pill" id="inputPassword" />
          </div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary btn-opacity-50 rounded" type="button">
            Login
          </button>
          <button class="btn btn-warning btn-opacity-50" type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
