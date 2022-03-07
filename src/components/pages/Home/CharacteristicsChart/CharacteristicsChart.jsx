import React from "react";
import {
    RadarChart,
    Radar,
    PolarAngleAxis,
    PolarGrid
} from "recharts";
import { useState, useEffect } from "react";
import './CharacteristicsChart.css'


function CharacteristicsChart() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userCharacteristicsData, setUserCharacteristicsData] = useState({});
    
    async function fetchData() {
        try {
            const response = await fetch(`http://localhost:3000/user/12/performance`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserCharacteristicsData(data.data)
            }
        } catch (error) {
            console.log(error.message)
            setError(true)
        }
        finally {
            setIsLoaded(true) // prevent error because fetch not finished
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    

    if (!isLoaded) { return (<p>Chargement...</p>) }

    if (error) { return (<p>Erreur !</p>) }

    return (
        <RadarChart
            style={{ backgroundColor: "#282D30", borderRadius: 5}}
            outerRadius={90}
            width={258}
            height={263}
            data={userCharacteristicsData}
        >
            <PolarGrid stroke="white" />
            <PolarAngleAxis style={{fontSize: 12}} stroke="white" dataKey="kind" tickLine={false}/>
            <Radar name="user" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
    );
}

export default CharacteristicsChart;