// src/styles/DrawerStyles.ts
import { styled, Drawer } from '@mui/material';
import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";

type StyledDrawerProps = {
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
        '&::-webkit-scrollbar': {
            width: SIZES.SCROLL_WIDTH.DEFAULT,
        },
        '&::-webkit-scrollbar-track': {
            background: COLORS.WHITE,
        },
        '&::-webkit-scrollbar-thumb': {
            background: COLORS.THIRD,
            borderRadius: SIZES.BORDER_RADIUS.SMALL,
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        },
    },
}));
