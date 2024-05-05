import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ScheduleDropdown() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Schedule-content"
                id="Schedule-header"
            >
                <Typography>Schedule</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {['Edit', 'List', 'Add'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    );
}
