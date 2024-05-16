import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

type ListItemType = {
    label: string;
    href: string;
}

interface BasicListProps {
    items: ListItemType[];
}

const BasicList: React.FC<BasicListProps> = ({ items }) => {
    return (
        <List>
            {items.map((item, index) => (
                <Link href={item.href} key={index} passHref>
                    <ListItem disablePadding>
                        <ListItemButton
                            component="a"
                            sx={{
                                color: 'white', // 글씨 색상을 흰색으로 설정
                                textDecoration: 'none' // 밑줄 제거
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    );
};

export default BasicList;
