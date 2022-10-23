import PostSummaryList from "./../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wd-search-tuiter"><i class="fas fa-search"></i></span>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fas fa-cog fa-2x wd-selected-bluecol"></i>
                </div>
            </div>


            <ul class="nav nav-tabs mt-1 mb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">
                        For You
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">
                        Trending
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">
                        News
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html" tabindex="-1">
                        Sports
                    </a>
                </li>
                <li class="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="entertainment.html" tabindex="-1">
                        Entertainment
                    </a>
                </li>
            </ul>

           
            <div class="position-relative">
                <img src="../explore/starship.jpg" width="100%"/>
                <h1 class="position-absolute bottom-0 left-0 text-white ms-2">SpaceX's Starship</h1>
                
            </div>
            
           <!-- image with overlaid text -->
           
           
    `);
}
export default ExploreComponent;

