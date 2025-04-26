import { useState } from "react"
import axios from "axios"

const useLogin = () => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const login =  async (email, password) => {
        
        setLoading(true)
        
        const config = {
            headers: {
              "apiKey": "24405e01-fbc1-45a5-9f5a-be13afcd757c", // API key di header
            }
          }
        
        try {
            const response = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login/', {email: email, password: password}, config)

            if (response.status == 200){
                setUser(response.data.data)
                setToken(response.data.token)
            }
            

            console.log(response)
        } catch (error) {
            console.log(error)
        } finally { setLoading(false) }

        
        
    }

    return { user, loading, error, token, login }

}

export default useLogin