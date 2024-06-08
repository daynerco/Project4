import Plot from 'react-plotly.js';
const PieChart = ({cardioData, title, labels}) =>{

    const data = [
        {
          values: cardioData,
          labels: labels,
          type: 'pie',
        },
      ];

    const layout = {
        title: title,
      };
    
    return (
        <Plot
            data={data}
            layout={layout}
            style={{width: "500px", height: "300px", margin: "10px"}}
        />
    );

};

export default PieChart