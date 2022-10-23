/*import NavigationSidebar from "./../NavigationSidebar/index.js";
import PostSummaryList from "./../PostSummaryList/index.js"
import PostList from "./PostList/PostList.js";
import TweetComponent from "./PostList/index.js"

function homeComponent() {
    $('#wd-home').append(`
       
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
   ${PostList.map(post =>`${TweetComponent(post)}`).join('')}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
    <!--<h3>WhoToFollowList </h3>-->
    ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(homeComponent);*/





import NavigationSidebar from "./../NavigationSidebar/index.js";
import PostSummaryList from "./../PostSummaryList/index.js"
import tweets from "./Tweets/tweets.js";
import TweetComponent from "./Tweets/index.js"

function homeComponent() {

    $('#wd-homescreen').append(`
    <div class="row">
        <div class="col-xl-2 col-xxl-2 col-sm-2 col-md-2 col-lg-1">
           ${NavigationSidebar('home')}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10" style="margin-top:8px">
        ${tweets.map(post => `${TweetComponent(post)}`).join('')}
        </div>
        <div class="d-none d-lg-block d-xl-block d-xxl-block col-4">
            <ul class="list-group">
                ${PostSummaryList()}
            </ul>
        </div>
    </div>  
    `);
}

$(homeComponent);