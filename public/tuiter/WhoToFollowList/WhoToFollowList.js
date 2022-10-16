import who from "./who.js";
import whoToFollowListItem from "./WhoToFollowListItem.js";


const whoToFollowList = () => {
    return(`
      <div>
         ${
        who.map(list1 => {
            return(whoToFollowListItem(list1));
        }).join('')
    }
      </div>
   `);
}
export default whoToFollowList;