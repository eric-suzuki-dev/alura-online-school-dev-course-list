import { Box, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VisaoGeral from '../../assets/visao-geral.png';

const HeroCard = () => {
	return (
		<Card sx={{ background: '#FFF3E0' }}>
			<CardContent>
				<Box
					display={'flex'}
					flexDirection={'row'}
					alignItems={'center'}
					justifyContent={'space-evenly'}
				>
					<Box>
						<Typography variant='h5'>Olá, usuário!</Typography>
						<Typography>Confira as informações da sua casa inteligente!</Typography>
					</Box>
					<img src={VisaoGeral} alt='Visão Geral' height={140} />
				</Box>
			</CardContent>
		</Card>
	);
};
export default HeroCard;
