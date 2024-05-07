import * as React from 'react';
import {Accordion,} from '@mui/material';
import AccordionMenu, {AccordionMenuProps} from "@/components/atoms/AccordionMenu/AccordionMenu";
import AccordionTitle, {AccordionTitleProps} from "@/components/atoms/AccordionTitle/AccordionTitle";


export type AccordionMenuPanelProps = {
    AccordionMenuTitle: AccordionTitleProps;
    AccordionMenuItemList: AccordionMenuProps;
}

const AccordionMenuPanel = ({AccordionMenuItemList, AccordionMenuTitle}: AccordionMenuPanelProps) => {
    return (
        <Accordion>
            <AccordionTitle AccordionTitle={AccordionMenuTitle.AccordionTitle}/>
            <AccordionMenu AccordionMenuItemList={AccordionMenuItemList.AccordionMenuItems}/>
        </Accordion>
    );
}
export default AccordionMenuPanel;