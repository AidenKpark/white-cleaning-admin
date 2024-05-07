// src/components/AllDropdowns.tsx
import * as React from 'react';
import CourierDropdown from "@/components/atoms/AccordionMenu/CourierDropdown";
import CustomerDropdown from "@/components/atoms/AccordionMenu/CustomerDropdown";
import ScheduleDropdown, from "@/components/atoms/AccordionMenu/ScheduleDropdown";
import SalesDropdown, {AccordionMenuPanelProps} from "@/components/atoms/AccordionMenu/SalesDropdown";



const AllDropdowns = () => {


    const menus: AccordionMenuPanelProps[] = [
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
            <CourierDropdown/>
            <CustomerDropdown/>
            <ScheduleDropdown/>
            <SalesDropdown/>
        </>
    );
}

export default AllDropdowns;
