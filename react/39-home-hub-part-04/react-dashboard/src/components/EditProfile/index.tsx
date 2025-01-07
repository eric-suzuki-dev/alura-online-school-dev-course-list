import { AuthInfo, checkIsAuthenticated, editAuthInfo } from '../../../../utils/src/home-hub-utils';
import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';

type FormValues = Omit<AuthInfo, 'authId'>;

const EditProfile = () => {
	const { authInfo } = checkIsAuthenticated();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ defaultValues: authInfo });

	const onSubmit = (data: FormValues) => editAuthInfo({ ...data, authId: authInfo.authId });

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
				error={!!errors.firstName}
				helperText={errors.firstName?.message}
				{...register('firstName')}
			/>
			<TextField
				id='lastName'
				label='Sobrenome'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.lastName}
				helperText={errors.lastName?.message}
				{...register('lastName')}
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
