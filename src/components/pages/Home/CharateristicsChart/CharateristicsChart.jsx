import React from "react";
import {
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid
} from "recharts";
import './CharateristicsChart.css'

const charateristicsData = [
    {
        category: "Intensité",
        grade: 25
    },
    {
        category: "Vitesse",
        grade: 50
    },
    {
        category: "Force",
        grade: 37.5
    },
    {
        category: "Endurance",
        grade: 45
    },
    {
        category: "Energie",
        grade: 42.5
    },
    {
        category: "Cardio",
        grade: 35
    }
];


function CharateristicsChart() {
    return (
        <RadarChart
            style={{ backgroundColor: "#282D30", borderRadius: 5}}
            outerRadius={90}
            width={258}
            height={263}
            data={charateristicsData}
        >
            <PolarGrid stroke="white" />
            <PolarAngleAxis style={{fontSize: 12}} stroke="white" dataKey="category" tickLine={false}/>
            <Radar name="Thomas" dataKey="grade" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
  );
}

export default CharateristicsChart;