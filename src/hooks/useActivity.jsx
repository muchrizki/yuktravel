import { useState } from "react"
import axios from "axios"


const useActivity = () => {
    const [activities, setActivities] = useState(null)
    const [loading, setLoading] = useState(false)
    const config = {
        headers: {
          "apiKey": "24405e01-fbc1-45a5-9f5a-be13afcd757c", // API key di header
        }
      }

    const getActivity = async () => {
        
        setLoading(true)

        try {
            const response = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities/', config)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return {activities, loading, getActivity}

}

export default useActivity