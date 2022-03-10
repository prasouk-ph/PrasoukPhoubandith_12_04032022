/**
 * Get user info from api
 * @returns { Object }
 */
async function getUserInfo(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            return data
        }
    } catch (error) {
        console.log(error.message)
        return "HTTP error"
    }
}


/**
 * Get user activities from api
 * @returns { Object }
 */
async function getActivitiesData(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            return data.sessions
        }
    } catch (error) {
        console.log(error.message)
        return "HTTP error"
    }
}


/**
 * Get user sessions from api
 * @returns { Object }
 */
async function getSessionsData(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            return data.sessions
        }
    } catch (error) {
        console.log(error.message)
        return "HTTP error"
    }
}


/**
 * Get user performance from api
 * @returns { Object }
 */
async function getPerformanceData(userId) {
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            return data
        }
    } catch (error) {
        console.log(error.message)
        return "HTTP error"
    }
}

export { getUserInfo, getActivitiesData, getSessionsData, getPerformanceData }