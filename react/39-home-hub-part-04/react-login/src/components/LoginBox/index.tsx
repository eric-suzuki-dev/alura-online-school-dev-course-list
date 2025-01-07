import { Box, Container, Typography } from '@mui/material';

import HomeHubLogo from '../assets/logo.png';
import LoginForm from '../LoginForm';

const LoginBox = () => {
	return (
		<Container maxWidth='xs'>
			<Box
				sx={{
					bgcolor: '#F5F5F5',
					height: '45vh',
					mt: '10vh',
					borderRadius: '24px',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<img src={HomeHubLogo} alt='logo' width={140} style={{ marginTop: 36, marginBottom: 36 }} />
				<Typography sx={{ fontSize: 18, fontWeight: 700 }}>Log In</Typography>
				<Typography sx={{ fontSize: 14, fontWeight: 400 }}>
					Insira seus dados para acessar o hub.
				</Typography>
				<LoginForm />
			</Box>
		</Container>
	);
};

export default LoginBox;
