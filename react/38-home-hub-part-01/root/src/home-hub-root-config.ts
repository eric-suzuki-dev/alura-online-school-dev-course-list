
import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
	name: '@home-hub/hello-world',
	app: () => System.import<LifeCycles>('@home-hub/hello-world'),
	activeWhen: ['/'],
});

start({
	urlRerouteOnly: true,
});
