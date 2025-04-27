import Navbar from "../../components/Navbar.jsx";

import rajaAmpat from "../../assets/images/test/raja-ampat.jpg"
import mountBromo from "../../assets/images/test/bromo.jpg"

import { Select } from "antd";


export default function DestinationPage () {

    const handleChange = (value) => {
        console.log(value)
    }

    return (
        <>
            <Navbar />
            <div className="container bg-[#FAF8ED] h-[70vh] top-0 relative">
                <img src={rajaAmpat} alt="raja-ampat" className="absolute inset-0 w-full h-full object-cover" />
                <div className="search-category absolute -bottom-15 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] p-6 bg-[#FFF] rounded-xl shadow-2xl text-center">
                    <p className="text-semibold tracking-wide md:tracking-wider text-base md:text-lg">Choose a country you would like to visit.</p>
                    <div className="category mt-2">
                        <Select
                        defaultValue="Indonesia"
                        className="w-[270px] md:w-[400px]"
                        onChange={handleChange}
                        options={[
                            { value: 'jakarta', label: 'Indonesia' },
                            { value: 'singapore', label: 'Singapore' },
                            { value: 'english', label: 'English' },
                            { value: 'italy', label: 'Italy'},
                        ]}
                        />
                    </div>
                </div>
            </div>

            <div className="activity-list pt-24 pb-12 px-16 bg-[#FAF8ED] flex justify-center flex-wrap gap-6">
                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100 ">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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

                <div className="card bg-[#FAF8ED] w-[260px] p-2 border-[#FFF] border-2 rounded-lg shadow-lg hover:-translate-y-1 cursor-pointer transition duration-100">
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
            </div>
        </>
    )
}