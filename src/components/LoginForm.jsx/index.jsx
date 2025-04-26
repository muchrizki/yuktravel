import { useState } from "react"
import useLogin from "../../hooks/useLogin"
import { useNavigate } from "react-router-dom"

export default function LoginForm () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {user, error, loading, token, login } = useLogin()

    const handleLogin = (email, password) => {
        login(email, password)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
    }

    const cekUser = () => {
        setTimeout(() => {
            const token = localStorage.getItem('token')

            if(token) {
                navigate('/')
            }
        }, 5000)
    }

    cekUser()
    // console.log(email, password)


    return (
        <div className="form p-2 mt-6 flex flex-col gap-4">
            <input type="text" className="w-full md:w-[400px] px-6 py-3 rounded-full outline-0 border-1 border-[#2D3134] text-[#5B5F62] tracking-wider" placeholder="your email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" className="w-full md:w-[400px] px-6 py-3 rounded-full outline-0 border-1 border-[#2D3134] text-[#5B5F62] tracking-wider" placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button className="w-full md:w-[400px] px-6 py-3 mt-4 rounded-full outline-0 border-[#2D3134] tracking-widest font-medium bg-[#F66F4D] text-white shadow-md hover:shadow-lg hover:scale-101 active:scale-99 duration-200 transition cursor-pointer" onClick={() => handleLogin(email, password)}>Login</button>
        </div>        
    )
}