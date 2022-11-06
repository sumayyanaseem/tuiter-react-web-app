import React from "react";

const ProfileBanner = () => {
    return (
        <>
            <div className="row">
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png" alt="" width={100} height={210}/>
            </div>

            <div className="">
                <img className="position-absolute rounded-circle"
                     src="https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2020e000649.jpg" alt=""
                     style={{ height:"100px", width: "100px", marginLeft:"15px", marginTop: "-70px"}}/>
            </div>
            <br/>
        </>
    )
}

export default ProfileBanner;