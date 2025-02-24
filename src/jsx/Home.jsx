import React from "react";
import "../css/Home.css";
import "../css/Carousel.css";
import main from '../img/main.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import instagram from "../img/instagram.png"; // add

// 이미지 import
import poster1 from "../img/main/총동연_수정.png";
import poster2 from "../img/main/멋사.jpg";
import poster3 from "../img/main/리프레시.jpg";
import poster4 from "../img/main/무브.jpg";
import poster5 from "../img/main/무혼.jpg";
import poster6 from "../img/main/CCC.jpg"; 
import poster7 from "../img/main/설화.jpg";
import poster8 from "../img/main/정음.jpg";
import poster9 from "../img/main/차일드.jpg";
import poster10 from "../img/main/히바.jpg";
import poster11 from "../img/main/별헤는밤.jpg";

// 이미지 데이터 배열
const originalImages = [
    {id: 1, src: poster1},
    {id: 2, src: poster2},
    {id: 3, src: poster3},
    {id: 4, src: poster4},
    {id: 5, src: poster5},
    {id: 6, src: poster6},
    {id: 7, src: poster7},
    {id: 8, src: poster8},
    {id: 9, src: poster9},
    {id: 10, src: poster10},
    {id: 11, src: poster11},
];

function Carousel() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        arrows: false,
        slidesToShow: 3,
        speed: 500,
        beforeChange: (_, next) => {
            document.querySelectorAll(".slick-slide[aria-hidden='true']").forEach(slide => {
                slide.setAttribute("inert", "true"); // 포커스 비활성화
            });
            document.querySelectorAll(".slick-slide[aria-hidden='false']").forEach(slide => {
                slide.removeAttribute("inert"); // 활성화된 슬라이드 제거
            });
        }
    };

    return (
        <div className="slider-container">
            <Slider {...settings} style={{padding: "30px 10px"}}>
                {originalImages.map((item) => (
                    <div key={item.id} className="carousel-item">
                        <img src={item.src} alt={`Poster ${item.id}`} className="carousel-image"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}





const Home = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="txt-cont">
                    <div className="main-intro">
                        <img src={main} alt="main" className="main-intro-img" />
                        <div className="main-intro-txt">
                            <h2>2025</h2>
                            <h4>Hanseo University</h4>
                            <h3>동아리 박람회</h3>
                            <p>2025.03.05.wed</p>
                            <p>11:00 ~ 16:00</p>
                        </div>
                    </div>

                    <div className="main-cont">
                        <p>취미부터 커리어까지, 내게 맞는 동아리를 찾아보세요!</p>
                    </div>
                    
                    {/* add*/}
                    <div className="club-instagram-container" style={{width: "60%", margin: "0 auto"}}>
                        <div className="club-instagram" style={{
                            textAlign: "center",
                            marginTop: "35px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            display: "flex",
                            flexDirectionx: "row",
                            gap: "15px"
                        }}>
                            제32대 총동아리연합회 공명정대
                            <a href="https://www.instagram.com/hsu_gmjd32th/" style={{display: "inline-block"}}>
                                <img src={instagram} alt="instagram"
                                    style={{width: "20px", height: "20px", margin: "０"}}/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="carousel-container-btm">
                        <div className="carousel-box">
                            <Carousel/>
                            <Footer style={{ backgroundColor: "#E5F1F5", display: "flex", textAlign: "center", zIndex: "3"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;