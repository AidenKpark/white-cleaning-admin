import * as React from 'react';
import { Box, Divider } from '@mui/material';
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import { StyledDrawer } from "@/styles/DrawerStyles";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import { mainLayoutStyle } from "@/styles/MainLayoutStyles";
import LogoLink from "@/components/atoms/LogoLink/LogoLink";

const drawerWidth = 300;

interface CommonLayoutProps {
    children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    const menuItems = [
        { label: 'Sign Out', href: '/' },
        { label: 'Home', href: '/home' }
    ];

    return (
        <Box sx={mainLayoutStyle}>
            <AppBarCustom />
            <StyledDrawer drawerWidth={drawerWidth} variant="permanent" anchor="left">
                <LogoLink src="/logo.png" href="/" alt="Main Logo" />
                <Divider />
                <BasicList items={menuItems} />
                <Divider />
                <AccordionMenuGroup />
            </StyledDrawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                {children}
            </Box>
        </Box>
    );
};

export default CommonLayout;
