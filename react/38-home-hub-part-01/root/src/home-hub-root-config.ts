import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
	name: '@home-hub/hello-world',
	app: () => System.import<LifeCycles>('@home-hub/hello-world'),
	activeWhen: (location) => location.pathname === '/hello-world',
});

registerApplication({
	name: '@home-hub/react-navbar',
	app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
	activeWhen: (location) => location.pathname === '/',
});

start({
	urlRerouteOnly: true,
});
