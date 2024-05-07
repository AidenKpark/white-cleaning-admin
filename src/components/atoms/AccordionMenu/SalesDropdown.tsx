import * as React from 'react';
import {
    Accordion,
} from '@mui/material';
import AccordionMenu, {AccordionMenuItem, AccordionMenuProps} from "@/components/atoms/AccordionMenu/AccordionMenu";
import AccordionTitle, {AccordionTitleProps} from "@/components/atoms/AccordionTitle/AccordionTitle";


export type AccordionMenuPanelProps = {
    AccordionMenuTitle: AccordionTitleProps;
    AccordionMenuItemList: AccordionMenuProps;
}

const SalesDropdown = () => {
    const accordionMenu: AccordionMenuPanelProps = {
        AccordionMenuTitle: {AccordionTitle: 'Sales'},
        AccordionMenuItemList: {
            AccordionMenuItems: [
                {name: 'Daily', url: '/'},
                {name: 'Weekly', url: '/'},
                {name: 'Monthly', url: '/'},
            ]
        }
    }
    return (
        <Accordion>
            <AccordionTitle AccordionTitle={accordionMenu.AccordionMenuTitle.AccordionTitle}/>
            <AccordionMenu AccordionMenuItemList={accordionMenu.AccordionMenuItemList.AccordionMenuItems}/>
        </Accordion>
    );
}
export default SalesDropdown;