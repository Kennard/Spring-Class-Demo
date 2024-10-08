import axios from "axios";
import React, { useEffect, useState } from "react";
import ComicView from "../components/ComicView";
import { useStore } from "../createStore";

//fucntional component
const XkcdCurrentComicContainer = () => {
    const xkcdComic = useStore()

    useEffect(() => {
        xkcdComic.fetchCurrentComic()       
    }, [])

    return xkcdComic.currentComicStatus === "SUCCESS" ? 
       <ComicView 
        xkcdComicInfo={xkcdComic.currentComic}
       />
        : xkcdComic.currentComicStatus === "FAILURE" ?
            onFailure()
            : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

    function onFailure(){
        return(
            <div>
                Ooops something went wrong, please try again later...
            </div>
        )
    }

    

}

export default XkcdCurrentComicContainer;

// array as second variable in useEffect controlls whether it is a componentDidMount, ComponentDidUpdate lifecycle method
// [] => componentDidMount
// [state || props] => componentDidUpdate