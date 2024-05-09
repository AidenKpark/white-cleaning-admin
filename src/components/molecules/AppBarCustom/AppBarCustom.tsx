import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { appBarStyle } from "@/styles/MainLayoutStyles";

const AppBarCustom = () => (
    <AppBar position="fixed" sx={appBarStyle}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                White Cleaning Admin
            </Typography>
        </Toolbar>
    </AppBar>
);

export default AppBarCustom;
