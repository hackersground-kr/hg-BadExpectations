import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import HostHome from "../../page/host-home/index";
import HostHeader from "../headers/host-header/index"
import HostMake from "../../page/host-make/index";
import HostBook from "../../page/host-book/index";
import Header from "../headers";
import Auth from "../auth/start";
import Login from "../auth/login/index";
import Name from "../auth/name";
import Number from "../auth/number/index";
import Default from "../auth/default";
import Profile from "../profile/index";
import Home from "../../page/home";

const Router=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <HostHeader/>
            <Routes>
                <Route path="/sign" element={<Auth />}/>
                <Route path = "/hosthome" element = {<HostHome/>}/>
                <Route path = "/hostmake" element = {<HostMake/>}/>
                <Route path = "/hostbook" element = {<HostBook/>}/>
                <Route path="/signup" element={<Default/>}/> 
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign/name" element={<Name/>}/>
                <Route path="/sign/number" element={<Number/>}/>
                <Route path = "hostmain" element = {<HostHome/>}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;