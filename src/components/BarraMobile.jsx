//Icones

import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

import "./BarraMobile.css";

const BarraMobile = () => {
  return (
    <div className="barra_mobile_container">
      <div className="barra_mobile">
        <span>
          <FaMapMarkerAlt /> Av Caxangá, Iputinga, 45
        </span>
        <span>
          <MdOutlineMailOutline />
          marllysonrenan@gmail.com
        </span>
        <span>
          <FaRegClock />
          Seg a Sexta 09:00 as 20:00
        </span>
      </div>
    </div>
  );
};

export default BarraMobile;
