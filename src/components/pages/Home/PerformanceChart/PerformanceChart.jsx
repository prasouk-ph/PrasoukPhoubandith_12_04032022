import React from "react";
import {
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid,
    ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types'
import './PerformanceChart.css'

/**
 * Format tooltip content
 * @param { Object } data - user performance data
 * @returns { HTMLElement }
 */
function PerformanceChart({ data }) {
    const kindName = data.kind

    /**
     * Format tooltip content
     * @param { Number } tickIndex 
     * @returns { String }
     */
    function getTickName(tickIndex) {
        return kindName[tickIndex]
    }
    
    if (data.data !== undefined) {
        return (
            <div className="performance-chart">
                <ResponsiveContainer>
                    <RadarChart
                        style={{ backgroundColor: "#282D30", borderRadius: 5 }}
                        outerRadius={70}
                        data={data.data}
                    >
                        <PolarGrid stroke="white" />
                        <PolarAngleAxis style={{ fontSize: 12 }} stroke="white" dataKey="kind" tickLine={false} tickFormatter={getTickName}
        />
                        <Radar name="user" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    } else { return (<p>Chargement...</p>) }
}

PerformanceChart.propTypes = {
    data: PropTypes.object,
}

export default PerformanceChart;