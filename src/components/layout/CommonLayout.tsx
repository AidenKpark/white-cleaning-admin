import * as React from 'react';
import {Box} from '@mui/material';
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import Sidebar from "@/components/organisms/Sidebar";


type CommonLayoutProps = {
    children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return (
        <Box sx={{display:'flex'}}>
            <AppBarCustom />
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                {children}
            </Box>
        </Box>
    );
};

export default CommonLayout;
