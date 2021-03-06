//The day that flare-up 
var xData = [
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
  [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016]
];

var yData = [
  [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69, 12, 33, 51],
  [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28, 36, 34, 35],
  [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50, 21, 16, 14],
  [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23, 66, 66, 69]
];

var colors = ['rgba(67,67,67,1)', 'rgba(115,115,115,1)', 'rgba(49,130,189, 1)',
  'rgba(189,189,189,1)'
];

var lineSize = [2, 2, 4, 2];

var labels = ['SLEDAI', 'SLE DamageIndex', 'Level of disease', 'Medication'];

var data = [];

for ( var i = 0 ; i < xData.length ; i++ ) {
  var result = {
    x: xData[i],
    y: yData[i],
    type: 'scatter',
    mode: 'lines',
    line: {
      color: colors[i],
      width: lineSize[i]
    }
  };
  var result2 = {
    x: [xData[i][0], xData[i][14]],
    y: [yData[i][0], yData[i][14]],
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: colors[i],
      size: 15
    }
  };
  data.push(result, result2);
}

var layout = {
  showlegend: false,
  xaxis: {
    showline: true,
    showgrid: false,
    showticklabels: true,
    linecolor: 'rgb(204,204,204)',
    linewidth: 2,
    autotick: false,
    ticks: 'outside',
    tickcolor: 'rgb(204,204,204)',
    tickwidth: 2,
    ticklen: 5,
    tickfont: {
      family: 'Arial',
      size: 12,
      color: 'rgb(82, 82, 82)'
    }
  },
  yaxis: {
    showgrid: false,
    zeroline: false,
    showline: false,
    showticklabels: false
  },
  autosize: false,
  margin: {
    autoexpand: false,
    l: 200,
    r: 20,
    t: 50
  },
  annotations: [
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.0,
      y: 1.05,
      xanchor: 'left',
      yanchor: 'bottom',
      text: 'อาการและการกำเริบของผู้ป่วย',
      font:{
        family: 'Arial',
        size: 30,
        color: 'rgb(37,37,37)'
      },
      showarrow: false
    },
    {
      xref: 'paper',
      yref: 'paper',
      x: 0.5,
      y: -0.1,
      xanchor: 'center',
      yanchor: 'top',
      //text: 'Source: Pew Research Center & Storytelling with data',
      showarrow: false,
      font: {
        family: 'Arial',
        size: 12,
        color: 'rgb(150,150,150)'
      }
    }
  ]
};

for ( var i = 0 ; i < xData.length ; i ++ ) {
  var result = {
    xref: 'paper',
    x: 0.05,
    y: yData[i][0],
    xanchor: 'right',
    yanchor: 'middle',
    text: labels[i] + ' ' + yData[i][0] +'%',
    showarrow: false,
    font: {
      family: 'Arial',
      size: 16,
      color: 'black'
    }
  };
  var result2 = {
    xref: 'paper',
    x: 0.95,
    y: yData[i][14],
    xanchor: 'left',
    yanchor: 'middle',
    text: yData[i][14] +'%',
    font: {
      family: 'Arial',
      size: 16,
      color: 'black'
    },
    showarrow: false
  };
  
  layout.annotations.push(result, result2);
}


Plotly.newPlot('myDiv', data, layout);