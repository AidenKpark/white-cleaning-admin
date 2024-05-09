import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const BasicList = ({ items }: { items: string[] }) => {
    return (
        <List>
            {items.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default BasicList;
