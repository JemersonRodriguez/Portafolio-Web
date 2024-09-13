import React, { useState } from "react";
import flecha from "../../../assets/iconos/arrow-right.svg";
import "./informacion_habilidades.css"; // Importa los estilos específicos del componente

interface InformacionProps {
  caracteristicas: string;
  informacion_extra: string;
}

const Informacion: React.FC<InformacionProps> = ({
  caracteristicas,
  informacion_extra,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="informacion-container">
      <div className={`text-container ${isVisible ? "flipped" : ""}`}>
        <div className="info-content front">
          <h1 className="info-text">{caracteristicas}</h1>
          <div className="espacio-desplegable">
            <img
              className="child-image"
              src={flecha}
              alt="boton-desplegable"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="info-content back">
          <h1 className="info-text">{informacion_extra}</h1>
          <div className="espacio-desplegable">
            <img
              className="child-image"
              src={flecha}
              alt="boton-desplegable"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
