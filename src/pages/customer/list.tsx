import * as React from 'react';
import { Typography } from '@mui/material';
import CommonLayout from "@/components/layout/CommonLayout";
import CollapsibleTable from "@/components/CollapsibleTable";

const CustomerListPage = () => {
    return (
        <CommonLayout>
            <CollapsibleTable />
        </CommonLayout>
    );
};

export default CustomerListPage;
