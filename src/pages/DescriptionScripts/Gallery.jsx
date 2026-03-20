import React, {useEffect, useState,useRef} from "react";
import ImageGallery from "react-image-gallery";
import "../DescriptionScripts/image-gallery.css"

import testimg1 from "./testimg1.jpg";
import testimg2 from "./testimg2.jpg";
import testimg3 from "./testimg3.webp";

export function Gallery(){

    const images= [{
        original: testimg1,
        thumbnail: testimg1,
    },
        {
            original: testimg2,
            thumbnail: testimg2,
        },
        {
            original: testimg3,
            thumbnail: testimg3,
        },]

    return(
        <div>
            <ImageGallery
                useBrowserFullscreen={false}
                items={images}
                fullscreen={false}
                showFullscreenButton={false}

            />

        </div>

    )
}