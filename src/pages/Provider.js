import React from "react";
import { useNavigate } from "react-router-dom";

const Provider = () => {
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
        <h1>Provider Page</h1>
      </div>
    </div>
  );
};

export default Provider;
