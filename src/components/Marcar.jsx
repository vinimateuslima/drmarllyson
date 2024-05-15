import { Row, Col, Button } from "reactstrap";

import { FaWhatsapp } from "react-icons/fa";

import marley2 from "../assets/img/marley_2.png";

import { FaCircleCheck } from "react-icons/fa6";

import "./Marcar.css";

const Marcar = () => {
  return (
    <section id="marcar-consulta" className="marcar_consulta">
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
            Estamos prontos para cuidar do seu sorriso! <br />
            Agende agora sua consulta e dê o primeiro passo para conquistar o
            sorriso dos seus sonhos.
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
          <a href="https://wa.me/+5581999275121" target="_blank">
            <Button>
              <FaWhatsapp /> Agendar consulta
            </Button>
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default Marcar;
