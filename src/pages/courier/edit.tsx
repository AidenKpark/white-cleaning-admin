import * as React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import {mainLayoutStyle} from "@/styles/MainLayoutStyles";
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import {StyledDrawer} from "@/styles/DrawerStyles";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import MainContent from "@/components/molecules/MainContent/MainContent";
import LogoLink from "@/components/atoms/LogoLink/LogoLink";
import CollapsibleTable from "@/components/CollapsibleTable";
import CommonLayout from "@/components/layout/CommonLayout";

const drawerWidth = 300;
const CourierListPage = () => {
    return (
        <Box sx={mainLayoutStyle}>
            <CommonLayout>
            </CommonLayout>
        </Box>
    );
};

export default CourierListPage;
