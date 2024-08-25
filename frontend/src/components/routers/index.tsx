import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Auth from "../../page/auth";
import Header from "../headers";

const Router=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/sign" element={<Auth />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;