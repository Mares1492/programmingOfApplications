import React, { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BatterySaverIcon from '@mui/icons-material/BatterySaver';
import { useEffect,useContext } from "react"
import { TogglesContext, UserContext } from "../../index"
import { observer } from "mobx-react-lite"

const pages = [
    {
        id: 1,
        route:"/main",
        name:"Main"
    },
    {
        id: 2,
        route:"/semi-main",
        name:"Semi-Main"
    },
    {
        id: 3,
        route:"/not-main",
        name:"Not Main"
    },
    {
        id:4,
        route: "/todo",
        name:"Todo"
    }
]




const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [batteryStatus, setBatteryStatus] = useState(<BatteryUnknownIcon/>);
    const {toggles} = useContext(TogglesContext)
    const {store} = useContext(UserContext)

    useEffect(()=>{
        if (localStorage.getItem( ('token'))){
            store.checkAuth()
        }
    },[])


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setBatteryStatus(<BatteryCharging30Icon/>)
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setBatteryStatus(<BatteryCharging30Icon/>)
    };

    const handleCloseUserMenu = () => {
        setBatteryStatus(<BatteryChargingFullIcon/>)
        setAnchorElUser(null);
    }



    const [settings,setSettings] = useState([
        {
            label:<BatterySaverIcon />,
            function: handleCloseUserMenu
        },
        {
            label:"Sign In",
            function:()=>{
                toggles.setShowLogRegForm(true)
                handleCloseUserMenu()
            }

        }
    ])


    const handleSetSettingsToOut=()=>{
        setSettings([
            {
                label:<BatterySaverIcon />,
                function: handleCloseUserMenu
            },
            {
                label:"Sign Out",
                function:()=>{
                    store.logout()
                    handleSetSettingsToIn()
                    handleCloseUserMenu()
                }
            }]
        )
    }

    const handleSetSettingsToIn=()=>{
        setSettings([
            {
                label:<BatterySaverIcon />,
                function: handleCloseUserMenu
            },
            {
                label:"Sign In",
                function:()=>{
                    toggles.setShowLogRegForm(true)
                    handleSetSettingsToOut()
                    handleCloseUserMenu()
                }

            }
        ])
    }

    const handleChangeSettings = ()=>{
        if (store.user.isAuth){
            handleSetSettingsToOut()
        }else {
            handleSetSettingsToIn()
        }
    }


    useEffect(()=>{
       setBatteryStatus(<BatteryCharging60Icon/>)
    },[])

    return (
        <AppBar style ={{backgroundColor:"black"}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {batteryStatus}
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
                        WeB Tra1ninG
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
                            {pages.map(page =>(
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Button href={page.route}  sx={{color:'black',fontWeight:"bold"}}>{page.name}</Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WeB Tra1ninG
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(page =>(
                                <Button
                                    key={page.id}
                                    href={page.route}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <div style={{fontSize:"x-large",fontFamily:"fantasy",fontStyle:"oblique"}}>{store.isAuth?"Bro":"Unauthorised"}</div>
                        <Tooltip title={store.isAuth?store.user.email:"Monkey"}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Ape" src="https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75" />
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
                            onClick = {handleChangeSettings}
                        >
                            {settings.map(setting => (
                                <MenuItem key={setting.label} onClick={setting.function}>
                                    <Button sx={{color:'black'}}>{setting.label}</Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default observer(ResponsiveAppBar);
