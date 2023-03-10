import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">Movies API</Link>
      </h2>
      <span>
        <Link to="/Lançamento">Lançamento</Link>
      </span>
      <span>
        <Link to="/Rank">Top Rank</Link>
      </span>
      <span>
        <Link to="/Lançamento"></Link>
      </span>
      <span>
        <Link to="/Lançamento"></Link>
      </span>
      <span>
        <Link to="/Lançamento"></Link>
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar Filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
