import "./Cabecalho.css";

import { Row, Col } from "reactstrap";

import Logo from "./Logo";

import Menu from "./Menu";

import Barra from "./Barra";

import BarraMobile from "./BarraMobile";

import Banner from "./Banner";

const Cabecalho = () => {
  return (
    <>
      <Row className="cabecalho">
        <Col xs="9" lg="4">
          <Logo />
        </Col>
        <Col xs="3" lg="8">
          <Menu />
        </Col>
      </Row>
      <Barra />
      <BarraMobile />
      <Banner />
    </>
  );
};

export default Cabecalho;
