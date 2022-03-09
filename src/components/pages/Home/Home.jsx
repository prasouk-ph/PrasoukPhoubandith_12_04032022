import './Home.css';
import ActivitesChart from './ActivitiesChart/ActivitiesChart'
import SessionChart from './SessionChart/SessionChart'
import PerformanceChart from './PerformanceChart/PerformanceChart'
import FatScoreChart from './FatScoreChart/FatScoreChart'
import NutrientInfo from './NutrientInfo/NutrientInfo'
import { getUserInfo, getActivitiesData, getSessionsData, getPerformanceData} from '../../../services/userData'
import { useState, useEffect } from "react";


function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [userActivitiesData, setUserActivitiesData] = useState([]);
    const [userSessionsData, setUserSessionsData] = useState([]);
    const [userPerformanceData, setUserPerformanceData] = useState({});
    const userName = userInfo?.userInfos?.firstName // without "?" React crashes cause wants to access the property before mounting, while the property has not yet received any content


    async function getUserData() {
        setIsLoaded(false)
        
        try {
            const userInfoResponse = await getUserInfo()
            setUserInfo(userInfoResponse)

            const userActivitiesDataResponse = await getActivitiesData()
            setUserActivitiesData(userActivitiesDataResponse)

            const userSessionsDataResponse = await getSessionsData()
            setUserSessionsData(userSessionsDataResponse)

            const userPerformanceDataResponse = await getPerformanceData()
            setUserPerformanceData(userPerformanceDataResponse)

            if (userInfoResponse === "HTTP error" 
            || userActivitiesDataResponse === "HTTP error" 
            || userSessionsDataResponse === "HTTP error" 
            || userPerformanceDataResponse === "HTTP error") {
                throw new Error(`HTTP error !`)
            }
        } catch (error) {
            console.log(error.message)
            setError(true)
        }
        finally {
            setIsLoaded(true)
            // console.log(userPerformanceData)
        }
    }

    
    useEffect(() => {
        getUserData()
    }, [])
    
    
    if (!isLoaded) {
        return (<p className='home'>Chargement...</p>)
    } else if (error) {
        return (<p className='home'>Erreur !</p>)
    } else {
        return (
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
                            <FatScoreChart data={userInfo.todayScore} />
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
        );
    }
}

export default Home;