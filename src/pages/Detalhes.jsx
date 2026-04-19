import { useParams } from 'react-router-dom';

export default function Detalhes() {
  const { id } = useParams(); // Pega o ID da URL

  return (
    <div>
      <h1>Detalhes do Cliente</h1>
      <p>Buscando dados do cliente ID: {id}</p>
    </div>
  );
}