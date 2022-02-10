import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketIcon from '@mui/icons-material/Rocket';
import AttributionIcon from '@mui/icons-material/Attribution';
import Email from '../Email'
import Intro from './Introduccion'
import Formulario from '../Formulario'
import Api from '../Api'
import PageError from '../PageError'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Routes
} from "react-router-dom";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),

    }),

);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),

    //Color de fondo
    backgroundColor: 'black'
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',


}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inicio'].map((text, index) => (
                        <Link to={''} style={{ textDecoration: 'none' }}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <BorderOuterIcon /> : <AttributionIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />

                <Divider />
                <List>
                    {['Formulario', 'Api'].map((text, index) => (
                        <Link to={text} style={{ textDecoration: 'none' }}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <RocketIcon /> : <AttributionIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />

                <List>
                    {['Github'].map((text, index) => (
                        <a href='https://github.com/macantivbl/ProyectoReactBedu' style={{ textDecoration: 'none' }}>
                            <ListItem button key={text}>

                                <ListItemIcon>
                                    <GitHubIcon />
                                </ListItemIcon>

                                <ListItemText primary={text} />

                            </ListItem>
                        </a>
                    ))}
                </List>
            </Drawer>

            <Main open={open}>
                <DrawerHeader />
                <Routes>
                    <Route exact path='/' element={<Intro />}>

                    </Route>

                    <Route exact path='/Email' element={<Email />} >
                    </Route>

                    <Route exact path='/Formulario' element={<Formulario />} >
                    </Route>

                    <Route exact path='/Api' element={<Api />} >
                    </Route>

                    <Route exact path='*' element={<PageError />} >
                    </Route>

                </Routes>
            </Main>

        </Box>
    );
}