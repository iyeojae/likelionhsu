import React, { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../img/logo.png";
import map from "../img/map.png";
import perform from "../img/perform.png";
import volunteer from "../img/volunteer.png";
import education from "../img/education.png";
import gym from "../img/gym.png";
import religion from "../img/religion.png";
import hobby from "../img/hobby.png";
import art from "../img/art.png";
import "../css/Navbar.css";

const navItems = [
    { id: 1, name: "지도", icon: map, link: "/map" },
    { id: 2, name: "학술", icon: education, link: "/education" },
    { id: 3, name: "봉사", icon: volunteer, link: "/volunteer" },
    { id: 4, name: "공연", icon: perform, link: "/perform" },
    { id: 5, name: "체육", icon: gym, link: "/gym" },
    { id: 6, name: "종교", icon: religion, link: "/religion" },
    { id: 7, name: "취미", icon: hobby, link: "/hobby" },
    { id: 8, name: "예술", icon: art, link: "/art" },
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const iconSliderRef = useRef(null);

    const navbarSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        variableWidth: true,
        accessibility: false,
    };

    return (
        <div className="navbar-container">
            <div className="nav-container">
{/* 로고 */}
<div className="logo-container" onClick={() => navigate("/")}
    style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", marginLeft:"120px"}}>
    <img src={logo} alt="logo" className="logo" style={{ cursor: "pointer", height: "45px" }} />
    <p style={{
        margin: "0",
        padding: "0",
        fontSize: "20px",
        fontWeight: "bold",
        whiteSpace: "nowrap", // 텍스트가 한 줄 유지되도록 설정
        display: "flex",
        alignItems: "center"
    }}>
        LIKELION HSU
    </p>
</div>



                {/* 아이콘 슬라이드 */}
                <div className="nav-scroll-wrapper">
                    <Slider ref={iconSliderRef} {...navbarSettings} className="nav-icon-cont">
                        {navItems.map((item) => (
                            <div key={item.id} className="nav-slide">
                                <Link to={item.link} className="nav-item">
                                    <img src={item.icon} alt={item.name}
                                        className={`icon ${location.pathname === item.link ? "active" : ""}`}/>
                                    <p className="nav-name">{item.name}</p>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
export default Navbar;


