import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const GalleryWrapper = styled.div`
     display: flex;
     height: auto;
     margin-top: 8rem;
`;

const Gallery = () => {
    return (
        <GalleryWrapper>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="/image 1.png" alt="image1" /></SwiperSlide>
                <SwiperSlide><img src="/image 9.png" alt="image1" /></SwiperSlide>
            </Swiper>
        </GalleryWrapper>
    );
}

export default Gallery;