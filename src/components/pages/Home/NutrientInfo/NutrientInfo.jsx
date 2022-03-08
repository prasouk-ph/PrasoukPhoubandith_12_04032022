import React from "react";
import './NutrientInfo.css'
import { useState } from "react";
import { useEffect } from "react";
import CaloriesIcon from '../../../../assets/calories-icon.png'
import ProteinsIcon from '../../../../assets/protein-icon.png'
import CarbsIcon from '../../../../assets/carbs-icon.png'
import FatIcon from '../../../../assets/fat-icon.png'


function NutrientInfo({nutrientType, data}) {
    const [nutrientName, setNutrientName] = useState('Chargement...')
    const [nutrientQuantity, setNutrientQuantity] = useState('Chargement...')
    const [nutrientUnit, setNutrientUnit] = useState('Chargement...')
    const [icon, setIcon] = useState('Chargement...')

    function getNutrientData() {
        if (data !== undefined ) {
            if (nutrientType === 'calorie') {
                setNutrientQuantity(data.calorieCount) 
                setNutrientUnit('kCal')
                setNutrientName('Calories')
                setIcon(CaloriesIcon)
            } else if (nutrientType === 'protein') {
                setNutrientQuantity(data.proteinCount)
                setNutrientUnit('g')
                setNutrientName('Protéines')
                setIcon(ProteinsIcon)
            } else if (nutrientType === 'carbohydrate') {
                setNutrientQuantity(data.carbohydrateCount)
                setNutrientUnit('g')
                setNutrientName('Glucides')
                setIcon(CarbsIcon)
            } else if (nutrientType === 'lipid') {
                setNutrientQuantity(data.lipidCount)
                setNutrientUnit('g')
                setNutrientName('Lipides')
                setIcon(FatIcon)
            }
        }
    }

    useEffect(() => {
        getNutrientData()
    })

    return (
        <div className="nutrient-item">
            <img className='nutrient-icon' src={icon} alt={`${nutrientType} icon`} />
            <div className="nutrient-details">
                <p className='nutrient-quantity'>{`${nutrientQuantity}${nutrientUnit}`}</p>
                <p className='nutrient-name'>{nutrientName}</p>
            </div>
        </div>
  );
}

export default NutrientInfo;