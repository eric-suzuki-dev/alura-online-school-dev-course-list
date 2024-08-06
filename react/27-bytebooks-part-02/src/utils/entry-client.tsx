import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

ReactDOM.hydrateRoot(
	document.getElementById('root') as HTMLElement,
	<Router>
		<Routes />
	</Router>
);