import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
	name: '@home-hub/react-navbar',
	app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
	activeWhen: (location) => location.pathname.includes('/'),
});

registerApplication({
	name: '@home-hub/react-dashboard',
	app: () => System.import<LifeCycles>('@home-hub/react-dashboard'),
	activeWhen: (location) => location.pathname.includes('/'),
});

registerApplication({
	name: '@home-hub/react-login',
	app: () => System.import<LifeCycles>('@home-hub/react-login'),
	activeWhen: (location) => location.pathname === '/',
});

start({
	urlRerouteOnly: true,
});
