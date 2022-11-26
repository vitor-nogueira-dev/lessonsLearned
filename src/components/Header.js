import React from "react";
import "./css/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Lições aprendidas - Trybe</h1>
        <ul className="menu-header">
          <li>Quem sou eu?</li>
          <li>Lições</li>
          <li>Primeiras Impressões</li>
          <li>Redes Sociais</li>
        </ul>
      </header>
    );
  }
}

export default Header;
