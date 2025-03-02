import React from "react";
import '../css/category.css';
import CategoriesNav from './Category-Nav';
import { religionCategories } from "./contentData";
import Footer from "./Footer";

const Religion = () => {

    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={religionCategories}/>

                    <div className="Footer-container">
                    <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Religion;