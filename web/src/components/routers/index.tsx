import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import HostHome from "../../page/host-home/index";
import HostHeader from "../headers/host-header/index"
import HostMake from "../../page/host-make/index";
import Header from "../headers";
import Auth from "../auth/start";
import Login from "../auth/login/index";
import Name from "../auth/name";
import Number from "../auth/number/index";
import Default from "../auth/default";
import Profile from "../profile/index";
import Home from "../../page/home";
import Search from "../../page/search";
import SearchQuestion from "../../page/search/question";
import Subscription from "../../page/subscription";

const Router=()=>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>;
            <Header/>
            <HostHeader/>
            <Routes>
                <Route path="/sign/" element={<Auth />}/>
                <Route path = "/hosthome/" element = {<HostHome/>}/>
                <Route path = "/hostmake/" element = {<HostMake/>}/>
                <Route path="/signup/" element={<Default/>}/> 
                <Route path="/login/" element={<Login/>}/>
                <Route path="/sign/name/" element={<Name/>}/>
                <Route path="/sign/number/" element={<Number/>}/>
                <Route path = "hostmain/" element = {<HostHome/>}/>
                <Route path="/home/" element={<Home />}/>
                <Route path="/profile/" element={<Profile />}/>
                <Route path="/search/" element={<Search />}/>
                <Route path="/search/question/" element={<SearchQuestion />}/>
                <Route path="/subscribe/" element={<Subscription />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;