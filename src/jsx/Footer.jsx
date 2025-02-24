import instagram from "../img/instagram.png";
import React from "react";

const rolls = [
        {role: "디자인", names: ["윤미녕"]},
        {role: "프론트엔드", names: ["박민지", "이여재", "김연희", "이윤명"]},
        {role: "백엔드", names: ["최지인", "한준호", "정재민", "박재호"]},
        {role: "PM", names: ["최지인"]},
    ]

    const Footer = ({style}) => {
    return ( //
        <div className="footer" style={style}>
            <footer className="footer-msg" style={{width: "300px", margin: "0 auto", fontSize: "13px", color: "rgba(0, 0, 0, 0.7)"}}>
                <div className="footer-top"
                    style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
                    <p style={{margin: "0"}}>| 한서대 멋쟁이사자처럼 13기 운영진</p>
                    <a href="https://www.instagram.com/likelion_hsu?igsh=NG5uNWQ1OHV4aWVr">
                        <img src={instagram} alt="instagram" style={{width: "20px", height: "20px"}}></img>
                    </a>
                </div>
                <br></br>
                <div className="roles">
                    {rolls.map((item, index) => (
                        <div key={index} className="role-group" style={{ minWidth: "100px", display: "flex", justifyContent: "space-between", flexDirection: "row", gap: "20px"}}>
                            <span className="role">{item.role}</span>
                            <div className="names" style={{minWidth: "200px", display: "flex", textAlign: "left", gap: "5px"}}>
                                {item.names.map((name, nameIndex) => (
                                    <span key={nameIndex} className="name">{name}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="footer-btm-txt">
                    <p style={{textAlign: "center"}}>@2025.likelion_hsu all rights reserved.</p>
                </div>
            </footer>
        </div>
    )
    };

export default Footer;