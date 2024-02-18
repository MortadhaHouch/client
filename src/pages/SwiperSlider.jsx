import {Swiper,SwiperSlide} from "swiper/react";
import {gsap} from "gsap"
import {Navigation,Pagination,Parallax,A11y,Autoplay} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Flip } from "gsap/all";
import Image1 from "../assets/world-map-continent-global-support-graphic_53876-124649.jpg"
import Image2 from "../assets/turquoise-tropical-beautiful-outdoors-tourism_1258-134.jpg"
import Image3 from "../assets/4202194-removebg-preview.png"
import Image4 from "../assets/travel-concept-with-landmarks_23-2149153256.jpg"
import Image5 from "../assets/travel-concept-with-baggage_23-2149153260.jpg"
import { Animation } from "./Animation";
gsap.registerPlugin(Flip);
export default function SwiperSlider() {
    return (
        <>
        <main className="d-flex justify-content-center align-items-center">
            <Swiper
            modules={[Navigation,Pagination,Parallax,A11y,Autoplay]}
                spaceBetween={10}
                slidesPerView={2}
                centeredSlides={true}
                pagination={{ 
                    clickable: true,
                    dynamicBullets:true,
                    dynamicMainBullets:true,
                }}
                scrollbar={{ draggable: true }}
                grabCursor={true}
                effect="coverflow"
                coverflowEffect={{
                    depth:100,
                    slideShadows:true,
                    stretch:0,
                    rotate:50,
                    modifier:1.25,
                    scale:1.5,
                }}
                lazyPreloadPrevNext="preloading"
                lazyPreloaderClass="preloading"
                className="w-100 h-100 d-flex flex-row justify-content-center align-items-center"
            >
            <SwiperSlide>
                <div className="w-50 h-50 bg-dark text-info d-flex justify-content-center align-items-center overflow-x-hidden">
                    <img src={Image1} alt="" className="image-card"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-50 h-50 bg-dark text-info d-flex justify-content-center align-items-center overflow-x-hidden">
                    <img src={Image2} alt="" className="image-card"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-50 h-50 bg-dark text-info d-flex justify-content-center align-items-center overflow-x-hidden">
                    <img src={Image3} alt="" className="image-card"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-50 h-50 bg-dark text-info d-flex justify-content-center align-items-center overflow-x-hidden">
                    <img src={Image4} alt="" className="image-card"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-50 h-50 bg-dark text-info d-flex justify-content-center align-items-center overflow-x-hidden">
                    <img src={Image5} alt="" className="image-card"/>
                </div>
            </SwiperSlide>
        </Swiper>
        </main>
        <Animation/>
        </>
    );
}