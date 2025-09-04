import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/contact");
  }

  return (
    <div>
      <h1>Це домашня сторінка</h1>
      <button onClick={handleNavigate}>Перейти до контактів</button>
    </div>
  );
}

export default HomePage;
