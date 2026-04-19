import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Listagem from './pages/Listagem';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <BrowserRouter>
      {/* Menu de Navegação Provisório */}
      <nav style={{ padding: '1rem', background: '#eee', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Dashboard</Link>
        <Link to="/vencimentos">Vencimentos</Link>
      </nav>

      {/* Configuração das Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vencimentos" element={<Listagem />} />
        <Route path="/cliente/:id" element={<Detalhes />} /> {/* Rota Dinâmica */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;