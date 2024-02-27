import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';

function MyForm() {
    const navigate = useNavigate();
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
            <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Employee Details</h2>
            <form>
                <hr style={{margin: '20px 0', border: '1px solid #ccc'}}/>
                {/* First row: Firstname, Middlename, Lastname */}
                <div style={{display: 'flex', marginBottom: '20px'}}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{marginRight: '10px'}}
                    />
                    <TextField
                        label="Middle Name"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        style={{marginRight: '10px'}}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                {/* Second row: Sex (radio buttons), Department (dropdown) */}
                <div style={{display: 'flex', marginBottom: '20px'}}>
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
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default MyForm;
