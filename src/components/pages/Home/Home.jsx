import ActivitesChart from './ActivitiesChart/ActivitiesChart'
import SessionChart from './SessionChart/SessionChart'
import PerformanceChart from './PerformanceChart/PerformanceChart'
import FatScoreChart from './FatScoreChart/FatScoreChart'
import NutrientInfo from './NutrientInfo/NutrientInfo'
import { getUserInfo, getActivitiesData, getSessionsData, getPerformanceData } from '../../../services/userData'
import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import './Home.css';

export const LoadStateContext = createContext() // need to be outside of home component to export that way

/**
 * Create a component
 * @returns { HTMLElement }
 */
function Home() {
    const { id } = useParams(); // get current page ID
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [userActivitiesData, setUserActivitiesData] = useState([]);
    const [userSessionsData, setUserSessionsData] = useState([]);
    const [userPerformanceData, setUserPerformanceData] = useState({});
    const userName = userInfo?.userInfos?.firstName // without "?" React crashes cause wants to access the property before mounting, while the property has not yet received any content


    async function getUserData(userId) {
        setIsLoaded(false)
        try {
            const userInfoResponse = await getUserInfo(userId)
            setUserInfo(userInfoResponse)

            const userActivitiesDataResponse = await getActivitiesData(userId)
            setUserActivitiesData(userActivitiesDataResponse)

            const userSessionsDataResponse = await getSessionsData(userId)
            setUserSessionsData(userSessionsDataResponse)

            const userPerformanceDataResponse = await getPerformanceData(userId)
            setUserPerformanceData(userPerformanceDataResponse)
        }
        catch (error) {
            console.log(error.message)
            setError(true)
        }
        finally {
            setIsLoaded(true)
        }
    }
    
    useEffect(() => {
        getUserData(id)
    }, [id])
    
    
    if (error) {
        return (
            <div className='home'>
                <div className="home-error-message">
                    <p className="home-error-message-icon">( ! )</p>
                    <p className="home-error-message-text">Erreur lors du chargement des données</p>
                </div>
            </div>
        )
    } else {
        return (
            <LoadStateContext.Provider value={isLoaded}> {/* give load state to every children */}
                <div className='home'>
                    <div className='home-header'>
                        <div className='greeting-message'>
                            <p className='hello'>Bonjour</p>
                            <p className='username'>{userName}</p> 
                        </div>
                        <p className='cheering-message'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>

                    <main className='home-main'>
                        <div className="charts-container">
                            <div className="main-chart">
                                <ActivitesChart data={userActivitiesData} />
                            </div>
                            <div className="secondaries-chart">
                                <SessionChart data={userSessionsData} />
                                <PerformanceChart data={userPerformanceData} />
                                <FatScoreChart data={userInfo} />
                            </div>
                        </div>

                        <div className="nutritional-intake">
                            <NutrientInfo nutrientType='calorie' data={userInfo.keyData} />
                            <NutrientInfo nutrientType='protein' data={userInfo.keyData} />
                            <NutrientInfo nutrientType='carbohydrate' data={userInfo.keyData} />
                            <NutrientInfo nutrientType='lipid' data={userInfo.keyData} />
                        </div>
                    </main>
                </div>
            </LoadStateContext.Provider>
        );
    }
}

export default Home;

