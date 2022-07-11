

import React, { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { DashboardUsersA } from '../../redux/actions/DashboardUsersA';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import { useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    height: 40,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
        width: '70%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'gray',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 5,
    },
}));
const StyledBadge2 = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 2,
    },
}));

export default function PrimarySearchAppBar() {
    const location = useLocation();
    const dispatch = useDispatch();

    console.log(location)

    useEffect(() => {
        dispatch(DashboardUsersA())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const productsCart = useSelector((state) => state.carrito.productosCarrito);
    const productosFavoritos = useSelector((state) => state.favoritos.productosFavoritos);
    let number = productsCart.length;
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    let isAdmin;
    if (isAuthenticated) {
        let findedUser = users.find(e => e.email === user.email);
        (findedUser?.isAdmin) ? isAdmin = true : isAdmin = false;
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 0,
                    '& .MuiAvatar-root': {
                        // width: ,
                        // height: 30,
                        ml: 0,
                        mr: 0,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 20,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Link to='/profile' style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>
                    <ListItemIcon>
                        <PermIdentitySharpIcon />
                    </ListItemIcon>
                    Perfil
                </MenuItem>
            </Link>
            <Divider />
            {
                (isAdmin)
                    ? <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <MenuItem>
                            <ListItemIcon>
                                <FactCheckSharpIcon />
                            </ListItemIcon>
                            Dashboard
                        </MenuItem>
                    </Link>
                    : <></>
            }
            <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu >
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    if (location.pathname === '/dashboard') return (<></>)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div style={{ backgroundColor: '#3a0ca3', height: 30, display: 'flex', alignItems: 'center', borderBottom: 'solid', borderBottomWidth: 1.7, borderColor: '#495057' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center' }}>
                        Necesitas ayuda? +54 123 456 789
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={5} xl={5} sx={{ color: '#ced4da' }}>
                    </Grid>
                    <Grid item xs={12} sm={6} md={1} lg={1} xl={1} sx={{ color: '#ced4da', fontSize: 14, cursor: 'pointer' }}>
                        Sobre nosotros
                    </Grid>
                    <Grid item xs={12} sm={6} md={1} lg={1} xl={1} sx={{ color: '#ced4da', fontSize: 14, cursor: 'pointer' }}>
                        Contactanos
                    </Grid>
                    <Grid item xs={12} sm={6} md={1} lg={1} xl={1} sx={{ color: '#ced4da', fontSize: 14, textAlign: 'left', cursor: 'pointer', marginLeft: -2 }}>
                        FAQs
                    </Grid>
                </Grid>
            </div>
            <AppBar position="static" sx={{ backgroundColor: '#3a0ca3', paddingTop: 1.5 }}>
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={12} lg={1} xl={1.5} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center', display: 'flex' }}></Grid>
                        <Grid item xs={12} sm={6} md={12} lg={2} xl={1.6} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center', display: 'flex' }}>
                            {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                            {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
                            <Typography
                                variant="h6"
                                noWrap
                                href='/'
                                component="a"
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    textDecoration: 'none',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    fontSize: 30,
                                    color: '#ced4da',
                                }}
                            >
                                HENTECH
                            </Typography>
                            {/* </Link> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={2} xl={1.5} sx={{ color: 'white', fontSize: 13, marginLeft: 7 }}>
                            <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button key={'products'}>
                                    Productos
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4} sx={{ color: '#ced4da', fontSize: 13, textAlign: 'center' }}>
                            <div style={{}}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Buscar producto..."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </div>
                        </Grid>
                        {/* <Box sx={{ flexGrow: 1 }} /> */}
                        <Grid item xs={12} sm={6} md={6} lg={2} xl={1} sx={{ color: 'white' }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                                <Link to='/carrito' style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <StyledBadge2 badgeContent={number} color="primary">
                                            <ShoppingCartIcon sx={{ fontSize: 30 }} />
                                        </StyledBadge2>
                                    </IconButton>
                                </Link>
                                <IconButton
                                    size="large"
                                    aria-label=""
                                    color="inherit"
                                >
                                    <StyledBadge badgeContent={productosFavoritos.length} color="primary">
                                        <Link to='/favoritos' style={{ textDecoration: 'none', color: 'inherit' }}> <FavoriteIcon sx={{ fontSize: 30, marginBottom: -0.5 }} /> </Link>
                                    </StyledBadge>
                                </IconButton>
                                {
                                    (isAuthenticated === false)
                                        ? <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={() => { loginWithRedirect() }}
                                            color="inherit"
                                        >
                                            <AccountCircle sx={{ fontSize: 30 }} />
                                        </IconButton>
                                        : <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit"
                                        >
                                            <AccountCircle sx={{ fontSize: 30 }} />
                                        </IconButton>}
                            </Box>
                        </Grid>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}
