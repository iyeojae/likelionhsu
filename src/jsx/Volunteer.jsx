import React from "react";
import '../css/category.css';
import CategoriesNav from './Category-Nav';
import { volunteerCategories } from "./contentData";
import Footer from "./Footer";

const Volunteer = () => {

    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={volunteerCategories}/>

                    <div className="Footer-container">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;