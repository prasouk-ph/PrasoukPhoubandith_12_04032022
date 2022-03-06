import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import './ActivitiesChart.css'

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]

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
            data={USER_ACTIVITY[0].sessions}
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