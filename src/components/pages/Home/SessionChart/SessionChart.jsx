import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip
} from "recharts";
import PropTypes from 'prop-types'
import './SessionChart.css'

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


function SessionChart({ data }) {
    if (data.length > 0) {
        return (
            <div className="session-chart">
                <h2 className="session-chart-title">Durée moyenne des sessions</h2>

                <LineChart
                    className="session-chart"
                    width={258}
                    height={263}
                    data={data}
                    margin={{
                        top: 60, right: 20, left: 20, bottom: 13
                    }}
                >
                    <XAxis dataKey="day" axisLine={false} stroke="#FE7F7F" tickLine={false} />

                    <Tooltip wrapperStyle={styleToolTip} content={<SessionTooltip />} />
                    
                    <Line type="monotone" dataKey="sessionLength" stroke="white" dot={false} />
                </LineChart>
            </div>
        );
    } else { return (<p>Chargement...</p>) }
}

SessionTooltip.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ // shape allows to check object content type
        day: PropTypes.string.isRequired,
        sessionLength: PropTypes.number.isRequired,
      }))}

export default SessionChart;

