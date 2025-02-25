import React from "react";
import Footer from "./Footer";
import '../css/Map.css';
import inform from '../img/inform_new.png';
import instagram from "../img/instagram.png"; // add

const Map = () => {
    return (
        <div className="map">
            <div className="container">
                <div className="txt-cont">
                    <div className="main-intro">
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
                </div>
                {/* add*/}
                <div className="club-instagram-container" style={{width: "60%", margin: "0 auto", height:"40px"}}>
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

                <div className="map-cont">
                    <img src={inform} alt="inform"></img>
                    <p>박람회 배치도</p>
                </div>

                <div className="perfor-cont">
                    <div className="perfor-club">
                        <h5>보컬동아리 "발라더" 버스킹 정보</h5>
                        <p>12시~13시</p>
                    </div>
                    <div className="perfor-song"><p>1. 바보에게 바보가 - 이석훈</p></div>
                    <div className="perfor-song"><p>2. 쿵쿵쿵 - 김민승</p></div>
                    <div className="perfor-song"><p>3. square - 백예린</p></div>
                </div>

                <div className="Footer-container">
                    <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Map;
