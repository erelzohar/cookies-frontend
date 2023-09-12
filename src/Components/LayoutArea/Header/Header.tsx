import React from 'react';
import "./Header.css";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Images/cookies-logo.jpg";

const pages = [{
    name: "העוגיות של אתי",
    url: "/products"
}, {
    name: "אירועים",
    url: "/events"
},
{
    name: "המטבח שלנו",
    url: "/our-kitchen"
}];


const categories = ['chocolate', 'vanila', 'fruits', "mishmeshes"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Header(): JSX.Element {
    let displaytimeout: NodeJS.Timeout;
    const [timeToHide, setTimeToHide] = React.useState<number>(600);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const show = (e: React.MouseEvent) => {
        if (e.currentTarget.textContent !== "העוגיות של אתי" && e.currentTarget.id !== "categoriesDiv") return;

        if (displaytimeout) clearTimeout(displaytimeout)
        setTimeToHide(600);
        const layoutMain = document.getElementById("layout-main");
        const categoriesDiv = document.getElementById("categoriesDiv");
        categoriesDiv.style.display = "flex";
        layoutMain.style.zIndex = '-2';
        setTimeout(() => {
            categoriesDiv.style.zIndex = '0';
        }, 310);
    }
    const hide = (e: React.MouseEvent) => {
        const layoutMain = document.getElementById("layout-main");
        const categoriesDiv = document.getElementById("categoriesDiv");
        displaytimeout = setTimeout(() => {
            // categoriesDiv.style.animationName ="popup"
            // categoriesDiv.style.transform="translateY(0)"
            categoriesDiv.style.display = "none";
            categoriesDiv.style.zIndex = '-1';
            layoutMain.style.zIndex = '0';
        }, timeToHide)
    }
    return (
        <AppBar color='inherit' enableColorOnDark position="static">
            <Container maxWidth="xl" disableGutters>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img className='logo' src={logo} alt="LOGO" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.url}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                        <img className='logo' src={logo} alt="LOGO" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                                key={page.name}
                                to={page.url}
                            // onMouseLeave={hide}
                            // onMouseEnter={show}
                            >
                                <Button
                                    className='test'
                                    // onMouseLeave={hide}
                                    // onMouseEnter={show}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block', fontSize: "medium" }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}

                        {/* <div onMouseEnter={show} onMouseLeave={hide} id='categoriesDiv'>{categories.map(c => <h1 key={c}><Link to="/auth/login">{c}</Link></h1>)}</div> */}

                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Moshe" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
