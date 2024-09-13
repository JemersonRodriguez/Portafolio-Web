import Habilidades from './habilidades/habilidades';
import Experiencias from './experiencias/experiencias';

interface MainProps {
  setHabilidadesColapsadas: (estadoColapsado: boolean,  width: number) => void;
}

const MainComponent: React.FC<MainProps> = ({ setHabilidadesColapsadas }) => {
  const handleToggleHabilidades = (estadoColapsado: boolean , width: number) => {
    setHabilidadesColapsadas(estadoColapsado, width);
  };

  return (
    <main>
      <Habilidades titulo="Habilidades" onToggleColapsar={handleToggleHabilidades} />
      <Experiencias />
    </main>
  );
};

export default MainComponent;

