import logo from './logo.svg';
import './App.css';
import InfoInputs from './components/InfoInputs';
import BoxPlot from './components/Graphs/BoxPlot';
import { useEffect, useState} from 'react';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function App() {

    const [cardioData, setCardioData] = useState('');
    const [mode, setMode] = useState('Visualization');

    const handleMode = (event, newAlignment) => {
      setMode(newAlignment);
    };


  return (
    <div className="App">
        <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleMode}
      >
        <ToggleButton value="Model">
          Model
        </ToggleButton>
        <ToggleButton value="Visualizations">
          Visualizations
        </ToggleButton>
      </ToggleButtonGroup>
      {mode === "Model"? 
        <InfoInputs></InfoInputs>:
        <BoxPlot cardioData = {cardioData}></BoxPlot>
      }
    </div>
  );
}

export default App;
