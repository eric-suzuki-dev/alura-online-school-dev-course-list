import LoginBox from './components/LoginBox';
import backgroundImg from './components/assets/background.png';
import { publicApiFunction } from '../../utils/src/home-hub-utils';

export default function Root() {
	publicApiFunction();
	return (
		<div
			style={{
				backgroundImage: `url(${backgroundImg})`,
				backgroundSize: 1000,
				backgroundRepeat: 'repeat-x',
				backgroundPosition: 'bottom',
				height: '90vh',
			}}
		>
			<LoginBox />
		</div>
	);
}
