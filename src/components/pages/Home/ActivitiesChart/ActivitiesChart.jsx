import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types'
import { useState, useEffect, useContext } from "react";
import { LoadStateContext } from '../Home'
import './ActivitiesChart.css'
import { Oval } from 'react-loader-spinner'

/**
 * Format tooltip content
 * @param { Boolean } active - the state of tooltip
 * @param { Array.<Object> } payload - contains attributes and values to display
 * @returns { ?HTMLElement }
 */
const ActivitesTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="activities-tooltip-container">
              <p className="weight-tooltip">{`${payload[0].value} kg`}</p>
              <p className="calories-tooltip">{`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
};

const styleToolTip = {
    backgroundColor: "red",
    color: "white",
    fontSize: 7,
    fontWeight: 500,
    height: 63,
    width: 39,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}

/**
 * Format day name
 * @param { String } dayValue 
 * @returns { Number }
 */
function getTickName(dayValue) {
    return new Date(dayValue).getDate() // getDate allows to get day number
}

/**
 * Create an info box
 * @param { String } nutrientType
 * @param { Object }  data - user activities data
 * @returns { HTMLElement }
 */
function ActivitiesChart({ data }) {
    const loadState = useContext(LoadStateContext); // get load state from home page    
    const [dataFormatIsValid, setDataFormatIsValid] = useState(null)

    
    function checkData() {
        if (loadState && data.some(session => session.hasOwnProperty("calories")) && data.some(session => session.hasOwnProperty("day")) && data.some(session => session.hasOwnProperty("kilogram"))) {
            setDataFormatIsValid(true)
        } else {
            setDataFormatIsValid(false)
        }
    }
    
    useEffect(() => {
        checkData()
    })


    if (!loadState) {
        return (
            <div className="activities-chart activities-chart-load">
                <Oval
                    height="5vh"
                    width="5vw"
                    color='#FF0000'
                    secondaryColor="grey"
                    ariaLabel='loading'
                />
            </div>
        )
    } else if (dataFormatIsValid) {
        return (
            <div className="activities-chart" >
                <div className="chart-header">
                    <h2 className="chart-title">Activité quotidienne</h2>
                    
                    <ul className="chart-legend">
                        <li className="legend-item weight-legend">Poids (kg)</li>
                        <li className="legend-item calories-legend">Calories brûlées (kCal)</li>
                    </ul>
                </div>
        
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        barSize={7}
                        barCategoryGap={54}
                        barGap={8}
                        margin={{
                            top: 82,
                            right: 49,
                            left: 43,
                            bottom: 23
                        }}>
                            
                        <CartesianGrid
                            strokeDasharray="2"
                            vertical={false}
                        />
                        
                        <Tooltip wrapperStyle={styleToolTip} content={<ActivitesTooltip />} />
                        
                        <XAxis dataKey="day" tickLine={false} tickMargin={16} stroke="#9B9EAC" tickFormatter={getTickName} />
                        
                        <YAxis dataKey={data.kilogram} orientation="right" tickLine={false} axisLine={false} tickMargin={45} stroke="#9B9EAC"  />
                        
                        <Bar
                            dataKey="kilogram"
                            fill="#282D30"
                            radius={[10, 10, 0, 0]}
                            name="Poids (kg)"
                        />
                        
                        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} name="Calories brûlées (kCal)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        return (
            <div className="activities-chart activities-chart-error">
                <div className="activities-chart-error-message">
                    <p className="activities-chart-error-message-icon">( ! )</p>
                    <p className="activities-chart-error-message-text">Erreur de format</p>
                </div>
            </div>
        )
    }
}

ActivitiesChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ // shape allows to check object content type
        calories: PropTypes.number.isRequired,
        day: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
      }))
}

export default ActivitiesChart;