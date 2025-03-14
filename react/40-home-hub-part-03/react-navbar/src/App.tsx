import {
	AppBar,
	Badge,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
} from '@mui/material';
import { AuthInfo, checkIsAuthenticated, logoutFunction } from '../../utils/src/home-hub-utils';
import { useEffect, useState } from 'react';

import { AccountCircle } from '@mui/icons-material';
import HomeHubLogo from './assets/home-hub.png';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WifiIcon from '@mui/icons-material/Wifi';

export default function App() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>();

	useEffect(() => {
		const { isAuthenticated, authInfo: authObj } = checkIsAuthenticated();
		if (!isAuthenticated) {
			return location.replace('/');
		}
		setAuthInfo(authObj);
	}, []);

	const isMenuOpen = Boolean(anchorEl);

	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
			<List>
				<ListItem disablePadding onClick={() => location.replace(`/dashboard/${authInfo.authId}/`)}>
					<ListItemButton>
						<ListItemIcon>
							<SpaceDashboardIcon />
						</ListItemIcon>
						<ListItemText primary={'Visão geral'} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<WifiIcon />
						</ListItemIcon>
						<ListItemText primary={'Dispositivos'} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<LockIcon />
						</ListItemIcon>
						<ListItemText primary={'Segurança'} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary={'Configurações'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

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
			<MenuItem onClick={handleMenuClose}>
				{!!authInfo?.firstName ? `${authInfo?.firstName} ${authInfo?.lastName}` : authInfo?.email}
			</MenuItem>
			<Divider />
			<ListItem disablePadding onClick={handleMenuClose}>
				<ListItemButton>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary={'Configurações'} />
				</ListItemButton>
			</ListItem>
			<ListItem
				disablePadding
				onClick={() => location.replace(`/dashboard/${authInfo.authId}/edit-profile`)}
			>
				<ListItemButton>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary={'Perfil'} />
				</ListItemButton>
			</ListItem>
			<Divider />
			<ListItem disablePadding onClick={logoutFunction}>
				<ListItemButton>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary={'Sair'} />
				</ListItemButton>
			</ListItem>
		</Menu>
	);

	return (
		<div id='single-spa-application:react-navbar'>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' sx={{ backgroundColor: '#9C27B0' }}>
					<Toolbar>
						<MenuItem onClick={toggleDrawer(true)}>
							<img src={HomeHubLogo} style={{ width: '176px' }} />
						</MenuItem>
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
				<Drawer open={open} onClose={toggleDrawer(false)}>
					{DrawerList}
				</Drawer>
				{renderMenu}
			</Box>
		</div>
	);
}