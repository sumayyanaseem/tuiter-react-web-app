const WhoToFollowListItem=(who)=>{

    return(` <a href="https://en.wikipedia.org/wiki/Dune_(novel)"
                               class="list-group-item list-group-item-action">
                                <div class="d-flex ">
                                    <div class="align-items-stretch">
                                        <img class="rounded-circle" src=${who.avatarIcon} width="50px"
                                             height="50px">
                                    </div>
                                    <div class="w-75 ms-2">
                                        <h6 class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></h6>
                                        <h6 class="text-secondary">@${who.handle}</h6>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary float-end btn-sm rounded-pill">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </a>
            
                         <!--   <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
                               class="list-group-item list-group-item-action">
                                <div class="d-flex">
                                    <div>
                                        <img class="rounded-circle" src="relativity.jpg" width="50px"
                                             height="50px">
                                    </div>
                                    <div class="w-75 ms-2">
                                        <h6 class="fw-bold">Relativity Space <i class="fas fa-check-circle"></i>
                                        </h6>
                                        <h6 class="text-secondary">@relativityspace</h6>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary float-end btn-sm rounded-pill">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/The_Forever_War"
                               class="list-group-item list-group-item-action">
                                <div class="d-flex">
                                    <img class="rounded-circle" src="virgingalactic.jpg" width="50px"
                                         height="50px">
                                    <div class="w-75 ms-2">
                                        <h6 class="fw-bold">Virgin galactic <i class="fas fa-check-circle"></i>
                                        </h6>
                                        <h6 class="text-secondary">@virgingalactic</h6>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary float-end btn-sm rounded-pill">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
                               class="list-group-item list-group-item-action">
                                <div class="d-flex">
                                    <img class="rounded-circle" src="nasa1.jpeg" width="50px"
                                         height="50px">
                                    <div class="w-75 wd-margin-left ms-2">
                                        <h6 class="fw-bold">NASA<i class="fas fa-check-circle"></i></h6>
                                        <h6 class="text-secondary">@NASA</h6>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary float-end btn-sm rounded-pill">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </a>
                            <a href="https://en.wikipedia.org/wiki/Ender%27s_Game"
                               class="list-group-item list-group-item-action">
                                <div class="d-flex">
                                    <img class="rounded-circle" src="tesla.jpg" width="50px"
                                         height="50px">
                                    <div class="w-75 wd-margin-left">
                                        <h6 class="fw-bold">TESLA <i class="fas fa-check-circle"></i></h6>
                                        <h6 class="text-secondary">@Tesla</h6>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary float-end btn-sm rounded-pill">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </a> -->
                        `)

};

export default WhoToFollowListItem;


