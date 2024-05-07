import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StyledDrawer } from "@/styles/DrawerStyles";
import {ListItemButton, Typography} from "@mui/material";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup"; // 스타일된 드로어 임포트

const drawerWidth = 240;

const PermanentDrawerLeft = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        White Cleaning Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <StyledDrawer
                drawerWidth={drawerWidth} // drawerWidth를 prop으로 전달
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Inbox', 'Sign In', 'Home'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <AccordionMenuGroup />
            </StyledDrawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Typography paragraph>
                    첫번째 문단
                </Typography>
                <Typography paragraph>
                    두번째 문단
                </Typography>
            </Box>
        </Box>
    );
}

export default PermanentDrawerLeft;
