import Navbar from "../../components/Navbar";

import pantaiKuta from "../../assets/images/test/pantai-kuta.jpg"

import "./HomePage.css"

export default function HomePage () {


    return (
        <>
            <Navbar />
            <div className="home-section-one bg-cyan-0 flex justify-between gap-0 py-6 px-16">
                <div className="basis-3/4 bg-white rounded-4xl p-5 h-[500px] relative overflow-hidden shadow-md">
                    
                    <img src={pantaiKuta} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="text-konten absolute left-15 bottom-20 flex flex-col gap-4 text-white">
                        <h3 className="text-2xl tracking-widest font-semibold">Pantai Kuta</h3>
                        <p className="max-w-[600px] tracking-wider text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nam dignissimos soluta deserunt animi iure hic architecto excepturi itaque consequatur.</p>
                        <p className="bg-cyan-0 rounded-r-full border-[0.6px] tracking-wider w-fit px-4 py-2 text-sm">Bali, Indonesia</p>
                    </div>
                    
                </div>
                <div className="basis-1/4 bg-white rounded-4xl p-5 shadow-md">
                    <div className="another-img">
                        <h3 className="mb-4 font-medium text-lg tracking-wider">Another Images</h3>
                        <div className="container-images flex gap-2 flex-wrap">
                            <img src={pantaiKuta} alt="pantai-kuta" className="w-28 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200" />
                            <img src={pantaiKuta} alt="pantai-kuta" className="w-28 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200" />
                            <img src={pantaiKuta} alt="pantai-kuta" className="w-28 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200" />
                            <img src={pantaiKuta} alt="pantai-kuta" className="w-28 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200" />
                        </div>
                    </div>
                    <div className="facilities mt-4">
                        <h3 className="font-medium text-lg tracking-wider">Facilities</h3>
                        <p className="text-xs tracking-wide mt-1">Tenda Pantai, Kolam Renang, Tempat bermain anak, Berkuda, ATV</p>
                    </div>
                    <div className="address mt-2">
                        <h3 className="font-medium text-lg tracking-wider">Address</h3>
                        <p className="text-xs tracking-wide mt-1">Jl. Pantai Cemongkak, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}