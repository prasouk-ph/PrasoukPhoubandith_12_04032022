import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types'
import { useState, useEffect } from "react";
import './SessionChart.css'

/**
 * Format tooltip content
 * @param { Boolean } active - the state of tooltip
 * @param { Array.<Object> } payload - contains attributes and values to display
 * @returns { ?HTMLElement }
 */
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

/**
 * Format day name
 * @param { Number } tickIndex 
 * @returns { String }
 */
function getTickName(tickIndex) {
    const dayName = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D"
    }
    return dayName[tickIndex]
}

/**
 * Create a chart component
 * @param { Array.<Object> } data - user session data
 * @returns { HTMLElement }
 */
function SessionChart({ data }) {
    const [dataFormatIsValid, setDataFormatIsValid] = useState(null)

    function checkData() {
        if (data.some(session => session.hasOwnProperty("day")) && data.some(session => session.hasOwnProperty("sessionLength"))) {
            setDataFormatIsValid(true)
        } else {
            setDataFormatIsValid(false)
        }
    }
    
    useEffect(() => {
        checkData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (dataFormatIsValid) {
        return (
            <div className="session-chart session-chart-red">
                <h2 className="session-chart-title">Durée moyenne des sessions</h2>

                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{
                            top: 80, right: 20, left: 20, bottom: 13
                        }}
                    >
                        <XAxis dataKey="day" axisLine={false} stroke="#FE7F7F" tickLine={false} tickFormatter={getTickName}/>

                        <Tooltip wrapperStyle={styleToolTip} content={<SessionTooltip />} />
                        
                        <Line type="natural" connectNulls="true" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        return (
            <div className="session-chart session-chart-grey">
                <div className="session-chart-error-message">
                    <p className="session-chart-error-message-icon">( ! )</p>
                    <p className="session-chart-error-message-text">Erreur de format</p>
                </div>
            </div>
        )
    }
}

SessionChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ // shape allows to check object content type
                day: PropTypes.number.isRequired,
                sessionLength: PropTypes.number.isRequired,
            }))
}

export default SessionChart;