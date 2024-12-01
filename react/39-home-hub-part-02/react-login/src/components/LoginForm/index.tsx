import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';

const LoginForm = () => {
	const { register, handleSubmit } = useForm();

	// eslint-disable-next-line no-console
	const onSubmit = (data) => console.log(data);
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<TextField
				id='email'
				label='Email'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '16px' }}
			/>
			<TextField
				id='password'
				label='Password'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '16px' }}
			/>
			<Button
				variant='contained'
				sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '16px' }}
				onClick={handleSubmit(onSubmit)}
			>
				Login
			</Button>
		</Box>
	);
};

export default LoginForm;