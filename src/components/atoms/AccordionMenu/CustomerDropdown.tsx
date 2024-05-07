import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionMenu, {AccordionMenuItem} from "@/components/atoms/AccordionMenu/AccordionMenu";

const CustomerDropdown = () => {
    const customerMenuItems: AccordionMenuItem[] = [
        { name: 'Edit', url: 'customer/edit' },
        { name: 'List', url: 'customer/list' },
        { name: 'SignUp', url: 'customer/signup' },
    ];

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="customer-content"
                id="customer-header"
            >
                <Typography>Customer</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
                <AccordionMenu AccordionMenuItemList={customerMenuItems} />
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomerDropdown;
