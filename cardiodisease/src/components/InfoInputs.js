import "./InfoInputs.css";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { standardScaling } from "../math/standardScaling";
import DL from "../ML/DL.js"


const InfoInputs = () =>{

    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [loBp, setLoBp] = useState('');
    const [hiBp, sethiBp] = useState('');

    const [scaledDataState, setScaledData] = useState();

    const handleChange = (event, setter) => {
      setter(event.target.value);
    };

    const handlePredict = (e) =>{
        const scaledData  = standardScaling(age, sex, height, weight, loBp, hiBp);
        setScaledData(scaledData);
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
                <div style = {{height: "150px", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
                    <TextField
                    required
                    id="outlined-number"
                    type="number"
                    label="Age"
                    value={age}
                    size="large"
                    onChange={(e) => handleChange(e, setAge)}
                    />
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Sex</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sex}
                            label="Sex"
                            onChange={(e) => handleChange(e, setSex)}
                            style={{width: "100px"}}
                        >
                            <MenuItem value={10}>M</MenuItem>
                            <MenuItem value={20}>F</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        id="outlined-number"
                        label="Height(cm)"
                        type="number"
                        value={height}
                        onChange={(e) => handleChange(e, setHeight)}
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="Weight (kg)"
                        type="number"
                        value={weight}
                        onChange={(e) => handleChange(e, setWeight)}
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="ap hi"
                        type="number"
                        value={hiBp}
                        onChange={(e) => handleChange(e, sethiBp)}
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="ap lo"
                        type="number"
                        value={loBp}
                        onChange={(e) => handleChange(e, setLoBp)}
                    />
                </div>

                <Button onClick = {handlePredict} variant="contained" size="medium">
                    Predict!
                </Button>
                <DL scaledDataState = {scaledDataState}></DL>
            </Box>
        </div>
    )
};

export default InfoInputs;