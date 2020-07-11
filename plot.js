var country = [];
var incometaxrate= [];
var corptaxrate= [];
var taxburden= [];

Plotly.d3.csv("tax.csv", function(kara){ 
    for (var i = 0; i < kara.length; i++) {
      row = kara[i];
      country.push(row['Country Name']);
      incometaxrate.push(row['Income Tax Rate (%)']);
      corptaxrate.push(row['Corporate Tax Rate (%)']);
      taxburden.push(row['Tax Burden % of GDP']);
    }});
console.log(country)

    var trace1 = {
      x: country,
      y: incometaxrate,
      type: 'bar',
      text: incometaxrate.map(String),
      name: 'Income Tax Rate',
      textposition: 'auto',
      hoverinfo: 'none',
      opacity: 0.5,
      marker: {
        color: 'rgb(158,202,225)',
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      }
    };
    
    var trace2 = {
      x: country,
      y: corptaxrate,
      type: 'bar',
      text: corptaxrate.map(String),
      name: 'Corporate Tax Rate',
      textposition: 'auto',
      hoverinfo: 'none',
      marker: {
        color: 'rgba(58,200,225,.5)',
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      }
    };
    
    var trace3 = {
        x: country,
        y: taxburden,
        name: 'Tax Burden % of GDP',
        text: taxburden.map(String),
        type: 'bar',
        textposition: 'auto',
        hoverinfo: 'none',
        marker: {
            color: 'rgba(58,200,225,.5)',
            line: {
            color: 'rgb(8,48,107)',
            width: 1.5
          }
        }
    };
    var data = [trace1,trace2,trace3];
    
    var layout = {
      barmode: 'group',
      title: 'Tax Burden vs Tax Rates in Each Country'
    };
    
    Plotly.newPlot('bar-plot', data, layout);