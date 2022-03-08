import React from "react";
import {
    PieChart,
    Pie,
    Cell
} from "recharts";
import PropTypes from 'prop-types'
import './FatScore.css'

// const data = [
//     { id: "1", name: "Vide", value: 10 }, // value set white size
//     { id: "2", name: "Gras", value: 90 } // value set pie size
// ];


function FatScore({ data }) {
    const userScore = data * 100 // without "?" React crashes cause wants to access the property before mounting, while the property has not yet received any content

    if (data !== undefined) {
        return (
            <div className="fatscore">
                <h2 className="fatscore-title">Score</h2>

                <PieChart width={258} height={263} style={{backgroundColor: "#FBFBFB", borderRadius: 5}}>
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
                </PieChart>
            </div>
        );
    } else { return (<p>Chargement...</p>) }
}

FatScore.propTypes = {
    data: PropTypes.number.isRequired
}

export default FatScore;