import * as React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropdownList, {DropdownMenuItem} from "@/components/atoms/DropdownList/DropdownList";

const SalesDropdown = () => {

    const dropDownList: { DropdownTitle: string, DropdownMenuItem: DropdownMenuItem[] } = {
        DropdownTitle: 'Sales',
        DropdownMenuItem: [
            {name: 'Daily', url: '/'},
            {name: 'Weekly', url: '/'},
            {name: 'Monthly', url: '/'},
        ]
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="Sales-content"
                id="Sales-header"
            >
                <Typography>{dropDownList.DropdownTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding: 0}}>
                <DropdownList MenuItemList={dropDownList.DropdownMenuItem}/>
            </AccordionDetails>
        </Accordion>
    );
}
export default SalesDropdown;