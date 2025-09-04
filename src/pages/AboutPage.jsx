// src/pages/AboutPage.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h1>Це сторінка про нас</h1>
      <p>Загальна інформація про компанію.</p>
      <Link to="history">Наша історія</Link>
      <Outlet />
    </div>
  );
}

export default AboutPage;
