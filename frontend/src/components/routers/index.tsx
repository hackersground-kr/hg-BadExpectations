import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Auth from "../../page/auth";
import HostHome from "../../page/host-home/index";
import Header from "../headers";

const Router=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/sign" element={<Auth />}/>

                <Route path = "hostmain" element = {<HostHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;