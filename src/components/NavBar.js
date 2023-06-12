import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Pages from '../pages/Pages';

import { navItems } from '../utils/data';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [title, setTitle] = React.useState("")
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box textAlign='center' sx={{ marginBottom: '-50px', marginTop: "10px" }}>
                <Typography sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: 1000 }} color="#FFFF">
                    The Morning Rise</Typography>
                <Typography variant='body2' sx={{ fontStyle: "italic" }} color="#FFFF">Your best news blog</Typography>
            </Box>
            <Toolbar />
            <Divider />

            <List>
                {navItems.map((text) => (
                    <ListItem key={text.name} disablePadding
                        onClick={() => {
                            setTitle(text.name);
                            setMobileOpen(false);
                            navigate(text.link)
                        }}>
                        <ListItemButton>
                            <ListItemText>
                                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} color="#FFFF">
                                    {text.name}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />

            <Box textAlign='center' sx={{ padding: "10px", position: "absolute", bottom: 0, left: 33 }}>
                <Typography variant='body2'color="#FFFF">&copy;2023 by Zuma Tech</Typography>
                <Box display='flex' justifyContent='space-around'>
                    <FacebookIcon sx={{ color: 'blue' }} fontSize='small' />
                    <TwitterIcon sx={{ color: 'lightblue' }} fontSize='small' />
                    <InstagramIcon sx={{ color: 'pink' }} fontSize='small' />
                    <YouTubeIcon sx={{ color: 'red' }} fontSize='small' />
                </Box>
            </Box>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'#FFFF'
                }}
            >
                <Toolbar>
                    <IconButton
                      
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap 
                    component="div" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 1000, color:"black" }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, 
                      }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Pages />
         
        </Box>
    );
}



export default NavBar;