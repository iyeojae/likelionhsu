import React from "react";
import Carousel from "./Carousel";
import "../css/Home.css";
import main from '../img/main.png';
import Footer from "./Footer";
import instagram from "../img/instagram.png";

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
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;