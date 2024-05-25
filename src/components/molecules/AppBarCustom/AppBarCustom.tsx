import * as React from 'react';
import {AppBar, Toolbar, Typography} from '@mui/material';
import SIZES from "@/styles/sizes";

const AppBarCustom = () => (
    <AppBar position="fixed" sx={{
        width: `calc(100% - ${SIZES.SIDEBAR_WIDTH.DEFAULT}px)`,
        ml: `${SIZES.SIDEBAR_WIDTH.DEFAULT}px`
    }}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                White Clinic 관리자
            </Typography>
        </Toolbar>
    </AppBar>
);

export default AppBarCustom;
