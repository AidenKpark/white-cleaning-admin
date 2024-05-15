import * as React from 'react';
import { Box, Divider } from '@mui/material';
import { StyledDrawer } from "@/styles/DrawerStyles";
import { mainLayoutStyle } from "@/styles/MainLayoutStyles";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import MainContent from "@/components/molecules/MainContent/MainContent";

const drawerWidth = 240;

const PermanentDrawerLeft = () => {
    return (
        <Box sx={mainLayoutStyle}>
            <AppBarCustom />
            <StyledDrawer drawerWidth={drawerWidth} variant="permanent" anchor="left">
                <Divider />
                <BasicList items={['Sign In', 'Home']} />
                <Divider />
                <AccordionMenuGroup />
            </StyledDrawer>
            <MainContent />
        </Box>
    );
}

export default PermanentDrawerLeft;
