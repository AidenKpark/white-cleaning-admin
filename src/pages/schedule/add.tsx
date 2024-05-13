import * as React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import {mainLayoutStyle} from "@/styles/MainLayoutStyles";
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import {StyledDrawer} from "@/styles/DrawerStyles";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import MainContent from "@/components/molecules/MainContent/MainContent";

const drawerWidth = 240;
const CourierListPage = () => {
    return (
        <Box sx={mainLayoutStyle}>
            <AppBarCustom />
            <StyledDrawer drawerWidth={drawerWidth} variant="permanent" anchor="left">
                <Divider />
                <BasicList items={['Inbox', 'Sign In', 'Home']} />
                <Divider />
                <AccordionMenuGroup />
            </StyledDrawer>
        </Box>
    );
};

export default CourierListPage;
