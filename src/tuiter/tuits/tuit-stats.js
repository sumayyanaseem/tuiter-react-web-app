import {Link} from "react-router-dom";
import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";

const TuitStats = ({tuits}) => {
    /*const [liked, setLiked] = useState(tuits.liked);
    const changeLiked = () => {
        setLiked(!liked)
    }*/
    const dispatch = useDispatch();
    const changeLiked = () => {
        if (tuits.liked === false) {
            dispatch(updateTuitThunk({
                                         ...tuits,
                                         liked: true,
                                         likes: tuits.likes + 1
                                     }))
        } else {
            if (tuits.liked === true) {
                dispatch(updateTuitThunk({
                                             ...tuits,
                                             liked: false,
                                             likes: tuits.likes - 1
                                         }))
            }
        }
    }

    const changeDisliked = () => {
        if (tuits.disliked === false) {
            dispatch(updateTuitThunk({
                                         ...tuits,
                                         disliked: true,
                                         dislikes: tuits.dislikes + 1
                                     }))
        } else {
            if (tuits.disliked === true) {
                dispatch(updateTuitThunk({
                                             ...tuits,
                                             disliked: false,
                                             dislikes: tuits.dislikes - 1
                                         }))
            }
        }
    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-2 wd-width">
                <Link to={""} className="nav-link">
                    <i className="fa-regular fa-comment"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.replies} </span>
                </Link>
            </div>
            <div className="col-2 wd-width">
                <Link to={""} className="nav-link">
                    <i className="fa-solid fa-retweet"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.retuits} </span>
                </Link>
            </div>
            <div className="col-2 wd-width">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        tuits.liked &&
                        <i className="fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !tuits.liked &&
                        <i className="fa-regular fa-heart"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.likes} </span>
                </Link>
            </div>
            <div className="col-2 wd-width">
                <Link onClick={changeDisliked} className="nav-link" to={""}>
                    {
                        tuits.disliked &&
                        <i className="fa-solid fa-thumbs-down"></i>
                    }
                    {
                        !tuits.disliked &&
                        <i className="fa-regular fa-thumbs-down"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.dislikes} </span>
                </Link>
            </div>
            <div className="col-2 wd-width">
                <Link to={""} className="nav-link">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </Link>
            </div>
        </div>
    );
};

export default TuitStats;