import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import { useState, useEffect } from "react";
import './ActivitiesChart.css'

const ActivitesTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="activities-tooltip-container">
              <p className="weight-tooltip">{`${payload[0].value} kg`}</p>
              <p className="calories-tooltip">{`${payload[1].value} kCal`}</p>
        </div>
      );
    }
  
    return null;
};

const styleToolTip = {
    backgroundColor: "red",
    color: "white",
    fontSize: 7,
    fontWeight: 500,
    height: 63,
    width: 39,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}


function ActivitiesChart() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userActivitiesData, setUserActivitiesData] = useState({});

    async function fetchData() {
        setIsLoaded(true)
        try {
            const response = await fetch(`http://localhost:3000/user/12/activity`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserActivitiesData(data.sessions)
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

    if (!isLoaded) { return (<p>Chargement...</p>) }

    if (error) { return (<p>Erreur !</p>) }

    return (
      <div className="activities-chart">
            <div className="chart-header">
                <h2 className="chart-title">Activité quotidienne</h2>
                
                <ul className="chart-legend">
                    <li className="legend-item weight-legend">Poids (kg)</li>
                    <li className="legend-item calories-legend">Calories brûlées (kCal)</li>
                </ul>
            </div>
      
        <BarChart
            width={835}
            height={320}
            data={userActivitiesData}
            barSize={7}
            barCategoryGap={54}
            barGap={8}
            margin={{
                top: 82,
                right: 49,
                left: 43,
                bottom: 23
            }}>
                
            <CartesianGrid
                strokeDasharray="2"
                vertical={false}
            />
            
            <Tooltip wrapperStyle={styleToolTip} content={<ActivitesTooltip />} />
            
            <XAxis dataKey="day" tickLine={false} tickMargin={16} stroke="#9B9EAC" />
            
            <YAxis orientation="right" tickLine={false} axisLine={false} tickMargin={45} stroke="#9B9EAC" />
            
            <Bar
                dataKey="kilogram"
                fill="#282D30"
                radius={[10, 10, 0, 0]}
                name="Poids (kg)"
            />
            
            <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} name="Calories brûlées (kCal)" />
        </BarChart>
    </div>
  );
}

export default ActivitiesChart;