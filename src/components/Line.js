import React, { Component, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  TextField,
  Tabs,
  Tab,
  Select,
  MenuItem,
  LinearProgress,
  Switch,
  Button,
  Slider,
  IconButton,
} from "@material-ui/core";
import Chart from "chart.js/auto";

const LineChart = () => {
  const [val, setVal] = useState();
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Test Data",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  });

  function updatechart(val) {
    const size = data.datasets[0].data.length;
    if (size >= 6) {
      data.datasets[0].data.shift();
    }
    data.datasets[0].data.push(val);
    console.log(data.datasets[0].data);
    setData((prevData) => ({ ...prevData }));
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={data} options={options} />
      <TextField
        label="Value"
        className="textfield"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          updatechart(parseInt(val));
        }}
        style={{ marginTop: "16px", width: "100%" }}
      >
        Click to Add Value
      </Button>
    </>
  );
};

/*
class LineChart extends Component {
  state = {
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    },
  };

  options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  updatechart(val) {
    const size = this.state.data.datasets[0].data.length;
    if (size >= 6) {
        this.state.data.datasets[0].data.shift();
    }
    this.state.data.datasets[0].data.push(val);
    console.log(this.state.data.datasets[0].data);
    this.setState({key: Math.random()});
  }

  render() {
    return (
      <>
        <div className="header">
          <h1 className="title">Line Chart</h1>
          <div className="links"></div>
        </div>
        <Line
          data={this.state.data}
          options={this.options}
          key={Math.random()}
        />
        <Button onClick={(e) => this.updatechart(0)}>sadasd</Button>
      </>
    );
  }
}
*/
export default LineChart;
