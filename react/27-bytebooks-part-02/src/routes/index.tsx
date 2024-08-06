import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import BookDetail from '../pages/BookDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppContext } from '../store/app';

export const Routes = () => (
	<AppContext>
		<Header />
		<Switch>
			<Route exact path='/' component={Catalog} />
			<Route path='/book' component={BookDetail} />
		</Switch>
		<Footer />
	</AppContext>
);