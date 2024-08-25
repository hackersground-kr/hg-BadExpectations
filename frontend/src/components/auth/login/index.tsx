import React from "react"
import Polygon from "../../../assets/Polygon 2.png";
import logo from "../../../assets/logo.svg";
import * as S from "./style";
import * as Auth from "../start/style";


const Login = ()=>{
return(
    <S.login>
    <Auth.main>
        <Auth.loginText>
                    <h2>반가워요!</h2>
                </Auth.loginText>
                <Auth.buttonMain>
                    <S.textField placeholder="아이디를 입력해주세요">

                    </S.textField>
                    <S.textField placeholder="비밀번호를 입력해주세요">

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
export default Login