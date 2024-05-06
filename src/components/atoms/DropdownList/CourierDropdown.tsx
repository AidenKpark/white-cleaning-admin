// src/components/CourierDropdown.tsx
import * as React from 'react';
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropdownList, {DropdownMenuItem} from "@/components/atoms/DropdownList/DropdownList";

const CourierDropdown = () => {
    const courierMenuItems: DropdownMenuItem[] = [
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
                <DropdownList MenuItemList={courierMenuItems} />
            </AccordionDetails>
        </Accordion>
    );
};

export default CourierDropdown;
