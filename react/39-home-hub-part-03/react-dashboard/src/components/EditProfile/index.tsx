import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';

type FormValues = {
	email: string;
	password: string;
};

const EditProfile = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => console.log(data);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<TextField
				id='email'
				label='Email'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.email}
				helperText={errors.email?.message}
				{...register('email', {
					required: 'Campo de e-mail obrigatório.',
					pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido.' },
				})}
			/>
			<TextField
				id='firstName'
				label='Nome'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.password}
				helperText={errors.password?.message}
				{...register('password')}
			/>
			<TextField
				id='lastName'
				label='Sobrenome'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.password}
				helperText={errors.password?.message}
				{...register('password')}
			/>
			<Button
				variant='contained'
				sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}
				onClick={handleSubmit(onSubmit)}
			>
				Editar perfil
			</Button>
		</Box>
	);
};

export default EditProfile;