import React from "react";
import '../css/category.css';
import CategoriesNav from './Category-Nav';
import { educationCategories } from "./contentData";
import Footer from "./Footer";

const Education = () => {

    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={educationCategories}/>

                    <div className="Footer-container">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;