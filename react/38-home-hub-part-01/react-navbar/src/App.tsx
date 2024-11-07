import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function App() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: '#9C27B0' }}>
				<Toolbar>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						HomeHub
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-haspopup='true'
							onClick={() => {}}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
						<IconButton size='large' color='inherit'>
							<Badge color='error'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}