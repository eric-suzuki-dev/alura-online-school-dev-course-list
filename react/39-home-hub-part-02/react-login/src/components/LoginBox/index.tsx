import { Box, Container, Typography } from '@mui/material';

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
				<Typography>HomeHub</Typography>
				<Typography>Log In</Typography>
				<Typography>Insira seus dados para acessar o hub.</Typography>
				<LoginForm />
			</Box>
		</Container>
	);
};

export default LoginBox;