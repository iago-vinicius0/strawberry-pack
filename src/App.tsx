import './App.css';
import Apresentacao from './layouts/Apresentacao';
import Home from './layouts/Home';
import Youtubers from './layouts/Youtubers';
import ProdutoDescricao from './layouts/ProdutoDescricao';
import Footer from './layouts/Footer';
import PromoPage from './layouts/PromoPage';
import GarantiaPage from './layouts/GarantiaPage';

function App() {
  return (
    <div>
      <Home />
      <Apresentacao />
      <Youtubers />
      <ProdutoDescricao />
      <PromoPage />
      <GarantiaPage />
      <Footer />
    </div>
  );
}

export default App;
