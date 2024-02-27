import React, {useState, useEffect} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
} from '@mui/material';

import { Link } from 'react-router-dom';

function EmployeeList() {
    // Sample data (replace with actual employee data)
    const [employeeData, setEmployeeData] = useState([
        {
            id: 1,
            firstName: 'John',
            middleName: 'Doe',
            lastName: 'Smith',
            sex: 'Male',
            department: 'IT',
            dateOfJoining: "28-02-2024"
        },
        {
            id: 2,
            firstName: 'Jane',
            middleName: 'Doe',
            lastName: 'Johnson',
            sex: 'Female',
            department: 'HR',
            dateOfJoining: "28-02-2024"
        },
        // Add more employee data as needed
    ]);

    useEffect(() => {
        // Fetch employee data from an API or other source if needed
        // Example: fetchEmployeeData().then(data => setEmployeeData(data));
    }, []);

    return (
        <div style={{padding: '20px', maxWidth: '800px', margin: 'auto'}}>
            <Typography variant="h4" gutterBottom>
                Employee Details
            </Typography>
            <Link to="/form">
                <Button variant="contained" color="primary" style={{marginBottom: '20px'}}>
                    Add Employee
                </Button>
            </Link>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Date Of Joining</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeData.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell>{employee.dateOfJoining}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default EmployeeList;
