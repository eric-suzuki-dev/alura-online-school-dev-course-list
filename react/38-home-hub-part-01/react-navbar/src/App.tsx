import { AppBar, Badge, Box, Divider, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';
import HomeHubLogo from './assets/home-hub.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

export default function App() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Usuário</MenuItem>
			<Divider />
			<MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
			<MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
			<Divider />
			<MenuItem onClick={handleMenuClose}>Sair</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: '#9C27B0' }}>
				<Toolbar>
					<img src={HomeHubLogo} style={{ width: '176px' }} />
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<MenuItem onClick={handleProfileMenuOpen}>
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
						</MenuItem>
						<IconButton size='large' color='inherit'>
							<Badge color='error'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
}