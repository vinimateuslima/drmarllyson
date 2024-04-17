import Banner from "../components/Banner";

import Servicos from "../components/Servicos";

import Marcar from "../components/Marcar";

import Instagram from "../components/Instagram";

import Contato from "../components/Contato";

import Rodape from "../components/Rodape";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="principal">
        <Servicos />
        <Marcar />
        <Instagram />
        <Contato/>
      </main>
      <Rodape/>
    </>
  );
};

export default Home;
