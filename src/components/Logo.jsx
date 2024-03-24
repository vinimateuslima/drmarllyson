import "./Logo.css";

import { Row, Col } from "reactstrap";

//Imagem da logo
import logo from "../assets/img/logo_dr_marllynson.png";

const Logo = () => {
  return (
    <Row className="logo_container">
      <Col lg="12" className="d-flex justify-content-center">
        <img src={logo} alt="Logo do Dr Marllyson" className="img-fluid"/>
      </Col>
    </Row>
  );
};

export default Logo;
