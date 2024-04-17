import { useState } from "react";

import "./Contato.css";

import { Row, Col, Button } from "reactstrap";

const Contato = () => {
  const [name, setName] = useState("");
  const [assunto, setAssunto] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAssunto("");
    setEmail("");
    setDescricao("");
  };

  return (
    <section className="contato">
      <Row>
        <Col className="contato_esquerda" lg="6">
          <h2>Entre em contato conosco!</h2>
          <form id="form_contato" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />
            <input
              type="text"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              placeholder="Assunto"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="5"
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
              value={descricao}
            ></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </Col>
        <Col lg="6">
          <h2>Onde estamos</h2>

          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Av+Caxang%C3%A1%2C+Iputinga%2C+45&t=&z=17&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <a href="https://online-timer.me/"></a>

              <a href="https://online.stopwatch-timer.net/"></a>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contato;
