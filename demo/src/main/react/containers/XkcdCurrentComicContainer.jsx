import axios from "axios";
import React, { useEffect } from "react";

//fucntional component
const XkcdCurrentComicContainer = () => {

    useEffect(() => {
        axios.get("/current")
        .then(function(response){ 
            console.log(response) 
        })
        .catch(function(error){ 
            console.error(error) 
        }) 
    }, [])
    // array as second variable in useEffect controlls whether it is a componentDidMount, ComponentDidUpdate lifecycle method
    // [] => componentDidMount
    // [state || props] => componentDidUpdate

    return (
        <div>
            This past comic container data
        </div>
    )
}

export default XkcdCurrentComicContainer;