import * as React from 'react';
import {Box, Divider} from '@mui/material';
import {StyledDrawer} from "@/styles/DrawerStyles";
import {mainLayoutStyle} from "@/styles/MainLayoutStyles";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import MainContent from "@/components/molecules/MainContent/MainContent";
import SIZES from "@/styles/sizes";
import LogoLink from "@/components/atoms/LogoLink/LogoLink";

const PermanentDrawerLeft = () => {
    return (
        <Box sx={mainLayoutStyle}>
            <AppBarCustom/>
            <StyledDrawer drawerWidth={SIZES.SIDEBAR_WIDTH.DEFAULT} variant="permanent" anchor="left">
                <LogoLink src="logo.png" href="/" alt="Main Logo" />
                {/*<BasicList items={['회원 등록하기', '메인 홈']}/>*/}
                <AccordionMenuGroup/>
            </StyledDrawer>
            <MainContent/>
        </Box>
    );
}

export default PermanentDrawerLeft;
