import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import BookDetail from '../pages/BookDetail';

export const Routes = () => (
	<Switch>
		<Route exact path='/' component={Catalog} />
		<Route path='/book' component={BookDetail} />
	</Switch>
);
