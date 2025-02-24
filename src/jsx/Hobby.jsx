import React from "react";
import Footer from "./Footer";
import CategoriesNav from './Category-Nav';
import { hobbyCategories } from "./contentData";
import '../css/category.css';

const Hobby = () => {

    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={hobbyCategories}/>

                    <div className="Footer-container">
                    <Footer style={{ backgroundColor: "#E5F1F5", display: "flex", textAlign: "center", zIndex: "3"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hobby;