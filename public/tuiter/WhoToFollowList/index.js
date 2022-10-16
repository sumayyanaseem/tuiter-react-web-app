import whoToFollowList from "./WhoToFollowList.js";

const whoToFollow = () => {
    return (`
           <div class="list-group">
           <!-- continue here -->
           <div class="list-group-item list-group-item-action fw-bold">
                    Who to Follow
           </div>
           ${whoToFollowList()}
           </div>
`); }

export default whoToFollow;