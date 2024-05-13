import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const mainLayoutStyle: SxProps<Theme> = {
    display: 'flex'
};

export const appBarStyle: SxProps<Theme> = (theme: Theme) => ({
    width: `calc(100% - ${240}px)`,
    ml: `${240}px`
});

export const mainContentStyle: SxProps<Theme> = {
    flexGrow: 1,
    bgcolor: 'background.default',
    p: 3
};
