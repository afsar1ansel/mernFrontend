import React, { useContext } from "react";
import { AuthContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  //my cir URL : https://real-cyan-gorilla-wear.cyclic.app

  function logOut() {
    axios
      .get("http://localhost:3000/user/logout", { withCredentials: true })
      .then((res) => {
        console.log(res);
        console.log("you are loged out");
        setAuth(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1 className="home_page">
        {auth
          ? "You are logged in, please click to log out"
          : "welcome to home page , go to log in or register"}
      </h1>
      {/* <h1 className="home_page">{auth ? "true" : "false"}</h1> */}
      {auth ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={() => navigate("/login")}>Log in</button>
      )}
    </div>
  );
}
