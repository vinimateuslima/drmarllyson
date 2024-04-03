import "./Servicos.css";

import Card from "./Card";

const Servicos = () => {
  return (
    <section className="servicos">
      <h2>Servicos</h2>
      <div className="section_card">
        <Card
          title={"Facetas Dentárias"}
          description={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed feugiat elit. Quisque vitae libero a ante cursus feugiat. Nullam non lacus non diam maximus euismod at eget sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed feugiat elit. Quisque vitae libero a ante cursus feugiat. Nullam non lacus non diam maximus euismod at eget sapien."
          }
        />
        <Card
          title={"Facetas Dentárias"}
          description={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed feugiat elit. Quisque vitae libero a ante cursus feugiat. Nullam non lacus non diam maximus euismod at eget sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed feugiat elit. Quisque vitae libero a ante cursus feugiat. Nullam non lacus non diam maximus euismod at eget sapien."
          }
        />

        <Card
          title={"Facetas Dentárias"}
          description={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed feugiat elit. Quisque vitae libero a ante cursus feugiat. Nullam non lacus non diam maximus euismod at eget sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed feugiat elit. Quisque vitae libero a ante cursus feugiat. Nullam non lacus non diam maximus euismod at eget sapien."
          }
        />
      </div>
    </section>
  );
};

export default Servicos;
