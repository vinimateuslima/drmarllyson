import "./Card.css";

import faceta from "../assets/card/facetas.png";

const Card = ({img, title, description, link}) => {
  return (
    <div className="card_container">
      <img className="card_img" src={faceta} alt="" />

      <div className="card_body">
        <h2 className="card_title">{title}</h2>
        <p className="card_description">
         {description}
        </p>
      </div>
      <div className="card_footer">
        <a href={link} target="_blank" className="card_button">Saiba mais</a>
      </div>
    </div>
  );
};

export default Card;
