import React from "react";
import './NutrientInfo.css'

// const USER_MAIN_DATA = [
//     {
//         id: 12,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: 'Dovineau',
//             age: 31,
//         },
//         todayScore: 0.12,
//         keyData: {
//             calorieCount: 1930,
//             proteinCount: 155,
//             carbohydrateCount: 290,
//             lipidCount: 50
//         }
//     },
//     {
//         id: 18,
//         userInfos: {
//             firstName: 'Cecilia',
//             lastName: 'Ratorez',
//             age: 34,
//         },
//         score: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120
//         }
//     }
// ]


function NutrientInfo(nutrientType, icon) {
    return (
        <div className="nutrient-item">
            <img className='nutrient-icon' src={icon} alt={`${nutrientType} icon`} />
            <div className="nutrient-details">
                <p className='nutrient-quantity'>1,930kCal</p>
                <p className='nutrient-name'>Calories</p>
            </div>
        </div>
  );
}

export default NutrientInfo;