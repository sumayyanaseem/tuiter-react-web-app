import React from "react";
import postsArray from './homeposts.json';
import HomeItem from "./home-item";
import './index.css'
const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <HomeItem post={post}/> )
            }
        </ul>
    );
};

export default HomeComponent;




