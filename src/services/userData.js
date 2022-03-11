import axios from 'axios'

/**
 * Get user info from api
 * @param { Number }
 * @returns { Object }
 */
async function getUserInfo(userId) {
    const userInfoURL = `http://localhost:3000/user/${userId}`
    const response = await axios.get(userInfoURL)

    return response.data.data
}


/**
 * Get user activities from api
 * @param { Number }
 * @returns { Object }
 */
async function getActivitiesData(userId) {
    const activitiesDataURL = `http://localhost:3000/user/${userId}/activity`
    const response = await axios.get(activitiesDataURL)

    return response.data.data.sessions
}


/**
 * Get user sessions from api
 * @param { Number }
 * @returns { Object }
 */
async function getSessionsData(userId) {
    const sessionDataURL = `http://localhost:3000/user/${userId}/average-sessions`
    const response = await axios.get(sessionDataURL)

    return response.data.data.sessions
}


/**
 * Get user performance from api
 * @param { Number }
 * @returns { Object }
 */
async function getPerformanceData(userId) {
    const performanceDataURL = `http://localhost:3000/user/${userId}/performance`
    const response = await axios.get(performanceDataURL)

    return response.data.data
}

export { getUserInfo, getActivitiesData, getSessionsData, getPerformanceData }