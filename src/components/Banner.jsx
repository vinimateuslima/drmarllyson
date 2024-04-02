import { Row, Col, Button } from "reactstrap";

import { FaWhatsapp } from "react-icons/fa";

import marley from "../assets/img/marley.png";

import "./Banner.css"

const Banner = () => {
  return (
    <Row className="banner_container">
      <Col xs="12" lg="6">
        <div className="banner_info">
          <h1>Dr Marllyson Renan</h1>
          <p>Cirurgião-Dentista - CRO-PE: 15430</p>
          <p>
            O Dr. Marllyson Renan é apaixonado por proporcionar cuidados
            odontológicos personalizados. Formado na Universidade Tiradentes
            (UNIT), ele combina habilidade técnica e empatia para oferecer
            tratamentos abrangentes, visando sempre a saúde bucal e o bem-estar
            dos pacientes.
          </p>
          <div>
            <Button>
              <FaWhatsapp />
              Agende uma avaliação
            </Button>
          </div>
        </div>
      </Col>

      <Col xs="12" lg="6">
        <div className="banner_marley_container">
        <img src={marley} className="banner_marley" alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
