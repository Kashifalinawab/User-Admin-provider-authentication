import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  // console.log(role);
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    fetch("http://localhost:3001/auth")
      .then((resp) => resp.json())
      .then((convertedResp) => {
        setData(convertedResp);
      });
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();

    setUserId("");
    setPassword("");
    const a = data.find(
      (info) =>
        info.userId === userId &&
        info.password === password &&
        info.role === role
    );
    if (a === undefined) {
      alert("try again");
    } else if (a.role === role) {
      localStorage.setItem("token", JSON.stringify(a.id));
      return navigate(`/${role}`);
    }
  };

  return (
    <div id="main-div">
      <h1>Please login</h1> <br />
      <br />
      <form onSubmit={submitHandle}>
        <input
          type="radio"
          name="radio1"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value="user"
          required
        />
        <label htmlFor="user">User</label>
        <input
          type="radio"
          name="radio1"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value="admin"
          required
        />
        <label htmlFor="admin">Admin</label>
        <input
          type="radio"
          name="radio1"
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value="provider"
          required
        />
        <label htmlFor="provider">Provider</label> <br />
        <input
          type="text"
          placeholder="UserId"
          name="userId"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          required
        />
        <span> </span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <br />
        <button id="lginbtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
