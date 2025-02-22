import React from "react";
import '../css/category.css';
import CategoriesNav from './Category-Nav';
import { performCategories } from "./contentData";
import Footer from "./Footer";

const Perform = () => {

    return (
        <div className="Categories-cont">
            <div className="category-container">
                <div className="container">
                    <CategoriesNav categories={performCategories}/>

                    <div className="Footer-container">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perform;
