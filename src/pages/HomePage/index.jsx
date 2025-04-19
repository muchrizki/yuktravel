import Navbar from "../../components/Navbar";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

import pantaiKuta from "../../assets/images/test/pantai-kuta.jpg"
import bromo from "../../assets/images/test/bromo.jpg"
import rajaAmpat from "../../assets/images/test/raja-ampat.jpg"
import candiBorobudur from "../../assets/images/test/candi-borobudur.jpg"
import candiPrambanan from "../../assets/images/test/candi-prambanan.jpg"

import "./HomePage.css"
import HomeCarousel from "../../components/HomeCarousel";

export default function HomePage () {

    const imgCarousel = {pantaiKuta, bromo, rajaAmpat, candiBorobudur, candiPrambanan}

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
        }
      }

    return (
        <>
            <Navbar />
            <HomeCarousel imgCarousel={imgCarousel} />

            <div className="promo-home mt-0 pl-7 p-4 bg-cyan-0 border-1">
                <h3 className="text-2xl font-medium tracking-wider mb-4 text-blue-400">Promo</h3>

                <Carousel className="container-card-promo" responsive={responsive}>
                    <div className="card-promo bg-blue-500 w-[200px] h-[180px] p-4 relative rounded-md shadow-lg overflow-hidden">
                        <img src={bromo} alt="bromo" className="absolute inset-0 w-full h-full " />
                        <div className="text-konten absolute bottom-3 left-3 text-white">
                            <h3 className="text-lg tracking-wider font-medium">Mount Bromo</h3>
                            <h4 className="price text-xs tracking-wide">Rp300.000<del className="italic ml-1">Rp450.000</del></h4>
                            <p className="text-xs mt-1 italic tracking-widest hover:underline hover:text-blue-0 cursor-pointer">Details Promo</p>
                        </div>
                    </div>

                    <div className="card-promo bg-blue-500 w-[200px] h-[180px] p-4 relative rounded-md shadow-lg overflow-hidden">
                        <img src={rajaAmpat} alt="raja-ampat" className="absolute inset-0 w-full h-full " />
                        <div className="text-konten absolute bottom-3 left-3 text-white">
                            <h3 className="text-lg tracking-wider font-medium">Raja Ampat</h3>
                            <h4 className="price text-xs tracking-wide">Rp450.000<del className="italic ml-1">Rp600.000</del></h4>
                            <p className="text-xs mt-1 italic tracking-widest hover:underline hover:text-blue-0 cursor-pointer">Details Promo</p>
                        </div>
                    </div>

                   

                </Carousel>
            
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim incidunt quis unde vel accusamus error, deserunt ea iste ab aut.</p>
        </>        
    )
}