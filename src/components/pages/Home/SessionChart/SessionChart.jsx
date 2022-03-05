import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip
} from "recharts";
import './SessionChart.css'

const sessionData = [
  {
    day: "L",
    duration: 20
  },
  {
    day: "M",
    duration: 50
  },
  {
    day: "M",
    duration: 30
  },
  {
    day: "J",
    duration: 40
  },
  {
    day: "V",
    duration: 10
  },
  {
    day: "S",
    duration: 70
  },
  {
    day: "D",
    duration: 45
  }
];

const SessionTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="session-tooltip-container">
              <p className="session-tooltip">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
};

const styleToolTip = {
    backgroundColor: "white",
    color: "black",
    fontSize: 8,
    fontWeight: 500,
    height: 25,
    width: 39,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}


function SessionChart() {
    return (
        <div className="session-chart">
            <h2 className="session-chart-title">Durée moyenne des sessions</h2>

            <LineChart
                className="session-chart"
                width={258}
                height={263}
                data={sessionData}
                margin={{top: 60, right: 0, left: 0, bottom: 13
                }}
            >
                <XAxis dataKey="day" axisLine={false} stroke="#FE7F7F" tickLine={false} />

                <Tooltip wrapperStyle={styleToolTip} content={<SessionTooltip />} />
                
                <Line type="monotone" dataKey="duration" stroke="white" dot={false} />
            </LineChart>
        </div>
  );
}

export default SessionChart;