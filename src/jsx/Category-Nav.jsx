import React, { useState, useEffect } from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import like from '../img/like.png';
import likefill from '../img/likefill.png';

const CategoriesNav = ({ categories }) => { 
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [liked, setLiked] = useState(false);
    const [clickCount, setClickCount] = useState(0); // click like img for counting
    const [isAnimate, setIsAnimate] = useState(false);// animation

    // ✅ 좋아요 수 및 상태 가져오기
    useEffect(() => {
        const fetchLikeCount = async () => {
            try {
                const response = await fetch(`https://test.apilikelionhsu.shop/api/likes/${selectedCategory.id}`);
                if (response.ok) {
                    const count = await response.json();
                    setClickCount(count);
                }
            } catch (error) {
                console.error("좋아요 수 조회 실패:", error);
            }
        };

        fetchLikeCount();
    }, [selectedCategory]); 

    // ✅ 좋아요 클릭 시 서버 요청
    const handleImageClick = async () => {
        try {
            const response = await fetch(`https://test.apilikelionhsu.shop/api/likes/${selectedCategory.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (response.ok) {
                const message = await response.text();
                console.log("서버 응답:", message);
    
                if (message === "좋아요가 취소되었습니다.") {
                    alert("좋아요가 취소되었습니다.");
                    setLiked(false); // 좋아요 상태 해제
                    setClickCount((prev) => prev - 1);
                } else {
                    // 좋아요 등록인 경우만 숫자 증가
                    setLiked(true);
                    setClickCount((prev) => prev + 1);
    
                    // 애니메이션 효과
                    setIsAnimate(true);
                    setTimeout(() => setIsAnimate(false), 300);
                }
            } else {
                console.error("좋아요 요청 실패:", await response.text());
            }
        } catch (error) {
            console.error("좋아요 요청 중 오류 발생:", error);
        }
    };
    

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setLiked(false);
        setClickCount(0);
    };

    const formatContent = (text) => {
        return text.split("\n").map((line, index) => {
            const boldKeywords = ["활동내용", "동아리 소개", "문의", "챌린지 소개", "참여 방법", "동아리 장점", "모집 관련 정보"];
            const boldLine = boldKeywords.find((keyword) => line.includes(keyword));

            const formattedLine = line.split(/(https?:\/\/[^\s]+)/g).map((part, i) => {
                if (part.match(/https?:\/\/[^\s]+/)) {
                    let linkText = "링크 바로가기"; // 기본값

                    if (part.includes("instagram.com")) {
                        linkText = "📸 인스타그램 바로가기";
                    } else if (part.includes("kakao.com")) {
                        linkText = "💬 카카오톡 바로가기";
                    } else if (part.includes("everytime.kr")) {
                        linkText = "💬 에브리타임 바로가기";
                    }


                    return (
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: "#5e5e5e", fontWeight: "bold" }}>
                            {linkText}
                        </a>
                    );
                }
                return part;
            });

            return (
                <p key={index} style={{ whiteSpace: "pre-line" }}>
                    {boldLine ? <strong>{formattedLine}</strong> : formattedLine}
                </p>
            );
        });
    };

    const categorySliderSettings = { // Category's nav slide setting
        infinite: false,
        speed: 500,
        slidesToShow: 3, // 한 번에 보이는 카테고리 개수
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        variableWidth: true,
        accessibility: false,
    };

    return (
        <div className="Categories"> {/* nav - button */}
            <div className="category-nav-container">
            <Slider {...categorySliderSettings} className="category-nav-slider">
                    {categories.map((item) => (
                        <div key={item.id} className="category-slide" onClick={() => handleCategoryClick(item)} tabIndex="-1">
                            <div
                                style={{
                                    cursor: "pointer",
                                    fontSize: selectedCategory.id === item.id ? "13.5px" : "11.5px",
                                    fontWeight: selectedCategory.id === item.id ? "bolder" : "500",
                                    color: selectedCategory.id === item.id ? "white" : "black",
                                    backgroundColor: selectedCategory.id === item.id ? "black" : "white",
                                    transition: "0.3s ease-in-out",
                                    borderRadius: "25px",
                                    padding: "2px 3px",
                                    border: "1.5px solid black",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minWidth: "100px",
                                    maxWidth: "120px",
                                    height: "30px",
                                    textAlign: "center",
                                    margin: "10px"
                                }}
                            >
                                {item.name}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="txt-container-main"> {/* name, detail ( middle ) */}
                <div className="cate-intro">
                    <img src={selectedCategory.icon} alt={selectedCategory.name} className="cate-intro-image" />
                    <div className="cate-intro-text">
                        <h2>{selectedCategory.name}<br /><span>{selectedCategory.detail}</span></h2>
                    </div>
                </div>

                <div className="cate-cont">
                    <p style={{ whiteSpace: "pre-line" }}>{selectedCategory.short}</p>
                </div>
            </div>

            {/* ✅ 좋아요 기능 추가 */}
            <div className="like-container">
                <div className="like-icon-cont">
                    <div className="like">
                        <img 
                            src={liked ? likefill : like} 
                            alt="like" 
                            className={`like-img ${isAnimate ? "pop" : ""}`} 
                            onClick={handleImageClick}
                        />
                        <p style={{ margin: 0 }}>{clickCount}</p>
                        <p>이 동아리에 관심이 간다면<br />좋아요를 눌러주세요!</p>
                    </div>
                </div>
            </div>
            <div className="Category-Content-container">
    <div className="Category-Content">
        <h1>{selectedCategory.name}
            <br />
            <span>{selectedCategory.detail}</span>
        </h1>

        {/* 이미지가 없으면 display: none 처리 */}
        <div className="content-img">
            {selectedCategory.img && (
                <img src={selectedCategory.img} alt={selectedCategory.name} />
            )}
        </div>

        {/* `content1`이 있으면 먼저 처리 */}
        {selectedCategory.content1 && (
            <div>{formatContent(selectedCategory.content1)}</div>
        )}

        {/* `active1`, `active2`, `active3` 이미지들 처리 */}
        {["active1", "active2", "active3"].map((key) => (
            selectedCategory[key] && (
                <img key={key} src={selectedCategory[key]} alt={`active-${key}`} />
            )
        ))}

        {/* `content2`가 있을 경우 그 후에 처리 */}
        {selectedCategory.content2 && (
            <div>{formatContent(selectedCategory.content2)}</div>
        )}

        {/* `content`가 있을 경우 하나만 처리 (content1, content2가 없을 경우) */}
        {selectedCategory.content && !selectedCategory.content1 && !selectedCategory.content2 && (
            <div>{formatContent(selectedCategory.content)}</div>
        )}
    </div>
</div>


        </div>
    );
};

export default CategoriesNav;
