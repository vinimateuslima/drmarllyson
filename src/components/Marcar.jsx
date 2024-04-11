import { Row, Col, Button } from "reactstrap";

import { FaWhatsapp } from "react-icons/fa";

import marley2 from "../assets/img/marley_2.png";

import { FaCircleCheck } from "react-icons/fa6";

import "./Marcar.css";

const Marcar = () => {
  return (
    <section className="marcar_consulta">
      <Row>
        <Col className="marcar_consulta_left" lg="6">
          <img
            className="marley2"
            src={marley2}
            alt="Dr Marley com os braços cruzados"
          />
        </Col>
        <Col className="marcar_consulta_right" lg="6">
          <h2>Marque sua consulta</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
            feugiat elit. Quisque vitae libero a ante cursus feugiat.{" "}
          </p>
          <ul>
            <li>
              <FaCircleCheck />
              Avaliação
            </li>
            <li>
              <FaCircleCheck />
              Proteses fixas e móveis
            </li>
            <li>
              <FaCircleCheck />
              Clareamento
            </li>
            <li>
              <FaCircleCheck />
              Facetas dentárias
            </li>
          </ul>
          <Button> <FaWhatsapp /> Agendar consulta</Button>
        </Col>
      </Row>
    </section>
  );
};

export default Marcar;
