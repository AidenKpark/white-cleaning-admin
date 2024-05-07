import * as React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionMenu, {AccordionMenuItem} from "@/components/atoms/AccordionMenu/AccordionMenu";


type AccordionMenuConfig = {
    AccordionMenuTitle: string;
    AccordionMenuItemList: AccordionMenuItem[];
}
const ScheduleDropdown = () => {
    const accordionMenu: AccordionMenuConfig = {
        AccordionMenuTitle: 'Schedule',
        AccordionMenuItemList: [
            {name: 'Edit', url: 'schedule/edit'},
            {name: 'List', url: 'schedule/list'},
            {name: 'Add', url: 'schedule/add'},
        ]
    }
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="schedule-content"
                id="schedule-header"
            >
                <Typography>{accordionMenu.AccordionMenuTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding: 0}}>
                <AccordionMenu AccordionMenuItemList={accordionMenu.AccordionMenuItemList}/>
            </AccordionDetails>
        </Accordion>
    );
};

export default ScheduleDropdown;
