import React from "react";
import {
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid
} from "recharts";
import PropTypes from 'prop-types'


function PerformanceChart({ data }) {
    if (data.length > 0) {
        return (
            <RadarChart
                style={{ backgroundColor: "#282D30", borderRadius: 5 }}
                outerRadius={90}
                width={258}
                height={263}
                data={data}
            >
                <PolarGrid stroke="white" />
                <PolarAngleAxis style={{ fontSize: 12 }} stroke="white" dataKey="kind" tickLine={false} />
                <Radar name="user" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        );
    } else { return (<p>Chargement...</p>) }
}

PerformanceChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ // shape allows to check object content type
        value: PropTypes.number.isRequired,
        kind: PropTypes.number.isRequired,
      }))
}

export default PerformanceChart;