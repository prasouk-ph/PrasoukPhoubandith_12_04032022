import React from "react";
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types'
import { useState, useEffect, useContext } from "react";
import { LoadStateContext } from '../Home'
import './FatScoreChart.css'
import { Oval } from 'react-loader-spinner'

/**
 * Create a radial chart from user fat score
 * @param { Object } data - user data
 * @returns { HTMLElement }
 */
function FatScore({ data }) {
    const loadState = useContext(LoadStateContext); // get load state from home page
    const [dataFormatIsValid, setDataFormatIsValid] = useState(null)

    const userScore = data.todayScore * 100

    // radial bar need specific format
    const formatedScore = [
        { name: 'score', value: userScore, fill: "#E60000" }
    ];

    
    function checkData() {
        if (loadState && data.hasOwnProperty("todayScore")) {
            setDataFormatIsValid(true)
        } else {
            setDataFormatIsValid(false)
        }
    }
        
    useEffect(() => {
        checkData()
    })


    if (!loadState) {
        return (
            <div className="fatscore-chart fatscore-chart-load">
                <Oval
                    height="3vh"
                    width="3vw"
                    color='#FF0000'
                    secondaryColor="grey"
                    ariaLabel='loading'
                />
            </div>
        )
    } else if (dataFormatIsValid) {
        return (
            <div className="fatscore-chart">
                <ResponsiveContainer>
                    <RadialBarChart 
                        innerRadius="70%" 
                        outerRadius="80%" 
                        data={formatedScore} 
                        startAngle={-270} 
                        endAngle={180}
                        style={{ backgroundColor: "#fbfbfb", borderRadius: 5 }}
                    >
                        <text
                            x={"10%"}
                            y={"15%"}
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
                </ResponsiveContainer>
            </div>
        );
    } else {
        return (
            <div className="fatscore-chart">
                <div className="fatscore-chart-error-message">
                    <p className="fatscore-chart-error-message-icon">( ! )</p>
                    <p className="fatscore-chart-error-message-text">Erreur de format</p>
                </div>
            </div>
        )
    }
}

FatScore.propTypes = {
    data: PropTypes.object
}

export default FatScore;
