import * as React from 'react';
import {Box} from '@mui/material';
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import Login from "@/components/molecules/Login/Login";
import Sidebar from "@/components/organisms/Sidebar";

const Index = () => {
    return (
        <Box sx={{display:'flex'}}>
            <AppBarCustom/>
            <Sidebar />
            <Login/>
        </Box>
    );
}

export default Index;
