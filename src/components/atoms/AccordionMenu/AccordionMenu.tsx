import * as React from 'react';
import {
    AccordionDetails,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import {useRouter} from "next/router";


export type AccordionMenuItem = {
    name: string;
    url: string;
}
export type AccordionMenuProps = {
    AccordionMenuItems: AccordionMenuItem[];
}


const AccordionMenu = ({AccordionMenuItems}: AccordionMenuProps) => {
    const router = useRouter()
    const moveToUrl = (url: string) => router.push(`/${url}`)
    return (
        <AccordionDetails sx={{padding: 0}}>
            <List>
                {AccordionMenuItems?.map((value, index) => (
                    <ListItem key={value.name}
                              onClick={() => moveToUrl(value.url)}
                              sx={{borderBottom: 1, borderColor: 'divider'}}  // 테두리 추가
                    >
                        <ListItemButton>
                            <ListItemText primary={value.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </AccordionDetails>
    );
}

export default AccordionMenu