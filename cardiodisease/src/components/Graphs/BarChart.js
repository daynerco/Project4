import Plot from 'react-plotly.js';

const BarChart = ({labels, cardioData, title, xtitle, ytitle }) => {
  const plotData = [
    {
      x: labels,
      y: cardioData,
      type: 'bar',
    },
  ];

  const layout = {
    title: title,
    xaxis: { title: xtitle },
    yaxis: { title: ytitle },
  };

  return (
    <Plot
      data={plotData}
      layout={layout}
      style={{width: "500px", height: "300px", margin: "20px"}}
    />
  );
};

export default BarChart;