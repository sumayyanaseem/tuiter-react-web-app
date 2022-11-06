import React from "react";
import "./index.css"
const HomeItem = (
    {
        post = { profileName: 'Elon Musk', handleName: '@elonMusk', date: '2h', content:'Amazing show about @inspiration4x mission!', profileImg: '../HomeScreen/elon.jpg', postImg: '../HomeScreen/space.jpg', postImgContentTitle:'SpaceX releases the FALCON 2023', postImgContent:'SpaceX release enjoy',
            postLink: '',
        }
    }
) => {
    return (
        <li className="list-group-item">
        <div class="wd-post_container">
            <div class="wd-B__image">
                <img class="wd-B__profile-img" src={post.profileImg}/>
            </div>
            <div class="wd-mid-segment-container">
                <div class="wd-C_container">
                    <div class="wd-C__profile-info">
                        <h4 class="wd-C__profile-name">{post.profileName} <i
                            class="fas fa-check-circle" aria-hidden="true"></i></h4>
                        <h4 class="wd-C__handle-name">{post.handleName}</h4>
                        <h4 class="wd-C__handle-name">&nbsp;<span
                            class="wd-dot">&#183;</span>&nbsp;{post.date}</h4>
                    </div>
                    <div class="wd-C__options">
                        ...
                    </div>
                </div>
                <div class="wd-D__container">
                    <div class="wd-D__text">
                        <p>
                           <span> {post.content}</span>
                           <span class="text-primary"> <a>{post.postLink}</a> </span>
                        </p>
                    </div>
                </div>
                <div id="image-info" class="wd-img-border">
                    <div class="wd-E__image">
                        <img src={post.postImg} width="100px"/>
                    </div>
                    <div class="wd-F__container">
                        <div class="wd-F__title">
                            {post.postImgContentTitle}
                        </div>
                        <div class="wd-F__text">
                            {post.postImgContent}
                        </div>
                    </div>
                </div>
                <div class="wd-G_container">
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"><i class="fa-regular fa-comment"></i><span
                                class="wd-numbers">123</span></a>
                        </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"><i class="fa-solid fa-retweet"></i><span
                                class="wd-numbers">123</span></a>
                        </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"> <i class="fa-solid fa-heart red"></i><span
                                class="wd-numbers">123</span></a>
                        </p>
                    </div>
                    <div class="wd-post-info">
                        <p class="wd-icons">
                            <a href="#" class="wd-link"><i
                                class="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </li>
    );
};
export default HomeItem;

