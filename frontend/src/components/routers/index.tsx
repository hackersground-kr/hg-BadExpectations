import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Auth from "../../page/auth";
import HostHome from "../../page/host-home/index";

import Header from "../headers";
import HostHeader from "../headers/host-header/index"

const Router=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <HostHeader/>
            <Routes>
                <Route path="/sign" element={<Auth />}/>

                <Route path = "hosthome" element = {<HostHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;