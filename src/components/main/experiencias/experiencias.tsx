import InformacionExperiencias from "./informacion_experiencias";
import "./experiencias.css";

// Importar todos los iconos
import javaIcon from "../../../assets/lenguajes_programacion/java.svg";
import csharpIcon from "../../../assets/lenguajes_programacion/csharp.svg";
import javascriptIcon from "../../../assets/lenguajes_programacion/javascript.svg";
import phpIcon from "../../../assets/lenguajes_programacion/php.svg";
import laravelIcon from "../../../assets/frameworks/laravel.svg";
import reactIcon from "../../../assets/frameworks/react.svg";
import ionicIcon from "../../../assets/frameworks/ionic.svg";
import astroIcon from "../../../assets/frameworks/astro.svg";
import djangoIcon from "../../../assets/frameworks/djjango.svg";
import springIcon from "../../../assets/frameworks/spring.svg";
import mysqlIcon from "../../../assets/base_datos/mysql.svg";
import firebaseIcon from "../../../assets/base_datos/firebase.svg";
import sqlserverIcon from "../../../assets/base_datos/sqlserver.svg";
import githubIcon from "../../../assets/herramientas/github.svg";
import dockerIcon from "../../../assets/herramientas/docker.svg";
import cssIcon from "../../../assets/herramientas/css.svg";
import htmlIcon from "../../../assets/herramientas/html.svg";
import tailwindIcon from "../../../assets/herramientas/tailwind.svg";

const Experiencias: React.FC = () => {
  const experienciasData = [
    {
      titulo: "Lenguajes de Programación",
      iconos: [javaIcon, csharpIcon, javascriptIcon, phpIcon],
    },
    {
      titulo: "Frameworks",
      iconos: [
        laravelIcon,
        reactIcon,
        ionicIcon,
        astroIcon,
        djangoIcon,
        springIcon,
      ],
    },
    {
      titulo: "Bases de Datos",
      iconos: [mysqlIcon, firebaseIcon, sqlserverIcon],
    },
    {
      titulo: "Herramientas de desarrollo y Gestion de codigo",
      iconos: [githubIcon, dockerIcon, cssIcon, htmlIcon, tailwindIcon],
    },
  ];

  return (
    <div className="experiencias-container">
      <h1 className="titulo-experiencias">Experiencias</h1>
      {experienciasData.map((exp, index) => (
        <InformacionExperiencias
          key={index}
          titulo={exp.titulo}
          iconos={exp.iconos}
        />
      ))}
    </div>
  );
};

export default Experiencias;
