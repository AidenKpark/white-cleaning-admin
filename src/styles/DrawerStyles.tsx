// src/styles/DrawerStyles.ts
import { styled, Drawer } from '@mui/material';
import COLORS from "@/styles/colors";

// 타입 정의 추가
interface StyledDrawerProps {
    drawerWidth: number;  // drawerWidth의 타입을 number로 지정
}

export const StyledDrawer = styled(Drawer)<StyledDrawerProps>(({ theme, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: COLORS.BG.DEFAULT,
        color:COLORS.TEXT.PRIMARY,
    },
}));
