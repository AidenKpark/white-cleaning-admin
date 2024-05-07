// src/components/CourierDropdown.tsx
import * as React from 'react';
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionMenu, {AccordionMenuItem} from "@/components/atoms/AccordionMenu/AccordionMenu";

const CourierDropdown = () => {
    const courierMenuItems: AccordionMenuItem[] = [
        { name: 'Edit', url: 'courier/edit' },
        { name: 'List', url: 'courier/list' },
        { name: 'SignUp', url: 'courier/signup' },
    ];

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="courier-content"
                id="courier-header"
            >
                <Typography>Courier</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
                <AccordionMenu AccordionMenuItemList={courierMenuItems} />
            </AccordionDetails>
        </Accordion>
    );
};

export default CourierDropdown;
