import { useState } from "react"

import { Select } from 'antd'
import useRegister from "../../hooks/useRegister"
import { useNavigate } from "react-router-dom"

export default function RegisterForm ({handleForm}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [role, setRole] = useState('user')
    const [name, setName] = useState()

    const navigate = useNavigate()

    const {status, loading, error, regist} = useRegister()

    const handleChange = (value) => {
        setRole(value)
    }

    const handleRegister = () => {
        console.log(email, name, password, confirmPassword, role)
        regist(email, password, name, confirmPassword, role)
    }

    if(status == "OK") {
        setTimeout(() => {
            handleForm()
        }, 3000)
        
    }

    // console.log(role)
    console.log(status, loading, error)


    return (
        <div className="form p-2 mt-6 flex flex-col gap-4">
            <input type="text" className="w-full md:w-[400px] px-6 py-3 rounded-full outline-0 border-1 border-[#2D3134] text-[#5B5F62] tracking-wider" placeholder="your email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="text" className="w-full md:w-[400px] px-6 py-3 rounded-full outline-0 border-1 border-[#2D3134] text-[#5B5F62] tracking-wider" placeholder="your name here" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="password" className="w-full md:w-[400px] px-6 py-3 rounded-full outline-0 border-1 border-[#2D3134] text-[#5B5F62] tracking-wider" placeholder="your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <input type="password" className="w-full md:w-[400px] px-6 py-3 rounded-full outline-0 border-1 border-[#2D3134] text-[#5B5F62] tracking-wider" placeholder="confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>

            <div className="role mt-4 pl-2">
                <Select
                defaultValue="user"
                style={{ width: 170 }}
                onChange={handleChange}
                options={[
                    { value: 'admin', label: 'Admin' },
                    { value: 'user', label: 'User' },
                ]}
                />
            </div>
            

            <button className="w-full md:w-[400px] px-6 py-3 mt-4 rounded-full outline-0 border-[#2D3134] tracking-widest font-medium bg-[#F66F4D] text-white shadow-md hover:shadow-lg hover:scale-101 active:scale-99 duration-200 transition cursor-pointer" onClick={() => {handleRegister()}}>Submit</button>
        </div>  
    )

}