import "./informacion_experiencias.css";

interface InformacionExperienciasProps {
  titulo: string;
  iconos: string[];
}

const InformacionExperiencias: React.FC<InformacionExperienciasProps> = ({
  titulo,
  iconos,
}) => {
  return (
    <div className="informacion-experiencias">
      <h1>{titulo}</h1>
      <div className="grupo-iconos">
        {iconos.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default InformacionExperiencias;
