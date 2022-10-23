import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";


const PostSummaryList = () => {
    return(`
      
         ${
        posts.map(list1 => {
            return(PostSummaryItem(list1));
        }).join('')
    }
      
   `);
}
export default PostSummaryList;