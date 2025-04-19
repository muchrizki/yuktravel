import { Carousel } from 'antd';

export default function HomeCarousel ({imgCarousel}) {

    const {pantaiKuta, bromo, rajaAmpat, candiBorobudur, candiPrambanan} = imgCarousel

    return (
        <Carousel autoplay={4000} arrows infinite={true}>

            <div className="carousel w-full h-[100vh] bg-purple-400 relative">
                <img src={bromo} alt="bromo-mounth" className="inset-0 absolute object-cover w-full h-full" />
                <div className="konten absolute bottom-20 min-[390px]:bottom-45 lg:bottom-25 left-8 min-[540px]:left-12 md:left-20 max-w-[300px] min-[430px]:max-w-[360px] md:max-w-[550px] lg:max-w-[700px] text-white">
                    <h3 className="text-2xl md:text-4xl tracking-wider font-medium mb-4">Mount Bromo</h3>
                    <p className="text-sm md:text-base tracking-wider mb-4 leading-6 md:leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore vel soluta quibusdam culpa illo hic assumenda rerum ut harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, distinctio.</p>
                    <h4 className="tracking-wider px-5 py-1 border-white border-[0.7px] rounded-r-full w-fit shadow-sm md:text-xl">East Java, Indonesia</h4>
                </div>
            </div>

            <div className="carousel w-full h-[100vh] bg-purple-400 relative">
                <img src={candiBorobudur} alt="candi-borobudur" className="inset-0 absolute object-cover w-full h-full" />
                <div className="konten absolute bottom-20 min-[390px]:bottom-45 lg:bottom-25 left-8 min-[540px]:left-12 md:left-20 max-w-[300px] min-[430px]:max-w-[360px] md:max-w-[550px] lg:max-w-[700px] text-white">
                    <h3 className="text-2xl md:text-4xl tracking-wider font-medium mb-4">Candi Borobudur</h3>
                    <p className="text-sm md:text-base tracking-wider mb-4 leading-6 md:leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore vel soluta quibusdam culpa illo hic assumenda rerum ut harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, distinctio.</p>
                    <h4 className="tracking-wider px-5 py-1 border-white border-[0.7px] rounded-r-full w-fit shadow-sm md:text-xl">Central Java, Indonesia</h4>
                </div>
            </div>

            <div className="carousel w-full h-[100vh] bg-purple-400 relative">
                <img src={pantaiKuta} alt="pantai-kuta" className="inset-0 absolute object-cover w-full h-full" />
                <div className="konten absolute bottom-20 min-[390px]:bottom-45 lg:bottom-25 left-8 min-[540px]:left-12 md:left-20 max-w-[300px] min-[430px]:max-w-[360px] md:max-w-[550px] lg:max-w-[700px] text-white">
                    <h3 className="text-2xl md:text-4xl tracking-wider font-medium mb-4">Pantai Kuta</h3>
                    <p className="text-sm md:text-base tracking-wider mb-4 leading-6 md:leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore vel soluta quibusdam culpa illo hic assumenda rerum ut harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, distinctio.</p>
                    <h4 className="tracking-wider px-5 py-1 border-white border-[0.7px] rounded-r-full w-fit shadow-sm md:text-xl">Bali, Indonesia</h4>
                </div>
            </div>

            <div className="carousel w-full h-[100vh] bg-purple-400 relative">
                <img src={rajaAmpat} alt="pantai-kuta" className="inset-0 absolute object-cover w-full h-full" />
                <div className="konten absolute bottom-20 min-[390px]:bottom-45 lg:bottom-25 left-8 min-[540px]:left-12 md:left-20 max-w-[300px] min-[430px]:max-w-[360px] md:max-w-[550px] lg:max-w-[700px] text-white">
                    <h3 className="text-2xl md:text-4xl tracking-wider font-medium mb-4">Raja Ampat</h3>
                    <p className="text-sm md:text-base tracking-wider mb-4 leading-6 md:leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore vel soluta quibusdam culpa illo hic assumenda rerum ut harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, distinctio.</p>
                    <h4 className="tracking-wider px-5 py-1 border-white border-[0.7px] rounded-r-full w-fit shadow-sm md:text-xl">West Papua, Indonesia</h4>
                </div>
            </div>

            <div className="carousel w-full h-[100vh] bg-purple-400 relative">
                <img src={candiPrambanan} alt="candi-prambanan" className="inset-0 absolute object-cover w-full h-full" />
                <div className="konten absolute bottom-20 min-[390px]:bottom-45 lg:bottom-25 left-8 min-[540px]:left-12 md:left-20 max-w-[300px] min-[430px]:max-w-[360px] md:max-w-[550px] lg:max-w-[700px] text-white">
                    <h3 className="text-2xl md:text-4xl tracking-wider font-medium mb-4">Candi Prambanan</h3>
                    <p className="text-sm md:text-base tracking-wider mb-4 leading-6 md:leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore vel soluta quibusdam culpa illo hic assumenda rerum ut harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, distinctio.</p>
                    <h4 className="tracking-wider px-5 py-1 border-white border-[0.7px] rounded-r-full w-fit shadow-sm md:text-xl">Central Java, Indonesia</h4>
                </div>
            </div>

        </Carousel> 
    )

}