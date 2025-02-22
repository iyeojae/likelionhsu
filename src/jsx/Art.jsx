import React from "react";
import '../css/category.css';
import CategoriesNav from './Category-Nav';
import { artCategories } from "./contentData";
import Footer from "./Footer";

const Art = () => {

    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={artCategories}/>

                    <div className="Footer-container">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Art;