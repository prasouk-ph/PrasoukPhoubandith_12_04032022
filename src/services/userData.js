async function getUserInfo() {
    try {
        const response = await fetch(`http://localhost:3000/user/12`)
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


async function getActivitiesData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12/activity`)
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


async function getSessionsData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12/average-sessions`)
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


async function getPerformanceData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12/performance`)
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