import "./Logo.css";

//Imagem da logo
import logo from "../assets/img/logo_dr_marllynson.png";

const Logo = () => {
  return (
    <div className="logo_container">
      <img src={logo} alt="Logo do Dr Marllyson" className="img-fluid" />
    </div>
  );
};

export default Logo;
