import HeroCard from './components/HeroCard';
import UsersCard from './components/UsersCard';
import WaterCard from './components/WaterCard';

export default function Root() {
	return (
		<div>
			<HeroCard />
			<UsersCard />
			<WaterCard />
		</div>
	);
}
