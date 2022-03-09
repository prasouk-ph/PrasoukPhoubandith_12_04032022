import React from "react";
import {
    PieChart,
    Pie,
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    Cell
} from "recharts";
import PropTypes from 'prop-types'
import './FatScore.css'

const dataa = [
    { id: "1", name: "Vide", value: 0 }, // value set white size
];


function FatScore({ data }) {
    const userScore = data * 100

    if (data !== undefined) {
        return (
            <div className="fatscore">
                <h2 className="fatscore-title">Score</h2>

                <RadialBarChart 
                    width={258} 
                    height={263} 
                    innerRadius="70%" 
                    outerRadius="80%" 
                    data={dataa} 
                    startAngle={0} 
                    endAngle={360}
                    >
                    <RadialBar minAngle={0} label={{ fill: '#FF0000', position: 'insideStart' }} background clockWise={true} dataKey='value' />
                </RadialBarChart>

            </div>
        );
    } else { return (<p>Chargement...</p>) }
}

FatScore.propTypes = {
    data: PropTypes.number
}

export default FatScore;

{/* <PieChart width={258} height={263} style={{backgroundColor: "#FBFBFB"}}>
<text
    x={"50%"}
    y={"45%"}
    textAnchor="middle"
    dominantBaseline="middle"
    style={{fontSize: 26, fontWeight: 700}}
>
{`${userScore}%`}
</text>
<text
    x={"50%"}
    y={"55%"}
    textAnchor="middle"
    dominantBaseline="middle"
    style={{ fontSize: 16, fontWeight: 500 }}
    stroke="#D2D5DB"
>
de votre objectif
</text>
<Pie
    data={data}
    dataKey="value"
    innerRadius="60%"
    outerRadius="70%"
    fill="#FF0000"
    startAngle={90}
    endAngle={-270}
    paddingAngle={0}
    blendStroke
    cornerRadius={50}
>
    <Cell
        key="test"
        fill="#FBFBFB"
    />
</Pie>
</PieChart> */}