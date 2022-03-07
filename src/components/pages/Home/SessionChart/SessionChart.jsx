import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip
} from "recharts";
import { useState, useEffect } from "react";
import './SessionChart.css'

const SessionTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="session-tooltip-container">
              <p className="session-tooltip">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
};

const styleToolTip = {
    backgroundColor: "white",
    color: "black",
    fontSize: 8,
    fontWeight: 500,
    height: 25,
    width: 39,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}


function SessionChart() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userSessionData, setUserSessionData] = useState({});
    async function fetchData() {
        setIsLoaded(true)
        try {
            const response = await fetch(`http://localhost:3000/user/12/average-sessions`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserSessionData(data.sessions)
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
        <div className="session-chart">
            <h2 className="session-chart-title">Durée moyenne des sessions</h2>

            <LineChart
                className="session-chart"
                width={258}
                height={263}
                data={userSessionData}
                margin={{top: 60, right: 20, left: 20, bottom: 13
                }}
            >
                <XAxis dataKey="day" axisLine={false} stroke="#FE7F7F" tickLine={false} />

                <Tooltip wrapperStyle={styleToolTip} content={<SessionTooltip />} />
                
                <Line type="monotone" dataKey="sessionLength" stroke="white" dot={false} />
            </LineChart>
        </div>
  );
}

export default SessionChart;