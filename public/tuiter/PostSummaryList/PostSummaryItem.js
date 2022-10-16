const PostSummaryItem=(post)=>{

    return(` 
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">
                                ${post.topic}
                            </div>
                            <div >
                                ${post.userName} <i class="fas fa-check-circle"></i> ${post.time}
                            </div>
                            <div class="fw-bolder">
                                ${post.title}
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end rounded-3" src=${post.image}
                                 width="100px" height="100px">
                        </div>
                    </div>
                </li>
                
                        
                        `)

};

export default PostSummaryItem;


