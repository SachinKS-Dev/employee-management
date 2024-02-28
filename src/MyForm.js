import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import store, {addEmployee} from './Store';
import {useDispatch} from "react-redux";
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Button, Typography
} from '@mui/material';
import EmployeeList from "./EmployeeList";
import {v4 as uuidv4} from 'uuid';

function MyForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // State to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        sex: '',
        department: ''
    });

    // Event handler for form field changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Generate an employee ID using uuid
        const employeeId = uuidv4();

        // Get the current date and time
        const currentDate = new Date();
        const dateOfJoining = currentDate.toLocaleString();

        const newEmployee = {
            id: employeeId,
            dateOfJoining,
            ...formData
        };

        // Dispatch the addEmployee action with the form data
        dispatch(addEmployee(newEmployee));
        // Reset the form data after adding an employee
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            sex: '',
            department: '',
        });
        navigate('/employee-list');
    };
    const handleCancel = () => {
        // Add logic to reset or clear the form data if needed

        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            sex: '',
            department: ''
        });
        navigate(-1);
    };

    return (
        <div style={{padding: '20px', maxWidth: '800px', margin: 'auto'}}>
            <Typography variant="h5" color="#305496" gutterBottom style={{fontWeight: 'bold', textAlign: 'center' }}>
                EMPLOYEE DETAILS
            </Typography>
            <form>
                <hr style={{margin: '20px 0', border: '1px solid #ccc'}}/>
                {/* First row: Firstname, Middlename, Lastname */}
                <div style={{display: 'flex', margin: '20px' , justifyContent:"space-between"}}>
                    <div style={{marginBottom: '20px', flexDirection: 'column', display: 'flex'}}>
                        <FormLabel>First Name</FormLabel>

                        <TextField
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '20px', flexDirection: 'column', display: 'flex'}}>
                        <FormLabel>Middle Name</FormLabel>
                        <TextField
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{marginBottom: '20px', flexDirection: 'column', display: 'flex'}}>
                        <FormLabel>Last Name</FormLabel>
                        <TextField
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Second row: Sex (radio buttons), Department (dropdown) */}
                <div style={{display: 'flex', margin: '20px'}}>
                    <div style={{marginRight: '20px'}}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Sex</FormLabel>
                            <RadioGroup
                                row
                                name="sex"
                                value={formData.sex}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div style={{flex: '1',}}>
                        <FormControl fullWidth>
                            <FormLabel component="legend">Department</FormLabel>
                            <Select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>Select Department</MenuItem>
                                <MenuItem value="IT">IT</MenuItem>
                                <MenuItem value="HR">HR</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <hr style={{margin: '20px 0', border: '1px solid #ccc'}}/>

                {/* Third row: Submit Button */}
                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px'}}>
                    <Button type="button" variant="contained" color="primary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>

    );
}

export default MyForm;
