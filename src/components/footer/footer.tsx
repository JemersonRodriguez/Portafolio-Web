import React, { useEffect, useState } from "react";
import "./footer.css";

import whatsaap from "../../assets/iconos/whatsapp.svg";
import facebook from "../../assets/iconos/facebook.svg";
import github from "../../assets/iconos/github.svg";
import mail from "../../assets/iconos/mail.svg";
import gps from "../../assets/iconos/gps.svg";
import downloand from "../../assets/iconos/download.svg";

interface FooterProps {
  habilidadesColapsadas: boolean;
  habilidadesWidth: number;
}

const Footer: React.FC<FooterProps> = ({
  habilidadesColapsadas,
  habilidadesWidth,
}) => {
  const [collapsing, setCollapsing] = useState(false);
  const [reversing, setReversing] = useState(false);

  useEffect(() => {
    if (habilidadesColapsadas) {
      setReversing(false);
      setCollapsing(true);
      setTimeout(() => setCollapsing(false), 1000); // Tiempo total de las animaciones
    } else {
      setReversing(true);
      setTimeout(() => setReversing(false), 1000); // Tiempo total de las animaciones inversas
    }
  }, [habilidadesColapsadas]);

  return (
    <footer
      className={`footer-container ${
        habilidadesColapsadas ? "collapsed-footer" : "fixed-footer"
      } ${collapsing ? "collapsing" : ""} ${reversing ? "reversing" : ""}`}
      style={habilidadesColapsadas ? { width: `${habilidadesWidth}px` } : {}}
    >
      {!habilidadesColapsadas && (
        <div className={`grupo-iconos-footer ${collapsing ? "collapsed" : ""}`}>
          <span>Contactos</span>
          <img
            src={whatsaap}
            alt="icono-whatsapp"
            data-tooltip="WhatsApp"
          />
          <img
            src={facebook}
            alt="icono-facebook"
            data-tooltip="Facebook"
          />
          <img
            src={github}
            alt="icono-github"
            data-tooltip="GitHub"
          />
          <img
            src={mail}
            alt="icono-mail"
            data-tooltip="Email"
          />
          <img
            src={gps}
            alt="icono-gps"
            data-tooltip="GPS"
          />
          <img
            src={downloand}
            alt="icono-descarga"
            data-tooltip="Download"
          />
        </div>
      )}

      {habilidadesColapsadas && (
        <div
          className={`contenido-adicional ${
            !collapsing && habilidadesColapsadas ? "visible" : ""
          }`}
        >
          <h3>Contacto</h3>
          <p>
            Estos son algunos detalles adicionales que se muestran cuando el
            footer está colapsado.
          </p>
          <img
            src="/src/assets/iconos/informacion.svg"
            alt="Información adicional"
          />
          <img
            src="/src/assets/iconos/informacion2.svg"
            alt="Más información"
          />
        </div>
      )}
    </footer>
  );
};

export default Footer;
