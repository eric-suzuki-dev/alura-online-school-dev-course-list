import { Box, Container, Typography } from '@mui/material';

import HomeHubLogo from '../assets/logo.png';
import LoginForm from '../LoginForm';

const LoginBox = () => {
	return (
		<Container maxWidth='xs'>
			<Box
				sx={{
					bgcolor: '#F5F5F5',
					height: '65vh',
					mt: '10vh',
					borderRadius: '24px',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<img src={HomeHubLogo} alt='logo' width={140} style={{ marginTop: 36 }} />
				<Typography>Log In</Typography>
				<Typography>Insira seus dados para acessar o hub.</Typography>
				<LoginForm />
			</Box>
		</Container>
	);
};

export default LoginBox;