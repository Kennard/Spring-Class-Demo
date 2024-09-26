import React from "react";
import Nav from "../components/nav";
import { Outlet } from "react-router-dom";

//functional component
const AppContainer = () => {
    return (
        <>
            <Nav locationUrl="/" />
            <Outlet />
        </>
    )
}

export default AppContainer