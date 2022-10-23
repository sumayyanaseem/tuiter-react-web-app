import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    active = paths[2];


    return (
        <div className="list-group">
            <a className="list-group-item">

                    <i className="fa-solid fa-t"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="d-flex">
                    <div><i className="fas fa-home"></i></div>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Home
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="d-flex align-items-center ">
                    <i className="fas fa-hashtag"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Explore</div>
                </div>
            </Link>

            <Link to="/" className={`list-group-item
                    ${active === 'labs'?'active':''}`}>
                <div className="d-flex align-items-center ">
                    <i className="fab fa-dashcube"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Labs</div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-bell"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Notifications</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="d-flex align-items-center ">
                    <i className="fas fa-envelope"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">Messages</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-bookmark"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Bookmarks
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-list"></i>
                    <div className="d-none  d-xl-block d-xxl-block ms-1">
                        Lists
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-user"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1">
                        Profile
                    </div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-ellipsis"></i>
                    <div className="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
                        More
                    </div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;




/*
<div class="list-group">
    <div class="list-group-item list-group-item-action">
        <i class="fa-solid fa-t"></i>
    </div>
    <a href="../../tuiter/HomeScreen/HomeScreen.html"
       class="list-group-item list-group-item-action ${home}">
        <div class="d-flex">
            <div><i class="fas fa-home"></i></div>
            <div class="d-none d-xl-block d-xxl-block ms-1">
                Home
            </div>
        </div>
    </a>
    <a href="../../tuiter/explore/index.html"
       class="list-group-item list-group-item-action ${explore}">
        <div class="d-flex align-items-center ">
            <i class="fas fa-hashtag"></i>
            <div class="d-none d-xl-block d-xxl-block ms-1">Explore</div>
        </div>
    </a>
    <a href="../../tuiter/notification.html"
       class="list-group-item list-group-item-action">
        <div class="d-flex align-items-center">
            <i class="fas fa-bell"></i>
            <div class="d-none d-xl-block d-xxl-block ms-1">Notifications</div>
        </div>

    </a>
    <a href="../../tuiter/message.html"
       class="list-group-item list-group-item-action">
        <div class="d-flex align-items-center ">
            <i class="fas fa-envelope"></i>
            <div class="d-none d-xl-block d-xxl-block ms-1">Messages</div>
        </div>
    </a>
    <a href="../../tuiter/bookmarks/index.html"
       class="list-group-item list-group-item-action">
        <div class="d-flex align-items-center">
            <i class="fas fa-bookmark"></i>
            <div class="d-none d-xl-block d-xxl-block ms-1">
                Bookmarks
            </div>
        </div>
    </a>

    <a href="../../tuiter/lists.html"
       class="list-group-item list-group-item-action">
        <div class="d-flex align-items-center">
            <i class="fas fa-list"></i>
            <div class="d-none  d-xl-block d-xxl-block ms-1">
                Lists
            </div>
        </div>
    </a>

    <a href="../../tuiter/profile.html"
       class="list-group-item list-group-item-action">
        <div class="d-flex align-items-center">
            <i class="fas fa-user"></i>
            <div class="d-none d-xl-block d-xxl-block ms-1">
                Profile
            </div>
        </div>
    </a>

    <a href="../../tuiter/more.html" class="d-flex list-group-item list-group-item-action">

        <div class="d-flex align-items-center">
            <i class="fa-solid fa-ellipsis"></i>
            <div class="d-none d-xl-block d-xxl-block ms-1 wd-pd-5">
                More
            </div>
        </div>
        <!--  <span class="fa-stack wd-width wd-padding wd-icon">
            <i class="fas fa-circle fa-stack-1x wd-black" style="font-size:22px"></i>
            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse wd-white" style="font-size:22px"></i>
          </span>
            <span class ="d-none d-xl-block wd-first-column wd-height ms-2">More</span></a>-->
    </a>

</div>
<button class="btn btn-primary mt-2 rounded-pill w-100">
    Tuit
</button>

    `);
}*/