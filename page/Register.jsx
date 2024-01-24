import React, { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ userName: "", pass: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
    // https://real-cyan-gorilla-wear.cyclic.app
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form)

    axios
      .post("http://localhost:3000/user/register", form,{withCredentials: true})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Register</h1>
      <form
        action="/"
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="userName"
          value={form.userName}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="pass"
          value={form.pass}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}

export default Register;
