// src/components/AllDropdowns.tsx
import * as React from 'react';
import CourierDropdown from "@/components/atoms/AccordionMenu/CourierDropdown";
import CustomerDropdown from "@/components/atoms/AccordionMenu/CustomerDropdown";
import ScheduleDropdown from "@/components/atoms/AccordionMenu/ScheduleDropdown";
import SalesDropdown from "@/components/atoms/AccordionMenu/SalesDropdown";


const AllDropdowns = () => {
    return (
        <>
            <CourierDropdown />
            <CustomerDropdown />
            <ScheduleDropdown />
            <SalesDropdown />
        </>
    );
}

export default AllDropdowns;
