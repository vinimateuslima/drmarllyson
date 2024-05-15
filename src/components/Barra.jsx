import { Row, Col } from "reactstrap";

//Icones

import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";

import "./Barra.css";

const Barra = () => {
  return (
    <Row className="barra">
      <Col md="4">
        <p>
          <FaMapMarkerAlt /> Av Caxangá, Iputinga, 45
        </p>
      </Col>
      <Col md="4">
        <p>
          <MdOutlineMailOutline />
          marllysonrenan@gmail.com
        </p>
      </Col>
      <Col md="4">
        <p>
          <FaRegClock />
          Seg a Sexta 09:00 as 20:00
        </p>
      </Col>
    </Row>
  );
};

export default Barra;
