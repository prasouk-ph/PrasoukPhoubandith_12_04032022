import React from "react";
import {
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid,
    ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types'
import { useState, useEffect } from "react";
import './PerformanceChart.css'

/**
 * Format tooltip content
 * @param { Object } data - user performance data
 * @returns { HTMLElement }
 */
function PerformanceChart({ data }) {
    const kindName = data.kind

    const [dataFormatIsValid, setDataFormatIsValid] = useState(null)

    function checkData() {
        if (data.data.some(session => session.hasOwnProperty("value")) && data.data.some(session => session.hasOwnProperty("kind"))) {
            setDataFormatIsValid(true)
        } else {
            setDataFormatIsValid(false)
        }
    }
    
    useEffect(() => {
        checkData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /**
     * Format tooltip content
     * @param { Number } tickIndex 
     * @returns { String }
     */
    function getTickName(tickIndex) {
        return kindName[tickIndex]
    }
    
    if (dataFormatIsValid) {
        return (
            <div className="performance-chart">
                <ResponsiveContainer>
                    <RadarChart
                        style={{ backgroundColor: "#282D30", borderRadius: 5 }}
                        outerRadius={'60%'}
                        data={data.data}
                    >
                        <PolarGrid stroke="white" />
                        <PolarAngleAxis style={{ fontSize: '0.833vw' }} stroke="white" dataKey="kind" tickLine={false} tickFormatter={getTickName}
        />
                        <Radar name="user" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    } else {
        return (
            <div className="performance-chart">
                <div className="performance-chart-error-message">
                    <p className="performance-chart-error-message-icon">( ! )</p>
                    <p className="performance-chart-error-message-text">Erreur de format</p>
                </div>
            </div>
        )
    }
}

PerformanceChart.propTypes = {
    data: PropTypes.object,
}

export default PerformanceChart;