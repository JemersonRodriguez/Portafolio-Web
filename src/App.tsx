import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

const App: React.FC = () => {

  const [habilidadesColapsadas, setHabilidadesColapsadas] = useState(false);
  const [habilidadesWidth, setHabilidadesWidth] = useState(0);

  const handleSetHabilidadesColapsadas = (estadoColapsado: boolean, width: number) => {
    setHabilidadesColapsadas(estadoColapsado);
    setHabilidadesWidth(width);
  };

  return (
    <div className="portafolio-web">
      <Header nombre="Jemerson Rodriguez" profesion="Informático Empresarial" />
      <Main  setHabilidadesColapsadas={handleSetHabilidadesColapsadas}/>
      <Footer habilidadesColapsadas={habilidadesColapsadas} habilidadesWidth={habilidadesWidth}  />
    </div>
  );
};

export default App;
