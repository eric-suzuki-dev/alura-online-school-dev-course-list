import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Header />
		<Router>
			<Routes />
		</Router>
		<Footer />
	</Provider>
);
