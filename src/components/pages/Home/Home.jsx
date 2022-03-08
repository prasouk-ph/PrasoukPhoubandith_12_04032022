import './Home.css';
import ActivitesChart from './ActivitiesChart/ActivitiesChart'
import SessionChart from './SessionChart/SessionChart'
import CharacteristicsChart from './CharacteristicsChart/CharacteristicsChart'
import FatScore from './FatScore/FatScore'
import NutrientInfo from './NutrientInfo/NutrientInfo'
// import MyComponent from '../../../services/UserService'
// import fetchData from '../../../services/api'
import { useState, useEffect } from "react";


function Home() {
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
                // console.log(data)
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

    const userFirstName = userData?.userInfos?.firstName // without "?" React crashes cause wants to access the property before mounting, while the property has not yet received any content
    const userNutrientData = userData?.keyData

    if (!isLoaded) { return (<p className='home'>Chargement...</p>) }

    if (error) { return (<p className='home'>Erreur !</p>) }

    return (
        <div className='home'>
            <div className='home-header'>
                <div className='greeting-message'>
                    <p className='hello'>Bonjour</p>
                    <p className='username'>{userFirstName}</p>
                </div>
                <p className='cheering-message'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <main className='home-main'>
                <div className="charts-container">
                    <ActivitesChart />
                    <SessionChart />
                    <CharacteristicsChart />
                    <FatScore />
                </div>

                <div className="nutritional-intake">
                    <NutrientInfo nutrientType='calorie' data={userNutrientData} />
                    <NutrientInfo nutrientType='protein' data={userNutrientData} />
                    <NutrientInfo nutrientType='carbohydrate' data={userNutrientData} />
                    <NutrientInfo nutrientType='lipid' data={userNutrientData}/>
                </div>
            </main>
        </div>
    );
}

export default Home;