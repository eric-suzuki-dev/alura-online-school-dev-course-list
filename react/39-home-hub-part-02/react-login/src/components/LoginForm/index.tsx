import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	// eslint-disable-next-line no-console
	const onSubmit = (data) => console.log(data);
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<TextField
				id='email'
				label='Email'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '16px' }}
				error={!!errors.email}
				helperText={errors.email?.message}
				{...register('email', {
					required: 'Campo de e-mail obrigatório.',
					pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido.' },
				})}
			/>
			<TextField
				id='password'
				label='Password'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '16px' }}
				error={!!errors.password}
				helperText={errors.password?.message}
				{...register('password', { required: 'Senha obrigatória.' })}
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