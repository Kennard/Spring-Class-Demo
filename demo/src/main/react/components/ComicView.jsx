import React from "react";

//fucntional component
const ComicView = (props) => {
    const {xkcdComicInfo} = props
    
         return(
            <div>
                <h1>
                    {xkcdComicInfo.safe_title}
                </h1>
                <div>
                    <img src={xkcdComicInfo.img} alt={xkcdComicInfo.alt || "No XKCD Comic today"} />
                </div>
                <div>
                    {xkcdComicInfo.transcript}
                </div>
            </div>
        )
}

export default ComicView;
