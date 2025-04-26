import companyLogo from "../../assets/logo/yuktravel-logo.png"
import rajaAmpat from "../../assets/images/test/raja-ampat.jpg"
import { useState } from "react"
import LoginForm from "../../components/LoginForm.jsx"
import RegisterForm from "../../components/RegisterForm.jsx/index.jsx"

export default function LoginPage () {

    const [formLogin, setForm] = useState(true)

    const handleForm = () => setForm(!formLogin)

    return (
        <div className="p-10 flex justify-center items-center mt-20 min-w-[540px]:mt-50 lg:mt-0">
            <div className="container-login-form p-5 flex w-[360px] min-[540xp]:w-[500px] md:w-fit gap-4 bg-cyan-0 shadow-xl lg:w-full rounded-tl-[68px] rounded-br-[68px] rounded-tr-xl rounded-bl-xl border-1 h-[100%]">
                <div className="container-form bg-white flex-1 w-full min-[540px]:px-2 md:px-10 py-8">
                    <img src={companyLogo} alt="yuktravel-logo" className="w-16" />
                    <h3 className="text-3xl min-w-[540px]:text-4xl font-bold tracking-wider mt-4 ml-2 text-[#2D3134]">Hi👋</h3>
                    <p className="ml-2 mt-2 text-base min-w-[540px]:text-lg tracking-wider text-[#5B5F62]">Join to the adventure Trips !</p>
                    
                    {formLogin ? <LoginForm /> : <RegisterForm handleForm={handleForm} />  }
                    
                    {formLogin ? 
                        <div className="register flex justify-between items-center pr-4 w-full md:w-[400px]">
                            <p className="pl-3 mt-4 italic font-medium text-sm tracking-widest">don’t have an account ?</p>
                            <p className="mt-4 italic font-medium text-sm tracking-widest text-blue-400 hover:underline cursor-pointer" onClick={handleForm}>Register</p>
                        </div>  :

                        <p className="mt-4 pl-3 tracking-wider italic text-blue-400 cursor-pointer hover:underline" onClick={handleForm}>back to login page</p>
                    }
                    
                </div>
                <div className="bg-white hidden lg:flex flex-2 relative">
                    <img src={rajaAmpat} alt="raja-ampat" className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-tl-[68px] rounded-br-[68px] rounded-tr-xl rounded-bl-xl" />
                </div>
            </div>
        </div>
    )
}