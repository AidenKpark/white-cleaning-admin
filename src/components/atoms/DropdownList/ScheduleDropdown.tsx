import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropdownList, {DropdownMenuItem} from "@/components/atoms/DropdownList/DropdownList";

const ScheduleDropdown = () => {
    const scheduleMenuItems: DropdownMenuItem[] = [
        { name: 'Edit', url: 'schedule/edit' },
        { name: 'List', url: 'schedule/list' },
        { name: 'Add', url: 'schedule/add' },
    ];

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="schedule-content"
                id="schedule-header"
            >
                <Typography>Schedule</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
                <DropdownList MenuItemList={scheduleMenuItems} />
            </AccordionDetails>
        </Accordion>
    );
};

export default ScheduleDropdown;
