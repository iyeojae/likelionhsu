import React, { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
    { id: 2, name: "공연", icon: perform, link: "/perform" },
    { id: 3, name: "봉사", icon: volunteer, link: "/volunteer" },
    { id: 4, name: "학술", icon: education, link: "/education" },
    { id: 5, name: "체육", icon: gym, link: "/gym" },
    { id: 6, name: "종교", icon: religion, link: "/religion" },
    { id: 7, name: "취미", icon: hobby, link: "/hobby" },
    { id: 8, name: "예술", icon: art, link: "/art" },
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const iconScrollRef = useRef(null);
    const nameScrollRef = useRef(null);

    // 스크롤 동기화 함수
    const syncScroll = (source) => {
        if (!iconScrollRef.current || !nameScrollRef.current) return;

        requestAnimationFrame(() => {
            if (source === "icons") {
                const newScrollLeft = iconScrollRef.current.scrollLeft;
                if (Math.abs(nameScrollRef.current.scrollLeft - newScrollLeft) > 1) {
                    console.log("Before Update (Icons -> Names):", nameScrollRef.current.scrollLeft);
                    nameScrollRef.current.scrollLeft = newScrollLeft;
                    console.log("After Update (Icons -> Names):", nameScrollRef.current.scrollLeft);
                }
            } else if (source === "names") {
                const newScrollLeft = nameScrollRef.current.scrollLeft;
                if (Math.abs(iconScrollRef.current.scrollLeft - newScrollLeft) > 1) {
                    console.log("Before Update (Names -> Icons):", iconScrollRef.current.scrollLeft);
                    iconScrollRef.current.scrollLeft = newScrollLeft;
                    console.log("After Update (Names -> Icons):", iconScrollRef.current.scrollLeft);
                }
            }
        });
    };

    return (
        <div className="navbar-container">
            <div className="nav-container">
                {/* 로고 */}
                <img src={logo} alt="logo" className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />

                {/* 네비게이션 래퍼 */}
                <div className="nav-scroll-wrapper">
                    {/* 아이콘 네비게이션 */}
                    <div className="nav-icon-cont" ref={iconScrollRef} onScroll={() => syncScroll("icons")}>
                        <nav className="nav-grid">
                            {navItems.map((item) => (
                                <Link key={item.id} to={item.link} className="nav-item">
                                    <img src={item.icon} alt={item.name} className={`icon ${location.pathname === item.link ? "active" : ""}`} />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* 네비게이션 이름 */}
                    <div className="nav-name-cont" ref={nameScrollRef} onScroll={() => syncScroll("names")}>
                        <div className="nav-name" style={{ display: location.pathname === "/" ? "flex" : "none" }}>
                            {navItems.map((item) => (
                                <p key={item.id}>{item.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


