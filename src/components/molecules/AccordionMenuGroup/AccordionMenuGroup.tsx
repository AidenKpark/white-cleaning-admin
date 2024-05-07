import * as React from 'react';
import CourierDropdown from "@/components/atoms/AccordionMenu/CourierDropdown";
import CustomerDropdown from "@/components/atoms/AccordionMenu/CustomerDropdown";
import ScheduleDropdown, {AccordionMenuConfig} from "@/components/atoms/AccordionMenu/ScheduleDropdown";
import SalesDropdown from "@/components/atoms/AccordionMenu/SalesDropdown";


const AccordionMenuGroup = () => {

    const menus: AccordionMenuConfig[] = [
        {
            AccordionMenuTitle: 'Courier',
            AccordionMenuItemList: [
                {name: 'Edit', url: 'courier/edit'},
                {name: 'List', url: 'courier/list'},
                {name: 'SignUp', url: 'courier/signup'},
            ]
        },
        {
            AccordionMenuTitle: 'Customer',
            AccordionMenuItemList: [
                {name: 'Edit', url: 'customer/edit'},
                {name: 'List', url: 'customer/list'},
                {name: 'SignUp', url: 'customer/signup'},
            ]
        },
        {
            AccordionMenuTitle: 'Schedule',
            AccordionMenuItemList: [
                {name: 'Edit', url: 'schedule/edit'},
                {name: 'List', url: 'schedule/list'},
                {name: 'Add', url: 'schedule/add'},
            ]
        },
        {
            AccordionMenuTitle: 'Sales',
            AccordionMenuItemList: [
                {name: 'Daily', url: '/'},
                {name: 'Weekly', url: '/'},
                {name: 'Monthly', url: '/'},
            ]
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

export default AccordionMenuGroup;
