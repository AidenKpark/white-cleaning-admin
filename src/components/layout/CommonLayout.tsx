import * as React from 'react';
import { Box, Divider } from '@mui/material';
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import { StyledDrawer } from "@/styles/DrawerStyles";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import { mainLayoutStyle } from "@/styles/MainLayoutStyles";

const drawerWidth = 240;

// CommonLayoutProps 인터페이스를 통해 children의 타입을 React.ReactNode로 지정합니다.
interface CommonLayoutProps {
    children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return (
        <Box sx={mainLayoutStyle}>
            <AppBarCustom />
            <StyledDrawer drawerWidth={drawerWidth} variant="permanent" anchor="left">
                <Divider />
                <BasicList items={['Sign Out', 'Home']} />
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
