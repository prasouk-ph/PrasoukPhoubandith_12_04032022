import React from "react";
import {
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid
} from "recharts";
import './CharateristicsChart.css'

const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]


function CharateristicsChart() {
    return (
        <RadarChart
            style={{ backgroundColor: "#282D30", borderRadius: 5}}
            outerRadius={90}
            width={258}
            height={263}
            data={USER_PERFORMANCE[0].data}
        >
            <PolarGrid stroke="white" />
            <PolarAngleAxis style={{fontSize: 12}} stroke="white" dataKey="kind" tickLine={false}/>
            <Radar name="Thomas" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
  );
}

export default CharateristicsChart;