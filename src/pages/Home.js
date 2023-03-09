import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <button onClick={clickHandler}>Logout</button>
      </div>
      <div>
        <h1>HomePage</h1>
      </div>
    </div>
  );
};

export default Home;
