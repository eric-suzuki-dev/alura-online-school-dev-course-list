import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const { register, handleSubmit } = useForm<FormValues>();

	// eslint-disable-next-line no-console
	const onSubmit = (data) => console.log(data);
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<TextField
				id='email'
				label='Email'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '16px' }}
				{...register('email')}
			/>
			<TextField
				id='password'
				label='Password'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '16px' }}
				{...register('password')}
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