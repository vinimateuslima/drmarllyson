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
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Onde estamos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <FaWhatsapp />
            (81) 9999-9999
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
