import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import HeroCard from './components/HeroCard';
import UsersCard from './components/UsersCard';
import WaterCard from './components/WaterCard';

export default function Root() {
	const [authInfo, setAuthInfo] = useState<{ email: string; password: string } | undefined>();

	useEffect(() => {
		const auth = localStorage.getItem('auth');
		if (!auth) {
			return location.replace('/');
		}
		setAuthInfo(JSON.parse(auth));
		console.log('authInfo', auth);
	}, []);

	return (
		<div id='single-spa-application:react-dashboard'>
			<Box
				width={3 / 4}
				my={4}
				display='flex'
				alignItems='center'
				gap={4}
				p={2}
				sx={{ margin: 'auto' }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<HeroCard />
					</Grid>
					<Grid item xs={4}>
						<UsersCard />
					</Grid>
					<Grid item xs={4}>
						<WaterCard />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
