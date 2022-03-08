async function fetchUserData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            // setUserData(data)
            // console.log(data)
        }
    } catch (error) {
        console.log(error.message)
        // setError(true)
    }
}


async function fetchActivitiesData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12/activity`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            // setUserActivitiesData(data.sessions)
            // console.log(data)
        }
    } catch (error) {
        console.log(error.message)
        // setError(true)
    }
}


async function fetchSessionsData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12/average-sessions`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            // setUserSessionsData(data.sessions)
        }
    } catch (error) {
        console.log(error.message)
        // setError(true)
    }
}


async function fetchPerformanceData() {
    try {
        const response = await fetch(`http://localhost:3000/user/12/performance`)
        if (!response.ok) {
            throw new Error(
                `This is an HTTP error: The status is ${response.status}`
            );
        } else {
            const { data } = await response.json()
            // setUserPerformanceData(data.data)
        }
    } catch (error) {
        console.log(error.message)
        // setError(true)
    }
}

