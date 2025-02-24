import React from "react";
import '../css/category.css';
import CategoriesNav from './Category-Nav';
import {gymCategories} from "./contentData";
import Footer from "./Footer";

const Gym = () => {
    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={gymCategories}/>

                    <div className="Footer-container">
                    <Footer style={{ backgroundColor: "#E5F1F5", display: "flex", textAlign: "center", zIndex: "3"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;
