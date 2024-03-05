import React from "react";
import "./bannerAbout.scss"
import BannerAbout from "./bannerImage.png"

function bannerAbout () {
    return (
        <div>
            <div className="bannerAbout">
                <img src={BannerAbout} alt="décort de la page à propos" />
            </div>
        </div>
    )
}

export default bannerAbout;