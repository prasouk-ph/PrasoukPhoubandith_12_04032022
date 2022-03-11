import React from "react";
import './NutrientInfo.css'
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types'
import CaloriesIcon from '../../../../assets/calories-icon.png'
import ProteinsIcon from '../../../../assets/protein-icon.png'
import CarbsIcon from '../../../../assets/carbs-icon.png'
import FatIcon from '../../../../assets/fat-icon.png'

/**
 * Create an info box
 * @param { String } nutrientType
 * @param { Object } data - user data
 * @returns { HTMLElement }
 */
function NutrientInfo({nutrientType, data}) {
    const [nutrientName, setNutrientName] = useState(null)
    const [nutrientQuantity, setNutrientQuantity] = useState(null)
    const [nutrientUnit, setNutrientUnit] = useState(null)
    const [icon, setIcon] = useState(null)
    const [dataFormatIsValid, setDataFormatIsValid] = useState(null)

    function checkData() {
        if (data.hasOwnProperty("calorieCount") && data.hasOwnProperty("carbohydrateCount") && data.hasOwnProperty("lipidCount") && data.hasOwnProperty("proteinCount")) {
            setDataFormatIsValid(true)
        } else {
            setDataFormatIsValid(false)
        }
    }
    
    useEffect(() => {
        checkData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getNutrientData() {
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

    useEffect(() => {
        getNutrientData()
    })

    if (dataFormatIsValid) {
        return (
            <div className="nutrient-item">
                <img className='nutrient-icon' src={icon} alt={`${nutrientType} icon`} />
                <div className="nutrient-details">
                    <p className='nutrient-quantity'>{`${nutrientQuantity}${nutrientUnit}`}</p>
                    <p className='nutrient-name'>{nutrientName}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="nutrient-item nutrient-item-error">
                <div className="nutrient-item-error-message">
                    <p className="nutrient-item-error-message-icon">( ! )</p>
                    <p className="nutrient-item-error-message-text">Erreur de format</p>
                </div>
            </div>
        )
    }
}

NutrientInfo.propTypes = {
    nutrientType: PropTypes.string.isRequired,
    data: PropTypes.shape({ // shape allows to check object content type
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired,
    })
}

export default NutrientInfo;