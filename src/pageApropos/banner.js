import React from "react";
import "./bannerApropos.scss"
import BannerAbout from "./banner-image.png"

function bannerAbout () {
    return (
        <div className="bannerApropos">
            <img src={BannerAbout} alt="décort de la page à propos" />
        </div>
    )
}

export default bannerAbout;