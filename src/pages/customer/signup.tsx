import * as React from 'react';
import {Box, Divider, Typography} from '@mui/material';
import {mainLayoutStyle} from "@/styles/MainLayoutStyles";
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import {StyledDrawer} from "@/styles/DrawerStyles";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import MainContent from "@/components/molecules/MainContent/MainContent";
import CollapsibleTable from "@/components/CollapsibleTable";
import CommonLayout from "@/components/layout/CommonLayout";

const drawerWidth = 240;
const CourierListPage = () => {
    return (
        <CommonLayout>
            <CollapsibleTable />
        </CommonLayout>
    );
};

export default CourierListPage;
