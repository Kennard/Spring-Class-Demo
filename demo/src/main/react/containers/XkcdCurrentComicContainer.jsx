import axios from "axios";
import React, { useEffect, useState } from "react";
import ComicView from "../components/ComicView";

//fucntional component
const XkcdCurrentComicContainer = () => {
    const [xkcdCurrentComic, setXkcdCurrentComic] = useState({})
    const [xkcdCurrentStatus, setXkcdCurrentStatus] = useState(null)

    useEffect(() => {
        setXkcdCurrentStatus("PENDING")
        axios.get("/current")
        .then(function(response){ 
            setXkcdCurrentComic(response.data)
            setXkcdCurrentStatus("SUCCESS") 
        })
        .catch(function(error){ 
            xkcdCurrentStatus("FAILURE")
            console.error(error) 
        }) 
    }, [])

    return xkcdCurrentStatus === "SUCCESS" ? 
       <ComicView 
        xkcdComicInfo={xkcdCurrentComic}
       />
        : xkcdCurrentStatus === "FAILURE" ?
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