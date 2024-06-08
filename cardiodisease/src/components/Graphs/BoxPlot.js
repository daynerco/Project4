import { useEffect, useState } from "react";
import Plot from 'react-plotly.js';

const BoxPlot = ({cardioData}) =>{
    cardioData = [
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
    ]   

    const x = cardioData.map(x => Math.floor(parseFloat(x.age)/365));

    console.log(x)

    const data = [{
        x: x,
        type: "histogram"
    }]

    const layout = {
        title: "Histogram",
        xaxis: {title: "Value"},
        yaxis: {title: 'Count'}
    };

    return(<Plot
        data={data}
        layout={layout}
        style={{width: "500px", height: "300px"}}
      />)
};

export default BoxPlot;