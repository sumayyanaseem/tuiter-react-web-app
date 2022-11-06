import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

const TuitStats = ({tuits}) => {
    let [liked, setLiked] = useState(tuits.liked);
    const changeLiked = () => {
        setLiked(!liked)
    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fa-regular fa-comment"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.replies} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fa-solid fa-retweet"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.retuits} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        liked &&
                        <i className="fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !liked &&
                        <i className="fa-regular fa-heart"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.likes} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;