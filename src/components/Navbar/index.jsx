import yuktravelLogo from "../../assets/logo/yuktravel-logo.png"
import shoppingCart from "../../assets/icons/shopping-cart.png"
import { RxHamburgerMenu } from "react-icons/rx"

import "./Navbar.css"
import LoginButton from "../LoginButton"

export default function Navbar () { 
    const navMenu  = ["Home", "Activity", "All Promo"]

    return (
        <div className="navbar w-[100vw] fixed z-10 mx-auto py-4 px-6 md:px-8 lg:px-16 bg-cyan-0 shadow-md flex justify-between items-center text-white">
            <img src={yuktravelLogo} alt="logo" className="h-6 md:h-10" />
            <ul className="hidden md:flex justify-around items-center gap-10">
                {navMenu.map(menu => <li key={menu} className="tracking-wider text-sm cursor-pointer">{menu}</li> )}
            </ul>
            <div className="signup-login-button hidden md:flex justify-around items-center gap-5">
                <LoginButton />
                {/* <button>SignUp</button> */}
                <img src={shoppingCart} alt="shopping-cart" className="w-8 cursor-pointer" />
            </div>
            <RxHamburgerMenu className="md:hidden cursor-pointer text-blue-400" />


        
        </div>
    )
}