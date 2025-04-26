import axios from "axios"
import { useState } from "react"


const useRegister = () => {
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


    const regist = async (email, password, name, confirmPassword, role) => {
        
        setLoading(true)
        
        const config = {
            headers: {
                "apiKey": "24405e01-fbc1-45a5-9f5a-be13afcd757c", // API key di header
            }
        }

        const payload = {
            email: email,
            name: name,
            password : password,
            passwordRepeat : confirmPassword,
            role : role,
        }

        try {
            const response = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register/', payload, config)
            setStatus(response.data.status)
            setError(response.data.message)
            console.log(response)

        } catch (error) {
            console.log(error)
            setStatus(error.response.data.code)
            setError(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return {status, loading, error, regist}

}

export default useRegister