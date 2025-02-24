import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel.css";

import poster1 from "../img/main/CCC.jpg";
import poster2 from "../img/main/리프레시.jpg";
import poster3 from "../img/main/멋사.jpg";
import poster4 from "../img/main/무브.jpg";
import poster5 from "../img/main/무혼.jpg";
import poster6 from "../img/main/총동연_수정.png"
import poster7 from "../img/main/별헤는밤.jpg";
import poster8 from "../img/main/설화.jpg";
import poster9 from "../img/main/정음.jpg";
import poster10 from "../img/main/차일드.jpg";
import poster11 from "../img/main/히바.jpg";

const originalImages = [
    { id: 1, src: poster1 },
    { id: 2, src: poster2 },
    { id: 3, src: poster3 },
    { id: 4, src: poster4 },
    { id: 5, src: poster5 },
    { id: 6, src: poster6 },
    { id: 7, src: poster7 },
    { id: 8, src: poster8 },
    { id: 9, src: poster9 },
    { id: 10, src: poster10 },
    { id: 11, src: poster11 }
];

// 🔥 앞뒤에 복사본 추가 (무한 루프처럼 보이게 하기 위함)
const images = [
    originalImages[originalImages.length - 2], // 마지막에서 두 번째 이미지 복사
    originalImages[originalImages.length - 1], // 마지막 이미지 복사
    ...originalImages,
    originalImages[0], // 첫 번째 이미지 복사
    originalImages[1], // 두 번째 이미지 복사
];

const Carousel = () => {
    const [index, setIndex] = useState(2); // 원래 첫 번째 이미지의 위치로 설정
    const sliderRef = useRef(null);

    useEffect(() => {
        if (index === 1) {
            setTimeout(() => {
                sliderRef.current.slickGoTo(images.length - 3, true);
            }, 500);
        } else if (index === images.length - 2) {
            setTimeout(() => {
                sliderRef.current.slickGoTo(2, true);
            }, 500);
        }
    }, [index]);

    const settings = {
        infinite: false, // 무한 루프는 직접 구현하므로 false
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 2, // 원래 첫 번째 이미지에서 시작
        beforeChange: (_, next) => setIndex(next),
        ref: sliderRef,
    };

    return (
        <div className="carousel-wrapper">
            <Slider {...settings} ref={sliderRef}>
                {images.map((item, i) => (
                    <div key={i} className={`carousel-item ${i === index ? "active" : ""}`}>
                        <img src={item.src} alt={`Poster ${i}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

