import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination,Navigation,Parallax,A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useState } from 'react';
export default function SwiperElement(props) {
    let [linkIndex,setLinkIndex] = useState(0);
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                    
                }}
                pagination={{clickable:true}}
                navigation={true}
                modules={[EffectCoverflow, Pagination,Navigation,Parallax,A11y,Autoplay]}
                className="h-100 w-100"
                resizeObserver={true}
                onSlideChange={(swiper)=>{
                    setLinkIndex(swiper.activeIndex);
                }}
            >
            {
                props.images.map((item,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={item} alt="image" className="image-slide"/>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
                <img src={props.images[linkIndex]} alt="" className="background" />
            </Swiper>
        </>
    )
}
