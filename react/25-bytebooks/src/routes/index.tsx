import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../pages/Catalog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Catalog />,
	},
]);

export default router;
