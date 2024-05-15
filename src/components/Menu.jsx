import "./Menu.css";
import { FaWhatsapp } from "react-icons/fa";

import { useState } from "react";

const Menu = () => {

  const [isActive, setIsActive] = useState(false);

  const clicarMenu = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <nav className={isActive ? "menu_principal active" : "menu_principal"}>
        <button className="hamburguer" onClick={clicarMenu}></button>
        <ul className="nav-list">
          <li>
            <a href="#banner">Inicio</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#marcar-consulta">Sobre</a>
          </li>
          <li>
            <a href="#contato">Onde estamos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="https://wa.me/+5581999275121" target="_blank"><FaWhatsapp />
            (81) 9927-5121</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
