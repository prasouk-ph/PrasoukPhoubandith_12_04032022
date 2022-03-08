import './Home.css';
import ActivitesChart from './ActivitiesChart/ActivitiesChart'
import SessionChart from './SessionChart/SessionChart'
import PerformanceChart from './PerformanceChart/PerformanceChart'
import FatScore from './FatScore/FatScore'
import NutrientInfo from './NutrientInfo/NutrientInfo'
// import MyComponent from '../../../services/UserService'
// import fetchData from '../../../services/api'
import { useState, useEffect } from "react";


function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState({});

    async function fetchUserData() {
        setIsLoaded(false)
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

    const userName = userData?.userInfos?.firstName // without "?" React crashes cause wants to access the property before mounting, while the property has not yet received any content
    
    useEffect(() => {
        fetchUserData()
    }, [])
    

    const [userActivitiesData, setUserActivitiesData] = useState([]);

    async function fetchActivitiesData() {
        setIsLoaded(false)
        try {
            const response = await fetch(`http://localhost:3000/user/12/activity`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserActivitiesData(data.sessions)
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
        fetchActivitiesData()
    }, [])


    const [userSessionsData, setUserSessionsData] = useState([]);

    async function fetchSessionsData() {
        setIsLoaded(false)
        try {
            const response = await fetch(`http://localhost:3000/user/12/average-sessions`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserSessionsData(data.sessions)
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
        fetchSessionsData()
    }, [])

    
    const [userPerformanceData, setUserPerformanceData] = useState({});

    async function fetchPerformanceData() {
        setIsLoaded(false)
        try {
            const response = await fetch(`http://localhost:3000/user/12/performance`)
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            } else {
                const { data } = await response.json()
                setUserPerformanceData(data)
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
        fetchPerformanceData()
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
                        <ActivitesChart data={userActivitiesData} />
                        <SessionChart data={userSessionsData} />
                        <PerformanceChart data={userPerformanceData} />
                        <FatScore data={userData.todayScore} />
                    </div>

                    <div className="nutritional-intake">
                        <NutrientInfo nutrientType='calorie' data={userData.keyData} />
                        <NutrientInfo nutrientType='protein' data={userData.keyData} />
                        <NutrientInfo nutrientType='carbohydrate' data={userData.keyData} />
                        <NutrientInfo nutrientType='lipid' data={userData.keyData} />
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;