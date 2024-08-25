import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import HostHome from "../../page/host-home/index";
import HostHeader from "../headers/host-header/index"
import Header from "../headers";
import Auth from "../auth/start";
import Login from "../auth/login/index";
import GuideSinUp from "../auth/guide";
import ConsumerSignUp from "../auth/consumer";

import Home from "../../page/home";

const Router=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <HostHeader/>
            <Routes>
                <Route path="/sign" element={<Auth />}/>
                <Route path = "hosthome" element = {<HostHome/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/sing/guide" element={<GuideSinUp/>}/>
                <Route path="/sing/consumer" element={<ConsumerSignUp/>}/>
                <Route path = "hostmain" element = {<HostHome/>}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;