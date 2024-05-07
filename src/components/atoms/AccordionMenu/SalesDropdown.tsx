import * as React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionMenu, {AccordionMenuItem} from "@/components/atoms/AccordionMenu/AccordionMenu";
import AccordionTitle, {AccordionTitleProps} from "@/components/atoms/AccordionTitle/AccordionTitle";


type AccordionMenuConfig = {
    AccordionMenuTitle: string;
    AccordionMenuItemList: AccordionMenuItem[];
}


const SalesDropdown = () => {
    const accordionMenu: AccordionMenuConfig = {
        AccordionMenuTitle: 'Sales',
        AccordionMenuItemList: [
            {name: 'Daily', url: '/'},
            {name: 'Weekly', url: '/'},
            {name: 'Monthly', url: '/'},
        ]
    }
    return (
        <Accordion>
            <AccordionTitle AccordionTitle={accordionMenu.AccordionMenuTitle}/>
            <AccordionMenu AccordionMenuItemList={accordionMenu.AccordionMenuItemList}/>
        </Accordion>
    );
}
export default SalesDropdown;