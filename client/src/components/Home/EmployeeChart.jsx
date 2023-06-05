import React from "react";
import Chart from "react-apexcharts";

class EmployeeChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options : {
        
        chart: {
        type: 'donut',
      },
      height: 400,
      labels: ['Men', 'Woman'],
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: "100%"
          },
          legend: {
            show: true,
            position: 'bottom'
          },
          height: "auto",
        }
      }]
      },
      series: [44, 55],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="100%"
              height={this.state.options.height}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeChart;
