import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip
} from "recharts";
import './SessionChart.css'

const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]

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
                data={USER_AVERAGE_SESSIONS[0].sessions}
                margin={{top: 60, right: 0, left: 0, bottom: 13
                }}
            >
                <XAxis dataKey="day" axisLine={false} stroke="#FE7F7F" tickLine={false} />

                <Tooltip wrapperStyle={styleToolTip} content={<SessionTooltip />} />
                
                <Line type="monotone" dataKey="sessionLength" stroke="white" dot={false} />
            </LineChart>
        </div>
  );
}

export default SessionChart;