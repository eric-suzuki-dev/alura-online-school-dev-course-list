import './App.css';
import BarraDePesquisa from './components/BarraDePesquisa';
import Sidebar from './components/Sidebar';
import Filtro from './components/Filtro';
import Ordenacao from './components/Ordenacao';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
	const [dados, setDados] = useState([]);
	useEffect(() => {
		fetch(
			'https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes'
		)
			.then((resposta) => resposta.json())
			.then((dados) => setDados(dados));
	}, []);

	return (
		<div className='container'>
			<Sidebar />
			<div>
				<BarraDePesquisa />
				<Filtro />
				<Ordenacao />
				<ul className='lista-cards'>
					{dados
						? dados.map((item, index) => (
								<li key={index}>
									<Card
										id={item.id}
										imagemUrl={item.imagem_capa}
										titulo={item.titulo}
										resumo={item.resumo}
										linhasDeCodigo={item.linhas_de_codigo}
										compartilhamentos={item.compartilhamentos}
										comentarios={item.comentarios}
										usuario={item.usuario}
									/>
								</li>
						  ))
						: null}
				</ul>
			</div>
		</div>
	);
}

export default App;
