import React, { useState, useEffect, useRef } from 'react';
import Informacion from './information_habilidades';
import './habilidades.css';

interface HabilidadesProps {
  titulo: string;
  onToggleColapsar: (estadoColapsado: boolean, width: number) => void;
}

const Habilidades: React.FC<HabilidadesProps> = ({ titulo, onToggleColapsar }) => {
  const caracteristicas = [
    'Desarrollo de Habilidades de Programacion y Logica',
    'Gestion de Sistemas y Bases de Datos',
    'Analisis y Diseño de Sistemas',
    'Metematicas y Ingenieria de Prediccion de Riesgos',
  ];

  const informacion_extra = [
    'Esta área me capacita para enfrentar problemas mediante la programación eficiente y el pensamiento lógico.',
    'Esta área se centra en la administración y manejo de bases de datos y la gestión eficiente de sistemas de información.',
    'Enfocado en la planificación, análisis y diseño de sistemas de información para satisfacer las necesidades de las empresas.',
    'Relacionado con el uso de métodos matemáticos y estadísticas para predecir y gestionar riesgos empresariales',
  ];

  const [show, setShow] = useState(true);
  const habilidadesRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const newState = !show;
    setShow(newState);
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (habilidadesRef.current) {
        onToggleColapsar(!show, habilidadesRef.current.offsetWidth);
      }
    });

    if (habilidadesRef.current) {
      observer.observe(habilidadesRef.current);
    }

    return () => {
      if (habilidadesRef.current) {
        observer.unobserve(habilidadesRef.current);
      }
    };
  }, [show, onToggleColapsar]);

  return (
    <div ref={habilidadesRef} className={`habilidades-container ${show ? '' : 'collapsed'}`}>
        <h1 className="titulo-habilidades" onClick={handleClick}>
          {titulo}
        </h1>
      {show &&
        caracteristicas.map((caracteristica, index) => (
          <Informacion
            key={index}
            caracteristicas={caracteristica}
            informacion_extra={informacion_extra[index]}
          />
        ))}
    </div>
  );
};

export default Habilidades;
