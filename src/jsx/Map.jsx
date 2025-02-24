import React from "react";
import Footer from "./Footer";
import '../css/Map.css';
import inform from '../img/inform_new.png';

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
                        </div>
                    </div>

                    <div className="main-cont">
                        <p>취미부터 커리어까지, 내게 맞는 동아리를 찾아보세요!</p>
                    </div>
                </div>

                <div className="map-cont">
                    <img src={inform} alt="inform"></img>
                    <p>박람회 배치도</p>
                </div>

                <div className="perfor-cont">
                    <div className="perfor-club">
                        <h5>보컬동아리 "발라더" 공연 정보</h5>
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
