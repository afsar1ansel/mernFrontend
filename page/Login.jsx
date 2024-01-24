import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/MyContext";
import { useContext } from "react";


function Login() {
  const [form, setForm] = useState({ email: "", pass: "" });
  const { auth, setAuth } = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:3000/user/login", form, {
        withCredentials: true,
      })
      .then((res) => {
        setAuth(true);
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
      <h1>Login</h1>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          id="password"
          name="pass"
          value={form.pass}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}

export default Login;
