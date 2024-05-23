// pages/customer/list.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CommonLayout from "@/components/layout/CommonLayout";

interface Customer {
    name: string;
    address: string;
    itemType: string;
    itemCount: string;
    availableTime: string;
    notes?: string;
}

const CustomerList: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
        setCustomers(storedCustomers);
    }, []);

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        고객 리스트
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>고객 이름</TableCell>
                                    <TableCell>고객 주소</TableCell>
                                    <TableCell>요청한 물품 종류</TableCell>
                                    <TableCell>물품 갯수</TableCell>
                                    <TableCell>가능한 시간</TableCell>
                                    <TableCell>비고란</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customers.map((customer, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{customer.name}</TableCell>
                                        <TableCell>{customer.address}</TableCell>
                                        <TableCell>{customer.itemType}</TableCell>
                                        <TableCell>{customer.itemCount}</TableCell>
                                        <TableCell>{customer.availableTime}</TableCell>
                                        <TableCell>{customer.notes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </CommonLayout>
    );
};

export default CustomerList;
