import { useEffect, useState } from "react";
import Plot from 'react-plotly.js';

const BoxPlot = ({cardioData, title, xtitle}) =>{
    const data = [{
        x: cardioData,
        type: "histogram"
    }]

    const layout = {
        title: title,
        xaxis: {title: xtitle},
        yaxis: {title: 'Count'},
    };

    return(<Plot
        data={data}
        layout={layout}
        style={{width: "500px", height: "300px", margin: "20px",}}
      />)
};

export default BoxPlot;