import * as React from 'react';
import {ACCORDION_MENUS} from "@/constants/menuTexts";
import AccordionMenuPanel from "@/components/molecules/AccordionMenuPanel/AccordionMenuPanel";

const AccordionMenuGroup = () => {
    return (
        <>
            {
                ACCORDION_MENUS.map((v, k) => <AccordionMenuPanel key={k} {...v} />)
            }
        </>
    );
}

export default AccordionMenuGroup;
