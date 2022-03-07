import './Home.css';
import CaloriesIcon from '../../../assets/calories-icon.png'
import ProteinsIcon from '../../../assets/protein-icon.png'
import CarbsIcon from '../../../assets/carbs-icon.png'
import FatIcon from '../../../assets/fat-icon.png'
import ActivitesChart from './ActivitiesChart/ActivitiesChart'
import SessionChart from './SessionChart/SessionChart'
import CharateristicsChart from './CharateristicsChart/CharateristicsChart'
import FatScore from './FatScore/FatScore'
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
                    <CharateristicsChart />
                    <FatScore />
                </div>

                <div className="nutritional-intake">
                    <div className="nutrient-item">
                        <img className='nutrient-icon' src={CaloriesIcon} alt="calorie icon" />
                        <div className="nutrient-details">
                            <p className='nutrient-quantity'>1,930kCal</p>
                            <p className='nutrient-name'>Calories</p>
                        </div>
                    </div>

                    <div className="nutrient-item">
                        <img className='nutrient-icon' src={ProteinsIcon} alt="protein icon" />
                        <div className="nutrient-details">
                            <p className='nutrient-quantity'>155g</p>
                            <p className='nutrient-name'>Protéines</p>
                        </div>
                    </div>

                    <div className="nutrient-item">
                        <img className='nutrient-icon' src={CarbsIcon} alt="carbs icon" />
                        <div className="nutrient-details">
                            <p className='nutrient-quantity'>290g</p>
                            <p className='nutrient-name'>Glucides</p>
                        </div>
                    </div>

                    <div className="nutrient-item">
                        <img className='nutrient-icon' src={FatIcon} alt="fat icon" />
                        <div className="nutrient-details">
                            <p className='nutrient-quantity'>50g</p>
                            <p className='nutrient-name'>Lipides</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;