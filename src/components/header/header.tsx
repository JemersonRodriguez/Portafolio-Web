import logo from "../../assets/iconos/logo.svg";
import model from "../../assets/iconos/model.svg";

interface Header {
  nombre: string;
  profesion: string;
}

const Header: React.FC<Header> = ({ nombre, profesion }) => {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="header-logo" />
      </div>

      <div className="header-contenido-principal">
        <h1>Nombre: {nombre}</h1>
        <h2>Profesión: {profesion}</h2>
      </div>

      <div className="header-foto-perfil">
        <img src={model} alt="foto-perfil" />
      </div>
    </header>
  );
};

export default Header;
