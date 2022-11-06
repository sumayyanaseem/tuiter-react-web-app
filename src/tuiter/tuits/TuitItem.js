import React from "react";
import "./index.css"
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";




const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "tuit":"xyz"
        }
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(


        <li className="list-group-item">
            <div className="wd-post_container">
                <div className="wd-B__image">
                    <img className="wd-B__profile-img" src={post.image} />
                </div>

                <div className="wd-mid-segment-container">
                    <div className="wd-C_container">
                        <div className="wd-C__profile-info">
                            <h4 className="wd-C__profile-name">{post.userName} <i
                                className="text-primary fas fa-check-circle" aria-hidden="true"></i></h4>
                            <h4 className="wd-C__handle-name">{post.handle}</h4>
                            <h4 className="wd-C__handle-name">&nbsp;<span
                                className="wd-dot">&#183;</span>&nbsp;{post.time}</h4>

                        </div>
                        <div>
                            <i className="bi bi-x-lg float-end "
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>
                    <div className="wd-D__container">
                        <div className="wd-D__text">
                            <p>
                                <span> {post.tuit}</span>
                                <span className="text-primary"> <a>{post.postLink}</a> </span>
                            </p>
                        </div>
                    </div>


                        <TuitStats tuits={post}/>

                </div>
            </div>
        </li>



    );
};
export default TuitItem;

