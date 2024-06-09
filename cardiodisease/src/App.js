import logo from './logo.svg';
import './App.css';
import InfoInputs from './components/InfoInputs';
import BoxPlot from './components/Graphs/BoxPlot';
import PieChart from './components/Graphs/PieChart';
import BarChart from './components/Graphs/BarChart';
import { useEffect, useState} from 'react';

import ReactLoading from "react-loading";
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
  const [mode, setMode] = useState('Model');

  //API Key Handling
  const [showAPIKey, setshowAPIKey] = useState(false);
  const handleClickshowAPIKey = () => setshowAPIKey((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMode = (event, newAlignment) => {
    console.log(newAlignment)
    setMode(newAlignment);
  };

  //entering the API key
  const [APIKey, setAPIKey] = useState(false);
  const handleAPIChange = (e) =>{
      setAPIKey(e.target.value);
  };

  //setData
  const [cardioData, setCardioData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAPISubmit = () =>{

        // it's loading now
        setIsLoading(true);
        let request = fetch('https://kepeuqmx53.execute-api.us-east-1.amazonaws.com/cardio/', {
          method: "GET",
          headers: {
              "Content-Type": 'application/json',
              "x-api-key": APIKey
          }
        }).then(response => response.json())
        .then(data => {
          setCardioData(data);
          setIsLoading(false);
          setError(false);
        })
        .catch(err => {
          setIsLoading(false);
          setError(true);
        })

        
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
    <div style = {{display: "flex", justifyContent:"center", alignItems: "center", paddingTop: "10px"}}>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleMode}
        style={{backgroundColor: "white"}}
      >
        <ToggleButton value="Model">
          <b>Model</b>
        </ToggleButton>
        <ToggleButton value="Visualizations">
          <b>Visualizations</b>
        </ToggleButton>
      </ToggleButtonGroup>
      {(mode !== "Model" || null) &&
        <>
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
            <div style={{display: "flex", flexDirection: "column"}}>
              <Button variant="contained" onClick={handleAPISubmit}> {!isLoading? <>Submit Key</> : <ReactLoading type={"spin"} color="#fff" height={30} width={30} />}</Button>
              {error && <span style={{color: "red", marginLeft: "10px"}}>API Key Doesn't Exist</span>}
            </div>
          </>
      }
      </div>
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
