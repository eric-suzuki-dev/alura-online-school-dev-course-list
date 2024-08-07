import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

export function render(url: string) {
	const html = ReactDOMServer.renderToString(
		<Router location={url}>
			<Routes />
		</Router>
	);
	return { html };
}
