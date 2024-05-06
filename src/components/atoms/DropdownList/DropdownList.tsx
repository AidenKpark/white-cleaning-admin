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
import {useRouter} from "next/router";



export type DropdownMenuItem = {
    name:string;
    url:string;
}

type DropdownListProps = {
    MenuItemList: DropdownMenuItem[]
}


const DropdownList = ({MenuItemList}:DropdownListProps) => {
    const router = useRouter()
    const moveToUrl = (url:string) => router.push(`/${url}`)
    return (
        <List>
            {MenuItemList.map((value, index) => (
                <ListItem key={value.name}
                          onClick={()=>moveToUrl(value.url)}
                          sx={{borderBottom: 1, borderColor: 'divider'}}  // 테두리 추가
                >
                    <ListItemButton>
                        <ListItemText primary={value.name}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export default DropdownList