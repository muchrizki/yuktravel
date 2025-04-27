
import companyLogo from "../../assets/logo/yuktravel-logo.png"
import booknowIcon from "../../assets/icons/booknow.png"
import { RxHamburgerMenu } from "react-icons/rx"

import { useNavigate } from "react-router-dom"

export default function Navbar () {
    const navigate = useNavigate()

    const navMenu = ["Home", "About Us", "Destinations", "Tours", "Blog"]


    return (
        <div className="navbar bg-[#FAF8ED] flex justify-between px-6 md:justify-around items-center py-4 w-[100%]">
            <div className="logo-and-menus flex md:gap-10 lg:gap-20 items-center justify-between">
                <div className="logo flex gap-2 items-center">
                    <img src={companyLogo} alt="yuktravel-logo" className="w-8 md:w-10" />
                    <h3 className="text-lg md:text-xl font-bold text-[#2D3134] tracking-wider">yuktravel</h3>
                </div>
                
                <ul className=" md:gap-4 lg:gap-8 text-sm hidden md:flex">
                    {navMenu.map(item => <li key={item} className="tracking-wider cursor-pointer text-[#2E476B] hover:text-[#F66F4D]">{item}</li>)}
                </ul>
            </div>

            <div className="login-or-booking hidden md:flex items-center gap-2 px-6 py-2 border-1 border-[#F66F4D] rounded-full cursor-pointer hover:shadow-lg">
                <p className="text-sm tracking-wider text-[#F66F4D] font-medium" onClick={() => navigate('/login')}>Book Now</p>
                <img src={booknowIcon} alt="booknow" className="w-4" />
            </div>
            <RxHamburgerMenu className="text-[#F66F4D] md:hidden cursor-pointer" />
        </div>
    )
}