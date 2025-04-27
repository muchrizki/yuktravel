import { useState } from "react"
import axios from "axios"


const useDetailActivity = () => {
    const [activity, setActivity] = useState(null)
    const [loading, setLoading] = useState(false)

    const getActivityById = async (id) => {

        setLoading(true)

        const config = {
            headers: {
                "apiKey": "24405e01-fbc1-45a5-9f5a-be13afcd757c", // API key di header
            }
        }

        try {
            const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${id}`, config)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return {activity, loading, getActivityById}
}

export default useDetailActivity