import React from "react";
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis
} from "recharts";
import PropTypes from 'prop-types'
import './FatScoreChart.css'


function FatScore({ data }) {
    const userScore = data * 100

    // radial bar need specific format
    const formatedScore = [
        { name: 'score', value: userScore, fill: "#E60000" }
         ];

    if (data !== undefined) {
        return (
                <RadialBarChart 
                    width={258} 
                    height={263} 
                    innerRadius="70%" 
                    outerRadius="80%" 
                    data={formatedScore} 
                    startAngle={-270} 
                    endAngle={180}
                    style={{ backgroundColor: "#fbfbfb", borderRadius: 5 }}
                >
                    <text
                        x={24}
                        y={30}
                        className="fatscore-title"
                    >
                        Score
                    </text>
                    
                    <PolarAngleAxis type="number" domain={[0, 125]} tick={false} /> {/* domain 125 allow better accuracy when value is near max */}

                    <RadialBar cornerRadius={15} background clockWise={true} dataKey="value" />
                    <text
                        x={"41%"}
                        y={"45%"}
                        className="fatscore"
                    >
                        {userScore}%
                    </text>
                    
                    <text
                        x={"40%"}
                        y={"55%"}
                        className="fatscore-text"
                        fill="#74798C"
                    >
                        de votre
                    </text>
                    
                    <text
                        x={"40%"}
                        y={"65%"}
                        className="fatscore-text"
                        fill="#74798C"
                    >
                        objectif
                    </text>
                
                </RadialBarChart>
        );
    } else { return (<p>Chargement...</p>) }
}

FatScore.propTypes = {
    data: PropTypes.number
}

export default FatScore;
