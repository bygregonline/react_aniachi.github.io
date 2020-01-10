import React, { Component } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { connect } from "react-redux";
require("highcharts/modules/exporting")(Highcharts);

class Chart extends Component {
  render() {
    const options = {
      exporting: {
        buttons: {
          contextButton: {
            enabled: this.props.state.export_chart
          }
        }
      },
      colors: ["#737373", "#D8D7D6", "#B2B0AD", "#8C8984"],
      yAxis: {
        title: {
          text: "Time milliseconds (ms)"
        },
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: "transparent",
        tickColor: "#737373",
        tickWidth: 1,
        gridLineColor: "transparent"
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: "transparent",
        tickColor: "#737373"
      },
      chart: {
        type: this.props.state.chart_type,
        style: {
          fontFamily: "Cardo"
        },
        backgroundColor: "#FFF1E0"
      },
      credits: {
        enabled: this.props.state.use_credits,
        text: this.props.state.credits_text
      },
      title: {
        text: "Downtime metrics",
        align: "left",
        style: {
          fontFamily: "Droid Serif",
          color: "black",
          fontWeight: "bold"
        }
      },
      subtitle: {
        text: "Source: Aniachi Analytics",
        align: "left",
        style: {
          fontFamily: "Droid Serif",
          fontWeight: "bold"
        }
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        borderColor: "#76c0c1",
        style: {
          color: "#000000"
        }
      },
      series: [
        {
          data: [
            29.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            { y: 216.4, color: "#BF0B23" },
            194.1,
            95.6,
            54.4
          ],
          name: "Downtime"
        },
        {
          data: [
            19.9,
            51.5,
            6.4,
            129.2,
            144.0,
            16.0,
            5.6,
            12,
            { y: 216.4, color: "#0000FF" },
            22.1,
            33.6,
            4.4
          ],
          name: "Downtime"
        }
      ]
    };
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

/*
REDUX
*/
const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Chart);
