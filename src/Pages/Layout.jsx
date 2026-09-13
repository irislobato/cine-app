import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <header>
        <img src="" alt="" />
        <div className="header-titulo">
                  <h1>CineApp</h1>
                  <p></p>
        </div>
        <nav>
          <NavLink className="home" to="/">
            Home
          </NavLink>
          <NavLink className="favoritos" to="favoritos">
            Favoritos
          </NavLink>
          <NavLink className="sobre" to="sobre">
            Sobre
          </NavLink>
        </nav>
      </header>

      <Outlet></Outlet>

          <footer>
              <hr className="linha-footer-inicial" />
        <h1>Siga-nos</h1>
        <a href="">
          {" "}
          <img src="" alt="instagram" />
        </a>
        <a href="">
          {" "}
          <img src="" alt="tiktok" />
        </a>
        <a href="">
          {" "}
          <img src="" alt="linkedin" />
        </a>
        <a href="">
          {" "}
          <img src="" alt="github" />
        </a>

        <hr />
        <p>© 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
