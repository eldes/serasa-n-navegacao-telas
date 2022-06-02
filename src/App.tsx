import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Principal from './components/Principal';
import Rodape from './components/Rodape';

const App = function() {
  return (
    <>
      <Cabecalho />
      <Menu />
      <Principal />
      <Rodape />
    </>
  );
};

export default App;