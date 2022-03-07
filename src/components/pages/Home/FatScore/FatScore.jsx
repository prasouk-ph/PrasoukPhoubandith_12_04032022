import React from "react";
import {
    PieChart,
    Pie,
    Cell
} from "recharts";
import { useState, useEffect } from "react";
import './FatScore.css'

const data = [
    { id: "1", name: "Vide", value: 10 }, // value set white size
    { id: "2", name: "Gras", value: 90 } // value set pie size
];


function FatScore() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState({});

    async function fetchData() {
        setIsLoaded(true)
        try {
            const response = await fetch(`http://localhost:3000/user/12`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserData(data)
            }
        } catch (error) {
            console.log(error.message)
            setError(true)
        }
        finally {
            setIsLoaded(true)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    const userScore = userData?.todayScore * 100 // without "?" React crashes cause wants to access the property before mounting, while the property has not yet received any content

    if (!isLoaded) { return (<p>Chargement...</p>) }

    if (error) { return (<p>Erreur !</p>) }

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
}

export default FatScore;