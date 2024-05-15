import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import SIZES from "@/styles/sizes";

export const mainLayoutStyle: SxProps<Theme> = {
    display: 'flex'
};

export const appBarStyle: SxProps<Theme> = (theme: Theme) => ({
    width: `calc(100% - ${SIZES.SIDEBAR_WIDTH.DEFAULT}px)`,
    ml: `${SIZES.SIDEBAR_WIDTH.DEFAULT}px`
});

export const mainContentStyle: SxProps<Theme> = {
    flexGrow: 1,
    bgcolor: 'background.default',
    p: 3
};
