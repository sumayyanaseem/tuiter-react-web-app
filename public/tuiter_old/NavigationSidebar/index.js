const NavigationSidebar = (page) => {

    var home='';
    var explore = '';
    if(page == 'home'){
        home='active';
    }
    if(page == 'explore'){
        explore='active';
    }
    return(`
   <div class="list-group">
                <div class="list-group-item list-group-item-action">
                    <i class="fa-solid fa-t"></i>
                </div>
                <a href="../HomeScreen/HomeScreen.html"
                   class="list-group-item list-group-item-action ${home}">
                    <div class="d-flex">
                        <div><i class="fas fa-home"></i></div>
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            Home
                        </div>
                    </div>
                </a>
                <a href="../explore/index.html"
                   class="list-group-item list-group-item-action ${explore}">
                    <div class="d-flex align-items-center ">
                        <i class="fas fa-hashtag"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">Explore</div>
                    </div>
                </a>
                <a href="../notification.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-bell"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">Notifications</div>
                    </div>

                </a>
                <a href="../message.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center ">
                        <i class="fas fa-envelope"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">Messages</div>
                    </div>
                </a>
                <a href="../bookmarks/index.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-bookmark"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            Bookmarks
                        </div>
                    </div>
                </a>

                <a href="../lists.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-list"></i>
                        <div class="d-none  d-xl-block d-xxl-block ms-1">
                            Lists
                        </div>
                    </div>
                </a>

                <a href="../profile.html"
                   class="list-group-item list-group-item-action">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-user"></i>
                        <div class="d-none d-xl-block d-xxl-block ms-1">
                            Profile
                        </div>
                    </div>
                </a>

                <a href="../more.html" class="d-flex list-group-item list-group-item-action">
                
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
}
export default NavigationSidebar;

