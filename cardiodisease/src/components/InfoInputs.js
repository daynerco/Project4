import "./InfoInputs.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const InfoInputs = () =>{

    const [sex, setSex] = React.useState('');

    const handleChange = (event) => {
      setSex(event.target.value);
    };

    // Inputs Needed: age gender height weight ap_hi ap_lo
    return (
        <div className="InputContainer">
            <h1>Please Enter Your Info</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                    required
                    id="outlined-number"
                    type="number"
                    label="Age"
                    />
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sex}
                            label="Sex"
                            onChange={handleChange}
                            style={{width: "100px"}}
                        >
                            <MenuItem value={10}>M</MenuItem>
                            <MenuItem value={20}>F</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        id="outlined-number"
                        label="Height(m)"
                        type="number"
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="ap hi"
                        type="number"
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="ap lo"
                        type="number"
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                </div>
            </Box>
        </div>
    )
};

export default InfoInputs;