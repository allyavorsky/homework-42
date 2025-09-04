import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CompanyHistory from "./pages/CompanyHistory";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/about">Про нас</NavLink>
        <NavLink to="/contact">Контакти</NavLink>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="history" element={<CompanyHistory />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
