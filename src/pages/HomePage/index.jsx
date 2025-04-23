import booknowIcon from "../../assets/icons/booknow.png"
import searchIcon from "../../assets/icons/search.png"
import navigation from "../../assets/icons/navigation.png"
import destination from "../../assets/icons/destination.png"
import customer from "../../assets/icons/customer.png"
import companyLogo from "../../assets/logo/yuktravel-logo.png"

import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosArrowBack } from "react-icons/io"

import cardHome from "../../assets/images/card-home.png"
import pantaiKuta from "../../assets/images/test/pantai-kuta.jpg"
import mountBromo from "../../assets/images/test/bromo.jpg"
import rajaAmpat from "../../assets/images/test/raja-ampat.jpg"
import candiPrambanan from "../../assets/images/test/candi-prambanan.jpg"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CustomButton = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    return (
        <div className="button w-fit bg-cyan-0 absolute cursor-pointer top-10 md:top-14 right-10 md:right-18 xl:right-38 flex gap-2">
            <IoIosArrowBack onClick={() => previous()}  className="border-2 border-[#2D3134] rounded-full p-1 w-8 h-8 md:w-14 md:h-14 md:p-2 hover:bg-[#2D3134] hover:text-white transition duration-200"/>
            <IoIosArrowBack onClick={() => next()} className="border-2 border-[#2D3134] rounded-full p-1 w-8 h-8 rotate-180 md:w-14 md:h-14 md:p-2 hover:bg-[#2D3134] hover:text-white transition duration-200"/>
        </div>
    )
}
export default function HomePage () {

    const navMenu = ["Home", "About Us", "Destinations", "Tours", "Blog"]

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: 5.8
        },
        largeTablet: {
            breakpoint: { max: 1279, min: 912 },
            items: 4.2
        },
        tablet: {
          breakpoint: { max: 911, min: 768 },
          items: 3.6
        },
        mobile: {
            breakpoint: { max: 767, min: 430 },
            items: 1.7
        },
        smallMobile: {
          breakpoint: { max: 429, min: 361 },
          items: 1.5
        },
        extraSmall : {
          breakpoint: { max: 360, min: 0 },
          items: 1.3
        }
      };

      const responsivePopular = {
        largeDesktop: {
            breakpoint: { max: 3000, min: 1080 },
            items: 4
        },
        desktop: {
          breakpoint: { max: 1279, min: 1024 },
          items: 3.4
        },
        largeTablet: {
            breakpoint: { max: 1023, min: 912 },
            items: 3
        },
        tablet: {
          breakpoint: { max: 911, min: 768 },
          items: 2.4
        },
        mobile: {
            breakpoint: { max: 767, min: 540 },
            items: 1.6
        },
        smallMobile: {
          breakpoint: { max: 539, min: 430 },
          items: 1.2
        },
        extraSmall : {
          breakpoint: { max: 429, min: 0 },
          items: 1
        }
      };
    
    return (
        <div className="bg-[#FAF8ED] overflow-x-hidden">
            {/* Navbar  */}
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

                    <div className="login-or-booking hidden md:flex items-center gap-2 px-6 py-2 border-1 border-[#F66F4D] rounded-full cursor-pointer">
                        <p className="text-sm tracking-wider text-[#F66F4D] font-medium">Book Now</p>
                        <img src={booknowIcon} alt="booknow" className="w-4" />
                    </div>
                    <RxHamburgerMenu className="text-[#F66F4D] md:hidden cursor-pointer" />
            </div>

            {/* Section Satu  */}
            <div className="section-satu px-7 py-12 bg-[#FAF8ED] flex flex-col md:flex-row items-center justify-around gap-0">

                <div className="left flex flex-col gap-6">
                    <p className="text-4xl lg:text-6xl font-bold text-[#2D3134] tracking-wider">Discover the <br /> Best Lovely <br /> Places</p>
                    <p className="text-[#5B5F62] text-sm lg:text-lg w-[280px] lg:w-[400px]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                    <div className="search-category px-6 py-4 bg-[#FFFFFF] rounded-full flex gap-3 w-fit" >
                        <div className="location">
                            <h4 className="font-medium text-sm lg:text-lg tracking-wider">Where</h4>
                            <p className="text-xs lg:text-base mt-1">Lorem, ipsum.</p>
                        </div>
                        <p className="height-[100%] border-l-[#EAEAEB] w-1 border-1 text-white"></p>
                        <div className="date">
                            <h4 className="font-medium text-sm lg:text-lg tracking-wider">Date</h4>
                            <p className="text-xs lg:text-base mt-1">Lorem, ipsum.</p>
                        </div>
                        
                        <img src={searchIcon} alt="search-icon" className="w-10 h-10 lg:w-14 lg:h-14 rounded-full p-2 lg:p-3 ml-1 bg-[#F66F4D] text-white" />
                        
                    </div>
                </div>

                <div className="right mt-10 px-2 py-12 lg:py-8 lg:-translate-y-6 relative">
                    <div className="image w-68 h-68 lg:w-78 lg:h-78 rounded-full bg-amber-100 relative overflow-hidden">
                        <img src={pantaiKuta} alt="pantai-kuta" className="inset-0 w-full h-full object-cover" />
                    </div>

                    <img src={navigation} alt="navigation-icon" className="absolute top-2 z-1" />
                    <img src={cardHome} alt="card-home" className="absolute -bottom-5 -right-2 lg:right-55 w-36 drop-shadow-lg" />
                </div>
            </div>

            {/* Section dua  */}
            <div className="section-dua bg-[#FAF8ED] p-12 py-10 relative">
                <div className="header-categories md:flex md:flex-row md:justify-between px-2 min-[912px]:px-14 xl:px-27">
                    <div className="text">
                        <h3 className="text-2xl md:text-4xl lg:text-5xl text-[#2D3134] font-semibold tracking-wider">Categories</h3>
                        <p className="text-sm lg:text-lg text-[#5B5F62] mt-3 md:max-w-[300px] lg:max-w-[400px]">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
                    </div>
                    
                </div>
                
                <Carousel arrows={false} responsive={responsive} draggable={true} customButtonGroup={<CustomButton />} renderButtonGroupOutside={true} className="mt-10 md:translate-x-6 bg-0 min-[912px]:pl-10 xl:pl-22">
                    <div className="card text-center bg-0 w-fit">
                        <div className="img bg-white w-44  h-60 rounded-full relative overflow-hidden">
                            <img src={pantaiKuta} alt="beach" className="h-full w-full inset-0 object-cover" />
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-wider">Beach</p>
                    </div>

                    <div className="card text-center bg-0 w-fit">
                        <div className="img bg-white w-44  h-60 rounded-full relative overflow-hidden">
                            <img src={mountBromo} alt="mount" className="h-full w-full inset-0 object-cover" />
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-wider">Mountain</p>
                    </div>

                    <div className="card text-center bg-0 w-fit">
                        <div className="img bg-white w-44  h-60 rounded-full relative overflow-hidden">
                            <img src={rajaAmpat} alt="sea" className="h-full w-full inset-0 object-cover" />
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-wider">Sea</p>
                    </div>

                    <div className="card text-center bg-0 w-fit">
                        <div className="img bg-white w-44  h-60 rounded-full relative overflow-hidden">
                            <img src={candiPrambanan} alt="beach" className="h-full w-full inset-0 object-cover" />
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-wider">Temple</p>
                    </div>

                    <div className="card text-center bg-0 w-fit">
                        <div className="img bg-white w-44  h-60 rounded-full relative overflow-hidden">
                            <img src={pantaiKuta} alt="beach" className="h-full w-full inset-0 object-cover" />
                        </div>
                        <p className="mt-2 text-lg font-medium tracking-wider">Temple</p>
                    </div>
                </Carousel>
                
            </div>

            {/* Section tiga  */}
            <div className="section-tiga bg-[#FAF8ED] p-12 flex flex-col gap-12 md:flex-row md:justify-around md:gap-10 items-center">

                <div className="left relative lg:pl-4">
                    <div className="image w-70 lg:w-90 h-70 lg:h-90 rounded-full overflow-hidden relative">
                        <img src={rajaAmpat} alt="mount-bromo" className="w-full h-full inset-0 absolute"/>
                    </div>

                    <div className="left py-3 px-5 rounded-sm shadow-xl flex flex-col gap-4 items-center bg-[#FFFFFF] absolute bottom-18 -left-10">
                        <img src={destination} alt="destination" className="w-12" />
                        <div className="text text-center">
                            <h3 className="font-semibold text-xl tracking-wider text-[#F66F4D]">600%</h3>
                            <p className="text-xs text-[#939597]">Destinations</p>
                        </div>
                    </div>

                    <div className="left py-3 px-5 rounded-sm shadow-xl flex flex-row gap-4 items-center bg-[#FFFFFF] absolute bottom-0 -right-10">
                        <img src={customer} alt="destination" className="w-6" />
                        <div className="text text-center">
                            <h3 className="font-semibold text-xl tracking-wider text-[#2D3134]">5000 +</h3>
                            <p className="text-xs text-[#939597]">Customers</p>
                        </div>
                    </div>


                </div>
                
                <div className="right py-12 flex flex-col gap-4">
                    <h4 className="text-lg font-semibold text-[#F66F4D] tracking-widest">Our Experience</h4>
                    <h3 className="text-3xl lg:text-6xl tracking-wider text-[#2D3134]">Our Stories Have <br /> Adventures</h3>
                    <p className="text-sm lg:text-lg tracking-wider text-[#5B5F62] md:max-w-[320px] lg:max-w-[490px]">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
                    <div className="container-card mt-2 flex gap-3">
                        <div className="card-one flex flex-col gap-2 bg-[#FFFFFF] p-4 rounded-lg shadow-lg w-24 lg:w-32 lg:pl-6">
                            <h4 className="text-xl lg:text-3xl font-semibold text-[#F66F4D] tracking-wider">12K+</h4>
                            <p className="text-xs lg:text-base tracking-wider text-[#939597]">Success <br /> Journey</p>
                        </div>

                        <div className="card-one flex flex-col gap-2 bg-[#FFFFFF] p-4 rounded-lg shadow-lg w-24 lg:w-32 lg:pl-6">
                            <h4 className="text-xl lg:text-3xl font-semibold text-[#F66F4D] tracking-wider">16+</h4>
                            <p className="text-xs lg:text-base tracking-wider text-[#939597]">Awards <br /> Winning</p>
                        </div>

                        <div className="card-one flex flex-col gap-2 bg-[#FFFFFF] p-4 rounded-lg shadow-lg w-24 lg:w-32 lg:pl-6">
                            <h4 className="text-xl lg:text-3xl font-semibold text-[#F66F4D] tracking-wider">20+</h4>
                            <p className="text-xs lg:text-base tracking-wider text-[#939597]">Years of <br /> Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* .Section empat  */}
            <div className="section-empat bg-[#FAF8ED] flex flex-col gap-10 px-12 xl:px-22 md:px-14 lg:translate-x-8 xl:translate-x-22 py-5">
                <h3 className="text-3xl md:text-5xl font-semibold text-[#2D3134] tracking-wider">Find Popular <br /> Destination</h3>
                <Carousel responsive={responsivePopular} className="pr-4">
                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={mountBromo} alt="mount-bromo" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Mount Bromo, East Java</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Mountain Hiking Tour</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp300.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={rajaAmpat} alt="raja-ampat" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Raja Ampat, Papua</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Snorkeling, Free Diving, Scuba Diving</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp500.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={candiPrambanan} alt="candi-prambanan" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Candi Prambanan, Central Java</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Education, History, Temple</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp250.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={pantaiKuta} alt="pantai-kuta" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Pantai Kuta, Bali</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Relax, Jetski, Banana Boat</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp500.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={mountBromo} alt="mount-bromo" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Mount Bromo, East Java</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Mountain Hiking Tour</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp300.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={rajaAmpat} alt="raja-ampat" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Raja Ampat, Papua</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Snorkeling, Free Diving, Scuba Diving</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp500.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg">
                        <div className="image w-full h-[140px] rounded-lg overflow-hidden relative">
                            <img src={candiPrambanan} alt="candi-prambanan" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="text mt-2 px-2">
                            <h4 className="font-semibold text-sm text-[#2D3134] tracking-wider">Candi Prambanan, Central Java</h4>
                            <p className="text-xs tracking-wider text-[#5B5F62]">Education, History, Temple</p>
                            <div className="price mt-4 flex justify-between items-center gap-1">
                                <p className="text-[#2D3134] font-semibold text-sm">Rp250.000 <span className="text-[#5B5F62]">/Person</span></p>
                                <p className="text-xs tracking-widest text-[#2D3134] border-1 border-[#2D3134] hover:text-[#FFF] hover:bg-[#2D3134] w-fit rounded-full px-3 py-2 cursor-pointer">Book Now</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>        
    )
}