import React from "react";
import { useStore } from "../createStore";


const withStore = BaseComponent => {
    const WithStore = (props) => {
       const store = useStore();
       return <BaseComponent {...props} store={store} />  
    }
    return WithStore
}

export default withStore;