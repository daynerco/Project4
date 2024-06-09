import logo from './logo.svg';
import './App.css';
import InfoInputs from './components/InfoInputs';
import BoxPlot from './components/Graphs/BoxPlot';
import PieChart from './components/Graphs/PieChart';
import BarChart from './components/Graphs/BarChart';
import { useEffect, useState} from 'react';

import InputLabel from '@mui/material/InputLabel';
import ToggleButton from '@mui/material/ToggleButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';



function App() {

  // which mode to display.
  const [mode, setMode] = useState('Visualization');

  //API Key Handling
  const [showAPIKey, setshowAPIKey] = useState(false);
  const handleClickshowAPIKey = () => setshowAPIKey((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMode = (event, newAlignment) => {
    setMode(newAlignment);
  };

  //entering the API key
  const [APIKey, setAPIKey] = useState(false);
  const handleAPIChange = (e) =>{
      setAPIKey(e.target.value);
  };

  const [cardioData, setCardioData] = useState([
    {
        "alco": "0",
        "cholesterol": "2",
        "gluc": "2",
        "gender": "1",
        "weight": "67.0",
        "ap_hi": "120",
        "ap_lo": "80",
        "smoke": "0",
        "active": "0",
        "cardio": "0",
        "height": "151",
        "id": 8,
        "age": "21914"
    },
    {
        "alco": "0",
        "cholesterol": "1",
        "gluc": "1",
        "gender": "2",
        "weight": "82.0",
        "ap_hi": "150",
        "ap_lo": "100",
        "smoke": "0",
        "active": "1",
        "cardio": "1",
        "height": "169",
        "id": 3,
        "age": "17623"
    },
    {
        "alco": "0",
        "cholesterol": "3",
        "gluc": "1",
        "gender": "1",
        "weight": "64.0",
        "ap_hi": "130",
        "ap_lo": "70",
        "smoke": "0",
        "active": "0",
        "cardio": "1",
        "height": "165",
        "id": 2,
        "age": "18857"
    },
    {
        "alco": "0",
        "cholesterol": "1",
        "gluc": "1",
        "gender": "1",
        "weight": "68.0",
        "ap_hi": "110",
        "ap_lo": "60",
        "smoke": "0",
        "active": "0",
        "cardio": "0",
        "height": "164",
        "id": 14,
        "age": "19834"
    },
    {
        "alco": "0",
        "cholesterol": "3",
        "gluc": "3",
        "gender": "2",
        "weight": "95.0",
        "ap_hi": "130",
        "ap_lo": "90",
        "smoke": "0",
        "active": "1",
        "cardio": "1",
        "height": "178",
        "id": 12,
        "age": "22584"
    },
    {
        "alco": "0",
        "cholesterol": "3",
        "gluc": "1",
        "gender": "1",
        "weight": "93.0",
        "ap_hi": "130",
        "ap_lo": "80",
        "smoke": "0",
        "active": "1",
        "cardio": "0",
        "height": "157",
        "id": 9,
        "age": "22113"
    },
    {
        "alco": "0",
        "cholesterol": "1",
        "gluc": "1",
        "gender": "1",
        "weight": "56.0",
        "ap_hi": "100",
        "ap_lo": "60",
        "smoke": "0",
        "active": "0",
        "cardio": "0",
        "height": "156",
        "id": 4,
        "age": "17474"
    },
    {
        "alco": "0",
        "cholesterol": "1",
        "gluc": "1",
        "gender": "1",
        "weight": "71.0",
        "ap_hi": "110",
        "ap_lo": "70",
        "smoke": "0",
        "active": "1",
        "cardio": "0",
        "height": "158",
        "id": 13,
        "age": "17668"
    },
    {
        "alco": "0",
        "cholesterol": "3",
        "gluc": "1",
        "gender": "1",
        "weight": "85.0",
        "ap_hi": "140",
        "ap_lo": "90",
        "smoke": "0",
        "active": "1",
        "cardio": "1",
        "height": "156",
        "id": 1,
        "age": "20228"
    },
    {
        "alco": "0",
        "cholesterol": "1",
        "gluc": "1",
        "gender": "2",
        "weight": "62.0",
        "ap_hi": "110",
        "ap_lo": "80",
        "smoke": "0",
        "active": "1",
        "cardio": "0",
        "height": "168",
        "id": 0,
        "age": "18393"
    }
  ]  );

  const handleAPISubmit = () =>{
        let request = fetch('https://kepeuqmx53.execute-api.us-east-1.amazonaws.com/cardio/', {
          method: "GET",
          headers: {
              "Content-Type": 'application/json',
              "x-api-key": APIKey
          }
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
  };

  // data processing.

  const peopleWCardio = cardioData.filter(x => x.cardio === "1");
  const ageDistributionData = peopleWCardio.map(x => Math.floor(parseFloat(x.age)/365));
  const weightDistributionData = peopleWCardio.map(x => x.weight);
  const genderDistributionData = [peopleWCardio.filter(x => x.gender === "2").length, peopleWCardio.filter(x => x.gender === "1").length]

  const smokeDistributionData = [peopleWCardio.filter(x => x.smoke === "0").length, peopleWCardio.filter(x => x.smoke === "1").length]
  const alcoDistributionData = [peopleWCardio.filter(x => x.alco === "0").length, peopleWCardio.filter(x => x.alco === "1").length]



  return (
    <div className="App">
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleMode}
        style={{backgroundColor: "white", marginTop: "10px"}}
      >
        <ToggleButton value="Model">
          <b>Model</b>
        </ToggleButton>
        <ToggleButton value="Visualizations">
          <b>Visualizations</b>
        </ToggleButton>
      </ToggleButtonGroup>
      
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">API Key For Vis</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showAPIKey ? 'text' : 'password'}
            style = {{backgroundColor: "white"}}
            onChange = {handleAPIChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickshowAPIKey}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showAPIKey ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="API Key"
          />
      </FormControl>
      <Button variant="contained" onClick={handleAPISubmit}>Submit Key</Button>

      {mode === "Model"? <InfoInputs></InfoInputs>:

        <div className='GraphContainer'>
          <BoxPlot cardioData = {ageDistributionData} title = {"Cardio Disease Age Distribution"} xtitle={"Age"}></BoxPlot>
          <BoxPlot cardioData = {weightDistributionData} title = {"Cardio Disease Weight Distribution"} xtitle={"Weight"}></BoxPlot>
          <PieChart cardioData = {genderDistributionData} title = {"Gender Distribution"} labels = {["Male", "Female"]}></PieChart>

          <BarChart labels = {["Smoke", "No Smoke"]} cardioData = {smokeDistributionData} title = {"Cardio Disease Smoke Distribution"} xtitle={"Smoke"} ytitle={"Count"}></BarChart>
          <BarChart labels = {["Alcohol", "No Alcohol"]} cardioData = {alcoDistributionData} title = {"Cardio Disease Alcohol Distribution"} xtitle={"Alcohol"} ytitle={"Count"}></BarChart>
        </div>
      }

    </div>
  );
}

export default App;
