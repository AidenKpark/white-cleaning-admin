import * as React from 'react';
import {
    AccordionSummary,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import COLORS from "@/styles/colors";


export type AccordionTitleProps = {
    AccordionTitle: string;
}

const AccordionTitle = ({AccordionTitle}: AccordionTitleProps) => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="Sales-content"
            id="Sales-header"
            sx={{borderBottom:1,borderColor: COLORS.BORDER.PRIMARY,}}
        >
            <Typography>{AccordionTitle}</Typography>
        </AccordionSummary>
    );
}
export default AccordionTitle;