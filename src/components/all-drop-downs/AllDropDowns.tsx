// src/components/AllDropdowns.tsx
import * as React from 'react';
import CourierDropdown from "@/components/atoms/DropdownList/CourierDropdown";
import CustomerDropdown from "@/components/atoms/DropdownList/CustomerDropdown";
import ScheduleDropdown from "@/components/atoms/DropdownList/ScheduleDropdown";
import SalesDropdown from "@/components/atoms/DropdownList/SalesDropdown";


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
