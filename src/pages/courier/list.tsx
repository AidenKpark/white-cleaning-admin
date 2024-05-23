import * as React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CommonLayout from "@/components/layout/CommonLayout";

interface Courier {
    name: string;
    experience: string;
    repairItems: string;
    serviceArea: string;
    notes: string;
}

const CourierListPage: React.FC = () => {
    const [couriers, setCouriers] = React.useState<Courier[]>([]);

    React.useEffect(() => {
        const storedCouriers = localStorage.getItem('couriers');
        if (storedCouriers) {
            setCouriers(JSON.parse(storedCouriers));
        }
    }, []);

    return (
        <CommonLayout>
            <Box sx={{ p: 3 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>기사 이름</TableCell>
                                <TableCell>기사 경력</TableCell>
                                <TableCell>수리 가능한 물품 목록</TableCell>
                                <TableCell>수리 가능 지역</TableCell>
                                <TableCell>비고란</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {couriers.map((courier, index) => (
                                <TableRow key={index}>
                                    <TableCell>{courier.name}</TableCell>
                                    <TableCell>{courier.experience}</TableCell>
                                    <TableCell>{courier.repairItems}</TableCell>
                                    <TableCell>{courier.serviceArea}</TableCell>
                                    <TableCell>{courier.notes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </CommonLayout>
    );
};

export default CourierListPage;
