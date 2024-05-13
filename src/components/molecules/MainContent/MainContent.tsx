import * as React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { mainContentStyle } from "@/styles/MainLayoutStyles";

const MainContent = () => (
    <Box component="main" sx={mainContentStyle}>
        <Toolbar />
        <Typography paragraph>
            첫번째 문단
        </Typography>
        <Typography paragraph>
            두번째 문단
        </Typography>
    </Box>
);

export default MainContent;
