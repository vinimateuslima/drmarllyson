import "./Menu.css";
import { FaWhatsapp } from "react-icons/fa";

const Menu = () => {
  return (
    <>
      <nav className="menu_principal">
        <ul>
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
