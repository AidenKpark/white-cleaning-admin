import * as React from 'react';
import AccordionMenuPanel, {
    AccordionMenuPanelProps
} from "@/components/molecules/AccordionMenuPanel/AccordionMenuPanel";

const AccordionMenuGroup = () => {

    const AccordionMenus: AccordionMenuPanelProps[] = [
        {
            AccordionMenuTitle: {AccordionTitle: 'Courier'},
            AccordionMenuItemList: {
                AccordionMenuItems: [
                    {name: 'Edit', url: 'courier/edit'},
                    {name: 'List', url: 'courier/list'},
                    {name: 'SignUp', url: 'courier/signup'},
                ]
            }
        },
        {
            AccordionMenuTitle: {AccordionTitle: 'Customer'},
            AccordionMenuItemList: {
                AccordionMenuItems: [
                    {name: 'Edit', url: 'customer/edit'},
                    {name: 'List', url: 'customer/list'},
                    {name: 'SignUp', url: 'customer/signup'},
                ]
            }
        },
        {
            AccordionMenuTitle: {AccordionTitle: 'Schedule'},
            AccordionMenuItemList: {
                AccordionMenuItems: [
                    {name: 'Edit', url: 'schedule/edit'},
                    {name: 'List', url: 'schedule/list'},
                    {name: 'Add', url: 'schedule/add'},
                ]
            }
        },
        {
            AccordionMenuTitle: {AccordionTitle: 'Sales'},
            AccordionMenuItemList: {
                AccordionMenuItems: [
                    {name: 'Daily', url: '/'},
                    {name: 'Weekly', url: '/'},
                    {name: 'Monthly', url: '/'},
                ]
            }
        }
    ]

    return (
        <>
            {
                // 각 AccordionMenuPanel에 key prop을 추가
                AccordionMenus.map(value => (
                    <AccordionMenuPanel key={value.AccordionMenuTitle.AccordionTitle} {...value} />
                ))
            }
        </>
    );
}

export default AccordionMenuGroup;
