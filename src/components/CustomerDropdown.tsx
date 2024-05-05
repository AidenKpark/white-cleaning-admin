import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomerDropdown() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Customer-content"
                id="Customer-header"
            >
                <Typography>Customer</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {['Edit', 'List', 'SignUp'].map((text, index) => (
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
