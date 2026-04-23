import { Link } from 'react-router-dom';
import useVencimentos from '../hooks/useVencimentos.js';
import '../index.css';

export default function Home() {
  const { vencimentos, loading } = useVencimentos();

  return (
    <div>
      <h1>CertiRecupera</h1>
      <p>Sistema para acompanhar os vencimentos dos certificados.</p>

      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <p>Total de vencimentos cadastrados: {vencimentos.length}</p>
      )}

      <Link to="/vencimentos">
        <button>Ver vencimentos</button>
      </Link>
    </div>
  );
}
