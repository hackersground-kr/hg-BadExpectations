import React from "react"
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import * as S from "./style"
import * as Auth from "../start/style";


const GuideSinUp = ()=>{
return(
    <S.login>
    <Auth.main>
        <Auth.loginText>
                    <h2>반가워요!</h2>
                </Auth.loginText>
                <Auth.buttonMain>
                    <S.textField>

                    </S.textField>
                    <S.textField>

                    </S.textField>
                </Auth.buttonMain>
                
                <img src={Polygon}></img>
            </Auth.main>
            <Auth.logoMain>
                <Auth.logo src={logo}>

                </Auth.logo>
            </Auth.logoMain>
    </S.login>
)
}
export default GuideSinUp