import React from "react";
import {
    PieChart,
    Pie,
    Cell
} from "recharts";
import './FatScore.css'

const data = [
    { id: "1", name: "Vide", value: 10 }, // value set white size
    { id: "2", name: "Gras", value: 90 } // value set pie size
];
  
const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]


function FatScore() {
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
                {`${USER_MAIN_DATA[0].todayScore * 100}%`}
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
}

export default FatScore;