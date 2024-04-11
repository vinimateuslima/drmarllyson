import "./Card.css";



const Card = ({src, title, description, link}) => {


    return (
    <div className="card_container">
      <img className="card_img" src={src} alt="" />

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
