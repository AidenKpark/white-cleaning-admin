// pages/home.tsx
import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Divider
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AppBarCustom from "@/components/molecules/AppBarCustom/AppBarCustom";
import LogoLink from "@/components/atoms/LogoLink/LogoLink";
import BasicList from "@/components/molecules/BasicList/BasicList";
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import { StyledDrawer } from "@/styles/DrawerStyles";

const salesData = [
    {name: '00:00', sales: 400},
    {name: '03:00', sales: 700},
    {name: '06:00', sales: 800},
    {name: '09:00', sales: 1500},
    {name: '12:00', sales: 1200},
    {name: '15:00', sales: 1700},
    {name: '18:00', sales: 1300},
    {name: '21:00', sales: 900},
    {name: '24:00', sales: 600},
];

const orders = [
    { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA ****3719', amount: 312.44 },
    { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA ****2574', amount: 866.99 },
    { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC ****1253', amount: 100.81 },
    { date: '15 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX ****2000', amount: 654.39 },
    { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA ****5919', amount: 212.79 },
];

export default function HomePage() {
    const menuItems = [
        { label: 'Sign Out', href: '/' },
        { label: 'Home', href: '/home' }
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBarCustom />
            <StyledDrawer drawerWidth={300} variant="permanent" anchor="left">
                <LogoLink src="/logo.png" href="/" alt="Main Logo" />
                <Divider />
                <BasicList items={menuItems} />
                <Divider />
                <AccordionMenuGroup />
            </StyledDrawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                <Typography variant="h4" gutterBottom component="div">
                    Today
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                <Typography variant="h6" gutterBottom component="div" sx={{ mt: 4 }}>
                    Recent Orders
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Ship To</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell align="right">Sale Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.name + order.date}>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.name}</TableCell>
                                    <TableCell>{order.shipTo}</TableCell>
                                <TableCell>{order.paymentMethod}</TableCell>
                                <TableCell align="right">${order.amount.toFixed(2)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
</Box>
</Box>
);
}
