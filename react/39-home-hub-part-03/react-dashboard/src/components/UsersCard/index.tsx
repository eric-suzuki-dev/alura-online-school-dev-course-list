import { Box, Divider, Typography } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UsersIcons from '../../assets/users.png';

const UsersCard = () => {
	return (
		<Card sx={{ background: '#F5F5F5' }}>
			<CardContent>
				<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
					<img src={UsersIcons} alt='water icon' width={60} />
					<Typography color={'#E65100'}>Usuários da família</Typography>
				</Box>
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 2 }}>
					<AccountCircleIcon sx={{ color: '#BDBDBD', width: 60 }} />
					<Typography variant='body2'>Usuário 1</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<AccountCircleIcon sx={{ color: '#BDBDBD', width: 60 }} />
					<Typography variant='body2'>Usuário 2</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<AccountCircleIcon sx={{ color: '#BDBDBD', width: 60 }} />
					<Typography variant='body2'>Usuário 3</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
export default UsersCard;
