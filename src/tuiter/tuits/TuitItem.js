import React from "react";
import "./index.css"
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";





const TuitItem = (
    {
        tuit
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    return(


        <li className="list-group-item">
            <div className="wd-post_container">
                <div className="wd-B__image">
                    <img className="wd-B__profile-img" src={tuit.image} />
                </div>

                <div className="wd-mid-segment-container">
                    <div className="wd-C_container">
                        <div className="wd-C__profile-info">
                            <h4 className="wd-C__profile-name">{tuit.userName} <i
                                className="text-primary fas fa-check-circle" aria-hidden="true"></i></h4>
                            <h4 className="wd-C__handle-name">{tuit.handle}</h4>
                            <h4 className="wd-C__handle-name">&nbsp;<span
                                className="wd-dot">&#183;</span>&nbsp;{tuit.time}</h4>

                        </div>
                        <div>
                            <i className="bi bi-x-lg float-end "
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="wd-D__container">
                        <div className="wd-D__text">
                            <p>
                                <span> {tuit.tuit}</span>
                                <span className="text-primary"> <a>{tuit.postLink}</a> </span>
                            </p>
                        </div>
                    </div>


                        <TuitStats tuits={tuit}/>

                </div>
            </div>
        </li>



    );
};
export default TuitItem;

