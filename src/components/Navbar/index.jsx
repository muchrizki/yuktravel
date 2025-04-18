import yuktravelLogo from "../../assets/logo/yuktravel-logo.png"
import shoppingCart from "../../assets/icons/shopping-cart.png"

import "./Navbar.css"
import LoginButton from "../LoginButton"

export default function Navbar () { 
    const navMenu  = ["Home", "Activity", "All Promo"]

    return (
        <div className="navbar w-full mx-auto py-4 px-16 bg-cyan-0 shadow-md flex justify-between items-center">
            <img src={yuktravelLogo} alt="logo" className="h-10" />
            <ul className="flex justify-around items-center gap-10">
                {navMenu.map(menu => <li key={menu} className="tracking-wider text-sm cursor-pointer">{menu}</li> )}
            </ul>
            <div className="signup-login-button flex justify-around items-center gap-5">
                <LoginButton />
                {/* <button>SignUp</button> */}
                <img src={shoppingCart} alt="shopping-cart" className="w-8 cursor-pointer" />
            </div>
        </div>
    )
}